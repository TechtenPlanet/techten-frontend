import React from 'react'
import style from './Banner2.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Banner2 = () => {
  return (
    <div className={style.banner2}>
        <div className={style.banner2Wrapper}>
            <h4 className={style.banner2Heading}>
            Are you a school that will need our services?
            </h4>
            <p className={style.banner2Txt}>
            We provide your schools with cutting-edge materials used worldwide to assist your teachers in lesson planning about computational thinking, technical structures and design, energy transfer, social-emotional development, and verbal communication. 
            You Can Start Today </p>
            <div className={style.banner2Btn}>
                <PrimaryButton txt="Contact Us" />
            </div>
        </div>
    </div>
  )
}

export default Banner2