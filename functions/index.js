const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {createMollieClient} = require("@mollie/api-client");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

// Initialize Mollie client with API key
let mollieClient;
try {
  const apiKey = functions.config().mollie?.api_key || 
                process.env.MOLLIE_API_KEY || 
                "test_key";
  mollieClient = createMollieClient({apiKey});
} catch (error) {
  console.error("Error initializing Mollie client:", error);
  // Create a dummy client for development
  mollieClient = {
    payments: {
      create: () => Promise.resolve({
        id: "test_payment", 
        status: "open", 
        _links: {checkout: {href: "https://example.com"}},
      }),
      get: () => Promise.resolve({id: "test_payment", status: "paid"}),
    },
  };
}

/**
 * Cloud Function to create a payment with Mollie
 * This function is called from the frontend when a user submits the donation form
 */
exports.createMolliePayment = functions.https.onCall(async (data, context) => {
  try {
    // Create the payment with Mollie
    const payment = await mollieClient.payments.create({
      amount: data.amount,
      description: data.description,
      redirectUrl: data.redirectUrl,
      metadata: data.metadata,
      method: data.method,
    });

    // Return the payment details to the frontend
    return {
      id: payment.id,
      status: payment.status,
      checkoutUrl: payment._links.checkout.href,
    };
  } catch (error) {
    console.error("Error creating Mollie payment:", error);
    throw new functions.https.HttpsError("internal", "Failed to create payment", error);
  }
});

/**
 * Cloud Function to get the status of a payment
 * This function is called from the frontend to check if a payment was successful
 */
exports.getPaymentStatus = functions.https.onCall(async (data, context) => {
  try {
    // Get the payment from Mollie
    const payment = await mollieClient.payments.get(data.paymentId);

    // Update the donation status in Firestore
    if (data.donationId) {
      await db.collection("donations").doc(data.donationId).update({
        status: payment.status,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    // Return the payment status to the frontend
    return {
      id: payment.id,
      status: payment.status,
    };
  } catch (error) {
    console.error("Error getting payment status:", error);
    throw new functions.https.HttpsError("internal", "Failed to get payment status", error);
  }
});

/**
 * Webhook to handle Mollie payment status updates
 * This function is called by Mollie when a payment status changes
 */
exports.mollieWebhook = functions.https.onRequest(async (req, res) => {
  try {
    // Verify the request is a POST
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    // Get the payment ID from the request
    const paymentId = req.body.id;
    if (!paymentId) {
      res.status(400).send("Missing payment ID");
      return;
    }

    // Get the payment from Mollie
    const payment = await mollieClient.payments.get(paymentId);

    // Find the donation in Firestore
    const donationsSnapshot = await db.collection("donations")
        .where("paymentId", "==", paymentId)
        .limit(1)
        .get();

    if (donationsSnapshot.empty) {
      console.error(`No donation found for payment ID: ${paymentId}`);
      res.status(200).send("No donation found, but OK");
      return;
    }

    // Update the donation status
    const donationDoc = donationsSnapshot.docs[0];
    await donationDoc.ref.update({
      status: payment.status,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Send a success response
    res.status(200).send("OK");
  } catch (error) {
    console.error("Error in Mollie webhook:", error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Cloud Function to send email notifications for form submissions
 * This function is triggered when a new document is created in the form_submissions collection
 */
exports.sendFormNotification = functions.firestore
    .document("form_submissions/{submissionId}")
    .onCreate(async (snapshot, context) => {
      try {
        const submissionData = snapshot.data();
        const submissionId = context.params.submissionId;
        const formType = submissionData.formType || "general";

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: functions.config().email?.user || process.env.EMAIL_USER || "test@example.com",
            pass: functions.config().email?.password || process.env.EMAIL_PASSWORD || "test_password",
          },
        });

        // Prepare email content based on form type
        let subject = "New Form Submission";
        let intro = "A new form has been submitted.";

        switch (formType) {
          case "volunteer":
            subject = "New Volunteer Application";
            intro = "A new volunteer application has been submitted.";
            break;
          case "partnership":
            subject = "New Partnership Request";
            intro = "A new partnership request has been submitted.";
            break;
          case "contact":
            subject = "New Contact Form Submission";
            intro = "A new contact form has been submitted.";
            break;
          case "enrollment":
            subject = "New Course Enrollment";
            intro = "A new course enrollment has been submitted.";
            break;
          default:
            break;
        }

        // Format the submission data for email
        const formattedData = Object.entries(submissionData)
            .filter(([key]) => !["formType", "status", "createdAt"].includes(key))
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join("<br>");

        // Send the email
        await transporter.sendMail({
          from: `"TechTen Forms" <${functions.config().email?.user || 
                process.env.EMAIL_USER || 
                "test@example.com"}>`,
          to: functions.config().email?.notifications || 
              process.env.EMAIL_NOTIFICATIONS || 
              "test@example.com",
          subject: subject,
          html: `
            <h1>${subject}</h1>
            <p>${intro}</p>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <h2>Form Data:</h2>
            <p>${formattedData}</p>
          `,
        });

        return {success: true};
      } catch (error) {
        console.error("Error sending form notification:", error);
        return {error: error.message};
      }
    });

/**
 * Cloud Function to send email notifications for volunteer applications
 * This function is triggered when a new document is created in the volunteers collection
 */
exports.sendVolunteerNotification = functions.firestore
    .document("volunteers/{volunteerId}")
    .onCreate(async (snapshot, context) => {
      try {
        const volunteerData = snapshot.data();
        const volunteerId = context.params.volunteerId;

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: functions.config().email?.user || process.env.EMAIL_USER || "test@example.com",
            pass: functions.config().email?.password || process.env.EMAIL_PASSWORD || "test_password",
          },
        });

        // Format the volunteer data for email
        const formattedData = Object.entries(volunteerData)
            .filter(([key]) => !["status", "createdAt"].includes(key))
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join("<br>");

        // Send the email
        await transporter.sendMail({
          from: `"TechTen Volunteers" <${functions.config().email?.user || 
                process.env.EMAIL_USER || 
                "test@example.com"}>`,
          to: functions.config().email?.notifications || 
              process.env.EMAIL_NOTIFICATIONS || 
              "test@example.com",
          subject: "New Volunteer Application",
          html: `
            <h1>New Volunteer Application</h1>
            <p>A new volunteer application has been submitted.</p>
            <p><strong>Volunteer ID:</strong> ${volunteerId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <h2>Volunteer Data:</h2>
            <p>${formattedData}</p>
          `,
        });

        return {success: true};
      } catch (error) {
        console.error("Error sending volunteer notification:", error);
        return {error: error.message};
      }
    });

/**
 * Cloud Function to send email notifications for partnership requests
 * This function is triggered when a new document is created in the partnerships collection
 */
exports.sendPartnershipNotification = functions.firestore
    .document("partnerships/{partnershipId}")
    .onCreate(async (snapshot, context) => {
      try {
        const partnershipData = snapshot.data();
        const partnershipId = context.params.partnershipId;

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: functions.config().email?.user || process.env.EMAIL_USER || "test@example.com",
            pass: functions.config().email?.password || process.env.EMAIL_PASSWORD || "test_password",
          },
        });

        // Format the partnership data for email
        const formattedData = Object.entries(partnershipData)
            .filter(([key]) => !["status", "createdAt"].includes(key))
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join("<br>");

        // Send the email
        await transporter.sendMail({
          from: `"TechTen Partnerships" <${functions.config().email?.user || 
                process.env.EMAIL_USER || 
                "test@example.com"}>`,
          to: functions.config().email?.notifications || 
              process.env.EMAIL_NOTIFICATIONS || 
              "test@example.com",
          subject: "New Partnership Request",
          html: `
            <h1>New Partnership Request</h1>
            <p>A new partnership request has been submitted.</p>
            <p><strong>Partnership ID:</strong> ${partnershipId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <h2>Partnership Data:</h2>
            <p>${formattedData}</p>
          `,
        });

        return {success: true};
      } catch (error) {
        console.error("Error sending partnership notification:", error);
        return {error: error.message};
      }
    });

/**
 * Cloud Function to send email notifications for course enrollments
 * This function is triggered when a new document is created in the enrollments collection
 */
exports.sendEnrollmentNotification = functions.firestore
    .document("enrollments/{enrollmentId}")
    .onCreate(async (snapshot, context) => {
      try {
        const enrollmentData = snapshot.data();
        const enrollmentId = context.params.enrollmentId;

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: functions.config().email?.user || process.env.EMAIL_USER || "test@example.com",
            pass: functions.config().email?.password || process.env.EMAIL_PASSWORD || "test_password",
          },
        });

        // Format the enrollment data for email
        const formattedData = Object.entries(enrollmentData)
            .filter(([key]) => !["status", "createdAt"].includes(key))
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join("<br>");

        // Send the email
        await transporter.sendMail({
          from: `"TechTen Enrollments" <${functions.config().email?.user || 
                process.env.EMAIL_USER || 
                "test@example.com"}>`,
          to: functions.config().email?.notifications || 
              process.env.EMAIL_NOTIFICATIONS || 
              "test@example.com",
          subject: "New Course Enrollment",
          html: `
            <h1>New Course Enrollment</h1>
            <p>A new course enrollment has been submitted.</p>
            <p><strong>Enrollment ID:</strong> ${enrollmentId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <h2>Enrollment Data:</h2>
            <p>${formattedData}</p>
          `,
        });

        return {success: true};
      } catch (error) {
        console.error("Error sending enrollment notification:", error);
        return {error: error.message};
      }
    });

/**
 * Cloud Function to send email notifications for contact forms
 * This function is triggered when a new document is created in the contacts collection
 */
exports.sendContactNotification = functions.firestore
    .document("contacts/{contactId}")
    .onCreate(async (snapshot, context) => {
      try {
        const contactData = snapshot.data();
        const contactId = context.params.contactId;

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: functions.config().email?.user || process.env.EMAIL_USER || "test@example.com",
            pass: functions.config().email?.password || process.env.EMAIL_PASSWORD || "test_password",
          },
        });

        // Format the contact data for email
        const formattedData = Object.entries(contactData)
            .filter(([key]) => !["status", "createdAt"].includes(key))
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join("<br>");

        // Send the email
        await transporter.sendMail({
          from: `"TechTen Contact" <${functions.config().email?.user || 
                process.env.EMAIL_USER || 
                "test@example.com"}>`,
          to: functions.config().email?.notifications || 
              process.env.EMAIL_NOTIFICATIONS || 
              "test@example.com",
          subject: "New Contact Form Submission",
          html: `
            <h1>New Contact Form Submission</h1>
            <p>A new contact form has been submitted.</p>
            <p><strong>Contact ID:</strong> ${contactId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <h2>Contact Data:</h2>
            <p>${formattedData}</p>
          `,
        });

        return {success: true};
      } catch (error) {
        console.error("Error sending contact notification:", error);
        return {error: error.message};
      }
    });
