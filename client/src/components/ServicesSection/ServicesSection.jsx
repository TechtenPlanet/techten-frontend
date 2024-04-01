import React from 'react';
import style from '../MainServices/MainServices.module.css';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    const services = [
        { id: '1', name: 'Website Development', imageUrl: 'https://th.bing.com/th?id=OIP.qyHgF2j7tmHsEF3u3qL_KwHaDJ&w=350&h=148&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '2', name: 'Mobile App Development', imageUrl: 'https://th.bing.com/th?id=OIP.O4b29g448P1Js7pElwG6-AHaFC&w=303&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '3', name: 'SEO Services', imageUrl: 'https://th.bing.com/th?id=OIP.uryG9iC8lWBkH5ZjoDqVzgAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '4', name: 'Digital Marketing', imageUrl: 'https://th.bing.com/th?id=OIP.aMgjNHPA1MMfC_ryGHmofAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    ];
    
    return (
        <div className={style.mainServices}>
          <div className={style.mainServicesWrapper}>
            <div className={style.servicesCards}>
              {services.map((service, index) => (
                 <div key={index} className={style.serviceCard}>
                 <img src={service.imageUrl} alt={service.name} className={style.serviceImage} />
                 <h4 className={style.serviceName}>{service.name}</h4>
                 <p className={style.serviceBrief}>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur libero et! Amet perferendis expedita eligendi aliquid, neque cupiditate commodi quas architecto reprehenderit distinctio, error, debitis ipsum? Explicabo, delectus ut!...
                 </p>
                 <Link to={`./service/${service.id}`} className={style.serviceLink}>Read More</Link>
             </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default ServicesSection;
