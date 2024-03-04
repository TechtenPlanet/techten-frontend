import React from 'react'
import style from './AboutSection.module.css'
import img from './../../assets/images/img.jpg'
import PrimaryButton from './../PrimaryButton/PrimaryButton'

const AboutSection = () => {
  return (
    <div className={style.aboutSection}>
        <h4 className={style.intro}> <span></span> About Us <span></span> </h4>
        <div className={style.aboutSectionWrapper}>
            <div className={style.aboutSectionImg}>
                <img src={img} alt="profile" />
            </div>
            <div className={style.aboutSectionTxt}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae aliquam amet molestiae </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
                    lorem
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
                    lorem
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
                </p>
                <PrimaryButton txt="know more" />
            </div>
        </div>
    </div>
  )
}

export default AboutSection