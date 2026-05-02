import React from 'react';
import style from './VacationBanner.module.css';

// Place the flyer image at: frontend/public/vacation-stem-flyer.jpg
const FLYER_SRC = '/vacation-stem-flyer.png';

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

    {/* Right — flyer image */}
    <div className={style.bannerRight}>
      <img
        src={FLYER_SRC}
        alt="Vacation STEM Programme Flyer"
        className={style.flyer}
      />
    </div>
  </div>
);

export default VacationBanner;
