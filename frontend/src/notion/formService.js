const API_BASE_URL = '/api'; // Use relative path as backend serves frontend

const formService = {
  submitForm: async (formType, formData) => {
    try {
      console.log(`Submitting ${formType} form to backend:`, formData);
      const response = await fetch(`${API_BASE_URL}/${formType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || 'Unknown error'}`);
      }

      const result = await response.json();
      console.log(`${formType} form submitted successfully:`, result);
      return { success: true, ...result };
    } catch (error) {
      console.error(`Error submitting ${formType} form to backend:`, error);
      return { success: false, error: error.message };
    }
  },

  submitEnrollment: async (enrollmentData) => {
    return formService.submitForm('enrollments', enrollmentData);
  },

  submitVolunteerApplication: async (volunteerData) => {
    return formService.submitForm('volunteers', volunteerData);
  },

  submitPartnershipRequest: async (partnershipData) => {
    return formService.submitForm('partnerships', partnershipData);
  },

  submitContactForm: async (contactData) => {
    return formService.submitForm('contact', contactData);
  },

  submitEventRegistration: async (registrationData) => {
    return formService.submitForm('event-registrations', registrationData);
  },

  submitSponsorshipRequest: async (sponsorshipData) => {
    return formService.submitForm('sponsorships', sponsorshipData);
  },

  submitMentorshipForm: async (mentorshipData) => {
    return formService.submitForm('mentorships', mentorshipData);
  }
};

export default formService;
