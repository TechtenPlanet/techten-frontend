import React, { useState, useEffect } from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link, useLocation } from 'react-router-dom';
import { FormTabs } from '../components/Forms';
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaShare,
  FaCheckCircle,
  FaBullhorn,
  FaQuoteLeft,
  FaArrowRight,
  FaDollarSign
} from 'react-icons/fa';
import style from './GetInvolvedPage.module.css';
import getInvolvedData from '../data/getInvolvedData';

const GetInvolvedPage = () => {
  const { hero, stats, contributionWays, urgentNeeds, testimonial, callToAction, contact } = getInvolvedData;
  const location = useLocation();
  const [activeFormTab, setActiveFormTab] = useState('volunteer');
  
  // Check for form parameter in URL and set active tab accordingly
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const formParam = searchParams.get('form');
    
    if (formParam) {
      // Valid form types: volunteer, mentor, partnership, sponsorship, stem-squad
      const validFormTypes = ['volunteer', 'mentor', 'partnership', 'sponsorship', 'stem-squad', 'career-programme'];
      if (validFormTypes.includes(formParam)) {
        setActiveFormTab(formParam);
        
        // Scroll to the forms section after a short delay to ensure the page has loaded
        setTimeout(() => {
          const formsSection = document.getElementById('get-involved-forms');
          if (formsSection) {
            formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            formsSection.setAttribute('tabindex', '-1');
            formsSection.focus({ preventScroll: true });
          }
        }, 300);
      }
    }
  }, [location]);
  
  return (
    <>
      <OtherPagesHero heading="Get Involved" />
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="text-center mb-5">
              <h2 className={style.sectionTitle}>{hero.title}</h2>
              <p className={`lead ${style.introText}`}>
                {hero.description}
              </p>
              <div className={style.statsContainer}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className={style.statBadge}>
                      <Icon className={style.statIcon} /> {stat.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Ways to Contribute Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitleBordered}>
              <span>{contributionWays.title}</span>
            </h2>
            <p className="text-center mb-5 lead">{contributionWays.subtitle}</p>
            <div className="row">
              {contributionWays.ways.map((way) => {
                const Icon = way.icon;
                return (
                  <div key={way.id} className="col-md-6 mb-4">
                    <div className={`card h-100 shadow-sm ${style.card}`}>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Icon className={style.cardIcon} />
                          <h3 className={`h4 ${style.cardTitle}`}>{way.id}. {way.title}</h3>
                        </div>
                        <p>{way.description}</p>
                        {way.highlight && (
                          <p className={style.checkText}>
                            <strong>
                              <FaCheckCircle className={style.checkIcon} /> {way.highlight}
                            </strong>
                          </p>
                        )}
                        <button 
                          onClick={() => {
                            // Set the active tab based on the button clicked
                            let tabName = 'volunteer';
                            if (way.title.includes('Volunteer')) {
                              tabName = 'volunteer';
                            } else if (way.title.includes('Mentorship')) {
                              tabName = 'mentor';
                            } else if (way.title.includes('Sponsor')) {
                              tabName = 'sponsorship';
                            } else if (way.title.includes('Partner')) {
                              tabName = 'partnership';
                            }
                            setActiveFormTab(tabName);
                            
                            // Scroll to the forms section
                            const formsSection = document.getElementById('get-involved-forms');
                            if (formsSection) {
                              formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              formsSection.setAttribute('tabindex', '-1');
                              formsSection.focus({ preventScroll: true });
                            }
                          }} 
                          className={style.outlineButton}
                        >
                          {way.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Urgent Needs Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.needsSection}>
              <h2 className={`text-center mb-4 ${style.sectionTitle}`}>
                <FaBullhorn className="me-2" style={{ color: "#FF6620" }} />
                <span>{urgentNeeds.title}</span>
              </h2>
              <p className="text-center mb-4">{urgentNeeds.subtitle}</p>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <ul className={style.needsList}>
                    {urgentNeeds.needs.map((need, index) => (
                      <li key={index} className={style.needsItem}>
                        <span className={style.checkBadge}><FaCheckCircle /></span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                    <button 
                      onClick={() => {
                        // Set active tab to volunteer for urgent needs
                        setActiveFormTab('volunteer');
                        
                        // Scroll to the forms section
                    const formsSection = document.getElementById('get-involved-forms');
                    if (formsSection) {
                      formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      formsSection.setAttribute('tabindex', '-1');
                      formsSection.focus({ preventScroll: true });
                    }
                  }} 
                  className={`${style.primaryButton} ${style.largeButton}`}
                >
                      {urgentNeeds.buttonText} <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className={style.testimonialSection}>
              <div className="mb-4">
                <FaQuoteLeft className={style.quoteIcon} />
                <blockquote className="blockquote">
                  <p className={style.quote}>
                    "{testimonial.quote}"
                  </p>
                  <footer className="blockquote-footer mt-2">
                    {testimonial.author}
                  </footer>
                </blockquote>
              </div>
              
              <h3 className={style.ctaTitle}>
                <FaBullhorn className="me-2" style={{ color: '#FF6620' }} /> {callToAction.title}
              </h3>
              
              <div className={style.ctaContainer}>
                {callToAction.buttons.map((button, index) => {
                  if (button.primary) {
                    if (button.link === '#get-involved-forms') {
                      return (
                        <button 
                          key={index}
                          onClick={() => {
                            // Set active tab to volunteer for "Get Started" button
                            setActiveFormTab('volunteer');
                            
                            // Scroll to the forms section
                            const formsSection = document.getElementById('get-involved-forms');
                            if (formsSection) {
                              formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              formsSection.setAttribute('tabindex', '-1');
                              formsSection.focus({ preventScroll: true });
                            }
                          }} 
                          className={`${style.primaryButton} ${style.largeButton}`}
                        >
                          {button.text} <FaArrowRight className="ms-2" />
                        </button>
                      );
                    } else {
                      return (
                        <Link key={index} to={button.link} className={`${style.primaryButton} ${style.largeButton}`}>
                          {button.text} {button.text.includes('Donate') ? <FaDollarSign className="ms-2" /> : <FaArrowRight className="ms-2" />}
                        </Link>
                      );
                    }
                  } else {
                    return (
                      <button key={index} className={`${style.outlineButton} ${style.largeButton}`}>
                        <FaShare className="me-2" /> {button.text}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Get Involved Forms Section */}
        <div className="row mb-5" id="get-involved-forms">
          <div className="col-12">
            <h2 className={style.sectionTitleBordered}>
              <span>Get Involved Forms</span>
            </h2>
            <p className="text-center mb-5 lead">
              Select the form that matches your interest to get started with Techten Planet
            </p>
            <FormTabs initialTab={activeFormTab} />
          </div>
        </div>
        
        {/* Contact Footer */}
        <div className="row">
          <div className="col-12">
            <div className={style.contactFooter}>
              <h4 className={style.contactTitle}>{contact.title}</h4>
              <div className={style.contactLinks}>
                <a href={`mailto:${contact.email}`} className={style.contactLink}>
                  <div className={style.contactIconWrapper}>
                    <FaEnvelope />
                  </div>
                  <span>Email: {contact.email}</span>
                </a>
                <a href={`https://wa.me/${contact.whatsapp.replace(/\+|\s/g, '')}`} className={style.contactLink}>
                  <div className={style.contactIconWrapper}>
                    <FaWhatsapp />
                  </div>
                  <span>WhatsApp: {contact.whatsapp}</span>
                </a>
              </div>
              <div className={style.responseTime}>
                <p className="mb-0">{contact.responseTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolvedPage;
