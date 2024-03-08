import React from 'react'
import style from './TestimonialSection.module.css'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const TestimonialSection = () => {

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
        <div className={style.testimonialSection}>
            <h3 className={style.intro}>  What People Say About Us </h3>
            <div className={style.testimonialSectionWrapper}>
                <div className={style.testimonialCards}>
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
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.testimonialCard}>
                                <div className={style.testimonialImg}></div>
                                <div className={style.testimonialTxt}>
                                    <p className={style.testimony}>
                                        {trimText(txt, 300)}
                                    </p>
                                    <h4> ~ Akwasi Oscar</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection