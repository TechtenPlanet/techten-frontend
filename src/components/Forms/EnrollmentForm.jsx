import React from 'react';
import BaseForm from './BaseForm';

/**
 * Course Enrollment Form Component
 * 
 * This component handles course enrollment submissions and stores them in Firebase Firestore.
 * It extends the BaseForm component with fields specific to course enrollment.
 */
const EnrollmentForm = ({ courseId, courseTitle }) => {
  const enrollmentFields = [
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
      name: 'studentName',
      label: 'Student Name (if different from above)',
      type: 'text',
      placeholder: 'Enter student name if enrolling someone else',
      required: false,
    },
    {
      name: 'studentAge',
      label: 'Student Age',
      type: 'number',
      placeholder: 'Enter student age',
      required: true,
    },
    {
      name: 'courseId',
      label: 'Course',
      type: 'hidden',
      value: courseId,
      required: true,
    },
    {
      name: 'courseTitle',
      label: 'Course Title',
      type: 'hidden',
      value: courseTitle,
      required: true,
    },
    {
      name: 'preferredSession',
      label: 'Preferred Session',
      type: 'select',
      placeholder: 'Select your preferred session',
      required: true,
      options: [
        { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)' },
        { value: 'afternoon', label: 'Afternoon (1:00 PM - 4:00 PM)' },
        { value: 'evening', label: 'Evening (5:00 PM - 8:00 PM)' },
        { value: 'weekend', label: 'Weekend (Saturday 10:00 AM - 1:00 PM)' },
      ]
    },
    {
      name: 'experience',
      label: 'Previous Experience',
      type: 'select',
      placeholder: 'Select your level of experience',
      required: true,
      options: [
        { value: 'none', label: 'No previous experience' },
        { value: 'beginner', label: 'Beginner (some basic knowledge)' },
        { value: 'intermediate', label: 'Intermediate (completed similar courses)' },
        { value: 'advanced', label: 'Advanced (significant experience in this area)' },
      ]
    },
    {
      name: 'additionalInfo',
      label: 'Additional Information (Optional)',
      type: 'textarea',
      placeholder: 'Any other information you would like to share with us',
      required: false,
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
      title={courseTitle ? `Enroll in ${courseTitle}` : "Course Enrollment Form"}
      description="Complete this form to enroll in one of our exciting technology courses. We'll contact you with confirmation and next steps."
      fields={enrollmentFields}
      successMessage="Your enrollment has been submitted successfully! We will contact you shortly with confirmation and next steps."
      errorMessage="There was an error submitting your enrollment. Please try again later or contact us directly."
    />
  );
};

export default EnrollmentForm;
