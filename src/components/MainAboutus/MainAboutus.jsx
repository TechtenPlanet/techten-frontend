import React from 'react'
import style from './MainAboutus.module.css'
import img from './../../assets/images/students_at_techten.jpeg'

const MainAboutus = () => {
  return (
    <div className={style.mainAboutus}>
    <div className={style.mainAboutusWrapper}>
        <div className={style.mainAboutusImg}>
            <img src={img} alt="Students in a community session" />
        </div>
        <div className={style.mainAboutusTxt}>
            <h3>Our Story</h3>
            
            <div className={style.storySection}>
                <h4>Vision</h4>
                <p>
                Our vision is to organize and enhance part of Ghana's technology and engineering 
                talent pool, making it highly skilled, competitive, and globally accessible. 
                </p>
            </div>
            
            <div className={style.storySection}>
                <h4>Mission</h4>
                <p>
                    To provide hands-on, affordable, and locally-relevant training in 
                    technology and engineering for students in Ghana.To bridge the gap between education and 
                    employment by providing hands-on, practical STEM training and connecting students 
                    with local and international job opportunities.

                </p>
            </div>
            
            <div className={style.storySection}>
                <h4>Our Origin</h4>
                <p>
                Techten Planet was founded in 2021 by Oscar Yaw Asamoah, a Ghanaian-born engineer 
                and social entrepreneur based in Belgium. Inspired by Africa’s rising population and 
                the urgent need for future-ready skills, Oscar and his co-founder Emmanuel Oppong 
                launched Techten to empower Ghanaian youth through hands-on training in technology and engineering.
                Built from the ground up with the support of diaspora partners and early donors, 
                Techten has become a growing force in STEM education. Despite challenges, 
                we remain committed to our mission: preparing a new generation of innovators who 
                will lead Ghana and Africa into a more sustainable, tech-driven future.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainAboutus
