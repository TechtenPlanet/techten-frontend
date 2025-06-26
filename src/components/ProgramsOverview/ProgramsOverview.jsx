import React from 'react';
import style from './ProgramsOverview.module.css';
import { programsOverview } from '../../data/programdata';

const ProgramsOverview = () => {
    const IconComponent = programsOverview.icon;
    
    return (
        <div className={style.programsOverview}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.imageContainer}>
                        <img src={programsOverview.image} alt="Students learning coding at Techten Planet" />
                    </div>
                    <div className={style.textContent}>
                        <h2 className={style.title}>
                            <IconComponent className={style.icon} /> {programsOverview.title}
                        </h2>
                        <p className={style.description}>
                            {programsOverview.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsOverview;
