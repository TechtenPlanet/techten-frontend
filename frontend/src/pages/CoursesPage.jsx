import React, { useState, useEffect, useMemo } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import CourseCard from '../components/CourseCard/CourseCard';
import { getCourses } from '../notion/courseService';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import CourseTeasers from '../components/CourseTeasers/CourseTeasers';
import style from './CoursesPage.module.css';

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const [expandedTypes, setExpandedTypes] = useState({});

  // Fetch courses from Notion
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true); // Ensure loading is set to true before fetch
        const coursesData = await getCourses();
        setAllCourses(coursesData);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const typeOrder = useMemo(
    () => [
      {
        type: 'Vacation Bootcamps',
        description: 'Intensive 2-week sprints in Accra. From Robotics to Game Design.',
      },
      {
        type: 'Masterclasses',
        description: '1-Day deep dives for kids and parents. Learn AI, 3D Printing, or IoT.',
      },
      {
        type: 'Special Projects',
        description: 'Solve real-world Ghanaian problems. Competitive builds and exhibitions.',
      },
      {
        type: 'Tech Labs (Mobile)',
        description: 'We bring the lab to your school or neighborhood hub.',
      },
    ],
    []
  );

  const typedCourses = useMemo(() => {
    const allowed = new Set(typeOrder.map((item) => item.type));
    return allCourses.filter((course) => course.type && allowed.has(course.type));
  }, [allCourses, typeOrder]);

  const groupedCourses = useMemo(
    () =>
      typeOrder.map((item) => ({
        ...item,
        courses: typedCourses.filter((course) => course.type === item.type),
      })),
    [typedCourses, typeOrder]
  );

  const toggleExpanded = (type) => {
    setExpandedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  if (loading) {
    return (
      <>
        <OtherPagesHero heading="Courses & Programs" />
        <CourseTeasers source="Courses Page" />
        <div className={style.coursesSection}>
          <div className={style.loading}>
            <h2 className={style.sectionTitle}>Explore Our Educational Programs</h2>
            <p>Loading courses...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <OtherPagesHero heading="Courses & Programs" />
        <CourseTeasers source="Courses Page" />
        <div className={style.coursesSection}>
          <div className={style.error}>
            <h2 className={style.sectionTitle}>Explore Our Educational Programs</h2>
            <p className={style.errorMessage}>{error}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <OtherPagesHero heading="Courses & Programs" />
      <CourseTeasers source="Courses Page" />
      
      <div className={style.coursesSection}>
        <div className={style.coursesSectionWrapper}>
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
                    <a className={style.ongoingCta} href="/contact">
                      Ongoing · Register Now
                    </a>
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
              Join thousands of students who are building skills, creating amazing projects, and preparing for future careers in technology through our innovative programs.
            </p>
            <a href="/contact" className={style.ctaButton}>
              Contact Us for More Information
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
