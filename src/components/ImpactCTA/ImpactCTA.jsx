import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';
import style from './ImpactCTA.module.css';

const ImpactCTA = () => {
  return (
    <div className={style.impactCTA}>
      <div className={style.container}>
        <div className={style.iconContainer}>
          <FaLightbulb className={style.icon} />
        </div>
        <h2 className={style.title}>Want to support this impact?</h2>
        <p className={style.description}>
          Your donation, partnership, or mentorship can directly change lives.
        </p>
        <div className={style.buttonContainer}>
          <Link to="/donate" className={style.button}>
            Donate Now <FaArrowRight className={style.arrowIcon} />
          </Link>
          <Link to="/mentor" className={style.button}>
            Become a Mentor <FaArrowRight className={style.arrowIcon} />
          </Link>
          <Link to="/sponsor" className={style.button}>
            Corporate Sponsor Info <FaArrowRight className={style.arrowIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImpactCTA;
