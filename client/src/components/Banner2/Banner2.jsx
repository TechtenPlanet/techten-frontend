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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium neque rerum blanditiis distinctio quae adipisci quidem reiciendis sunt recusandae debitis libero eaque nobis ipsa repellat esse quia ratione, excepturi explicabo?
            </p>
            <div className={style.banner2Btn}>
                <PrimaryButton txt="Contact Us" />
            </div>
        </div>
    </div>
  )
}

export default Banner2