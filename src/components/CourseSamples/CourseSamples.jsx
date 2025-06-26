import React from 'react';
import style from './CourseSamples.module.css';
import CourseCard from '../CourseCard/CourseCard';
import courses from '../../data/coursedata';

const CourseSamples = () => {
  const sampleCourses = courses.slice(0, 2);

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
