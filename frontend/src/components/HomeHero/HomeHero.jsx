import React, { useState, useEffect } from 'react';
import style from './HomeHero.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getHeroImages } from '../../notion/heroService';

const HomeHero = () => {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    getHeroImages()
      .then((data) => {
        if (data && data.length > 0) {
          setBgImage(data[0].image);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="HomeHero"
      className={style.homeHero}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className={style.heroOverlay} />
      <div className={style.homeHeroWrapper}>
        <div className={style.heroContent}>
          <p className={style.heroEyebrow}>Ghana's STEM Education Programme</p>
          <h1 className={style.heroTitle}>
            From Curious Kids to<br />Ghana's Next Tech Builders
          </h1>
          <p className={style.heroDescription}>
            We ship real hardware to your door, run hands-on missions online, and
            help our graduates land their first tech roles.
            For ages 6–22, across Ghana.
          </p>
          <div className={style.heroCTAGroup}>
            <Link to="/stem-squad" className={style.ctaButton}>
              Explore STEM Squad <FaArrowRight className={style.arrowIcon} />
            </Link>
            <Link to="/get-hired" className={style.ctaGhost}>
              Career Programme →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
