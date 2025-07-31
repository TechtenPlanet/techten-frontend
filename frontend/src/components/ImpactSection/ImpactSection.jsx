import React from 'react';
import style from './ImpactSection.module.css';
import impactData from '../../data/impactData'; // Import the data

const ImpactSection = () => {
  const { sectionTitle, sectionSubtitle, stats, successStory } = impactData; // Destructure

  return (
    <div id="impact" className={style.impactSection}>
      <div className="container">
        <h2 className={style.sectionTitle}>{sectionTitle}</h2>
        <p className={style.sectionSubtitle}>{sectionSubtitle}</p>
        
        <div className={style.statsContainer}>
          {stats.map((stat) => (
            <div key={stat.id} className={style.statItem}>
              <span className={style.statNumber}>{stat.value}</span>
              <span className={style.statLabel}>{stat.label}</span>
            </div>
          ))}
          </div> {/* Closing statsContainer div */}
        {/* Moved the closing container div after the successStory section */}

        {/* Optional: Add a success story section - Render conditionally */}
        {successStory && (
          <div className={style.successStory}>
            <h3>{successStory.heading}</h3>
            {successStory.image && <img src={successStory.image} alt={successStory.name} className={style.storyImage} />}
            <blockquote className={style.storyQuote}>
              "{successStory.quote}"
            </blockquote>
            <p className={style.storyName}>- {successStory.name}</p>
          </div>
        )}
      
      </div> {/* Closing container div */}
    </div> 
  );
};

export default ImpactSection;
