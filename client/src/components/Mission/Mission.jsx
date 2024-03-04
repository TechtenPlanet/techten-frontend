import React from 'react'
import style from './Mission.module.css'

const Mission = () => {
  return (
    <div className={style.mission}>
        <div className={style.missionWrapper}>
            <div className={style.card}>
                <h4 className={style.cardHeading}>Mission</h4>
                <p className={style.cardBrief}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab eum dolor quisquam eaque at nemo accusamus, reiciendis repudiandae! Deleniti ad expedita et omnis excepturi dolorem autem similique quas sed.</p>
            </div>
            <div className={style.card}>
                <h4 className={style.cardHeading}>Vision</h4>
                <p className={style.cardBrief}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab eum dolor quisquam eaque at nemo accusamus, reiciendis repudiandae! Deleniti ad expedita et omnis excepturi dolorem autem similique quas sed.</p>
            </div>
            <div className={style.card}>
                <h4 className={style.cardHeading}>Objectives</h4>
                <p className={style.cardBrief}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab eum dolor quisquam eaque at nemo accusamus, reiciendis repudiandae! Deleniti ad expedita et omnis excepturi dolorem autem similique quas sed.</p>
            </div>
        </div>
    </div>
  )
}

export default Mission