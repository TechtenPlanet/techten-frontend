import React from 'react'
import style from './EventsSection.module.css'

const EventsSection = () => {
  return (
    <div className={style.eventsSection}>
        <h3 className={style.intro}> <span></span> Events <span></span> </h3>
        <div className={style.eventsSectionWrapper}>
            <div className={style.eventCards}>
                <div className={style.eventCard}>
                    <div className={style.eventImg}></div>
                    <div className={style.eventTxt}></div>
                </div>
                <div className={style.eventCard}>
                    <div className={style.eventImg}></div>
                    <div className={style.eventTxt}></div>
                </div>
                <div className={style.eventCard}>
                    <div className={style.eventImg}></div>
                    <div className={style.eventTxt}></div>
                </div>
                <div className={style.eventCard}>
                    <div className={style.eventImg}></div>
                    <div className={style.eventTxt}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsSection