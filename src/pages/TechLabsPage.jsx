import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link } from 'react-router-dom';
import style from './TechLabsPage.module.css';
import techLabsData from '../data/techLabsData';
import { FaArrowRight, FaCheckCircle, FaCode, FaRobot, FaLaptop, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const TechLabsPage = () => {
  const { hero, overview, labTypes, upcomingLabs, curriculum, registration } = techLabsData;

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

        {/* Lab Types Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitleBordered}>
              <span>{labTypes.title}</span>
            </h2>
            <p className={`text-center mb-4 ${style.sectionDescription}`}>{labTypes.description}</p>
            <div className="row mt-4">
              {labTypes.types.map((lab, index) => {
                const Icon = lab.icon === 'FaCode' ? FaCode : 
                             lab.icon === 'FaRobot' ? FaRobot : FaLaptop;
                return (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={style.labCard}>
                      <div className={style.labIcon}>
                        <Icon />
                      </div>
                      <h3 className={style.labTitle}>{lab.title}</h3>
                      <p className={style.labDescription}>{lab.description}</p>
                      <ul className={style.labFeatures}>
                        {lab.features.map((feature, idx) => (
                          <li key={idx} className={style.featureItem}>
                            <FaCheckCircle className={style.featureIcon} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Labs Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{upcomingLabs.title}</h2>
            <div className="row mt-4">
              {upcomingLabs.labs.map((lab, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={style.upcomingLabCard}>
                    <div className={style.labHeader}>
                      <h3 className={style.upcomingLabTitle}>{lab.title}</h3>
                      <span className={style.labBadge}>{lab.level}</span>
                    </div>
                    <div className={style.labDetails}>
                      <div className={style.labDetail}>
                        <FaCalendarAlt className={style.detailIcon} />
                        <span>{lab.dates}</span>
                      </div>
                      <div className={style.labDetail}>
                        <FaMapMarkerAlt className={style.detailIcon} />
                        <span>{lab.location}</span>
                      </div>
                    </div>
                    <p className={style.labSummary}>{lab.description}</p>
                    <div className={style.labFooter}>
                      <span className={style.labSpots}>{lab.spotsLeft} spots left</span>
                      <Link to={lab.registerLink} className={style.primaryButton}>
                        Register <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.curriculumSection}>
              <h2 className={style.curriculumTitle}>{curriculum.title}</h2>
              <p className={style.curriculumDescription}>{curriculum.description}</p>
              
              <div className="row mt-4">
                {curriculum.modules.map((module, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className={style.moduleCard}>
                      <div className={style.moduleHeader}>
                        <span className={style.moduleNumber}>Module {index + 1}</span>
                        <h3 className={style.moduleTitle}>{module.title}</h3>
                      </div>
                      <ul className={style.moduleTopics}>
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className={style.topicItem}>
                            <FaCheckCircle className={style.topicIcon} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.registrationSection}>
              <h2 className={style.registrationTitle}>{registration.title}</h2>
              <p className={style.registrationDescription}>{registration.description}</p>
              <div className={style.registrationCta}>
                <Link to={registration.buttonLink} className={style.primaryButton}>
                  {registration.buttonText} <FaArrowRight className="ms-2" />
                </Link>
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
                <Link to="/programs/hackathons" className={style.navigationLink}>
                  Hackathons <FaArrowRight className={style.navigationIcon} />
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

export default TechLabsPage;
