import React from 'react';
import style from './ImpactGrid.module.css';

const ImpactGrid = ({ data }) => {
  return (
    <div className={style.impactGrid}>
      <h2 className={style.title}>Impact by the Numbers</h2>
      <div className={style.gridContainer}>
        {data.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={style.gridItem}>
              <div className={style.iconContainer}>
                <IconComponent className={style.icon} />
              </div>
              <div className={style.value}>{item.value}</div>
              <div className={style.label}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactGrid;
