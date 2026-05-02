import React from 'react';
import { Link } from 'react-router-dom';
import style from './InternshipBanner.module.css';

const InternshipBanner = () => {
  return (
    <section className={style.careerBridge}>
      <div className={style.container}>
        <div className={style.careerBridgeInner}>
          <div className={style.careerBridgeText}>
            <p className={style.eyebrow}>New in 2025</p>
            <h2 className={style.title}>Techten Career Programme</h2>
            <p className={style.description}>
              Completed a course? Ready for a real role? We now match our best
              graduates with paying internships — and help them convert to full-time
              employment. No upfront cost. We only earn when you do.
            </p>
            <Link to="/get-hired" className={style.ctaButton}>
              Learn How It Works
            </Link>
          </div>
          <div className={style.careerBridgeStats}>
            <div className={style.stat}>
              <span className={style.statN}>3 months</span>
              <span className={style.statLabel}>Supported internship duration</span>
            </div>
            <div className={style.stat}>
              <span className={style.statN}>5 spots</span>
              <span className={style.statLabel}>First cohort — limited intake</span>
            </div>
            <div className={style.stat}>
              <span className={style.statN}>0 upfront</span>
              <span className={style.statLabel}>You pay nothing until you're hired</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipBanner;
