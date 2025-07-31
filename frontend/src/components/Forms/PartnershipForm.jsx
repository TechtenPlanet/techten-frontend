import React from 'react';
import BaseForm from './BaseForm';

const PartnershipForm = () => {
  const partnershipFields = [
    {
      name: 'organizationName',
      label: 'Organization Name',
      type: 'text',
      placeholder: 'Enter your organization name',
      required: true
    },
    {
      name: 'contactPerson',
      label: 'Contact Person',
      type: 'text',
      placeholder: 'Full name of primary contact person',
      required: true
    },
    {
      name: 'contactTitle',
      label: 'Job Title',
      type: 'text',
      placeholder: 'Job title of contact person',
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
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number with country code',
      required: false
    },
    {
      name: 'website',
      label: 'Organization Website',
      type: 'text',
      placeholder: 'https://',
      required: false
    },
    {
      name: 'organizationType',
      label: 'Organization Type',
      type: 'select',
      placeholder: 'Select your organization type',
      required: true,
      options: [
        { value: 'company', label: 'Company / Business' },
        { value: 'school', label: 'School / Educational Institution' },
        { value: 'ngo', label: 'NGO / Non-profit' },
        { value: 'government', label: 'Government Agency' },
        { value: 'foundation', label: 'Foundation' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'collaborationType',
      label: 'Type of Collaboration',
      type: 'select',
      placeholder: 'Select primary collaboration interest',
      required: true,
      options: [
        { value: 'funding', label: 'Funding / Financial Support' },
        { value: 'school', label: 'School Partnership' },
        { value: 'expertise', label: 'Technical Expertise & Resources' },
        { value: 'venue', label: 'Venue / Facility Provision' },
        { value: 'curriculum', label: 'Curriculum Development' },
        { value: 'csr', label: 'Corporate Social Responsibility (CSR)' },
        { value: 'other', label: 'Other (please specify in message)' }
      ]
    },
    {
      name: 'secondaryCollaboration',
      label: 'Secondary Collaboration Interests (Optional)',
      type: 'checkboxGroup',
      options: [
        { value: 'funding', label: 'Funding / Financial Support' },
        { value: 'school', label: 'School Partnership' },
        { value: 'expertise', label: 'Technical Expertise & Resources' },
        { value: 'venue', label: 'Venue / Facility Provision' },
        { value: 'curriculum', label: 'Curriculum Development' },
        { value: 'csr', label: 'Corporate Social Responsibility (CSR)' }
      ]
    },
    {
      name: 'message',
      label: 'Partnership Proposal / Message',
      type: 'textarea',
      placeholder: 'Please describe your partnership idea, how you envision collaborating with Techten Planet, and any specific goals or expectations you have.',
      required: true,
      rows: 5
    },
    {
      name: 'timeline',
      label: 'Proposed Timeline',
      type: 'select',
      placeholder: 'Select your proposed timeline',
      required: false,
      options: [
        { value: 'immediate', label: 'Immediate (within 1 month)' },
        { value: 'short', label: 'Short-term (1-3 months)' },
        { value: 'medium', label: 'Medium-term (3-6 months)' },
        { value: 'long', label: 'Long-term (6+ months)' },
        { value: 'ongoing', label: 'Ongoing / Continuous' },
        { value: 'flexible', label: 'Flexible' }
      ]
    },
    {
      name: 'hearAbout',
      label: 'How did you hear about Techten Planet?',
      type: 'select',
      placeholder: 'Select an option',
      required: false,
      options: [
        { value: 'search', label: 'Search Engine' },
        { value: 'social', label: 'Social Media' },
        { value: 'event', label: 'Event or Conference' },
        { value: 'referral', label: 'Referral from Colleague/Friend' },
        { value: 'existing', label: 'Existing Partnership' },
        { value: 'other', label: 'Other' }
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
      checkboxLabel: 'I agree to receive communications about partnership opportunities from Techten Planet.',
      required: true
    }
  ];

  return (
    <BaseForm
      title="Partnership Inquiry Form"
      description="Explore collaboration opportunities with Techten Planet to expand technology education in Ghana."
      fields={partnershipFields}
      submitButtonText="Submit Inquiry"
      successMessage="Thank you for your partnership inquiry! Our team will review your proposal and contact you soon to discuss potential collaboration opportunities."
    />
  );
};

export default PartnershipForm;
