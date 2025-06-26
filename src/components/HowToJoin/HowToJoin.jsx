import React from 'react';
import style from './HowToJoin.module.css';

const HowToJoin = () => {
    return (
        <div className={style.howToJoin}>
            <div className={style.container}>
                <h2 className={style.sectionTitle}>How to Join</h2>
                <div className={style.content}>
                    <div className={style.iconContainer}>
                        <div className={style.icon}>🎓</div>
                    </div>
                    <h3 className={style.title}>Interested in joining a program?</h3>
                    <p className={style.description}>
                        We run new sessions every 3–6 months. Applications are open to students 
                        aged 14–24 with an interest in tech, engineering, or problem-solving.
                    </p>
                    <div className={style.buttonContainer}>
                        <a href="/enrollment" className={style.button}>Apply Now</a>
                        <a href="/contact?type=referral" className={style.button}>Refer a School or Student</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToJoin;
