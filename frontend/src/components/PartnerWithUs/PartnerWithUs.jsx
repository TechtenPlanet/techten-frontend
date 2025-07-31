import React from 'react';
import style from './PartnerWithUs.module.css';

const PartnerWithUs = () => {
    return (
        <div className={style.partnerWithUs}>
            <div className={style.container}>
                <h2 className={style.sectionTitle}>Partner With Us</h2>
                <div className={style.content}>
                    <h3 className={style.question}>
                        Are you a school, organization, or company interested in offering or sponsoring a program?
                    </h3>
                    <p className={style.description}>
                        We collaborate with education partners, volunteers, and funders to expand access to quality STEM education in Ghana.
                    </p>
                    <div className={style.buttonContainer}>
                        <a href="/get-involved?form=partnership" className={style.button}>Become a Partner</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUs;
