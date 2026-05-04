import React from 'react';
import style from './VacationBanner.module.css';

const BECE_SRC = '/BECE_Tech_immersion.png';

const VacationBanner = () => (
  <div className={style.banner}>
    {/* Top row — copy */}
    <div className={style.bannerTop}>
      <div className={style.bannerLeft}>
        <span className={style.label}>Upcoming — 18th May 2026</span>
        <h2 className={style.heading}>Vacation STEM Programme</h2>
        <p className={style.sub}>
          Designed for students just finishing BECE. Hands-on robotics, coding, and
          innovation. Limited spots.
        </p>
        <div className={style.priceRow}>
          <span className={style.priceOriginal}>GHC 250/w</span>
          <span className={style.priceDiscount}>GHC 225/w — 10% off for first 10</span>
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
    </div>

    {/* Bottom row — BECE flyer at full readable size */}
    <div className={style.bannerImageRow}>
      <img
        src={BECE_SRC}
        alt="BECE Tech Immersion Programme details"
        className={style.flyer}
      />
    </div>
  </div>
);

export default VacationBanner;
