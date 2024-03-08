import React from 'react'
import style from './ContactBanner.module.css'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const ContactBanner = () => {
  return (
    <div className={style.contactBanner}>
        <div className={style.contactBannerWrapper}>
            <h4 className={style.contactBannerHeading}>
            Do you have any questions or suggestions that can help improve our initiative?
            </h4>
            <div className={style.contactBannerBtn}>
                <PrimaryButton txt="Contact Us" />
            </div>
        </div>
    </div>
  )
}

export default ContactBanner