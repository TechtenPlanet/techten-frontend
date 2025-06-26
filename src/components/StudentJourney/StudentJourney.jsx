import React from 'react';
import style from './StudentJourney.module.css';
import { FaLaptopCode, FaTools, FaTrophy, FaRocket } from 'react-icons/fa';

const StudentJourney = () => {
    const journeySteps = [
        {
            id: 1,
            title: "Join a Code Club",
            icon: FaLaptopCode,
            description: "Start your tech journey by joining one of our code clubs or tech labs."
        },
        {
            id: 2,
            title: "Build a Real-World Project",
            icon: FaTools,
            description: "Apply your skills to solve actual problems through our Project That Matters program."
        },
        {
            id: 3,
            title: "Join a Hackathon",
            icon: FaTrophy,
            description: "Test your abilities and collaborate with others in our innovation challenges."
        },
        {
            id: 4,
            title: "Secure an Internship or Remote Job",
            icon: FaRocket,
            description: "Launch your career with our job placement and internship opportunities."
        }
    ];

    return (
        <div className={style.studentJourney}>
            <div className={style.container}>
                <h2 className={style.sectionTitle}>Your Tech Journey</h2>
                <div className={style.timeline}>
                    <div className={style.pulseLine}></div>
                    {journeySteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={step.id} className={`${style.journeyStep} ${index % 2 === 0 ? style.stepTop : style.stepBottom}`}>
                                <div className={style.stepContent}>
                                    <div className={style.stepIcon}>
                                        <IconComponent />
                                    </div>
                                    <h3 className={style.stepTitle}>{step.title}</h3>
                                    <p className={style.stepDescription}>{step.description}</p>
                                </div>
                                <div className={style.stepPoint}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StudentJourney;
