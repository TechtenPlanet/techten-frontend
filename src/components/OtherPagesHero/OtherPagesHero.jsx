import React from 'react';
import style from './OtherPagesHero.module.css';

const OtherPagesHero = ({ heading, text }) => {
  return (
    <div className={style.otherPagesHero}>
      <div className={style.otherPagesHeroWrapper}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default OtherPagesHero;
