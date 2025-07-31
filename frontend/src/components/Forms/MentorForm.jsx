import React from 'react';
import BaseForm from './BaseForm';

const MentorForm = () => {
  const mentorFields = [
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
      helpText: 'This helps us match you with students in compatible time zones.'
    },
    {
      name: 'profession',
      label: 'Current Profession',
      type: 'text',
      placeholder: 'e.g., Software Engineer, Data Scientist, Product Manager',
      required: true
    },
    {
      name: 'company',
      label: 'Company/Organization',
      type: 'text',
      placeholder: 'Where do you currently work?',
      required: false
    },
    {
      name: 'expertise',
      label: 'Areas of Expertise',
      type: 'select',
      placeholder: 'Select your primary area of expertise',
      required: true,
      options: [
        { value: 'software', label: 'Software Development' },
        { value: 'hardware', label: 'Hardware & Electronics' },
        { value: 'data', label: 'Data Science & Analytics' },
        { value: 'design', label: 'UX/UI Design' },
        { value: 'product', label: 'Product Management' },
        { value: 'business', label: 'Business & Entrepreneurship' },
        { value: 'education', label: 'Education & Curriculum Development' },
        { value: 'other', label: 'Other (please specify in background)' }
      ]
    },
    {
      name: 'secondaryExpertise',
      label: 'Secondary Areas of Expertise (Optional)',
      type: 'checkboxGroup',
      options: [
        { value: 'software', label: 'Software Development' },
        { value: 'hardware', label: 'Hardware & Electronics' },
        { value: 'data', label: 'Data Science & Analytics' },
        { value: 'design', label: 'UX/UI Design' },
        { value: 'product', label: 'Product Management' },
        { value: 'business', label: 'Business & Entrepreneurship' },
        { value: 'education', label: 'Education & Curriculum Development' }
      ]
    },
    {
      name: 'specificSkills',
      label: 'Specific Skills',
      type: 'textarea',
      placeholder: 'Please list specific skills you can mentor in (e.g., Python, Arduino, React, Business Model Canvas)',
      required: true,
      rows: 3
    },
    {
      name: 'linkedIn',
      label: 'LinkedIn Profile',
      type: 'text',
      placeholder: 'URL to your LinkedIn profile',
      required: false,
      helpText: 'Or other professional profile that showcases your experience'
    },
    {
      name: 'mentorExperience',
      label: 'Previous Mentoring Experience',
      type: 'select',
      placeholder: 'Select your level of mentoring experience',
      required: true,
      options: [
        { value: 'none', label: 'No previous mentoring experience' },
        { value: 'informal', label: 'Informal mentoring (colleagues, friends)' },
        { value: 'formal', label: 'Formal mentoring programs' },
        { value: 'teaching', label: 'Teaching experience' },
        { value: 'extensive', label: 'Extensive mentoring experience' }
      ]
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
        { value: '5+', label: 'More than 5 hours per week' },
        { value: 'flexible', label: 'Flexible / Project-based' }
      ]
    },
    {
      name: 'preferredAgeGroup',
      label: 'Preferred Age Group to Mentor',
      type: 'select',
      placeholder: 'Select your preferred age group',
      required: false,
      options: [
        { value: '10-14', label: '10-14 years old' },
        { value: '15-18', label: '15-18 years old' },
        { value: '19-24', label: '19-24 years old' },
        { value: 'any', label: 'Any age group' }
      ]
    },
    {
      name: 'motivation',
      label: 'Motivation for Mentoring',
      type: 'textarea',
      placeholder: 'Please share why you are interested in mentoring with Techten Planet',
      required: true,
      rows: 3
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
      checkboxLabel: 'I agree to receive communications about mentoring opportunities from Techten Planet.',
      required: true
    }
  ];

  return (
    <BaseForm
      title="Mentor Registration Form"
      description="Share your expertise and guide the next generation of tech innovators in Ghana."
      fields={mentorFields}
      submitButtonText="Submit Registration"
      successMessage="Thank you for your interest in becoming a mentor with Techten Planet! We will review your application and contact you soon to discuss next steps."
    />
  );
};

export default MentorForm;
