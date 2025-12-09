import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaClock, 
  FaTag, 
  FaUserGraduate, 
  FaChalkboardTeacher,
  FaBookOpen,
  FaLightbulb,
  FaClipboardList,
  FaTruck,
  FaLaptop,
  FaDollarSign,
  FaEnvelope,
  FaLinkedin
} from 'react-icons/fa';
import style from './CourseDetailPage.module.css';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { apiGet } from '../utils/apiClient';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Default pricing information (fallback if not provided by API)
  const defaultPricing = {
    regular: 1200,
    earlyBird: 1000,
    student: 800,
    currency: 'GHC'
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await apiGet(`/api/courses/${id}`);
        setCourse(courseData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className={style.loading}>
        <h2>Loading course details...</h2>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className={style.notFound}>
        <h2>Course not found</h2>
        <Link to="/courses" className={style.backLink}>
          <FaArrowLeft /> Back to Courses
        </Link>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className={style.tabContent}>
            <h3><FaBookOpen /> Course Overview</h3>
            <p className={style.overviewText}>
              {course.fullOverview || course.detailedDescription || course.description}
            </p>
            
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className={style.section}>
                <h4>Prerequisites</h4>
                <ul className={style.list}>
                  {course.prerequisites.map((prereq, idx) => (
                    <li key={idx}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      
      case 'outcomes':
        return (
          <div className={style.tabContent}>
            <h3><FaLightbulb /> Learning Outcomes</h3>
            {course.learningOutcomes && course.learningOutcomes.length > 0 ? (
              <ul className={style.outcomesList}>
                {course.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className={style.outcomeItem}>
                    <FaLightbulb className={style.outcomeIcon} />
                    {outcome}
                  </li>
                ))}
              </ul>
            ) : (
              <div className={style.defaultContent}>
                <p>Upon completion of this course, students will be able to:</p>
                <ul className={style.outcomesList}>
                  <li className={style.outcomeItem}>
                    <FaLightbulb className={style.outcomeIcon} />
                    Understand fundamental concepts and principles
                  </li>
                  <li className={style.outcomeItem}>
                    <FaLightbulb className={style.outcomeIcon} />
                    Apply practical skills in real-world scenarios
                  </li>
                  <li className={style.outcomeItem}>
                    <FaLightbulb className={style.outcomeIcon} />
                    Develop problem-solving and critical thinking abilities
                  </li>
                  <li className={style.outcomeItem}>
                    <FaLightbulb className={style.outcomeIcon} />
                    Build confidence in the subject area
                  </li>
                </ul>
              </div>
            )}
          </div>
        );
      
      case 'contents':
        return (
          <div className={style.tabContent}>
            <h3><FaClipboardList /> Course Contents</h3>
            {course.courseContents && course.courseContents.length > 0 ? (
              <div className={style.contentsList}>
                {course.courseContents.map((content, idx) => (
                  <div key={idx} className={style.contentItem}>
                    <h4>Module {idx + 1}</h4>
                    <p>{content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={style.defaultContent}>
                <div className={style.contentItem}>
                  <h4>Module 1: Introduction and Fundamentals</h4>
                  <p>Basic concepts, terminology, and foundational knowledge</p>
                </div>
                <div className={style.contentItem}>
                  <h4>Module 2: Core Concepts</h4>
                  <p>In-depth exploration of key principles and methodologies</p>
                </div>
                <div className={style.contentItem}>
                  <h4>Module 3: Practical Applications</h4>
                  <p>Hands-on exercises and real-world implementation</p>
                </div>
                <div className={style.contentItem}>
                  <h4>Module 4: Advanced Topics</h4>
                  <p>Complex scenarios and advanced techniques</p>
                </div>
                <div className={style.contentItem}>
                  <h4>Module 5: Project Work</h4>
                  <p>Capstone project and portfolio development</p>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'delivery':
        return (
          <div className={style.tabContent}>
            <h3><FaTruck /> Course Delivery</h3>
            <div className={style.deliveryInfo}>
              <p>{course.courseDelivery || 'This course is delivered through a combination of interactive online sessions, hands-on practical exercises, and project-based learning. Students will have access to recorded sessions, downloadable resources, and ongoing instructor support.'}</p>
              
              <div className={style.deliveryDetails}>
                <div className={style.deliveryItem}>
                  <h4>Format</h4>
                  <p>{course.format}</p>
                </div>
                <div className={style.deliveryItem}>
                  <h4>Duration</h4>
                  <p>6-8 weeks (flexible pacing)</p>
                </div>
                <div className={style.deliveryItem}>
                  <h4>Time Commitment</h4>
                  <p>3-5 hours per week</p>
                </div>
                <div className={style.deliveryItem}>
                  <h4>Support</h4>
                  <p>Instructor guidance and peer collaboration</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'materials':
        return (
          <div className={style.tabContent}>
            <h3><FaLaptop /> Course Materials</h3>
            <div className={style.materialsSection}>
              <h4>Required Materials</h4>
              <ul className={style.materialsList}>
                {course.materials && course.materials.length > 0 ? (
                  course.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))
                ) : (
                  <>
                    <li>A laptop or desktop computer with internet access</li>
                    <li>Modern web browser (Chrome, Firefox, Safari, or Edge)</li>
                    <li>Notebook and pen for taking notes</li>
                  </>
                )}
              </ul>
              
              <h4>Provided Materials</h4>
              <ul className={style.materialsList}>
                <li>Course slides and presentations</li>
                <li>Hands-on exercise files</li>
                <li>Project templates and starter code</li>
                <li>Additional reading materials and resources</li>
                <li>Access to online learning platform</li>
              </ul>
            </div>
          </div>
        );
      
      case 'pricing':
        const pricing = course.pricing || defaultPricing;
        return (
          <div className={style.tabContent}>
            <h3><FaDollarSign /> Course Pricing</h3>
            <div className={style.pricingSection}>
              <div className={style.pricingCards}>
                <div className={style.pricingCard}>
                  <h4>Student Rate</h4>
                  <div className={style.price}>
                    {pricing.currency === 'GHC' ? '₵' : '$'}{pricing.student}
                    <span className={style.currency}>{pricing.currency}</span>
                  </div>
                  <p>For students with valid student ID</p>
                  <ul>
                    <li>Full course access</li>
                    <li>All materials included</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
                
                <div className={`${style.pricingCard} ${style.featured}`}>
                  <div className={style.popularBadge}>Most Popular</div>
                  <h4>Early Bird</h4>
                  <div className={style.price}>
                    {pricing.currency === 'GHC' ? '₵' : '$'}{pricing.earlyBird}
                    <span className={style.currency}>{pricing.currency}</span>
                  </div>
                  <p>Register 2 weeks before start date</p>
                  <ul>
                    <li>Full course access</li>
                    <li>All materials included</li>
                    <li>Certificate of completion</li>
                    <li>Bonus resources</li>
                  </ul>
                </div>
                
                <div className={style.pricingCard}>
                  <h4>Regular Rate</h4>
                  <div className={style.price}>
                    {pricing.currency === 'GHC' ? '₵' : '$'}{pricing.regular}
                    <span className={style.currency}>{pricing.currency}</span>
                  </div>
                  <p>Standard registration rate</p>
                  <ul>
                    <li>Full course access</li>
                    <li>All materials included</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
              </div>
              
              <div className={style.pricingNote}>
                <p><strong>Note:</strong> All prices include course materials, access to online resources, and a certificate of completion. Payment plans are available upon request.</p>
                {pricing.notes && (
                  <p><strong>Additional Information:</strong> {pricing.notes}</p>
                )}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <OtherPagesHero heading={course.title} />
      <div className={style.courseDetail}>
        <div className={style.courseDetailWrapper}>
          <Link to="/courses" className={style.backLink}>
            <FaArrowLeft /> Back to Courses
          </Link>
          
          <div className={style.courseHeader}>
            <div className={style.courseHeaderContent}>
              <h1 className={style.courseTitle}>{course.title}</h1>
              {course.courseCode && (
                <span className={style.courseCode}>Course Code: {course.courseCode}</span>
              )}
              
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
            
            <div className={style.courseImageContainer}>
              <img src={course.image} alt={course.title} className={style.courseImage} />
            </div>
          </div>
          
          {/* Course Navigation Tabs */}
          <div className={style.courseTabs}>
            <button 
              className={`${style.tab} ${activeTab === 'overview' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaBookOpen /> Overview
            </button>
            <button 
              className={`${style.tab} ${activeTab === 'outcomes' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('outcomes')}
            >
              <FaLightbulb /> Learning Outcomes
            </button>
            <button 
              className={`${style.tab} ${activeTab === 'contents' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('contents')}
            >
              <FaClipboardList /> Course Contents
            </button>
            <button 
              className={`${style.tab} ${activeTab === 'delivery' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('delivery')}
            >
              <FaTruck /> Course Delivery
            </button>
            <button 
              className={`${style.tab} ${activeTab === 'materials' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              <FaLaptop /> Materials
            </button>
            <button 
              className={`${style.tab} ${activeTab === 'pricing' ? style.activeTab : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              <FaDollarSign /> Pricing
            </button>
          </div>

          {/* Tab Content */}
          <div className={style.tabContentContainer}>
            {renderTabContent()}
          </div>

          {/* Instructors Section */}
          {course.instructors && course.instructors.length > 0 && (
            <div className={style.instructorsSection}>
              <h3>Meet Your Instructors</h3>
              <div className={style.instructorsList}>
                {course.instructors.map((instructor, idx) => (
                  <div key={idx} className={style.instructorCard}>
                    <img 
                      src={instructor.image || '/images/Team/Techten team/Oscar_Asamoah_image.jpg'} 
                      alt={instructor.name}
                      className={style.instructorImage}
                    />
                    <div className={style.instructorInfo}>
                      <h4>{instructor.name}</h4>
                      <p className={style.instructorTitle}>{instructor.title || 'Course Instructor'}</p>
                      <div className={style.instructorContact}>
                        {instructor.email && (
                          <a href={`mailto:${instructor.email}`} className={style.contactLink}>
                            <FaEnvelope /> Email
                          </a>
                        )}
                        {instructor.linkedin && (
                          <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer" className={style.contactLink}>
                            <FaLinkedin /> LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sessions Section */}
          <div className={style.sessions}>
            <h3 className={style.sessionTitle}>Upcoming Sessions</h3>
            {(course.sessions || [])
              .filter(session => session?.date && session?.time)
              .map((session, idx) => (
                <div key={`${session.date}-${session.time}-${idx}`} className={style.session}>
                  <div className={style.sessionInfo}>
                    <FaCalendarAlt className={style.sessionIcon} />
                    <div>
                      <span className={style.sessionDate}>{session.date}</span>
                      <span className={style.time}>
                        <FaClock className={style.timeIcon} /> {session.time}
                      </span>
                      <span className={style.location}>{session.location}</span>
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

          {/* CTA Section */}
          <div className={style.ctaSection}>
            <h3>Ready to Start Learning?</h3>
            <p>Join this course and take your skills to the next level with hands-on learning and expert instruction.</p>
            <Link to={`/enrollment?id=${course.id}&title=${encodeURIComponent(course.title)}`}>
              <button className={style.ctaButton}>
                Enroll in This Course
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
