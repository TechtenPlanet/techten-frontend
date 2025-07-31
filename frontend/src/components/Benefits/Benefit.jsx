import React from 'react';
import style from './Benefit.module.css';
import benefitsData from '../../data/benefitsData'; // Import the data

const Benefit = () => {
  return (
    // Renamed id to match data structure if needed for scrolling, e.g., id="benefits"
    <div id="benefits" className={style.Benefit}> 
      <div className={style.miniTile}>
        <h2 className={style.header}>{benefitsData.header}</h2>
        <div className={style.miniWrapper}>
          {benefitsData.cards.map((card) => (
            <div key={card.id} className={style.card}>
              <h4 className={style.cardHeading}>{card.title}</h4>
              <p className={style.cardBrief}>{card.text}</p>
              <img 
                className={style.cardImg}
                alt={card.alt} // Use alt text from data
                src={card.image} // Use image from data
              />
            </div>
          ))}
            </div>
        </div>
    </div>
    // Removed extra closing div below
  )
}



export default Benefit
