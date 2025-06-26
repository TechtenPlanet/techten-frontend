import courseImage from '../assets/images/courses_images/TechtenPlanet _Open_day_1.png';
import instructorImage from '../assets/images/Team/Techten team/Oscar_Asamoah_image.jpg';

const courses = [
  {
    id: 1,
    title: 'AI Explorers – Introduction (Free Event)',
    grades: '4–9',
    image: courseImage,
    description:
      'From self-driving cars to AI-generated art, discover how AI is transforming the world. Engage in hands-on projects and discussions guided by expert instructors.',
    detailedDescription: 'This course provides a comprehensive introduction to the world of Artificial Intelligence. Students will learn the fundamental concepts of AI, including machine learning, neural networks, and natural language processing. The course is project-based, allowing students to apply their knowledge to real-world problems.',
    instructors: [
      { name: 'John Doe', image: instructorImage, title: 'AI Specialist' },
      { name: 'Jane Smith', image: instructorImage, title: 'Machine Learning Engineer' }
    ],
    prerequisites: ['Basic computer literacy'],
    materials: ['A laptop with internet access'],
    studentProjects: [courseImage, courseImage, courseImage],
    format: 'Online',
    links: [
      { label: 'AI Explorers', url: '/courses' },
      { label: 'Create with ChatGPT', url: '/courses' },
      { label: 'AI Creators', url: '/courses' }
    ],
    sessions: [
      { date: 'Sunday, 27/04/2025', time: '18:30 – 19:35', full: true },
      { date: 'Wednesday, 30/04/2025', time: '01:00 – 02:05', full: false },
      { date: 'Friday, 09/05/2025', time: '02:30 – 03:35', full: false }
    ],
    category: 'AI & Machine Learning'
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    grades: '10–12',
    image: courseImage,
    description:
      'Learn to build modern, responsive websites from scratch. This bootcamp covers HTML, CSS, JavaScript, and React, preparing you for a future in web development.',
    detailedDescription: 'This intensive bootcamp is designed to equip students with the skills needed to become proficient web developers. The curriculum covers the entire web development stack, from front-end technologies like HTML, CSS, and JavaScript, to back-end development with Node.js and Express. Students will work on several projects, culminating in a final capstone project.',
    instructors: [
      { name: 'Alex Johnson', image: instructorImage, title: 'Full-Stack Developer' },
    ],
    prerequisites: ['Basic understanding of programming concepts'],
    materials: ['A laptop with a code editor (e.g., VS Code)'],
    studentProjects: [courseImage, courseImage, courseImage],
    format: 'In-Person',
    links: [
      { label: 'HTML & CSS Basics', url: '/courses' },
      { label: 'JavaScript Fundamentals', url: '/courses' },
      { label: 'React for Beginners', url: '/courses' }
    ],
    sessions: [
      { date: 'Monday, 05/05/2025', time: '10:00 – 12:00', full: false },
      { date: 'Wednesday, 07/05/2025', time: '10:00 – 12:00', full: false },
      { date: 'Friday, 09/05/2025', time: '10:00 – 12:00', full: false }
    ],
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Vacation Bootcamp – Introduction (Free Event)',
    grades: 'JHS/SHS',
    image: courseImage,
    description:
      'From self-driving cars to AI-generated art, discover how AI is transforming the world. Engage in hands-on projects and discussions guided by expert instructors.',
    detailedDescription: 'This course provides a comprehensive introduction to the world of Artificial Intelligence. Students will learn the fundamental concepts of AI, including machine learning, neural networks, and natural language processing. The course is project-based, allowing students to apply their knowledge to real-world problems.',
    instructors: [
        { name: 'John Doe', image: instructorImage, title: 'AI Specialist' },
        { name: 'Jane Smith', image: instructorImage, title: 'Machine Learning Engineer' }
    ],
    prerequisites: ['Basic computer literacy'],
    materials: ['A laptop with internet access'],
    studentProjects: [courseImage, courseImage, courseImage],
    format: 'Hybrid',
    links: [
      { label: 'AI Explorers', url: '/courses' },
      { label: 'Create with ChatGPT', url: '/courses' },
      { label: 'AI Creators', url: '/courses' }
    ],
    sessions: [
      { date: 'Sunday, 27/04/2025', time: '18:30 – 19:35', full: true },
      { date: 'Wednesday, 30/04/2025', time: '01:00 – 02:05', full: false },
      { date: 'Friday, 09/05/2025', time: '02:30 – 03:35', full: false }
    ],
    category: 'AI & Machine Learning'
  }
];

export default courses;
