import { apiPost } from '../utils/apiClient'

const formService = {
  submitForm: async (formType, formData) => {
    try {
      console.log(`Submitting ${formType} form to backend:`, formData)
      const result = await apiPost(`/api/${formType}`, formData)
      console.log(`${formType} form submitted successfully:`, result)
      return { success: true, ...result }
    } catch (error) {
      console.error(`Error submitting ${formType} form to backend:`, error)
      return { success: false, error: error.message }
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
