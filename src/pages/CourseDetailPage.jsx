import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaUserGraduate, FaChalkboardTeacher, FaBook, FaTools, FaProjectDiagram } from 'react-icons/fa';
import courses from '../data/coursedata';
import style from './CourseDetailPage.module.css';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className={style.notFound}>
        <h2>Course not found</h2>
        <Link to="/courses" className={style.backLink}>
          <FaArrowLeft /> Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <>
      <OtherPagesHero heading={course.title} />
      <div className={style.courseDetail}>
        <div className={style.courseDetailWrapper}>
          <Link to="/courses" className={style.backLink}>
            <FaArrowLeft /> Back to Courses
          </Link>
          
          <div className={style.courseHeader}>
            <h1 className={style.courseTitle}>{course.title}</h1>
            
            <div className={style.courseMeta}>
              <div className={style.metaItem}>
                <FaUserGraduate className={style.metaIcon} />
                <span>Grades {course.grades}</span>
              </div>
              <div className={style.metaItem}>
                <FaTag className={style.metaIcon} />
                <span>{course.category}</span>
              </div>
              <div className={style.metaItem}>
                <FaChalkboardTeacher className={style.metaIcon} />
                <span>{course.format}</span>
              </div>
            </div>
          </div>
          
          <div 
            className={style.courseImage} 
            style={{ backgroundImage: `url(${course.image})` }}
          ></div>
          
          <div className={style.courseContent}>
            <p>{course.detailedDescription}</p>
          </div>

          <div className={style.detailsSection}>
            <div className={style.detailItem}>
              <h3 className={style.detailTitle}><FaBook className={style.detailIcon} /> Prerequisites</h3>
              <ul>
                {course.prerequisites.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            <div className={style.detailItem}>
              <h3 className={style.detailTitle}><FaTools className={style.detailIcon} /> Materials</h3>
              <ul>
                {course.materials.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className={style.instructorsSection}>
            <h3 className={style.sectionTitle}><FaChalkboardTeacher className={style.detailIcon} /> Instructors</h3>
            <div className={style.instructorsGrid}>
              {course.instructors.map((instructor, index) => (
                <div key={index} className={style.instructorCard}>
                  <img src={instructor.image} alt={instructor.name} className={style.instructorImage} />
                  <h4 className={style.instructorName}>{instructor.name}</h4>
                  <p className={style.instructorTitle}>{instructor.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={style.projectsSection}>
            <h3 className={style.sectionTitle}><FaProjectDiagram className={style.detailIcon} /> Student Projects</h3>
            <div className={style.projectsGrid}>
              {course.studentProjects.map((project, index) => (
                <div key={index} className={style.projectCard}>
                  <img src={project} alt={`Student project ${index + 1}`} className={style.projectImage} />
                </div>
              ))}
            </div>
          </div>

          <div className={style.sessions}>
            <h3 className={style.sessionTitle}>Upcoming Sessions</h3>
            {course.sessions.map((session, idx) => (
              <div key={idx} className={style.session}>
                <div className={style.sessionInfo}>
                  <FaCalendarAlt className={style.sessionIcon} />
                  <div>
                    <span className={style.sessionDate}>{session.date}</span>
                    <span className={style.time}>
                      <FaClock className={style.timeIcon} /> {session.time}
                    </span>
                  </div>
                </div>
                {session.full ? (
                  <span className={style.full}>Full</span>
                ) : (
                  <Link to={`/enrollment?id=${course.id}&title=${encodeURIComponent(course.title)}`}>
                    <button className={style.enrollButton}>
                      Enroll Now
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
