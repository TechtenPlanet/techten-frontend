import React from 'react';
import BaseForm from './BaseForm';

/**
 * Event Registration Form Component
 * 
 * This component handles event registration submissions and stores them in Firebase Firestore.
 * It extends the BaseForm component with fields specific to event registration.
 */
const EventRegistrationForm = ({ eventId, eventTitle }) => {
  const registrationFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      required: true,
    },
    {
      name: 'organization',
      label: 'Organization/School',
      type: 'text',
      placeholder: 'Enter your organization or school name',
      required: false,
    },
    {
      name: 'eventId',
      label: 'Event ID',
      type: 'hidden',
      value: eventId,
      required: true,
    },
    {
      name: 'eventTitle',
      label: 'Event Title',
      type: 'hidden',
      value: eventTitle,
      required: true,
    },
    {
      name: 'attendeeType',
      label: 'I am attending as a',
      type: 'select',
      placeholder: 'Select your attendee type',
      required: true,
      options: [
        { value: 'student', label: 'Student' },
        { value: 'professional', label: 'Professional' },
        { value: 'educator', label: 'Educator' },
        { value: 'parent', label: 'Parent' },
        { value: 'other', label: 'Other' },
      ]
    },
    {
      name: 'dietaryRestrictions',
      label: 'Dietary Restrictions (if any)',
      type: 'text',
      placeholder: 'Enter any dietary restrictions or allergies',
      required: false,
    },
    {
      name: 'specialRequirements',
      label: 'Special Requirements or Accommodations',
      type: 'textarea',
      placeholder: 'Enter any special requirements or accommodations you may need',
      required: false,
    },
    {
      name: 'howHeard',
      label: 'How did you hear about this event?',
      type: 'select',
      placeholder: 'Select an option',
      required: true,
      options: [
        { value: 'website', label: 'Techten Website' },
        { value: 'social', label: 'Social Media' },
        { value: 'email', label: 'Email Newsletter' },
        { value: 'friend', label: 'Friend or Colleague' },
        { value: 'school', label: 'School or Organization' },
        { value: 'other', label: 'Other' },
      ]
    },
    {
      name: 'agreeToTerms',
      type: 'checkbox',
      checkboxLabel: 'I agree to the terms and conditions',
      required: true,
    }
  ];

  return (
    <BaseForm
      title={`Register for ${eventTitle}`}
      description="Complete this form to register for this event. We'll send you a confirmation email with additional details."
      fields={registrationFields}
      submitButtonText="Register Now"
      successMessage="Your registration has been submitted successfully! We will send you a confirmation email with additional details."
      errorMessage="There was an error submitting your registration. Please try again later or contact us directly."
    />
  );
};

export default EventRegistrationForm;
