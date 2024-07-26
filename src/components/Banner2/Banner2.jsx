import React from 'react'
import style from './Banner2.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Banner2 = () => {
  return (
    <div id="Banner2">
    <div className={style.banner2}>
        <div className={style.banner2Wrapper}>
            <h4 className={style.banner2Heading}>
            Are you a school that will need our services?
            Are you a parent or a student that will need our services?
            </h4>
            <p className={style.banner2Txt}>
            Lets talk, you can reach us by email, WhatsApp or Calling us. On workdays from 10:00 am to 6:00 pms</p>
            <div className={style.banner2Btn}>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner2