import React from 'react'
import style from './BlogSection.module.css'
import { FaCalendarAlt, FaRegCalendar, FaRegClock, FaRegUser, FaUser, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const BlogsSection = () => {

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
        <div className={style.blogsSection}>
            <h3 className={style.intro}> <span></span> Lates Blogs <span></span> </h3>
            <div className={style.blogsSectionWrapper}>
                <div className={style.blogCards}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 1,
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
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
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
                            <div className={style.blogCard}>
                                <div className={style.blogImg}></div>
                                <div className={style.blogTxt}>
                                    <div className={style.aboutBlog}>
                                        <p className={style.blogLocation}>
                                            <FaRegUser className={style.blogIcon} />
                                            Achimota
                                        </p>
                                        <p className={style.blogTime}>
                                            <FaRegCalendar className={style.blogIcon} />
                                            12: 50 Am
                                        </p>
                                    </div>
                                    <h4 className={style.blogHeading}>
                                        AI summit
                                    </h4>

                                    <p className={style.blogBrief}>
                                        {trimText(txt, 80)}
                                    </p>

                                    <Link className={style.blogLink} to=""> Read More </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.blogCard}>
                                <div className={style.blogImg}></div>
                                <div className={style.blogTxt}>
                                    <div className={style.aboutBlog}>
                                        <p className={style.blogLocation}>
                                            <FaRegUser className={style.blogIcon} />
                                            Achimota
                                        </p>
                                        <p className={style.blogTime}>
                                            <FaRegCalendar className={style.blogIcon} />
                                            12: 50 Am
                                        </p>
                                    </div>
                                    <h4 className={style.blogHeading}>
                                        AI summit
                                    </h4>

                                    <p className={style.blogBrief}>
                                        {trimText(txt, 80)}
                                    </p>

                                    <Link className={style.blogLink} to=""> Read More </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.blogCard}>
                                <div className={style.blogImg}></div>
                                <div className={style.blogTxt}>
                                    <div className={style.aboutBlog}>
                                        <p className={style.blogLocation}>
                                            <FaRegUser className={style.blogIcon} />
                                            Achimota
                                        </p>
                                        <p className={style.eventTime}>
                                            <FaRegCalendar className={style.blogIcon} />
                                            12: 50 Am
                                        </p>
                                    </div>
                                    <h4 className={style.blogHeading}>
                                        AI summit
                                    </h4>

                                    <p className={style.blogBrief}>
                                        {trimText(txt, 80)}
                                    </p>

                                    <Link className={style.blogLink} to=""> Read More </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.blogCard}>
                                <div className={style.blogImg}></div>
                                <div className={style.blogTxt}>
                                    <div className={style.aboutBlog}>
                                        <p className={style.blogLocation}>
                                            <FaRegUser className={style.blogIcon} />
                                            Achimota
                                        </p>
                                        <p className={style.blogTime}>
                                            <FaRegCalendar className={style.blogIcon} />
                                            12: 50 Am
                                        </p>
                                    </div>
                                    <h4 className={style.blogHeading}>
                                        AI summit
                                    </h4>

                                    <p className={style.blogBrief}>
                                        {trimText(txt, 80)}
                                    </p>

                                    <Link className={style.blogLink} to=""> Read More </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className={style.blogCard}>
                                <div className={style.blogImg}></div>
                                <div className={style.blogTxt}>
                                    <div className={style.aboutBlog}>
                                        <p className={style.blogLocation}>
                                            <FaRegUser className={style.blogIcon} />
                                            Achimota
                                        </p>
                                        <p className={style.blogTime}>
                                            <FaRegCalendar className={style.blogIcon} />
                                            12: 50 Am
                                        </p>
                                    </div>
                                    <h4 className={style.blogHeading}>
                                        AI summit
                                    </h4>

                                    <p className={style.blogBrief}>
                                        {trimText(txt, 80)}
                                    </p>

                                    <Link className={style.blogLink} to=""> Read More </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BlogsSection