import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch, FaGraduationCap } from 'react-icons/fa';
import CourseCard from '../components/CourseCard/CourseCard';
import { getCourses } from '../notion/courseService';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import CourseTeasers from '../components/CourseTeasers/CourseTeasers';
import style from './CoursesPage.module.css';

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [error, setError] = useState(null); // Add error state

  // Fetch courses from Notion
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true); // Ensure loading is set to true before fetch
        const coursesData = await getCourses();
        setAllCourses(coursesData);
        setFilteredCourses(coursesData);
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

  // Get all unique categories from courses
  const allCategories = useMemo(() => 
    ['All', ...new Set(allCourses.map(course => course.category))],
    [allCourses]
  );

  // Filter courses based on category and search term
  useEffect(() => {
    let result = allCourses;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(course => course.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.description.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredCourses(result);
  }, [activeCategory, searchTerm, allCourses]);

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

  const loadMoreCourses = () => {
    setVisibleCourses(prev => prev + 4);
  };

  return (
    <>
      <OtherPagesHero heading="Courses & Programs" />
      <CourseTeasers source="Courses Page" />
      
      <div className={style.coursesSection}>
        <div className={style.coursesSectionWrapper}>
          <div className={style.courseFilters}>
            <h2 className={style.sectionTitle}>Explore Our Educational Programs</h2>
            <p className={style.sectionSubtitle}>
              Discover hands-on, project-based learning experiences designed to inspire and equip the next generation of technology leaders and innovators.
            </p>
            
            <div className={style.searchContainer}>
              <FaSearch className={style.searchIcon} />
              <input
                type="text"
                placeholder="Search courses..."
                className={style.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className={style.tagFilters}>
              {allCategories.map(category => (
                <button 
                  key={category} 
                  className={`${style.tagButton} ${activeCategory === category ? style.activeTag : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <>
              <div className={style.courseGrid}>
                {/* Conditionally render featured course or regular cards */}
                {filteredCourses.length > 2 ? ( /* If more than 2 courses, show featured */
                  <>
                    <div className={style.featuredCourse}>
                      <CourseCard 
                        course={filteredCourses[0]} 
                        featured={true} 
                        horizontal={true} 
                      />
                    </div>
                    {filteredCourses.slice(1, visibleCourses).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : ( /* If 2 or fewer courses, display all as regular cards */
                  filteredCourses.slice(0, visibleCourses).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))
                )}
              </div>
              
              {visibleCourses < filteredCourses.length && (
                <div className={style.loadMoreContainer}>
                  <button className={style.loadMoreButton} onClick={loadMoreCourses}>
                    Load More Courses
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <FaGraduationCap style={{ fontSize: '3rem', color: '#a0aec0', marginBottom: '1rem' }} />
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
          
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
