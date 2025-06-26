import { useState } from "react";
import style from './ContactForms.module.css';
import formService from '../../firebase/formService';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Get form data
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
                submittedAt: new Date().toISOString(),
            };

            // Submit to Firebase
            const result = await formService.submitContactForm(formData);
            
            if (result.success) {
                setStateMessage("Your message has been sent successfully!");
                // Clear the form after submission
                e.target.reset();
            } else {
                setStateMessage("An error occurred. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStateMessage("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // 5 seconds
        }
    };

    return (
        <div id="ContactForm" className={style.contactForm}>
        <form onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea name="message" required />
            <button type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
        </div>
    );
};

export default ContactForm;
