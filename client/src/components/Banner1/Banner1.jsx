import React from 'react'
import style from './Banner1.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Banner1 = () => {
  return (
    <div className={style.banner1}>
        <div className={style.banner1Wrapper}>
            <h4 className={style.banner1Heading}>
            Do you want to <span>PARTNER</span>  with us or <span>SPONSOR</span> us to reach a larger audience?
            </h4>
            <div className={style.banner1Btn}>
                <SecondaryButton txt="Partner" /> <PrimaryButton txt="sponsor" />
            </div>
        </div>
    </div>
  )
}

export default Banner1