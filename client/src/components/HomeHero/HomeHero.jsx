import React from 'react'
import style from './HomeHero.module.css'
import Navbar from './../Navbar/Navbar'
import { PiStudentThin } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaDonateSolid } from "react-icons/lia";

const HomeHero = () => {
  return (
    <div className={style.homeHero}>
        <Navbar />
        <div className={style.homeHeroWrapper}>
            <div className={style.heroTxt}>
            <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa hic saepe fugiat non quos sed repudiandae quidem facilis voluptatum. </h2>
            </div>
            <div className={style.items}>
                <div className={style.item}>
                <PiStudentThin className={style.itemIcon} />
                <h3>I am a student</h3>
                </div>
                <div className={style.item}>
                <IoSchoolOutline className={style.itemIcon} />
                <h3>I am a school</h3>
                </div>
                <div className={style.item}>
                <LiaDonateSolid className={style.itemIcon} />
                <h3>i want to donate</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero