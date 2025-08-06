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

import { useState, useEffect } from 'react';
import { getHeroImages } from '../../notion/heroService';

const HomeHero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const data = await getHeroImages();
        setSlides(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  if (loading) {
    return <div>Loading hero images...</div>;
  }

  if (error) {
    return <div>Error loading hero images: {error.message}</div>;
  }

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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
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
