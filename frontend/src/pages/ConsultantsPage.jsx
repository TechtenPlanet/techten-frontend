import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link } from 'react-router-dom';
import style from './ConsultantsPage.module.css';
import consultantsData from '../data/consultantsData';
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaBriefcase, 
  FaChartLine, 
  FaUsers, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap
} from 'react-icons/fa';

const ConsultantsPage = () => {
  const { hero, overview, benefits, curriculum, testimonials, application, alumni } = consultantsData;

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
              {benefits.items.map((benefit, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className={style.benefitCard}>
                    <div className={style.benefitIcon}>
                      <FaCheckCircle />
                    </div>
                    <h3 className={style.benefitTitle}>{benefit.title}</h3>
                    <p className={style.benefitDescription}>{benefit.description}</p>
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

        {/* Testimonials Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{testimonials.title}</h2>
            <div className="row mt-4">
              {testimonials.items.map((testimonial, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={style.testimonialCard}>
                    <div className={style.testimonialContent}>
                      <p className={style.testimonialText}>"{testimonial.text}"</p>
                    </div>
                    <div className={style.testimonialAuthor}>
                      <div className={style.authorImageContainer}>
                        <img src={testimonial.image} alt={testimonial.name} className={style.authorImage} />
                      </div>
                      <div className={style.authorInfo}>
                        <h4 className={style.authorName}>{testimonial.name}</h4>
                        <p className={style.authorTitle}>{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{alumni.title}</h2>
            <p className={style.sectionDescription}>{alumni.description}</p>
            
            <div className="row mt-4">
              {alumni.profiles.map((profile, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className={style.alumniCard}>
                    <div className={style.alumniImageContainer}>
                      <img src={profile.image} alt={profile.name} className={style.alumniImage} />
                    </div>
                    <div className={style.alumniContent}>
                      <h3 className={style.alumniName}>{profile.name}</h3>
                      <p className={style.alumniTitle}>{profile.currentRole}</p>
                      <p className={style.alumniCompany}>{profile.company}</p>
                      <p className={style.alumniCohort}>
                        <FaGraduationCap className={style.cohortIcon} /> {profile.cohort}
                      </p>
                      <p className={style.alumniDescription}>{profile.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={style.applicationSection}>
              <h2 className={style.applicationTitle}>{application.title}</h2>
              <p className={style.applicationDescription}>{application.description}</p>
              
              <div className={style.applicationDetails}>
                <div className={style.applicationDetail}>
                  <FaCalendarAlt className={style.detailIcon} />
                  <div>
                    <h4 className={style.detailTitle}>Next Cohort</h4>
                    <p className={style.detailText}>{application.nextCohort}</p>
                  </div>
                </div>
                <div className={style.applicationDetail}>
                  <FaMapMarkerAlt className={style.detailIcon} />
                  <div>
                    <h4 className={style.detailTitle}>Location</h4>
                    <p className={style.detailText}>{application.location}</p>
                  </div>
                </div>
                <div className={style.applicationDetail}>
                  <FaUsers className={style.detailIcon} />
                  <div>
                    <h4 className={style.detailTitle}>Cohort Size</h4>
                    <p className={style.detailText}>{application.cohortSize}</p>
                  </div>
                </div>
              </div>
              
              <div className={style.applicationCta}>
                <Link to={application.buttonLink} className={style.primaryButton}>
                  {application.buttonText} <FaArrowRight className="ms-2" />
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
                <Link to="/programs/tech-for-girls" className={style.navigationLink}>
                  Tech for Girls <FaArrowRight className={style.navigationIcon} />
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

export default ConsultantsPage;
