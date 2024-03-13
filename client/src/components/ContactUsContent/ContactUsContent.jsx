import React from 'react'
import style from './ContactUsContent.module.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactUsContent = () => {
    return (
        <div className={style.contactUsContent}>
            <div className={style.contactUsContentWrapper}>
                <div className={style.socials}>
                    <div className={style.social}> <FaEnvelope className={style.socialIcon} /> <p>techtenplanet@gmail.com</p> </div>
                    <div className={style.social}> <FaFacebook className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaTwitter className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaInstagram className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                    <div className={style.social}> <FaLinkedin className={style.socialIcon} /> <p>TechTen Planet</p> </div>
                </div>
                <div className={style.contactForm}>
                    <h2 className={style.header}>Send Us A Message</h2>
                    <form action="">
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
                        <button className={style.sendMessage}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsContent