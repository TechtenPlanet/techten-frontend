import React from 'react';
import style from './AboutSection.module.css';
import aboutSectionData from '../../data/aboutSectionData'; // Import the data

const AboutSection = () => {
  const { image, alt, heading, quote } = aboutSectionData; // Destructure data

  return (
    <div className={style.aboutSection}>
        <div className={style.aboutSectionWrapper}>
            <div className={style.aboutSectionImg}>
                <img src={image} alt={alt} /> {/* Use data */}
            </div>
            <div className={style.aboutSectionTxt}>
                <h3 className={style.h3}>{heading}</h3> {/* Use data */}
                <blockquote className={style.blockquote}>
                    <p>{quote.text}</p>
                    <span>{quote.author}, <br></br><em>- {quote.title} -</em></span> {/* Use data */}
                </blockquote>
            </div>
        </div>
    </div>
  )
}

export default AboutSection;
