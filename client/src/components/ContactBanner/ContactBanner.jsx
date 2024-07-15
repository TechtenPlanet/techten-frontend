import React from 'react'
import style from './ContactBanner.module.css'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const ContactBanner = () => {
  return (
    <div id="ContactBanner">
    <div className={style.contactBanner}>
        <div className={style.contactBannerWrapper}>
        <h4 className={style.contactBannerHeading}>
             </h4>
            <div className={style.contactBannerBtn}>
                <scrollLink to="ContactUsContent"> <PrimaryButton txt="Contact Us" /> </scrollLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactBanner