import React from 'react';
import style from './HomeHero.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import HeroImage1 from '../../assets/images/Hero_image.HEIC';
import HeroImage2 from '../../assets/images/img.jpg';
import HeroImage3 from '../../assets/images/techten_hero_image_color.png';
import HeroImage4 from '../../assets/images/techten_hero_image.png';

const HomeHero = () => {
  const slides = [
    {
      image: HeroImage1,
      alt: 'Students learning to code at Techten Planet',
      title: 'Empowering Africa’s Future Innovators',
      description: 'We are organizing and enhance part of Ghana\'s technology and engineering talent pool, making it highly skilled, competitive, and globally accessible.',
    },
    {
      image: HeroImage2,
      alt: 'A group of students at a Techten Planet event',
      title: 'Building a Community of Innovators',
      description: 'Join our vibrant community and collaborate with like-minded individuals to create a better future.',
    },
    {
      image: HeroImage3,
      alt: 'Techten Planet hero image',
      title: 'Innovative Solutions for a Brighter Future',
      description: 'We are committed to providing innovative solutions to the challenges facing our community.',
    },
    {
      image: HeroImage4,
      alt: 'Techten Planet hero image',
      title: 'Join Us in Our Mission to Empower Africa',
      description: 'Your support can help us make a difference in the lives of young innovators across the continent.',
    },
  ];

  return (
    <div id="HomeHero">
      <div className={style.homeHero}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={style.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.alt} className={style.heroImage} />
              <div className={style.homeHeroWrapper}>
                <div className={style.heroContent}>
                  <h1 className={style.heroTitle}>
                    {slide.title}
                  </h1>
                  <p className={style.heroDescription}>
                    {slide.description}
                  </p>
                  <Link
                    to="/get-involved"
                    className={style.ctaButton}
                  >
                    Let's Talk <FaArrowRight className={style.arrowIcon} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHero;
