
import React from 'react'
import style from './OtherPagesHero.module.css'
import Navbar from './../Navbar/Navbar'

const OtherPagesHero = ({heading}) => {
  return (
    <div className={style.otherPagesHero}>
        <Navbar />
        <div className={style.otherPagesHeroWrapper}>
            <h2>{heading}</h2>
        </div>
    </div>
  )
}

export default OtherPagesHero