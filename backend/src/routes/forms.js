import { 
  notion, 
  CONTACT_DB_ID, 
  ENROLLMENTS_DB_ID, 
  EVENT_REGISTRATIONS_DB_ID,
  VOLUNTEER_DB_ID,
  PARTNERSHIP_DB_ID,
  SPONSORSHIP_DB_ID,
  MENTORSHIP_DB_ID
} from '../config/notion.js';

export const formsRoutes = [
  // Contact Form Submission Route
  {
    method: 'POST',
    path: '/contact',
    handler: async (request, h) => {
      try {
        const { name, email, phone, subject, message, source = 'Website Contact Form' } = request.payload;
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: CONTACT_DB_ID },
          properties: {
            'Name': {
              title: [{ text: { content: name } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Subject': {
              rich_text: [{ text: { content: subject } }]
            },
            'Message': {
              rich_text: [{ text: { content: message } }]
            },
            'Submitted Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'New' }
            },
            'Source': {
              select: { name: source }
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Contact form submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Contact Form API Error:', err);
        return h.response({ error: 'Failed to submit contact form' }).code(500);
      }
    },
  },

  // Course Enrollment Route (includes STEM Squad)
  {
    method: 'POST',
    path: '/enrollments',
    handler: async (request, h) => {
      try {
        const { 
          studentName, 
          email, 
          phone, 
          courseName, 
          courseId, 
          age, 
          experienceLevel = 'Beginner',
          specialRequirements,
          emergencyContact,
          // STEM Squad specific fields
          programType = 'Course',
          planType,
          subscriptionType,
          groupSize,
          groupLeader,
          otherParentsInfo,
          paymentPreference,
          startDatePreference,
          childInterests = [],
          hearAboutUs,
          marketingConsent = false
        } = request.payload;
        
        // Validate required fields
        if (!studentName || !email || !courseName) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        // Base properties for all enrollments
        const properties = {
          'Student Name': {
            title: [{ text: { content: studentName } }]
          },
          'Email': {
            email: email
          },
          'Phone': {
            phone_number: phone || null
          },
          'Course Name': {
            rich_text: [{ text: { content: courseName } }]
          },
          'Course ID': {
            rich_text: [{ text: { content: courseId || '' } }]
          },
          'Age': {
            number: age || null
          },
          'Experience Level': {
            select: { name: experienceLevel }
          },
          'Enrollment Date': {
            date: { start: new Date().toISOString().split('T')[0] }
          },
          'Status': {
            select: { name: 'Pending' }
          },
          'Special Requirements': {
            rich_text: [{ text: { content: specialRequirements || '' } }]
          },
          'Emergency Contact': {
            rich_text: [{ text: { content: emergencyContact || '' } }]
          },
          'Program Type': {
            select: { name: programType }
          }
        };

        // Add STEM Squad specific properties if this is a STEM Squad enrollment
        if (programType === 'STEM Squad') {
          if (planType) {
            properties['Plan Type'] = {
              select: { name: planType.charAt(0).toUpperCase() + planType.slice(1) }
            };
          }
          
          if (subscriptionType) {
            properties['Subscription Type'] = {
              select: { name: subscriptionType === 'group' ? 'Group Buy' : 'Individual' }
            };
          }
          
          if (groupSize) {
            properties['Group Size'] = {
              number: parseInt(groupSize)
            };
          }
          
          if (groupLeader) {
            properties['Group Leader'] = {
              rich_text: [{ text: { content: groupLeader } }]
            };
          }
          
          if (otherParentsInfo) {
            properties['Other Parents Info'] = {
              rich_text: [{ text: { content: otherParentsInfo } }]
            };
          }
          
          if (paymentPreference) {
            properties['Payment Preference'] = {
              select: { name: paymentPreference.charAt(0).toUpperCase() + paymentPreference.slice(1) }
            };
          }
          
          if (startDatePreference) {
            properties['Start Date Preference'] = {
              date: { start: startDatePreference }
            };
          }
          
          if (childInterests && childInterests.length > 0) {
            properties['Child Interests'] = {
              multi_select: childInterests.map(interest => ({
                name: interest.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())
              }))
            };
          }
          
          if (hearAboutUs) {
            const hearAboutUsMap = {
              'website': 'Website',
              'social': 'Social Media',
              'friend': 'Friend/Family',
              'school': 'School/Teacher',
              'event': 'Techten Event',
              'search': 'Google Search',
              'other': 'Other'
            };
            properties['How Heard About Us'] = {
              select: { name: hearAboutUsMap[hearAboutUs] || 'Other' }
            };
          }
          
          properties['Marketing Consent'] = {
            checkbox: marketingConsent
          };
        }
        
        const response = await notion.pages.create({
          parent: { database_id: ENROLLMENTS_DB_ID },
          properties: properties
        });
        
        return { 
          success: true, 
          message: programType === 'STEM Squad' ? 'STEM Squad enrollment submitted successfully' : 'Enrollment submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Enrollment API Error:', err);
        return h.response({ error: 'Failed to submit enrollment' }).code(500);
      }
    },
  },

  // Event Registration Route
  {
    method: 'POST',
    path: '/event-registrations',
    handler: async (request, h) => {
      try {
        const { 
          participantName, 
          email, 
          phone, 
          eventName, 
          eventId, 
          organization,
          jobTitle,
          dietaryRequirements,
          ticketType = 'Free',
          howDidYouHear = 'Website',
          specialRequests 
        } = request.payload;
        
        // Validate required fields
        if (!participantName || !email || !eventName) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: EVENT_REGISTRATIONS_DB_ID },
          properties: {
            'Participant Name': {
              title: [{ text: { content: participantName } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Event Name': {
              rich_text: [{ text: { content: eventName } }]
            },
            'Event ID': {
              rich_text: [{ text: { content: eventId || '' } }]
            },
            'Organization': {
              rich_text: [{ text: { content: organization || '' } }]
            },
            'Job Title': {
              rich_text: [{ text: { content: jobTitle || '' } }]
            },
            'Dietary Requirements': {
              rich_text: [{ text: { content: dietaryRequirements || '' } }]
            },
            'Registration Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'Registered' }
            },
            'Ticket Type': {
              select: { name: ticketType }
            },
            'How did you hear about us?': {
              select: { name: howDidYouHear }
            },
            'Special Requests': {
              rich_text: [{ text: { content: specialRequests || '' } }]
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Event registration submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Event Registration API Error:', err);
        return h.response({ error: 'Failed to submit event registration' }).code(500);
      }
    },
  },

  // Volunteer Form Submission Route
  {
    method: 'POST',
    path: '/volunteers',
    handler: async (request, h) => {
      try {
        const { name, email, phone, skills, availability, message, source = 'Website Volunteer Form' } = request.payload;
        
        if (!name || !email || !skills || !availability) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: VOLUNTEER_DB_ID },
          properties: {
            'Name': {
              title: [{ text: { content: name } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Skills': {
              rich_text: [{ text: { content: skills } }]
            },
            'Availability': {
              rich_text: [{ text: { content: availability } }]
            },
            'Message': {
              rich_text: [{ text: { content: message || '' } }]
            },
            'Submitted Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'New' }
            },
            'Source': {
              select: { name: source }
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Volunteer form submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Volunteer Form API Error:', err);
        return h.response({ error: 'Failed to submit volunteer form' }).code(500);
      }
    },
  },

  // Partnership Form Submission Route
  {
    method: 'POST',
    path: '/partnerships',
    handler: async (request, h) => {
      try {
        const { organizationName, contactPerson, email, phone, partnershipType, message, source = 'Website Partnership Form' } = request.payload;
        
        if (!organizationName || !contactPerson || !email || !partnershipType) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: PARTNERSHIP_DB_ID },
          properties: {
            'Organization Name': {
              title: [{ text: { content: organizationName } }]
            },
            'Contact Person': {
              rich_text: [{ text: { content: contactPerson } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Partnership Type': {
              select: { name: partnershipType }
            },
            'Message': {
              rich_text: [{ text: { content: message || '' } }]
            },
            'Submitted Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'New' }
            },
            'Source': {
              select: { name: source }
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Partnership form submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Partnership Form API Error:', err);
        return h.response({ error: 'Failed to submit partnership form' }).code(500);
      }
    },
  },

  // Sponsorship Form Submission Route
  {
    method: 'POST',
    path: '/sponsorships',
    handler: async (request, h) => {
      try {
        const { organizationName, contactPerson, email, phone, sponsorshipType, amount, message, source = 'Website Sponsorship Form' } = request.payload;
        
        if (!organizationName || !contactPerson || !email || !sponsorshipType) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: SPONSORSHIP_DB_ID },
          properties: {
            'Organization Name': {
              title: [{ text: { content: organizationName } }]
            },
            'Contact Person': {
              rich_text: [{ text: { content: contactPerson } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Sponsorship Type': {
              select: { name: sponsorshipType }
            },
            'Amount': {
              number: amount || null
            },
            'Message': {
              rich_text: [{ text: { content: message || '' } }]
            },
            'Submitted Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'New' }
            },
            'Source': {
              select: { name: source }
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Sponsorship form submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Sponsorship Form API Error:', err);
        return h.response({ error: 'Failed to submit sponsorship form' }).code(500);
      }
    },
  },

  // Mentorship Form Submission Route
  {
    method: 'POST',
    path: '/mentorships',
    handler: async (request, h) => {
      try {
        const { name, email, phone, expertise, availability, message, source = 'Website Mentorship Form' } = request.payload;
        
        if (!name || !email || !expertise || !availability) {
          return h.response({ error: 'Missing required fields' }).code(400);
        }
        
        const response = await notion.pages.create({
          parent: { database_id: MENTORSHIP_DB_ID },
          properties: {
            'Name': {
              title: [{ text: { content: name } }]
            },
            'Email': {
              email: email
            },
            'Phone': {
              phone_number: phone || null
            },
            'Expertise': {
              rich_text: [{ text: { content: expertise } }]
            },
            'Availability': {
              rich_text: [{ text: { content: availability } }]
            },
            'Message': {
              rich_text: [{ text: { content: message || '' } }]
            },
            'Submitted Date': {
              date: { start: new Date().toISOString().split('T')[0] }
            },
            'Status': {
              select: { name: 'New' }
            },
            'Source': {
              select: { name: source }
            }
          }
        });
        
        return { 
          success: true, 
          message: 'Mentorship form submitted successfully',
          id: response.id 
        };
      } catch (err) {
        console.error('Mentorship Form API Error:', err);
        return h.response({ error: 'Failed to submit mentorship form' }).code(500);
      }
    },
  }
];
