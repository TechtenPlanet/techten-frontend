import React from 'react'
import style from './Banner4.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Banner4 = () => {
  return (
    <div className={style.banner4}>
        <div className={style.banner4Wrapper}>
            <h4 className={style.banner4Heading}>
            Partner with us today to help reach a larger audience
            </h4>
            <div className={style.banner4Btn}>
            <PrimaryButton txt="Partner with Us" />
            </div>
        </div>
    </div>
  )
}

export default Banner4