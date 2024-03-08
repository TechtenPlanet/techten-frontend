import React from 'react'
import style from './TeamSection.module.css'
import teamImg from "./../../assets/images/img.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const TeamSection = () => {

    // Function to trim text to the specified maxLength
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
        } else {
            return text; // Return the original text if it's already maxLength or less
        }
    }

    return (
        <div className={style.teamSection}>
            <h3 className={style.intro}> <span></span> Students Teams <span></span> </h3>
            <div className={style.teamSectionWrapper}>
                <div className={style.teamCards}>
                    <Swiper
                    slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
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
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.teamCard}>
                                <h4>Team Name</h4>
                                <img src={teamImg} alt="partner" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TeamSection