import { useState } from "react";
import emailjs from '@emailjs/browser'
import style from './ContactForms.module.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

    emailjs
        .sendForms(
            process.env.service_e3na29u,
            process.env.template_1cmv6uu,
            e.target,
            process.env.Lhuli3GACFdl5sj0J
        )
        .then(
            (result) => {
                setStateMessage("Your message has been sent successfully!");
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // 5 seconds
            },
            (error) => {
                setStateMessage("An error occurred, Please try again later.");
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // 5 seconds
            }
        );
        // Clear the form after submission
        e.target.reset();
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

        
