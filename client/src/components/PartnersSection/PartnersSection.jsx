import React from 'react'
import style from './PartnersSection.module.css'
import partner from "./../../assets/images/logo.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const PartnersSection = () => {

    // Function to trim text to the specified maxLength
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
        } else {
            return text; // Return the original text if it's already maxLength or less
        }
    }

    const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sit beatae, eum voluptatem ut obcaecati minima vel sapiente iste quam aliquam omnis eveniet fugiat fuga ullam quas perferendis doloribus aspernatur."
    return (
        <div className={style.partnersSection}>
            <h3 className={style.intro}> <span></span> Partners & Sponsors <span></span> </h3>
            <div className={style.partnersSectionWrapper}>
                <div className={style.partnerCards}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className={style.mySwiper}
                    >
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.partnerCard}>
                                <img src={partner} alt="partner" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PartnersSection