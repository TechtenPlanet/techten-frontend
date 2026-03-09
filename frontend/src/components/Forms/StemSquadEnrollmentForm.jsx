import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BaseForm from './BaseForm';

/**
 * STEM Squad Enrollment Form Component
 * 
 * This component handles STEM Squad subscription enrollments and stores them in the Enrollments database.
 * It extends the BaseForm component with fields specific to STEM Squad subscriptions.
 */
const StemSquadEnrollmentForm = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('individual');

  // Parse URL parameters to pre-select plan
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const planParam = searchParams.get('plan');
    const subscriptionParam = searchParams.get('subscription');
    
    if (subscriptionParam === 'group') {
      setSubscriptionType('group');
    }

    if (planParam) {
      if (planParam === 'group') {
        setSubscriptionType('group');
        setSelectedPlan('starter'); // Default to starter for group
      } else if (['starter', 'intermediate', 'advanced'].includes(planParam)) {
        setSelectedPlan(planParam);
      }
    }
  }, [location]);

  const stemSquadFields = [
    // Basic Parent/Guardian Info
    {
      name: 'name',
      label: 'Parent/Guardian Full Name',
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

    // Child Information
    {
      name: 'studentName',
      label: 'Child\'s Full Name',
      type: 'text',
      placeholder: 'Enter your child\'s full name',
      required: true,
    },
    {
      name: 'studentAge',
      label: 'Child\'s Age',
      type: 'number',
      placeholder: 'Enter your child\'s age',
      required: true,
      min: 6,
      max: 18,
    },

    // STEM Squad Plan Selection
    {
      name: 'planType',
      label: 'STEM Squad Plan',
      type: 'select',
      placeholder: 'Select a STEM Squad plan',
      required: true,
      value: selectedPlan,
      options: [
        { value: 'starter', label: 'Starter (Ages 6-12) - GHS 350/month' },
        { value: 'intermediate', label: 'Intermediate (Ages 12-18) - GHS 450/month' },
        { value: 'advanced', label: 'Advanced (All Ages) - GHS 550/month' }
      ]
    },

    // Subscription Type
    {
      name: 'subscriptionType',
      label: 'Subscription Type',
      type: 'radio',
      required: true,
      value: subscriptionType,
      options: [
        { value: 'individual', label: 'Individual Subscription - Full price per child' },
        { value: 'group', label: 'Group Buy - Save 10-15% with 3-5 families' }
      ]
    },

    // Group Buy Information (conditional)
    {
      name: 'groupSize',
      label: 'Total Number of Children in Group',
      type: 'number',
      placeholder: 'Enter total number of children (3-5)',
      required: subscriptionType === 'group',
      conditional: { field: 'subscriptionType', value: 'group' },
      min: 3,
      max: 5,
    },
    {
      name: 'groupLeaderName',
      label: 'Group Leader Name (if not you)',
      type: 'text',
      placeholder: 'Enter group leader name or leave blank if you are the leader',
      required: false,
      conditional: { field: 'subscriptionType', value: 'group' },
    },
    {
      name: 'otherParentsInfo',
      label: 'Other Parents Contact Information',
      type: 'textarea',
      placeholder: 'Please provide names and phone numbers of other parents in the group',
      required: subscriptionType === 'group',
      conditional: { field: 'subscriptionType', value: 'group' },
      rows: 4,
    },

    // Payment and Start Preferences
    {
      name: 'paymentPreference',
      label: 'Payment Preference',
      type: 'select',
      placeholder: 'Select payment frequency',
      required: true,
      options: [
        { value: 'monthly', label: 'Monthly Payment' },
        { value: 'semester', label: 'Semester Payment (Save 5%)' },
        { value: 'annual', label: 'Annual Payment (Save 10%)' }
      ]
    },
    {
      name: 'startDatePreference',
      label: 'Preferred Start Date',
      type: 'date',
      placeholder: 'Select a start date',
      required: true,
      helpText: 'Select a date (YYYY-MM-DD). First kit will be delivered after 3 months of subscription.'
    },

    // Additional Information
    {
      name: 'childInterests',
      label: 'Child\'s Interests in STEM',
      type: 'checkboxGroup',
      required: false,
      options: [
        { value: 'robotics', label: 'Robotics & Engineering' },
        { value: 'coding', label: 'Coding & Programming' },
        { value: 'science', label: 'Science Experiments' },
        { value: 'electronics', label: 'Electronics & Circuits' },
        { value: 'math', label: 'Mathematics & Logic' },
        { value: 'art', label: 'STEAM (Art + Science)' }
      ]
    },
    {
      name: 'experience',
      label: 'Child\'s Previous STEM Experience',
      type: 'select',
      placeholder: 'Select experience level',
      required: true,
      options: [
        { value: 'none', label: 'No previous STEM experience' },
        { value: 'beginner', label: 'Some basic exposure to STEM' },
        { value: 'intermediate', label: 'Has done STEM activities before' },
        { value: 'advanced', label: 'Very experienced with STEM projects' },
      ]
    },
    {
      name: 'hearAboutUs',
      label: 'How did you hear about STEM Squad?',
      type: 'select',
      placeholder: 'Select how you found us',
      required: true,
      options: [
        { value: 'website', label: 'Techten Website' },
        { value: 'social', label: 'Social Media' },
        { value: 'friend', label: 'Friend or Family Recommendation' },
        { value: 'school', label: 'School or Teacher' },
        { value: 'event', label: 'Techten Event or Workshop' },
        { value: 'search', label: 'Google Search' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'specialRequirements',
      label: 'Special Requirements or Allergies',
      type: 'textarea',
      placeholder: 'Any allergies, dietary restrictions, or special needs we should know about',
      required: false,
      rows: 3,
      helpText: 'This helps us prepare appropriate materials and plan for events'
    },
    {
      name: 'additionalInfo',
      label: 'Additional Comments (Optional)',
      type: 'textarea',
      placeholder: 'Any other information you would like to share with us',
      required: false,
      rows: 3,
    },

    // Hidden fields for database
    {
      name: 'courseId',
      type: 'hidden',
      value: 'STEM_SQUAD',
    },
    {
      name: 'courseTitle',
      type: 'hidden',
      value: 'STEM Squad Subscription',
    },
    {
      name: 'programType',
      type: 'hidden',
      value: 'STEM Squad',
    },

    // Terms and Conditions
    {
      name: 'agreeToTerms',
      type: 'checkbox',
      checkboxLabel: 'I agree to the STEM Squad terms and conditions, including the 3-month minimum subscription period',
      required: true,
    },
    {
      name: 'agreeToMarketing',
      type: 'checkbox',
      checkboxLabel: 'I would like to receive updates about new STEM Squad activities and Techten events',
      required: false,
    }
  ];

  // Filter fields based on conditional logic
  const getVisibleFields = () => {
    return stemSquadFields.filter(field => {
      if (field.conditional) {
        // For now, we'll handle subscriptionType conditional in the form state
        // This could be enhanced to be more dynamic
        return subscriptionType === field.conditional.value;
      }
      return true;
    });
  };

  return (
    <BaseForm
      title="STEM Squad Enrollment"
      description="Join STEM Squad and give your child hands-on STEM learning with monthly activities and semester kit deliveries. Choose between individual subscriptions or group buy options to save money while learning with friends!"
      fields={getVisibleFields()}
      submitButtonText="Enroll in STEM Squad"
      successMessage="Your STEM Squad enrollment has been submitted successfully! We will contact you within 24 hours to confirm your subscription and provide payment details. Your first kit will be delivered after 3 months of subscription."
      errorMessage="There was an error submitting your STEM Squad enrollment. Please try again later or contact us directly at info@techtenplanet.org."
    />
  );
};

export default StemSquadEnrollmentForm;
