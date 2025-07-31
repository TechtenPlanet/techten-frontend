import React from 'react'
import style from './Banner3.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Banner3 = () => {
  return (
    <div className={style.banner3}>
        <div className={style.banner3Wrapper}>
            <h4 className={style.banner3Heading}>
            Are you a parent or a student that will need our services?
            </h4>
            <p className={style.banner3Txt}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quaerat. Fugiat consectetur facere harum quam minus, blanditiis consequuntur porro tempora maiores, a necessitatibus ut nulla sunt omnis sint illo. Ipsa?
            </p>
            <div className={style.banner3Btn}>
                 <PrimaryButton txt="Contact Us" />
            </div>
        </div>
    </div>
  )
}

export default Banner3