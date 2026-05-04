import React from 'react';
import style from './VacationBanner.module.css';

const FLYER_SRC = '/vacation-stem-flyer.png';
const BECE_SRC  = '/BECE_Tech_immersion.png';

const VacationBanner = () => (
  <div className={style.banner}>
    {/* Left — copy */}
    <div className={style.bannerLeft}>
      <span className={style.label}>Upcoming — 18th May 2026</span>
      <h2 className={style.heading}>Vacation STEM Programme</h2>
      <p className={style.sub}>
        Designed for students just finishing BECE. Hands-on robotics, coding, and
        innovation. Limited spots.
      </p>
      <div className={style.priceRow}>
        <span className={style.priceOriginal}>GHC 450</span>
        <span className={style.priceDiscount}>GHC 405 for first 10</span>
      </div>
      <a
        href="https://gqr.sh/Tzvn"
        target="_blank"
        rel="noopener noreferrer"
        className={style.cta}
      >
        Register Now →
      </a>
    </div>

    {/* Right — stacked images */}
    <div className={style.bannerRight}>
      <div className={style.imageStack}>
        <img
          src={BECE_SRC}
          alt="BECE Tech Immersion Programme"
          className={`${style.flyer} ${style.flyerBack}`}
        />
        <img
          src={FLYER_SRC}
          alt="Vacation STEM Programme Flyer"
          className={`${style.flyer} ${style.flyerFront}`}
        />
      </div>
    </div>
  </div>
);

export default VacationBanner;
