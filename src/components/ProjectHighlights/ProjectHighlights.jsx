import React, { useState } from 'react';
import { FaThumbtack } from 'react-icons/fa';
import style from './ProjectHighlights.module.css';

const ProjectHighlights = ({ projects }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={style.projectHighlights}>
      <div className={style.container}>
        <h2 className={style.title}>
          <FaThumbtack className={style.pinIcon} /> Project Highlights
        </h2>
        <p className={style.subtitle}>Mini-Case Studies</p>
        
        <div className={style.tabsContainer}>
          <div className={style.tabs}>
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`${style.tabButton} ${activeTab === index ? style.activeTab : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          <div className={style.tabContent}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`${style.projectCard} ${activeTab === index ? style.activeCard : ''}`}
              >
                <div className={style.imageContainer}>
                  <img src={project.image} alt={project.title} className={style.projectImage} />
                </div>
                <div className={style.projectInfo}>
                  <h3 className={style.projectTitle}>{project.title}</h3>
                  <p className={style.projectDescription}>{project.description}</p>
                  {project.result && (
                    <p className={style.projectResult}><strong>Result:</strong> {project.result}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
