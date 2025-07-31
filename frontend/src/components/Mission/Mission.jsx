import React from 'react';
import style from './Mission.module.css';
import missionData from '../../data/missionData'; // Import the data

const Mission = () => {
  return (
    // Removed outer div with id="Mission" as it might conflict with HomePage id
    <div className={style.mission}> 
      <h2 className={style.intro}>
        {missionData.intro} {/* Use data */}
      </h2>

      <div className={style.info}>
        {missionData.sections.map((section) => (
          // Using <p> tag for 'what' and 'how' might cause invalid HTML (h3 inside p). 
          // Changed to divs for semantic correctness.
          <div key={section.id} className={style[section.id]}> {/* Use dynamic class if needed */}
            <h3 className={style.header}>{section.title}</h3>
            <p className='sectionBody'> {/* Assuming sectionBody is a global or defined class */}
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
    // Removed extra closing div below
  )
}



export default Mission
