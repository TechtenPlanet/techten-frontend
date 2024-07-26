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
                <h3 className={style.h3}>Narrow The Gap</h3>
                <blockquote className={style.blockquote}>
                    <blockquote className={style.outblockquote}>
                        We believe that every student has the potential to be a tech leader, 
                        and we're here to help them realize it. 
                        We're Techten Planet Ghana, and we're building a future where technology 
                        and engineering education is accessible, inclusive, and empowering for all.
                        <span>O. Yaw Asamoah, <br></br><em>- Founder -</em></span>
                    </blockquote>
                </blockquote>
            </div>
        </div>
    </div>
  )
}

export default AboutSection

