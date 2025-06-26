import React from 'react';
import BaseForm from './BaseForm';

const SponsorshipForm = () => {
  const sponsorshipFields = [
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
        { value: 'foundation', label: 'Foundation' },
        { value: 'ngo', label: 'NGO / Non-profit' },
        { value: 'government', label: 'Government Agency' },
        { value: 'individual', label: 'Individual Donor' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'sponsorshipInterest',
      label: 'Sponsorship Interest',
      type: 'select',
      placeholder: 'Select your primary sponsorship interest',
      required: true,
      options: [
        { value: 'program', label: 'Program Sponsorship (Tech Labs, Hackathons, etc.)' },
        { value: 'event', label: 'Event Sponsorship' },
        { value: 'scholarship', label: 'Student Scholarships' },
        { value: 'equipment', label: 'Equipment & Resources' },
        { value: 'general', label: 'General Financial Support' },
        { value: 'other', label: 'Other (please specify in message)' }
      ]
    },
    {
      name: 'secondaryInterests',
      label: 'Secondary Sponsorship Interests (Optional)',
      type: 'checkboxGroup',
      options: [
        { value: 'program', label: 'Program Sponsorship (Tech Labs, Hackathons, etc.)' },
        { value: 'event', label: 'Event Sponsorship' },
        { value: 'scholarship', label: 'Student Scholarships' },
        { value: 'equipment', label: 'Equipment & Resources' },
        { value: 'general', label: 'General Financial Support' }
      ]
    },
    {
      name: 'sponsorshipLevel',
      label: 'Potential Sponsorship Level',
      type: 'select',
      placeholder: 'Select a sponsorship level',
      required: false,
      helpText: 'This helps us understand the scale of potential support and provide appropriate information.',
      options: [
        { value: 'small', label: 'Small ($1,000 - $5,000)' },
        { value: 'medium', label: 'Medium ($5,000 - $15,000)' },
        { value: 'large', label: 'Large ($15,000 - $50,000)' },
        { value: 'major', label: 'Major ($50,000+)' },
        { value: 'inkind', label: 'In-kind Support (equipment, services, etc.)' },
        { value: 'undecided', label: 'Undecided / Need more information' }
      ]
    },
    {
      name: 'message',
      label: 'Message / Specific Interests',
      type: 'textarea',
      placeholder: 'Please describe your sponsorship interests, any specific programs or initiatives you would like to support, and what you hope to achieve through this sponsorship.',
      required: true,
      rows: 5
    },
    {
      name: 'timeline',
      label: 'Sponsorship Timeline',
      type: 'select',
      placeholder: 'Select your proposed timeline',
      required: false,
      options: [
        { value: 'immediate', label: 'Immediate (within 1 month)' },
        { value: 'short', label: 'Short-term (1-3 months)' },
        { value: 'medium', label: 'Medium-term (3-6 months)' },
        { value: 'long', label: 'Long-term (6+ months)' },
        { value: 'recurring', label: 'Recurring / Annual' },
        { value: 'flexible', label: 'Flexible' }
      ]
    },
    {
      name: 'recognitionInterest',
      label: 'Recognition Interest',
      type: 'select',
      placeholder: 'Select your preference for recognition',
      required: false,
      options: [
        { value: 'public', label: 'Public recognition (logo, mentions, etc.)' },
        { value: 'limited', label: 'Limited recognition (internal communications only)' },
        { value: 'anonymous', label: 'Anonymous sponsorship' },
        { value: 'discuss', label: 'Would like to discuss options' }
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
      checkboxLabel: 'I agree to receive communications about sponsorship opportunities from Techten Planet.',
      required: true
    }
  ];

  return (
    <BaseForm
      title="Sponsorship Interest Form"
      description="Support technology education in Ghana through financial or in-kind sponsorship of our programs and initiatives."
      fields={sponsorshipFields}
      submitButtonText="Submit Interest"
      successMessage="Thank you for your interest in sponsoring Techten Planet! Our team will review your submission and contact you soon to discuss sponsorship opportunities that align with your interests."
    />
  );
};

export default SponsorshipForm;
