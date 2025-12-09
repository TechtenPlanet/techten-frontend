import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import style from './CourseCard.module.css';

const CourseCard = ({ course, featured = false, horizontal = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div onClick={handleCardClick} className={style.cardLink}>
      <div className={`${style.courseCard} ${featured ? style.featured : ''} ${horizontal ? style.horizontal : ''}`}>
        <div className={style.imageWrapper}>
          <img src={course.image} alt={course.title} className={style.courseImage} />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            {featured && <span className={style.featuredLabel}>Featured</span>}
            <h2 className={style.title}>{course.title}</h2>
            <span className={style.grades}>Grades {course.grades}</span>
          </div>
          
          <p className={style.description} title={course.description}>{course.description}</p>
          
          {/* Pricing Display */}
          {course.pricing && (
            <div className={style.pricingDisplay}>
              <span className={style.pricingLabel}>Starting from</span>
              <span className={style.pricingAmount}>
                {course.pricing.currency === 'GHC' ? '₵' : '$'}{course.pricing.student}
              </span>
              <span className={style.pricingCurrency}>{course.pricing.currency}</span>
            </div>
          )}
          
          <div className={style.divider}></div>
          
          <ul className={style.links}>
            {course.links.map((link, idx) => (
              <li key={idx}>
                <Link to={link.url} className={style.link}>
                  <FaTag className={style.linkIcon} /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={style.sessions}>
            <h3 className={style.sessionTitle}>Next Session</h3>
            {(course.sessions || [])
              .filter(session => session?.date && session?.time)
              .slice(0, 1)
              .map((session, idx) => (
                <div key={`${session.date}-${session.time}-${idx}`} className={style.session}>
                  <div className={style.sessionInfo}>
                    <FaCalendarAlt className={style.sessionIcon} />
                    <div className={style.sessionText}>
                      <span className={style.sessionDate}>{session.date}</span>
                      <span className={style.time}>
                        <FaClock className={style.timeIcon} /> {session.time}
                      </span>
                      {session.location && (
                        <span className={style.location}>{session.location}</span>
                      )}
                    </div>
                  </div>
                  {session.full ? (
                    <span className={style.full}>Full</span>
                  ) : (
                    <div className={style.actionButtons}>
                      <Link to={`/course/${course.id}`} className={style.detailsButton}>
                        View Details
                      </Link>
                      <Link to={`/enrollment?id=${course.id}&title=${encodeURIComponent(course.title)}`} className={style.enrollButton}>
                        Enroll Now
                      </Link>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
