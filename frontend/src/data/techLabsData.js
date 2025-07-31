import { FaUsers, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const techLabsData = {
  hero: {
    title: "Tech Labs"
  },
  
  overview: {
    title: "Hands-on Technology Learning Labs",
    description: "Our Tech Labs provide immersive, hands-on learning experiences in various technology domains. Students gain practical skills through structured curricula led by industry professionals.",
    stats: [
      {
        icon: FaUsers,
        text: "300+ Students Trained"
      },
      {
        icon: FaLaptopCode,
        text: "12 Different Lab Types"
      },
      {
        icon: FaCalendarAlt,
        text: "Year-round Programs"
      }
    ]
  },
  
  labTypes: {
    title: "Our Lab Programs",
    description: "We offer specialized labs focusing on different technology domains to match students' interests and career goals.",
    types: [
      {
        title: "Coding Labs",
        icon: "FaCode",
        description: "Learn programming fundamentals and advanced concepts through hands-on projects.",
        features: [
          "Web development (HTML, CSS, JavaScript)",
          "Mobile app development",
          "Backend programming with Python/Node.js",
          "Database design and management"
        ]
      },
      {
        title: "Robotics Labs",
        icon: "FaRobot",
        description: "Design, build, and program robots to solve real-world challenges.",
        features: [
          "Arduino and Raspberry Pi programming",
          "Sensor integration and control systems",
          "Mechanical design principles",
          "Autonomous robot development"
        ]
      },
      {
        title: "Digital Skills Labs",
        icon: "FaLaptop",
        description: "Master essential digital tools and skills for the modern workplace.",
        features: [
          "Digital content creation",
          "Data analysis and visualization",
          "Cloud computing fundamentals",
          "Digital marketing basics"
        ]
      }
    ]
  },
  
  upcomingLabs: {
    title: "Upcoming Lab Sessions",
    labs: [
      {
        title: "Web Development Bootcamp",
        level: "Beginner",
        dates: "July 15 - August 30, 2025",
        location: "Accra Tech Hub",
        description: "A comprehensive introduction to modern web development using HTML, CSS, JavaScript, and React. Build responsive websites and interactive web applications.",
        spotsLeft: 8,
        registerLink: "/contact"
      },
      {
        title: "Python for Data Science",
        level: "Intermediate",
        dates: "August 5 - September 20, 2025",
        location: "Kumasi Innovation Center",
        description: "Learn how to analyze and visualize data using Python. Cover pandas, NumPy, matplotlib, and introduction to machine learning with scikit-learn.",
        spotsLeft: 5,
        registerLink: "/contact"
      },
      {
        title: "IoT with Arduino",
        level: "Beginner",
        dates: "September 10 - October 25, 2025",
        location: "Accra Tech Hub",
        description: "Build Internet of Things projects using Arduino. Learn about sensors, actuators, wireless communication, and create your own smart devices.",
        spotsLeft: 12,
        registerLink: "/contact"
      },
      {
        title: "Mobile App Development",
        level: "Intermediate",
        dates: "October 3 - November 15, 2025",
        location: "Virtual (Online)",
        description: "Create cross-platform mobile applications using React Native. Build apps that work on both iOS and Android from a single codebase.",
        spotsLeft: 10,
        registerLink: "/contact"
      }
    ]
  },
  
  curriculum: {
    title: "Lab Curriculum Structure",
    description: "Our labs follow a structured curriculum designed to build skills progressively while working on practical projects.",
    modules: [
      {
        title: "Foundations",
        topics: [
          "Core concepts and terminology",
          "Setting up development environment",
          "Basic tools and workflows",
          "Simple starter projects"
        ]
      },
      {
        title: "Core Skills",
        topics: [
          "Fundamental techniques",
          "Common patterns and best practices",
          "Problem-solving approaches",
          "Guided project work"
        ]
      },
      {
        title: "Advanced Concepts",
        topics: [
          "Complex techniques and patterns",
          "Performance optimization",
          "Integration with other technologies",
          "Team-based project development"
        ]
      },
      {
        title: "Capstone Project",
        topics: [
          "Project planning and management",
          "Implementation of learned concepts",
          "Testing and quality assurance",
          "Final presentation and demonstration"
        ]
      }
    ]
  },
  
  registration: {
    title: "Join a Tech Lab",
    description: "Ready to enhance your technical skills? Register for one of our upcoming lab sessions and start your journey toward technical proficiency.",
    buttonText: "View All Labs & Register",
    buttonLink: "/contact"
  }
};

export default techLabsData;
