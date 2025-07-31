import React, { useState, useEffect } from 'react';
import style from './CourseSamples.module.css';
import CourseCard from '../CourseCard/CourseCard';
import { getCourses } from '../../notion/courseService';

const CourseSamples = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses from Notion
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const sampleCourses = courses.slice(0, 2);

  if (loading) {
    return (
      <div className={style.courseSamples}>
        <h2>Explore Our Courses</h2>
        <div className={style.samplesContainer}>
          <p>Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.courseSamples}>
      <h2>Explore Our Courses</h2>
      <div className={style.samplesContainer}>
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSamples;
