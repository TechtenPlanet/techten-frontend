import React from 'react';
import { Link } from 'react-router-dom';
import style from './TestimonialSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import testimonialsData from '../../data/testimonialsData';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const TestimonialSection = () => {
  return (
    <div className={style.testimonialSection}>
      <h2 className={style.heading}>What People Say About Us</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={style.mySwiper}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={style.testimonialCard}>
              <div className={style.testimonialImgContainer}>
                <img
                  src={testimonial.image || '/logo192.png'}
                  alt={testimonial.author}
                  className={style.testimonialImg}
                />
              </div>
              <div className={style.testimonialContent}>
                <p className={style.testimony}>"{testimonial.text}"</p>
                <h4 className={style.testimonialAuthor}>- {testimonial.author}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className={style.seeMoreContainer}>
        <Link to="/about">
          <PrimaryButton txt="See More Testimonials" />
        </Link>
      </div> */}
    </div>
  );
};

export default TestimonialSection;
