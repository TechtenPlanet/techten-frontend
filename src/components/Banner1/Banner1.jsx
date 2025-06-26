import React from 'react'
import style from './Banner1.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
// import PrimaryButton from "../PrimaryButton/PrimaryButton" // Removed unused import
import { Link as ScrollLink } from 'react-scroll'

const Banner1 = () => {
  return (
    <div id="Banner1">
    <div className={style.banner1}>
        <div className={style.banner1Wrapper}>
            <h4 className={style.banner1Heading}>
            Become a <span>PARTNER</span> or <span>DONATE</span> to support our mission.
            You can help us make a difference in the lives of the next generation of Ghanaian youth.
            </h4>
            <div className={style.banner1Btn}>
                <ScrollLink to="ContactUsContent"> <SecondaryButton txt="Partner With Us" /></ScrollLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner1
