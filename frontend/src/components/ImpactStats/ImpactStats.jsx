import React from 'react';
import { Link } from 'react-router-dom';
import style from './ImpactStats.module.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ImpactStats = () => {
  const stats = [
    { metric: 'Students & teachers reached outside Accra', value: '200+' },
    { metric: 'Hours of hands-on learning provided', value: '2190+' },
    /*{ metric: 'Financial investment in communities', value: '$100,000+' }*/
    { metric: 'Donations spent directly on programs', value: '100%' },
    /*{ metric: 'Social value generated', value: 'Over €60,000 in 2023' },*/
    { metric: 'Partnerships with STEM orgs', value: 'National & regional' },
  ];

  return (
    <div className={style.impactStats}>
      <h2>Our impact (2023–2024)</h2>
      <div className={style.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={style.stat}>
            <p className={style.value}>{stat.value}</p>
            <p className={style.metric}>{stat.metric}</p>
          </div>
        ))}
      </div>
      <div className={style.learnMoreContainer}>
        <Link to="/impact">
          <PrimaryButton txt="Learn More About Our Impact" />
        </Link>
      </div>
    </div>
  );
};

export default ImpactStats;
