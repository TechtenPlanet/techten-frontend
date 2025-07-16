import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const coursesData = [
  {
    id: 1,
    title: 'AI Explorers – Introduction (Free Event)',
    grades: '4–9',
    description: 'From self-driving cars to AI-generated art, discover how AI is transforming the world. Engage in hands-on projects and discussions guided by expert instructors.',
    detailedDescription: 'This course provides a comprehensive introduction to the world of Artificial Intelligence. Students will learn the fundamental concepts of AI, including machine learning, neural networks, and natural language processing. The course is project-based, allowing students to apply their knowledge to real-world problems.',
    format: 'Online',
    category: 'AI & Machine Learning',
    prerequisites: ['Basic computer literacy'],
    materials: ['A laptop with internet access']
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    grades: '10–12',
    description: 'Learn to build modern, responsive websites from scratch. This bootcamp covers HTML, CSS, JavaScript, and React, preparing you for a future in web development.',
    detailedDescription: 'This intensive bootcamp is designed to equip students with the skills needed to become proficient web developers. The curriculum covers the entire web development stack, from front-end technologies like HTML, CSS, and JavaScript, to back-end development with Node.js and Express. Students will work on several projects, culminating in a final capstone project.',
    format: 'In-Person',
    category: 'Web Development',
    prerequisites: ['Basic understanding of programming concepts'],
    materials: ['A laptop with a code editor (e.g., VS Code)']
  },
  {
    id: 3,
    title: 'Vacation Bootcamp – Introduction (Free Event)',
    grades: 'JHS/SHS',
    description: 'From self-driving cars to AI-generated art, discover how AI is transforming the world. Engage in hands-on projects and discussions guided by expert instructors.',
    detailedDescription: 'This course provides a comprehensive introduction to the world of Artificial Intelligence. Students will learn the fundamental concepts of AI, including machine learning, neural networks, and natural language processing. The course is project-based, allowing students to apply their knowledge to real-world problems.',
    format: 'Hybrid',
    category: 'AI & Machine Learning',
    prerequisites: ['Basic computer literacy'],
    materials: ['A laptop with internet access']
  }
];

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });
const databaseId = process.env.REACT_APP_NOTION_COURSES_DB_ID;

async function migrateCourses() {
  for (const course of coursesData) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Name: { title: [{ text: { content: course.title } }] },
          Category: { select: { name: course.category } },
        },
      });
      console.log(`Successfully migrated course: ${course.title}`);
    } catch (error) {
      console.error(`Error migrating course: ${course.title}`, error);
    }
  }
}

migrateCourses();
