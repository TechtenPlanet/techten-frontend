import React from 'react';
import style from './PartnersCollaborators.module.css';
import partnersData from '../../data/partnersData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const PartnersCollaborators = () => {
    return (
        <div className={style.partnersCollaborators}>
            <h2 className={style.sectionTitle}>Partners & Collaborators</h2>
            
            <div className={style.content}>
                <div className={style.textSection}>
                    <h3 className={style.subtitle}>🤝 We proudly work with:</h3>
                    <p className={style.description}>
                        Our partners help us provide learning materials, host labs, sponsor events, and co-develop curriculum.
                    </p>
                    <button className={style.partnerButton}>Partner With Us</button>
                </div>
                
                <div className={style.logoSection}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className={style.logoSwiper}
                    >
                        {partnersData.partners.map((partner) => (
                            <SwiperSlide key={partner.id} className={style.logoSlide}>
                                <div className={style.logoCard}>
                                    <img src={partner.image} alt={partner.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PartnersCollaborators;
