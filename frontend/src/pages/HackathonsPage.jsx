import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link } from 'react-router-dom';
import style from './HackathonsPage.module.css';
import hackathonsData from '../data/hackathonsData';
import { 
  FaArrowRight, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaTrophy, 
  FaUsers, 
  FaLightbulb,
  FaCode,
  FaCheckCircle
} from 'react-icons/fa';

const HackathonsPage = () => {
  const { hero, overview, benefits, upcomingEvents, pastEvents, sponsors, faq } = hackathonsData;

  return (
    <>
      <OtherPagesHero heading={hero.title} />
      <div className="container py-5">
        {/* Overview Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="text-center mb-5">
              <h2 className={style.sectionTitle}>{overview.title}</h2>
              <p className={`lead ${style.introText}`}>
                {overview.description}
              </p>
              <div className={style.statsContainer}>
                {overview.stats.map((stat, index) => {
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

        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitleBordered}>
              <span>{benefits.title}</span>
            </h2>
            <div className="row mt-4">
              {benefits.items.map((benefit, index) => {
                const Icon = benefit.icon === 'FaLightbulb' ? FaLightbulb : 
                             benefit.icon === 'FaUsers' ? FaUsers : 
                             benefit.icon === 'FaCode' ? FaCode : FaTrophy;
                return (
                  <div key={index} className="col-md-6 col-lg-3 mb-4">
                    <div className={style.benefitCard}>
                      <div className={style.benefitIcon}>
                        <Icon />
                      </div>
                      <h3 className={style.benefitTitle}>{benefit.title}</h3>
                      <p className={style.benefitDescription}>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{upcomingEvents.title}</h2>
            <div className="row mt-4">
              {upcomingEvents.events.map((event, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={style.eventCard}>
                    <div className={style.eventHeader}>
                      <h3 className={style.eventTitle}>{event.title}</h3>
                      <span className={style.eventTheme}>{event.theme}</span>
                    </div>
                    <div className={style.eventDetails}>
                      <div className={style.eventDetail}>
                        <FaCalendarAlt className={style.detailIcon} />
                        <span>{event.date}</span>
                      </div>
                      <div className={style.eventDetail}>
                        <FaMapMarkerAlt className={style.detailIcon} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className={style.eventHighlights}>
                      <h4 className={style.highlightsTitle}>Highlights:</h4>
                      <ul className={style.highlightsList}>
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className={style.highlightItem}>
                            <FaCheckCircle className={style.highlightIcon} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={style.eventFooter}>
                      <Link to={event.registerLink} className={style.primaryButton}>
                        Register Now <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{pastEvents.title}</h2>
            <div className="row mt-4">
              {pastEvents.events.map((event, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className={style.pastEventCard}>
                    <div className={style.pastEventImageContainer}>
                      <img src={event.image} alt={event.title} className={style.pastEventImage} />
                      <div className={style.pastEventOverlay}>
                        <span className={style.pastEventDate}>{event.date}</span>
                      </div>
                    </div>
                    <div className={style.pastEventContent}>
                      <h3 className={style.pastEventTitle}>{event.title}</h3>
                      <p className={style.pastEventDescription}>{event.description}</p>
                      <div className={style.winnerSection}>
                        <h4 className={style.winnerTitle}>
                          <FaTrophy className={style.trophyIcon} /> Winning Project
                        </h4>
                        <p className={style.winnerName}>{event.winner}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.viewMoreContainer}>
              <Link to={pastEvents.viewMoreLink} className={style.viewMoreLink}>
                View All Past Hackathons <FaArrowRight className={style.viewMoreIcon} />
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.sponsorsSection}>
              <h2 className={style.sponsorsTitle}>{sponsors.title}</h2>
              <p className={style.sponsorsDescription}>{sponsors.description}</p>
              <div className={style.sponsorsGrid}>
                {sponsors.companies.map((sponsor, index) => (
                  <div key={index} className={style.sponsorItem}>
                    <img src={sponsor.logo} alt={sponsor.name} className={style.sponsorLogo} />
                    <p className={style.sponsorName}>{sponsor.name}</p>
                  </div>
                ))}
              </div>
              <div className={style.sponsorsCta}>
                <Link to={sponsors.becomeLink} className={style.outlineButton}>
                  Become a Sponsor <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.faqSection}>
              <h2 className={style.faqTitle}>{faq.title}</h2>
              <div className="row mt-4">
                <div className="col-lg-8 mx-auto">
                  <div className={style.faqList}>
                    {faq.questions.map((item, index) => (
                      <div key={index} className={style.faqItem}>
                        <h3 className={style.faqQuestion}>{item.question}</h3>
                        <p className={style.faqAnswer}>{item.answer}</p>
                      </div>
                    ))}
                  </div>
                  <div className={style.faqCta}>
                    <p className={style.faqCtaText}>{faq.ctaText}</p>
                    <Link to={faq.ctaLink} className={style.primaryButton}>
                      Contact Us <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="row">
          <div className="col-12">
            <div className={style.programNavigation}>
              <h3 className={style.navigationTitle}>Explore Other Programs</h3>
              <div className={style.navigationLinks}>
                <Link to="/programs/project-that-matters" className={style.navigationLink}>
                  Projects That Matter <FaArrowRight className={style.navigationIcon} />
                </Link>
                <Link to="/programs/tech-labs" className={style.navigationLink}>
                  Tech Labs <FaArrowRight className={style.navigationIcon} />
                </Link>
                <Link to="/programs" className={style.navigationLink}>
                  All Programs <FaArrowRight className={style.navigationIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonsPage;
