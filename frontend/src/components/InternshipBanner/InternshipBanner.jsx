import React from 'react';
import style from './InternshipBanner.module.css';
import { FaCheckCircle, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import internshipImage from '../../assets/images/courses_images/TechtenPlanet_internship.jpeg';

const InternshipBanner = () => {
  const benefits = [
    "Gain hands-on experience with real STEM projects",
    "Build skills in programming, hardware, and innovation", 
    "Grow your career opportunities in STEM"
  ];

  const handleApplyClick = () => {
    window.open('https://forms.gle/TyiCZ7XfELfeQneA8', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={style.internshipBanner}>
      <div className={style.container}>
        <div className={style.imageSection}>
          <img 
            src={internshipImage} 
            alt="TechTen Planet Internship Program" 
            className={style.internshipImage}
          />
        </div>
        
        <div className={style.contentSection}>
          <div className={style.header}>
            <h2 className={style.title}>Internship Opportunity</h2>
            <p className={style.subtitle}>
              Are you ready to gain hands-on experience and grow professionally? 
              Join our Internship Program 2025 and explore your potential in a dynamic work environment!
            </p>
          </div>

          <div className={style.benefits}>
            <h3 className={style.benefitsTitle}>Why Choose Us</h3>
            <ul className={style.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={style.benefitItem}>
                  <FaCheckCircle className={style.checkIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={style.applicationPeriod}>
            <FaCalendarAlt className={style.calendarIcon} />
            <span className={style.periodText}>Application Period: <strong>STARTS NOW</strong></span>
          </div>

          <div className={style.ctaSection}>
            <button 
              onClick={handleApplyClick}
              className={style.applyButton}
            >
              Apply Now <FaExternalLinkAlt className={style.linkIcon} />
            </button>
            <p className={style.ctaNote}>
              Complete the application form and upload your resume to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipBanner;
