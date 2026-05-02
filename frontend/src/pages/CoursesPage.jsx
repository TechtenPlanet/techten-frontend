import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaRobot, FaFlask, FaLaptopCode, FaFire, FaProjectDiagram } from 'react-icons/fa';
import CourseCard from '../components/CourseCard/CourseCard';
import { getCourses } from '../notion/courseService';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import CourseTeasers from '../components/CourseTeasers/CourseTeasers';
import VacationBanner from '../components/VacationBanner/VacationBanner';
import WhatsAppChatButton from '../components/WhatsAppChatButton/WhatsAppChatButton';
import style from './CoursesPage.module.css';

import imgRobotics from '../assets/images/techten_girl_robotics.png';
import imgRaspberryPi from '../assets/images/LearnwithRaspberrypi-at-Techtenplanet.jpeg';
import imgGirlCoding from '../assets/images/Girl-learning-coding-at-Techten-Ghana.jpeg';
import imgHackathon from '../assets/images/Classes_images/hackathon_image.jpg';
import imgScratch from '../assets/images/scratchcoding-at-techtenplanet.jpeg';

const FALLBACK_PROGRAMS = [
  {
    key: 'stem-squad',
    icon: FaRobot,
    title: 'STEM Squad',
    type: 'Ongoing Programme',
    description: "Ghana's hands-on STEM membership that ships real hardware — robotics kits, sensors & more — directly to your door every semester.",
    href: '/stem-squad',
    cta: 'Explore STEM Squad',
    image: imgRobotics,
    accent: '#0303ab',
  },
  {
    key: 'tech-labs',
    icon: FaFlask,
    title: 'Tech Labs',
    type: 'Mobile Programme',
    description: "We bring the lab to your school or community hub. Arduino, Raspberry Pi, and coding projects — no travel needed.",
    href: '/programs/tech-labs',
    cta: 'Learn More',
    image: imgRaspberryPi,
    accent: '#1a5c3a',
  },
  {
    key: 'tech-for-girls',
    icon: FaLaptopCode,
    title: 'Tech for Girls',
    type: 'Special Programme',
    description: "Coding, design, and digital skills tailored for young women. Building the next generation of Ghanaian women in tech.",
    href: '/programs/tech-for-girls',
    cta: 'Learn More',
    image: imgGirlCoding,
    accent: '#9b2c7e',
  },
  {
    key: 'hackathons',
    icon: FaFire,
    title: 'Hackathons',
    type: 'Competition',
    description: "Fast-paced, team-based challenges where students solve real-world Ghanaian problems using technology. Prizes and recognition await.",
    href: '/programs/hackathons',
    cta: 'View Hackathons',
    image: imgHackathon,
    accent: '#ff6620',
  },
  {
    key: 'project-that-matters',
    icon: FaProjectDiagram,
    title: 'Project That Matters',
    type: 'Special Projects',
    description: "Month-long guided builds where students design, prototype, and exhibit solutions to problems in their communities.",
    href: '/programs/project-that-matters',
    cta: 'See Projects',
    image: imgScratch,
    accent: '#0303ab',
  },
];

const FallbackGrid = () => (
  <div className={style.fallbackSection}>
    <div className={style.fallbackHeader}>
      <h2 className={style.fallbackTitle}>Explore Our Programmes</h2>
      <p className={style.fallbackSub}>
        Our course calendar is being updated. Meanwhile, explore everything Techten offers below.
      </p>
    </div>
    <div className={style.fallbackGrid}>
      {FALLBACK_PROGRAMS.map(({ key, icon: Icon, title, type, description, href, cta, image, accent }) => (
        <div key={key} className={style.fallbackCard} style={{ '--card-accent': accent }}>
          <div className={style.fallbackImgWrap}>
            <img src={image} alt={title} className={style.fallbackImg} />
            <span className={style.fallbackType}>{type}</span>
          </div>
          <div className={style.fallbackBody}>
            <div className={style.fallbackIconRow}>
              <Icon className={style.fallbackIcon} aria-hidden="true" />
              <h3 className={style.fallbackCardTitle}>{title}</h3>
            </div>
            <p className={style.fallbackDesc}>{description}</p>
            <Link to={href} className={style.fallbackCta}>{cta} →</Link>
          </div>
        </div>
      ))}

      {/* Coming soon placeholder */}
      <div className={`${style.fallbackCard} ${style.fallbackCardSoon}`}>
        <div className={style.fallbackBody}>
          <FaGraduationCap className={style.fallbackIconSoon} aria-hidden="true" />
          <h3 className={style.fallbackCardTitle}>More Courses Coming Soon</h3>
          <p className={style.fallbackDesc}>
            New cohorts for Vacation Bootcamps, Masterclasses, and more are being scheduled.
            Drop your email to be first to know.
          </p>
          <Link to="/get-involved?form=course-alert" className={style.fallbackCta}>
            Get Notified →
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedTypes, setExpandedTypes] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await getCourses();
        setAllCourses(coursesData);
        setError(null);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError(err.message || 'Failed to load courses.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const typeOrder = useMemo(
    () => [
      { type: 'Vacation Bootcamps', description: 'Intensive 2-week sprints in Accra. From Robotics to Game Design.' },
      { type: 'Masterclasses', description: '1-Day deep dives for kids and parents. Learn AI, 3D Printing, or IoT.' },
      { type: 'Special Projects', description: 'Solve real-world Ghanaian problems. Competitive builds and exhibitions.' },
      { type: 'Tech Labs (Mobile)', description: 'We bring the lab to your school or neighborhood hub.' },
    ],
    []
  );

  const typedCourses = useMemo(() => {
    const allowed = new Set(typeOrder.map((item) => item.type));
    return allCourses.filter((course) => course.type && allowed.has(course.type));
  }, [allCourses, typeOrder]);

  const groupedCourses = useMemo(
    () => typeOrder.map((item) => ({
      ...item,
      courses: typedCourses.filter((course) => course.type === item.type),
    })),
    [typedCourses, typeOrder]
  );

  const hasAnyCourses = groupedCourses.some((g) => g.courses.length > 0);
  const showFallback = !loading && (!!error || !hasAnyCourses);

  const toggleExpanded = (type) => {
    setExpandedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      <OtherPagesHero heading="Courses & Programs" />
      <CourseTeasers source="Courses Page" />

      <div className={style.coursesSection}>
        <div className={style.coursesSectionWrapper}>
          <VacationBanner />

          {loading && (
            <div className={style.loading}>
              <h2 className={style.sectionTitle}>Explore Our Educational Programs</h2>
              <p>Loading courses…</p>
            </div>
          )}

          {showFallback && <FallbackGrid />}

          {!loading && !error && hasAnyCourses && (
            <>
              {groupedCourses.map((group) => {
                const isExpanded = expandedTypes[group.type];
                const coursesToShow = isExpanded ? group.courses : group.courses.slice(0, 2);
                return (
                  <section key={group.type} className={style.typeSection}>
                    <div className={style.typeHeader}>
                      <div>
                        <h2 className={style.typeTitle}>{group.type}</h2>
                        <p className={style.typeDescription}>{group.description}</p>
                      </div>
                      <div className={style.headerActions}>
                        <span className={style.ongoingCta}>Ongoing · Register Now</span>
                        {group.courses.length > 2 && (
                          <button
                            type="button"
                            className={style.viewAllButton}
                            onClick={() => toggleExpanded(group.type)}
                          >
                            {isExpanded ? 'Show Less' : 'View All'}
                          </button>
                        )}
                      </div>
                    </div>

                    {group.courses.length > 0 ? (
                      <div className={style.typeGrid}>
                        {coursesToShow.map((course) => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    ) : (
                      <div className={style.emptyState}>
                        <FaGraduationCap className={style.emptyIcon} />
                        <p>New cohorts announced soon.</p>
                      </div>
                    )}
                  </section>
                );
              })}

              <div className={style.ctaSection}>
                <h2 className={style.ctaTitle}>Ready to Start Your Learning Journey?</h2>
                <p className={style.ctaText}>
                  Join thousands of students who are building skills, creating amazing projects,
                  and preparing for future careers in technology through our innovative programs.
                </p>
                <a href="/contact" className={style.ctaButton}>
                  Contact Us for More Information
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <WhatsAppChatButton />
    </>
  );
};

export default CoursesPage;
