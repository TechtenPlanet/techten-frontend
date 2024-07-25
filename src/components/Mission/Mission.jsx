import React from 'react'
import style from './Mission.module.css'
import { Button, Collapse, Alert } from 'reactstrap'



const Mission = () => {
  return (
    <div id="Mission">
    <div className={style.mission}>
      <h2 className={style.intro}>
        Get to Know Us
      </h2>

      <div className={style.info}>
        <div className={style.Who}>
          <h3 className={style.header}>Who We Are :</h3>
          <p className='sectionBody'>
          We are a team of passionate educators, engineers, and technologists who are dedicated to providing hands-on technology and engineering education to the next generation of Ghanaian youth.
          </p>
        </div>

        <p className={style.What}>
          <h3 className={style.header}>What We Do :</h3>
          We provide technology and engineering in STEM education in Ghana through high-quality educational materials and training. Our center offers hardware and software programs, after-school programs, summer camps, and teacher training workshops. We support students in STEM through mentorship and internships.
        </p>

        <p className={style.How}>
          <h3 className={style.header}>How We Do It :</h3>
          TP STEM Education equips students, teachers, and schools with the latest technology and tools to teach project-based courses in STEM. Learn at our center or with your school to enhance your skills and knowledge.
        </p>
      </div>
    </div>
    </div>
  )
}



export default Mission