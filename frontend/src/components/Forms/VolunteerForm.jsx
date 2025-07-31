import React from 'react';
import BaseForm from './BaseForm';

const VolunteerForm = () => {
  const volunteerFields = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true
    },
    {
      name: 'country',
      label: 'Country / Timezone',
      type: 'text',
      placeholder: 'e.g., Ghana (GMT) or Belgium (CET)',
      required: true,
      helpText: 'This helps us match you with appropriate opportunities.'
    },
    {
      name: 'areaOfInterest',
      label: 'Area of Interest',
      type: 'select',
      placeholder: 'Select your primary area of interest',
      required: true,
      options: [
        { value: 'teaching', label: 'Teaching & Workshop Support' },
        { value: 'content', label: 'Content Creation & Curriculum' },
        { value: 'events', label: 'Event Organization & Support' },
        { value: 'technical', label: 'Technical Support & Development' },
        { value: 'marketing', label: 'Marketing & Communications' },
        { value: 'admin', label: 'Administrative Support' },
        { value: 'other', label: 'Other (please specify in background)' }
      ]
    },
    {
      name: 'secondaryInterests',
      label: 'Secondary Interests (Optional)',
      type: 'checkboxGroup',
      options: [
        { value: 'teaching', label: 'Teaching & Workshop Support' },
        { value: 'content', label: 'Content Creation & Curriculum' },
        { value: 'events', label: 'Event Organization & Support' },
        { value: 'technical', label: 'Technical Support & Development' },
        { value: 'marketing', label: 'Marketing & Communications' },
        { value: 'admin', label: 'Administrative Support' }
      ]
    },
    {
      name: 'background',
      label: 'LinkedIn Profile or Brief Background',
      type: 'textarea',
      placeholder: 'Share your LinkedIn profile URL or a brief description of your background and relevant skills',
      required: true,
      rows: 3
    },
    {
      name: 'availability',
      label: 'Availability (Hours per Week)',
      type: 'select',
      placeholder: 'Select your availability',
      required: true,
      options: [
        { value: '1-2', label: '1-2 hours per week' },
        { value: '3-5', label: '3-5 hours per week' },
        { value: '5-10', label: '5-10 hours per week' },
        { value: '10+', label: 'More than 10 hours per week' },
        { value: 'flexible', label: 'Flexible / Project-based' }
      ]
    },
    {
      name: 'additionalInfo',
      label: 'Additional Information (Optional)',
      type: 'textarea',
      placeholder: 'Any other information you would like to share with us',
      required: false,
      rows: 3
    },
    {
      name: 'consent',
      label: 'Consent',
      type: 'checkbox',
      checkboxLabel: 'I agree to receive communications about volunteer opportunities from Techten Planet.',
      required: true
    }
  ];

  return (
    <BaseForm
      title="Volunteer Sign-Up Form"
      description="Join our team of dedicated volunteers helping to empower Ghana's youth through technology education."
      fields={volunteerFields}
      submitButtonText="Submit Application"
      successMessage="Thank you for your interest in volunteering with Techten Planet! We will review your application and contact you soon."
    />
  );
};

export default VolunteerForm;
