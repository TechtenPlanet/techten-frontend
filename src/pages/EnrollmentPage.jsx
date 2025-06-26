import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import EnrollmentForm from '../components/Forms/EnrollmentForm';
import { FaArrowLeft, FaGraduationCap } from 'react-icons/fa';
import style from './CoursesPage.module.css'; // Reusing the courses page styles

/**
 * Course Enrollment Page
 * 
 * This page displays the enrollment form for a specific course.
 * It receives the course ID and title from the URL parameters or query string.
 */
const EnrollmentPage = () => {
  const { courseId } = useParams();
  const location = useLocation();
  const [course, setCourse] = useState(null);
  
  // Extract course information from query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const id = courseId || queryParams.get('id');
    
    if (id) {
      setCourse({
        id,
        title: title || 'Course Enrollment'
      });
    }
  }, [courseId, location.search]);

  return (
    <>
      <OtherPagesHero heading="Course Enrollment" />
      
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <Link to="/courses" className={style.backLink}>
              <FaArrowLeft className="me-2" /> Back to Courses
            </Link>
          </div>
        </div>
        
        {course ? (
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <EnrollmentForm courseId={course.id} courseTitle={course.title} />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 text-center py-5">
              <FaGraduationCap style={{ fontSize: '3rem', color: '#a0aec0', marginBottom: '1rem' }} />
              <h3>Course Not Found</h3>
              <p>The course you're trying to enroll in could not be found.</p>
              <Link to="/courses" className={`btn btn-primary ${style.ctaButton}`}>
                Browse All Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnrollmentPage;
