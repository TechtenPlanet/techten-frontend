import React from 'react'
import style from './ContactBanner.module.css'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const ContactBanner = () => {
  return (
    <div className={style.contactBanner}>
        <div className={style.contactBannerWrapper}>
        <h4 className={style.contactBannerHeading}>
            Are you a parent or a student that will need our services? </h4>
            <div className={style.contactBannerBtn}>
                <PrimaryButton txt="Contact Us" />
            </div>
        </div>
    </div>
  )
}

export default ContactBanner