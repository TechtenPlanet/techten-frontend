import { FaUsers, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const projectThatMattersData = {
  hero: {
    title: "Projects That Matter"
  },
  
  overview: {
    title: "Real-World Projects with Real Impact",
    description: "Our 'Projects That Matter' program connects students with real-world challenges from local communities and businesses. Students work in teams to develop innovative tech solutions that make a tangible difference.",
    stats: [
      {
        icon: FaUsers,
        text: "150+ Students Participated"
      },
      {
        icon: FaLaptopCode,
        text: "35+ Projects Completed"
      },
      {
        icon: FaCalendarAlt,
        text: "3 Cohorts Per Year"
      }
    ]
  },
  
  benefits: {
    title: "Program Benefits",
    items: [
      {
        title: "Practical Experience",
        description: "Apply coding and engineering skills to solve real problems faced by communities and businesses."
      },
      {
        title: "Teamwork",
        description: "Collaborate with peers from diverse backgrounds to develop comprehensive solutions."
      },
      {
        title: "Mentorship",
        description: "Receive guidance from industry professionals who provide feedback and advice."
      },
      {
        title: "Portfolio Building",
        description: "Create projects that demonstrate your skills to future employers or educational institutions."
      },
      {
        title: "Community Impact",
        description: "See your work make a real difference in local communities and organizations."
      },
      {
        title: "Networking",
        description: "Connect with local businesses, NGOs, and tech professionals in your field of interest."
      }
    ]
  },
  
  projects: {
    title: "Featured Projects",
    description: "Here are some of the impactful projects our students have developed:",
    items: [
      {
        title: "AgriTech Mobile App",
        description: "A mobile application that helps local farmers track crop health, weather patterns, and market prices to optimize their harvests and increase income.",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        team: "Team of 5 students",
        year: "2024"
      },
      {
        title: "Community Health Tracker",
        description: "A web platform that enables community health workers to monitor patient health data, schedule follow-ups, and access medical resources in remote areas.",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        team: "Team of 4 students",
        year: "2023"
      },
      {
        title: "Educational Resource Hub",
        description: "An online repository of educational materials for schools with limited resources, featuring offline access capabilities and interactive learning tools.",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        team: "Team of 6 students",
        year: "2023"
      },
      {
        title: "Waste Management System",
        description: "An IoT-based solution that optimizes waste collection routes and schedules based on bin fill levels, reducing operational costs and environmental impact.",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        team: "Team of 3 students",
        year: "2022"
      }
    ]
  },
  
  application: {
    title: "Join Our Next Cohort",
    description: "We're looking for motivated students who want to use technology to make a difference. Our next cohort starts soon!",
    requirements: [
      "Basic programming knowledge (HTML, CSS, JavaScript, Python, or similar)",
      "Commitment to attend weekly sessions for 3 months",
      "Passion for solving real-world problems",
      "Ability to work collaboratively in a team"
    ],
    buttonText: "Apply Now",
    buttonLink: "/contact"
  }
};

export default projectThatMattersData;
