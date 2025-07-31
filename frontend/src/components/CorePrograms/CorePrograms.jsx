import React from 'react';
import style from './CorePrograms.module.css';
import { corePrograms } from '../../data/programdata';
import { Link } from 'react-router-dom';

const CorePrograms = () => {
    return (
        <div className={style.corePrograms}>
            <div className={style.container}>
                <h2 className={style.sectionTitle}>Core Programs</h2>
                <div className={style.programsGrid}>
                    {corePrograms.map((program) => {
                        const IconComponent = program.icon;
                        return (
                            <div key={program.id} className={style.programCard}>
                                <div className={style.imageContainer}>
                                    <img src={program.image} alt={program.title} />
                                </div>
                                <div className={style.cardContent}>
                                    <h3 className={style.programTitle}>
                                        <IconComponent className={style.icon} /> {program.title}
                                    </h3>
                                    <p className={style.programDescription}>
                                        {program.description}
                                    </p>
                                    <Link to={program.buttonLink} className={style.programButton}>
                                        {program.buttonText}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CorePrograms;
