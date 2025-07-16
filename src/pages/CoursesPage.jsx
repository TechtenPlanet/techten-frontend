import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch, FaGraduationCap } from 'react-icons/fa';
import CourseCard from '../components/CourseCard/CourseCard';
import { getCourses } from '../notion/courseService';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import style from './CoursesPage.module.css';

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Fetch courses from Notion
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setAllCourses(coursesData);
        setFilteredCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
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

  const loadMoreCourses = () => {
    setVisibleCourses(prev => prev + 4);
  };

  return (
    <>
      <OtherPagesHero heading="Courses & Programs" />
      
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
                {/* Featured course (first in the list) */}
                {filteredCourses.length > 0 && (
                  <div className={style.featuredCourse}>
                    <CourseCard 
                      course={filteredCourses[0]} 
                      featured={true} 
                      horizontal={true} 
                    />
                  </div>
                )}
                
                {/* Regular course cards */}
                {filteredCourses.slice(1, visibleCourses).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
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
