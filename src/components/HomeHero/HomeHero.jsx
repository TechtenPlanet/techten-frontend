import React from 'react'
import style from './HomeHero.module.css'
import Navbar from './../Navbar/Navbar'
import { PiStudentThin } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaDonateSolid } from "react-icons/lia";
import { Link as ScrollLink } from 'react-scroll'

import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <div id="HomeHero">
    <div className={style.homeHero}>
        <Navbar />
        <div className={style.homeHeroWrapper}>
            <div className={style.heroTxt}>
            <h2> WE'RE GIVING YOUNG PEOPLE IN GHANA AN OPPORTUNITY TO GET TANGIBLE EMPLOYABLE SKILLS IN TECHNOLOGY AND ENGINEERING. </h2>
            </div>
            <div className={style.items}>
              {/* <div className={style.itemIntro}>
                <h3>Tell us who you are</h3>
              </div>  */}
                <div className={style.item}>
                  <PiStudentThin className={style.itemIcon} />
                  <h3><ScrollLink to="ContactUsContent" smooth={true}>I'm a Student</ScrollLink></h3>
                </div>
                <div className={style.item}>
                <IoSchoolOutline className={style.itemIcon} />
                <h3><ScrollLink to="ContactUsContent" smooth={true}>I'm a School</ScrollLink></h3>
                </div>
                <div className={style.item}>
                <LiaDonateSolid className={style.itemIcon} />
                <h3><ScrollLink to="ContactUsContent" smooth={true} >I'm a Donor</ScrollLink></h3>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeHero