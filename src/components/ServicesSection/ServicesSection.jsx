import React from 'react'
import style from './ServicesSection.module.css'
import {Link} from 'react-router-dom'


const ServicesSection = () => {
  return (
    <div id="ServicesSection">
    <div className={style.servicesSection}>
        <section class="us_section layout_padding" className={style.us_section}>
            <div class="container" className={style.container}>
                <div class="heading_container" className={style.heading_container}>
                    <h2 className={style.h2}>
                        Why Choose Us
                    </h2>
                </div>

                <div class="us_container " className={style.us_container}>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="box">
                                <div class="img-box">
                                    <img src="images/u-1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5 className={style.serviceTitle}>
                                    Hands-On Tech Centers Across Ghana For Students 
                                    </h5>
                                    <p>
                                    At TP STEM Education, we are dedicated to advancing STEM education in Ghana through a comprehensive range of high-quality educational resources and training programs. Our center is committed to fostering innovation and excellence in technology and engineering.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="box">
                                <div class="img-box">
                                    <img src="images/u-4.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5 className={style.serviceTitle}>
                                    Supporting Local Schools To Set Up ICT/STEM Labs
                                    </h5>
                                    <p>
                                        We specialize in helping schools establish affordable computer labs using single-board computers, enabling students to delve into coding and computer science. Our end-to-end solution includes lab setup, curriculum support, and training for STEM, Coding, and AI programs
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6">
                            <div class="box">
                                <div class="img-box">
                                    <img src="images/u-3.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5 className={style.serviceTitle}>
                                        Training And Developing The Next-Gen Software Engineers
                                    </h5>
                                    <p>
                                        We aim to narrow the technical skills gap in Africa by offering 
                                        facilities for hands-on training, allowing young people to experiment 
                                        with advanced problem-solving tools and technological frameworks. In Ghana, 
                                        we provide such facilities, empowering youth to explore and prepare for future careers in technology. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
 /*{
   <div className={style.servicesSection}>
        <h4 className={style.intro}> <span></span> Our Approach <span></span> </h4>
        <div className={style.servicesSectionWrapper}>
            <div className={style.servicesCards}>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                    Hands-On Tech Centers Across Ghana For Students 
                    </h4>

                    <p className={style.serviceBrief}>
                    At TP STEM Education, we are dedicated to advancing STEM education in Ghana through a comprehensive range of high-quality educational resources and training programs. Our center is committed to fostering innovation and excellence in technology and engineering.
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                    Supporting Local Schools To Set Up ICT/STEM Labs
                    </h4>

                    <p className={style.serviceBrief}>
                    We specialize in helping schools establish affordable computer labs using single-board computers, enabling students to delve into coding and computer science. Our end-to-end solution includes lab setup, curriculum support, and training for STEM, Coding, and AI programs
                   
                    
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                    Training And Developing The Next-Gen Software Engineers
                    </h4>

                    <p className={style.serviceBrief}>
                    We aim to narrow the technical skills gap in Africa by offering 
                    facilities for hands-on training, allowing young people to experiment 
                    with advanced problem-solving tools and technological frameworks. In Ghana, 
                    we provide such facilities, empowering youth to explore and prepare for future careers in technology.                
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
            </div>
        </div>
    </div> */
   
  )
}

export default ServicesSection