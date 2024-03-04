import React from 'react'
import style from './ServicesSection.module.css'
import {Link} from 'react-router-dom'

const ServicesSection = () => {
  return (
    <div className={style.servicesSection}>
        <h4 className={style.intro}> <span></span> Services <span></span> </h4>
        <div className={style.servicesSectionWrapper}>
            <div className={style.servicesCards}>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                        Website Development
                    </h4>

                    <p className={style.serviceBrief}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur libero et! Amet perferendis expedita eligendi aliquid, neque cupiditate commodi quas architecto reprehenderit distinctio, error, debitis ipsum? Explicabo, delectus ut!...
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                        Website Development
                    </h4>

                    <p className={style.serviceBrief}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur libero et! Amet perferendis expedita eligendi aliquid, neque cupiditate commodi quas architecto reprehenderit distinctio, error, debitis ipsum? Explicabo, delectus ut!...
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                        Website Development
                    </h4>

                    <p className={style.serviceBrief}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur libero et! Amet perferendis expedita eligendi aliquid, neque cupiditate commodi quas architecto reprehenderit distinctio, error, debitis ipsum? Explicabo, delectus ut!...
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
                <div className={style.serviceCard}>
                    <h4 className={style.serviceName}>
                        Website Development
                    </h4>

                    <p className={style.serviceBrief}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur libero et! Amet perferendis expedita eligendi aliquid, neque cupiditate commodi quas architecto reprehenderit distinctio, error, debitis ipsum? Explicabo, delectus ut!...
                    </p>
                    <Link to="" className={style.serviceLink}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection