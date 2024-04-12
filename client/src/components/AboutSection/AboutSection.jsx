import React from 'react'
import style from './AboutSection.module.css'
import img from './../../assets/images/techten_girl_robotics.png'
import PrimaryButton from './../PrimaryButton/PrimaryButton'

const AboutSection = () => {
  return (
    <div className={style.aboutSection}>
        <h4 className={style.intro}> </h4>
        <div className={style.aboutSectionWrapper}>
            <div className={style.aboutSectionImg}>
                <img src={img} alt="Techten Planet" />
            </div>
            <div className={style.aboutSectionTxt}>
                <h3 className={style.h3}>We are Filling the Gap in Practical Technology and Engineering Education </h3>
                <p className={style.aboutSectionTxt}><b>
                    We believe that every student has the potential to be a tech leader, 
                    and we're here to help them realize it. 
                    We're Techten Planet Ghana, and we're building a future where technology 
                    and engineering education is accessible, inclusive, and empowering for all.
                    </b>
                </p>
                <PrimaryButton txt="Learn more" />
            </div>
        </div>
    </div>
  )
}

export default AboutSection

