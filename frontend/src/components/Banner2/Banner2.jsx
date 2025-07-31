import React from 'react'
import style from './Banner2.module.css'
// import SecondaryButton from '../SecondaryButton/SecondaryButton' // Removed unused import
// import PrimaryButton from "../PrimaryButton/PrimaryButton" // Removed unused import

const Banner2 = () => {
  return (
    <div id="Banner2">
    <div className={style.banner2}>
        <div className={style.banner2Wrapper}>
            <h6 className={style.banner2Heading}>
            Lets talk, you can reach us by email, WhatsApp or Calling us. On workdays from 10:00 am to 6:00 pm
            </h6>
            <p className={style.banner2Txt}>
            - We support schools with well-thought through STEM Labs<br></br>
            - We offer industry-relevant STEM training for professionals and educators to stay ahead in their careers.<br></br>
            - Our STEM programs are designed to help students develop 21st-century skills and prepare them for the future.<br></br>
            - Our team have many years of industry experience and are passionate about STEM education.
            </p>

            <div className={style.banner2Btn}>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner2
