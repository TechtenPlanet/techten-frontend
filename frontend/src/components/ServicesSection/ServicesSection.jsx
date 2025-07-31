import React from 'react';
import style from './ServicesSection.module.css';
import servicesData from '../../data/servicesData'; // Import the data

const ServicesSection = () => {
  return (
    // Assuming the id should be "services" for scrolling
    <div id="services"> 
      <div className={style.servicesSection}>
        {/* Using class names directly from module */}
        <section className={`${style.us_section} ${style.layout_padding}`}> 
          <div className={style.container}>
            <div className={style.heading_container}>
              <h2 className={style.h2}>
                {servicesData.heading} {/* Use data */}
              </h2>
            </div>

            <div className={style.us_container}>
              {/* Assuming Bootstrap grid classes are available globally or via CSS */}
              <div className="row"> 
                {servicesData.services.map((service) => (
                  <div key={service.id} className="col-lg-4 col-md-6">
                    <div className={style.box}>
                      <div className={style.img_box}>
                        {/* Use root-relative path for images assumed to be in public */}
                        <img src={`/${service.image}`} alt={service.title} /> 
                      </div>
                      <div className={style.detail_box}>
                        <h5 className={style.serviceTitle}>
                          {service.title} {/* Use data */}
                        </h5>
                        <p>
                          {service.text} {/* Use data */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
