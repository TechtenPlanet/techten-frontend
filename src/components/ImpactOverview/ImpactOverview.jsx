import React from 'react';
import style from './ImpactOverview.module.css';

const ImpactOverview = ({ data }) => {
  return (
    <div className={style.impactOverview}>
      <div className={style.contentContainer}>
        <h2 className={style.title}>What we have achieved so far</h2>
        <p className={style.description}>{data.description}</p>
      </div>
      <div className={style.imageContainer}>
        <img 
          src={data.image} 
          alt="Students presenting project" 
          className={style.heroImage} 
        />
      </div>
    </div>
  );
};

export default ImpactOverview;
