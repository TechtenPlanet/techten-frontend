import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { Link } from 'react-router-dom';
import style from './ProjectThatMattersPage.module.css';
import projectThatMattersData from '../data/projectThatMattersData';
import { FaArrowRight, FaCheckCircle, FaUsers, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const ProjectThatMattersPage = () => {
  const { hero, overview, benefits, projects, application } = projectThatMattersData;

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

        {/* Featured Projects Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className={style.sectionTitle}>{projects.title}</h2>
            <p className={style.sectionDescription}>{projects.description}</p>
            
            <div className="row mt-4">
              {projects.items.map((project, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={style.projectCard}>
                    <div className={style.projectImageContainer}>
                      <img src={project.image} alt={project.title} className={style.projectImage} />
                    </div>
                    <div className={style.projectContent}>
                      <h3 className={style.projectTitle}>{project.title}</h3>
                      <p className={style.projectDescription}>{project.description}</p>
                      <div className={style.projectMeta}>
                        <span><FaUsers className={style.metaIcon} /> {project.team}</span>
                        <span><FaCalendarAlt className={style.metaIcon} /> {project.year}</span>
                      </div>
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
              <ul className={style.applicationRequirements}>
                {application.requirements.map((requirement, index) => (
                  <li key={index} className={style.requirementItem}>
                    <FaCheckCircle className={style.requirementIcon} />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
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
                <Link to="/programs/tech-labs" className={style.navigationLink}>
                  Tech Labs <FaArrowRight className={style.navigationIcon} />
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

export default ProjectThatMattersPage;
