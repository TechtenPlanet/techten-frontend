import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link } from 'react-router-dom';
import style from './TechForGirlsPage.module.css';
import techForGirlsData from '../data/techForGirlsData';
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaFemale, 
  FaLaptopCode, 
  FaUsers, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaStar
} from 'react-icons/fa';

const TechForGirlsPage = () => {
  const { hero, overview, mission, programs, impact, mentors, events, registration } = techForGirlsData;

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

        {/* Mission Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className={style.missionImageContainer}>
              <img src={mission.image} alt="Girls in tech" className={style.missionImage} />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className={style.missionContent}>
              <h2 className={style.missionTitle}>{mission.title}</h2>
              <p className={style.missionDescription}>{mission.description}</p>
              <ul className={style.missionPoints}>
                {mission.points.map((point, index) => (
                  <li key={index} className={style.missionPoint}>
                    <FaCheckCircle className={style.pointIcon} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitleBordered}>
              <span>{programs.title}</span>
            </h2>
            <p className={`text-center mb-4 ${style.sectionDescription}`}>{programs.description}</p>
            <div className="row mt-4">
              {programs.items.map((program, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className={style.programCard}>
                    <div className={style.programIcon}>
                      {program.icon === 'FaLaptopCode' ? <FaLaptopCode /> : 
                       program.icon === 'FaUsers' ? <FaUsers /> : <FaFemale />}
                    </div>
                    <h3 className={style.programTitle}>{program.title}</h3>
                    <p className={style.programDescription}>{program.description}</p>
                    <div className={style.programDetails}>
                      <div className={style.programDetail}>
                        <span className={style.detailLabel}>Age Group:</span>
                        <span className={style.detailValue}>{program.ageGroup}</span>
                      </div>
                      <div className={style.programDetail}>
                        <span className={style.detailLabel}>Duration:</span>
                        <span className={style.detailValue}>{program.duration}</span>
                      </div>
                    </div>
                    <Link to={program.link} className={style.programLink}>
                      Learn More <FaArrowRight className={style.linkIcon} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.impactSection}>
              <h2 className={style.impactTitle}>{impact.title}</h2>
              <div className="row mt-4">
                {impact.stats.map((stat, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={style.impactCard}>
                      <div className={style.impactNumber}>{stat.number}</div>
                      <div className={style.impactLabel}>{stat.label}</div>
                      <p className={style.impactDescription}>{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.impactQuote}>
                <p className={style.quoteText}>"{impact.quote.text}"</p>
                <div className={style.quoteAuthor}>— {impact.quote.author}, {impact.quote.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{mentors.title}</h2>
            <p className={`text-center mb-4 ${style.sectionDescription}`}>{mentors.description}</p>
            <div className="row mt-4">
              {mentors.profiles.map((mentor, index) => (
                <div key={index} className="col-md-3 mb-4">
                  <div className={style.mentorCard}>
                    <div className={style.mentorImageContainer}>
                      <img src={mentor.image} alt={mentor.name} className={style.mentorImage} />
                    </div>
                    <div className={style.mentorContent}>
                      <h3 className={style.mentorName}>{mentor.name}</h3>
                      <p className={style.mentorTitle}>{mentor.title}</p>
                      <p className={style.mentorCompany}>{mentor.company}</p>
                      <div className={style.mentorSpecialty}>
                        <FaStar className={style.specialtyIcon} />
                        <span>{mentor.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.mentorsCta}>
              <Link to={mentors.becomeLink} className={style.outlineButton}>
                Become a Mentor <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{events.title}</h2>
            <div className="row mt-4">
              {events.items.map((event, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={style.eventCard}>
                    <div className={style.eventHeader}>
                      <h3 className={style.eventTitle}>{event.title}</h3>
                      <span className={style.eventType}>{event.type}</span>
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
                    <p className={style.eventDescription}>{event.description}</p>
                    <div className={style.eventFooter}>
                      <Link to={event.registerLink} className={style.primaryButton}>
                        Register <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
                <Link to="/programs/tech-labs" className={style.navigationLink}>
                  Tech Labs <FaArrowRight className={style.navigationIcon} />
                </Link>
                <Link to="/programs/hackathons" className={style.navigationLink}>
                  Hackathons <FaArrowRight className={style.navigationIcon} />
                </Link>
                <Link to="/programs/consultants" className={style.navigationLink}>
                  Business Consultant Cohort <FaArrowRight className={style.navigationIcon} />
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

export default TechForGirlsPage;
