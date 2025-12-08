import React, { useState, useRef, useEffect } from 'react';
import style from './ContactUsContent.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { apiPost } from '../../utils/apiClient';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
// import formService from '../../firebase/formService';

/**
 * Contact Us Form Component with Firebase Integration
 * 
 * This component handles contact form submissions and stores them in Firebase Firestore.
 * It includes:
 * - Form validation
 * - reCAPTCHA integration
 * - Success/error messaging
 * 
 * The form data is sent to Firebase and also triggers an email notification
 * through Firebase Cloud Functions.
 */

const ContactUsContent = ({ defaultSubject = '' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [messageType, setMessageType] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const formRef = useRef(null);
    const recaptchaRef = useRef(null);
    
    // Set default subject when provided
    useEffect(() => {
        if (defaultSubject && formRef.current) {
            const subjectInput = formRef.current.querySelector('#subject');
            if (subjectInput) {
                subjectInput.value = defaultSubject;
            }
        }
    }, [defaultSubject]);
    
    
    // Handle reCAPTCHA change
    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    // Form validation
    const validateForm = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9\s-()]{7,20}$/;
        
        if (!values.user_name) {
            errors.name = "Name is required";
        }
        
        if (!values.user_email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.user_email)) {
            errors.email = "Invalid email format";
        }
        
        if (values.user_phone && !phoneRegex.test(values.user_phone)) {
            errors.phone = "Invalid phone number format";
        }
        
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        
        if (!values.message) {
            errors.message = "Message is required";
        } else if (values.message.length < 10) {
            errors.message = "Message must be at least 10 characters";
        }
        
        if (process.env.REACT_APP_RECAPTCHA_SITE_KEY && !recaptchaValue) {
            errors.recaptcha = "Please verify you are not a robot";
        }
        
        return errors;
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const values = {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            phone: formData.get('user_phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            recaptchaToken: recaptchaValue,
            submittedAt: new Date().toISOString()
        };
        
        // Validate form
        const errors = validateForm({
            user_name: values.name,
            user_email: values.email,
            user_phone: values.phone,
            subject: values.subject,
            message: values.message
        });
        setFormErrors(errors);
        
        // If there are errors, don't submit
        if (Object.keys(errors).length > 0) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Submit to Notion backend
            const result = await apiPost('/api/contact', {
                name: values.name,
                email: values.email,
                phone: values.phone,
                subject: values.subject,
                message: values.message,
                source: 'Website Contact Form'
            });
            setStateMessage("Your message has been sent successfully! We'll get back to you soon.");
            setMessageType('success');
            // Clear the form and reset reCAPTCHA after submission
            e.target.reset();
            setFormErrors({});
            setRecaptchaValue(null);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        } catch (error) {
            console.error("Contact Form Error:", error);
            setStateMessage("An error occurred. Please try again later or contact us directly via email.");
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // 5 seconds
        }
    };

    return (
        <div id="ContactUsContent" className={style.contactUsContent}>
            <div className={style.contactUsContentWrapper}>
                <div className={style.headerSection}>
                    <h2 className={style.header}>Send Us A Message</h2>
                    <p className={style.text}>
                        We are always here to help you. If you have any questions or need help with anything, feel free to contact us. 
                        We will get back to you as soon as possible.
                    </p>
                </div>

                <div className={style.contentContainer}>
                    <div className={style.contactInfo}>
                        <h3 className={style.contactInfoTitle}>Contact Information</h3>
                        <p className={style.contactInfoText}>
                            Reach out to us through any of these channels. We're here to help and would love to hear from you!
                        </p>
                        
                        <div className={style.infoItem}>
                            <FaMapMarkerAlt className={style.infoIcon} />
                            <div>
                                <h4>Call Us</h4>
                                <p>+233 50 123 4567</p>
                            </div>
                        </div>
                        
                        <div className={style.infoItem}>
                            <FaEnvelope className={style.infoIcon} />
                            <div>
                                <h4>Email Us</h4>
                                <p>techtenplanet@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className={style.infoItem}>
                            <FaPhone className={style.infoIcon} />
                            <div>
                                <h4>Call Us</h4>
                                <p>+233 50 123 4567</p>
                            </div>
                        </div>
                        
                        <div className={style.socialLinks}>
                            <h4>Connect With Us</h4>
                            <div className={style.socialIcons}>
                                <a href="https://facebook.com/techtenplanet" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                                    <FaFacebook className={style.socialIcon} />
                                </a>
                                <a href="https://twitter.com/techtenplanet" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                                    <FaTwitter className={style.socialIcon} />
                                </a>
                                <a href="https://instagram.com/techtenplanet" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                                    <FaInstagram className={style.socialIcon} />
                                </a>
                                <a href="https://linkedin.com/company/techtenplanet" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                                    <FaLinkedin className={style.socialIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.contactForm}>
                        <h3 className={style.formTitle}>Send Your Message</h3>
                        
                        {stateMessage && (
                            <div className={`${style.messageAlert} ${messageType === 'success' ? style.successMessage : style.errorMessage}`}>
                                {messageType === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                <p>{stateMessage}</p>
                            </div>
                        )}
                        
                        <form ref={formRef} onSubmit={sendEmail} className={style.form}>
                            <div className={style.formRow}>
                                <div className={style.formGroup}>
                                    <label htmlFor="user_name">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="user_name" 
                                        name="user_name" 
                                        className={formErrors.name ? style.inputError : ''}
                                        placeholder="Your name" 
                                    />
                                    {formErrors.name && <p className={style.errorText}>{formErrors.name}</p>}
                                </div>
                                
                                <div className={style.formGroup}>
                                    <label htmlFor="user_email">Email</label>
                                    <input 
                                        type="email" 
                                        id="user_email" 
                                        name="user_email" 
                                        className={formErrors.email ? style.inputError : ''}
                                        placeholder="Your email address" 
                                    />
                                    {formErrors.email && <p className={style.errorText}>{formErrors.email}</p>}
                                </div>
                            </div>
                            
                            <div className={style.formGroup}>
                                <label htmlFor="user_phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="user_phone" 
                                    name="user_phone" 
                                    className={formErrors.phone ? style.inputError : ''}
                                    placeholder="Your phone number (e.g. +233 50 123 4567)" 
                                />
                                {formErrors.phone && <p className={style.errorText}>{formErrors.phone}</p>}
                            </div>
                            
                            <div className={style.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    className={formErrors.subject ? style.inputError : ''}
                                    placeholder="What is this regarding?" 
                                />
                                {formErrors.subject && <p className={style.errorText}>{formErrors.subject}</p>}
                            </div>
                            
                            <div className={style.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="6" 
                                    className={formErrors.message ? style.inputError : ''}
                                    placeholder="How can we help you?" 
                                ></textarea>
                                {formErrors.message && <p className={style.errorText}>{formErrors.message}</p>}
                            </div>
                            
                            {process.env.REACT_APP_RECAPTCHA_SITE_KEY && (
                                <div className={style.recaptchaContainer}>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                        onChange={handleRecaptchaChange}
                                    />
                                    {formErrors.recaptcha && <p className={style.errorText}>{formErrors.recaptcha}</p>}
                                </div>
                            )}
                            
                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className={style.sendMessage}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsContent
