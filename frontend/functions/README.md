# Firebase Cloud Functions

This directory contains the Firebase Cloud Functions that handle various backend operations for the TechTen website.

## Payment Functions

### `createMolliePayment`

This function is called from the frontend when a user submits the donation form. It creates a payment with Mollie and returns the checkout URL to redirect the user to.

### `getPaymentStatus`

This function is called from the frontend to check if a payment was successful. It retrieves the payment status from Mollie and updates the donation status in Firestore.

### `mollieWebhook`

This function is called by Mollie when a payment status changes. It updates the donation status in Firestore.

## Form Notification Functions

### `sendFormNotification`

This function is triggered when a new document is created in the form_submissions collection. It sends an email notification to the admin with the form data.

### `sendVolunteerNotification`

This function is triggered when a new document is created in the volunteers collection. It sends an email notification to the admin with the volunteer application data.

### `sendPartnershipNotification`

This function is triggered when a new document is created in the partnerships collection. It sends an email notification to the admin with the partnership request data.

### `sendEnrollmentNotification`

This function is triggered when a new document is created in the enrollments collection. It sends an email notification to the admin with the enrollment data.

### `sendContactNotification`

This function is triggered when a new document is created in the contacts collection. It sends an email notification to the admin with the contact form data.

## Setup

1. Install dependencies:
   ```
   cd functions
   npm install
   ```

2. Set up Mollie API key:
   ```
   firebase functions:config:set mollie.api_key="YOUR_MOLLIE_API_KEY"
   ```

3. Deploy the functions:
   ```
   firebase deploy --only functions
   ```

## Local Development

To test the functions locally, you can use the Firebase Emulator Suite:

```
firebase emulators:start --only functions
```

You'll need to uncomment the line in `config.js` that connects to the local emulator:

```javascript
// Use emulator when in development
if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
```

## Webhook Setup

For the webhook to work properly, you need to set up a webhook URL in your Mollie dashboard. The URL should be:

```
https://YOUR_FIREBASE_PROJECT_ID.web.app/mollieWebhook
```

Or for local development:

```
http://localhost:5001/YOUR_FIREBASE_PROJECT_ID/us-central1/mollieWebhook
