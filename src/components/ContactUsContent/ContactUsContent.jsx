import React from 'react'
import style from './ContactUsContent.module.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactUsContent = () => {
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
        <div id="ContactUsContent" className={style.contactUsContent}>
        <div className={style.contactUsContent}>
            <div className={style.contactUsContentWrapper}>
               <div className={style.headerSection}><h2 className={style.header}>Send Us A Message</h2>
                <p className={style.text}>We are always here to help you. <br></br> If you have any questions or need help with anything, feel free to contact us. <br></br>We will get back to you as soon as possible.</p>
                </div>

                <div className={style.socials}>
                    <div className={style.social}> <FaEnvelope className={style.socialIcon} /> <p>techtenplanet@gmail.com</p> </div>
                    <div className={style.social}> <FaFacebook className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaTwitter className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaInstagram className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaLinkedin className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                </div>
                <div className={style.contactForm}>
                    
                    <form onSubmit={sendEmail}>
                        <div className={style.top}>
                            <div className={style.inputs}>
                                <label htmlFor="full name">Full Name</label>
                                <input type="text" />
                            </div>
                            <div className={style.inputs}>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                        </div>

                        <div className={style.inputs}>
                                <label htmlFor="email">Subject</label>
                                <input type="text" />
                        </div>
                        <div className={style.inputs}>
                                <label htmlFor="email">Message</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" value="Send" disabled={isSubmitting} className={style.sendMessage}>Send Message</button>
                        {stateMessage && <p>{stateMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactUsContent