import React, { useState } from 'react';
import style from './GovernanceSection.module.css';

const GovernanceSection = () => {
    const [activeAccordion, setActiveAccordion] = useState('legal');

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <div className={style.governanceSection}>
            <h2 className={style.sectionTitle}>Governance & Nonprofit Status</h2>
            
            <div className={style.accordionContainer}>
                <div className={style.accordionItem}>
                    <div 
                        className={`${style.accordionHeader} ${activeAccordion === 'legal' ? style.active : ''}`}
                        onClick={() => toggleAccordion('legal')}
                    >
                        <h3><span className={style.icon}>📘</span> Legal Status</h3>
                        <span className={style.arrow}>{activeAccordion === 'legal' ? '−' : '+'}</span>
                    </div>
                    <div className={`${style.accordionContent} ${activeAccordion === 'legal' ? style.show : ''}`}>
                        <p>
                            Techten Planet is a registered nonprofit in Ghana. We operate transparently 
                            and reinvest 100% of donations into student programs.
                        </p>
                    </div>
                </div>

                <div className={style.accordionItem}>
                    <div 
                        className={`${style.accordionHeader} ${activeAccordion === 'board' ? style.active : ''}`}
                        onClick={() => toggleAccordion('board')}
                    >
                        <h3><span className={style.icon}>📋</span> Board of Directors</h3>
                        <span className={style.arrow}>{activeAccordion === 'board' ? '−' : '+'}</span>
                    </div>
                    <div className={`${style.accordionContent} ${activeAccordion === 'board' ? style.show : ''}`}>
                        <p>
                            Our Board ensures we stay mission-aligned and financially responsible:
                        </p>
                        <ul className={style.boardList}>
                            <li>Oscar Yaw Asamoah – Executive Director</li>
                            <li>Bernard Boateng – Board Member</li>
                            <li>Emmanuel Oppong – Operations Manager</li>
                        </ul>
                    </div>
                </div>

                <div className={style.accordionItem}>
                    <div 
                        className={`${style.accordionHeader} ${activeAccordion === 'compliance' ? style.active : ''}`}
                        onClick={() => toggleAccordion('compliance')}
                    >
                        <h3><span className={style.icon}>📄</span> Compliance</h3>
                        <span className={style.arrow}>{activeAccordion === 'compliance' ? '−' : '+'}</span>
                    </div>
                    <div className={`${style.accordionContent} ${activeAccordion === 'compliance' ? style.show : ''}`}>
                        <p>
                            Our reports are submitted annually in accordance with local and international nonprofit guidelines.
                        </p>
                    </div>
                </div>

                <div className={style.accordionItem}>
                    <div 
                        className={`${style.accordionHeader} ${activeAccordion === 'accountability' ? style.active : ''}`}
                        onClick={() => toggleAccordion('accountability')}
                    >
                        <h3><span className={style.icon}>🔐</span> Accountability</h3>
                        <span className={style.arrow}>{activeAccordion === 'accountability' ? '−' : '+'}</span>
                    </div>
                    <div className={`${style.accordionContent} ${activeAccordion === 'accountability' ? style.show : ''}`}>
                        <p>
                            We believe in open reporting. 
                        </p>
                        <button className={style.downloadButton}>
                            Download Impact Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GovernanceSection;
