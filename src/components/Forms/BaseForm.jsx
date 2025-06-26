import React, { useState } from 'react';
import style from './Forms.module.css';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import formService from '../../firebase/formService';

const BaseForm = ({ 
  title, 
  description, 
  fields, 
  submitButtonText = 'Submit', 
  onSubmit,
  successMessage = 'Form submitted successfully! We will get back to you soon.',
  errorMessage = 'There was an error submitting the form. Please try again later.'
}) => {
  // Initialize formData with values from hidden fields
  const initialFormData = fields.reduce((acc, field) => {
    if (field.type === 'hidden' && field.value) {
      acc[field.name] = field.value;
    }
    return acc;
  }, {});
  
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    fields.forEach(field => {
      // Skip validation for hidden fields
      if (field.type === 'hidden') {
        return;
      }

      if (field.required && (formData[field.name] === undefined || formData[field.name] === '')) {
        newErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }

      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address';
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Determine the form type based on the title or a prop
        const formType = title.toLowerCase().includes('volunteer') 
          ? 'volunteer'
          : title.toLowerCase().includes('partner') 
            ? 'partnership'
            : title.toLowerCase().includes('contact') 
              ? 'contact'
              : title.toLowerCase().includes('enroll') 
                ? 'enrollment'
                : title.toLowerCase().includes('register') 
                  ? 'event-registration'
                  : 'general';
        
        // Submit the form data to Firebase
        let result;
        
        switch (formType) {
          case 'volunteer':
            result = await formService.submitVolunteerApplication(formData);
            break;
          case 'partnership':
            result = await formService.submitPartnershipRequest(formData);
            break;
          case 'contact':
            result = await formService.submitContactForm(formData);
            break;
          case 'enrollment':
            result = await formService.submitEnrollment(formData);
            break;
          case 'event-registration':
            result = await formService.submitEventRegistration(formData);
            break;
          default:
            result = await formService.submitForm(formType, formData);
            break;
        }
        
        console.log(`${formType} form submitted:`, result);
        
        // Set form status to success
        setFormStatus('success');
        
        // If you have an onSubmit handler passed as a prop, call it
        if (onSubmit) {
          onSubmit(formData, result);
        }
        
        // Reset form after successful submission
        setFormData({});
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormStatus('error');
      }
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'hidden':
        return (
          <input
            type="hidden"
            id={field.name}
            name={field.name}
            value={field.value || formData[field.name] || ''}
          />
        );
        
      case 'text':
      case 'email':
      case 'tel':
      case 'number':
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`form-control ${errors[field.name] ? style.inputError : ''}`}
            placeholder={field.placeholder || ''}
            required={field.required}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`form-control ${errors[field.name] ? style.inputError : ''}`}
            placeholder={field.placeholder || ''}
            rows={field.rows || 4}
            required={field.required}
          />
        );
      
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`form-select ${errors[field.name] ? style.inputError : ''}`}
            required={field.required}
          >
            <option value="">{field.placeholder || 'Select an option'}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <div className="form-check">
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              checked={formData[field.name] || false}
              onChange={handleChange}
              className={`form-check-input ${errors[field.name] ? style.inputError : ''}`}
              required={field.required}
            />
            <label className="form-check-label" htmlFor={field.name}>
              {field.checkboxLabel || field.label}
            </label>
          </div>
        );
      
      case 'radio':
        return (
          <div>
            {field.options.map((option) => (
              <div className="form-check" key={option.value}>
                <input
                  type="radio"
                  id={`${field.name}-${option.value}`}
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={handleChange}
                  className="form-check-input"
                  required={field.required}
                />
                <label className="form-check-label" htmlFor={`${field.name}-${option.value}`}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      
      case 'checkboxGroup':
        return (
          <div>
            {field.options.map((option) => (
              <div className="form-check" key={option.value}>
                <input
                  type="checkbox"
                  id={`${field.name}-${option.value}`}
                  name={`${field.name}-${option.value}`}
                  checked={formData[`${field.name}-${option.value}`] || false}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor={`${field.name}-${option.value}`}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  if (formStatus === 'success') {
    return (
      <div className={style.formContainer}>
        <div className={style.formSuccess}>
          <FaCheckCircle className={style.successIcon} />
          <h3>Thank You!</h3>
          <p>{successMessage}</p>
          <button 
            className={style.submitButton} 
            onClick={() => {
              setFormStatus(null);
              setFormData({});
            }}
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>
        <h2 className={style.formTitle}>{title}</h2>
        {description && <p className={style.formDescription}>{description}</p>}
      </div>
      
      {formStatus === 'error' && (
        <div className={style.formError}>
          <FaExclamationTriangle className={style.errorIcon} />
          <p>{errorMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className={field.type === 'hidden' ? 'd-none' : style.formGroup} key={field.name}>
            {field.type !== 'checkbox' && field.type !== 'hidden' && (
              <label htmlFor={field.name} className={style.formLabel}>
                {field.label}
                {field.required && <span className={style.requiredStar}>*</span>}
              </label>
            )}
            
            {renderField(field)}
            
            {errors[field.name] && (
              <div className={style.errorMessage}>{errors[field.name]}</div>
            )}
            
            {field.helpText && (
              <small className={style.helpText}>{field.helpText}</small>
            )}
          </div>
        ))}
        
        <div className={style.formActions}>
          <button 
            type="submit" 
            className={style.submitButton}
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BaseForm;
