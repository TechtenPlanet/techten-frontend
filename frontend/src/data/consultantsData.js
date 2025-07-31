import { FaUsers, FaBriefcase, FaChartLine } from 'react-icons/fa';

const consultantsData = {
  hero: {
    title: "Business Consultant Cohort"
  },
  
  overview: {
    title: "Developing Business Technology Consultants",
    description: "Our Business Consultant Cohort program trains young professionals in business analysis, project management, and technology consulting skills. Participants work on real business challenges and develop solutions for local companies.",
    stats: [
      {
        icon: FaUsers,
        text: "120+ Graduates"
      },
      {
        icon: FaBriefcase,
        text: "85% Employment Rate"
      },
      {
        icon: FaChartLine,
        text: "40+ Partner Companies"
      }
    ]
  },
  
  benefits: {
    title: "Program Benefits",
    items: [
      {
        title: "Industry-Relevant Skills",
        description: "Gain practical skills in business analysis, project management, and technology consulting that are in high demand across industries."
      },
      {
        title: "Real-World Experience",
        description: "Work on actual business challenges from partner companies, building a portfolio of consulting projects."
      },
      {
        title: "Professional Network",
        description: "Connect with industry professionals, mentors, and a community of like-minded peers."
      },
      {
        title: "Career Support",
        description: "Receive guidance on job applications, interview preparation, and career planning from our dedicated career services team."
      },
      {
        title: "Certification Preparation",
        description: "Prepare for industry-recognized certifications in project management, business analysis, and consulting."
      },
      {
        title: "Entrepreneurship Pathway",
        description: "Develop the skills needed to start your own consulting practice or technology business."
      }
    ]
  },
  
  curriculum: {
    title: "Program Curriculum",
    description: "Our comprehensive curriculum is designed to build both technical and soft skills essential for successful business technology consultants.",
    modules: [
      {
        title: "Business Analysis Fundamentals",
        topics: [
          "Requirements gathering and documentation",
          "Business process modeling",
          "Stakeholder analysis and management",
          "Data analysis and visualization"
        ]
      },
      {
        title: "Project Management Essentials",
        topics: [
          "Project planning and scheduling",
          "Risk management",
          "Agile and traditional methodologies",
          "Team leadership and coordination"
        ]
      },
      {
        title: "Technology Solutions",
        topics: [
          "Digital transformation strategies",
          "Software selection and implementation",
          "IT infrastructure planning",
          "Technology trend analysis"
        ]
      },
      {
        title: "Consulting Skills",
        topics: [
          "Client relationship management",
          "Proposal writing and presentation",
          "Problem-solving frameworks",
          "Change management"
        ]
      }
    ]
  },
  
  testimonials: {
    title: "What Our Graduates Say",
    items: [
      {
        text: "The Business Consultant Cohort program gave me the perfect blend of business and technology skills. I'm now working as a digital transformation consultant for a major bank, helping them modernize their systems.",
        name: "Kwame Mensah",
        title: "Digital Transformation Consultant, GhanaBank",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        text: "I joined the program with a background in business but limited tech knowledge. Now I confidently bridge the gap between business needs and technical solutions. The hands-on projects were invaluable for my learning.",
        name: "Ama Darko",
        title: "Business Systems Analyst, TechSolutions Ghana",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      }
    ]
  },
  
  alumni: {
    title: "Alumni Success Stories",
    description: "Our graduates have gone on to successful careers in consulting, project management, and business analysis across various industries.",
    profiles: [
      {
        name: "David Osei",
        currentRole: "Senior Business Analyst",
        company: "Accenture Ghana",
        cohort: "2023 Cohort",
        description: "David led a digital transformation project for a major telecommunications company after graduation, resulting in a 30% improvement in customer service efficiency.",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        name: "Fatima Ibrahim",
        currentRole: "Technology Consultant",
        company: "Deloitte West Africa",
        cohort: "2022 Cohort",
        description: "Fatima specializes in financial technology solutions and has helped multiple banks implement digital banking platforms.",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        name: "Emmanuel Addo",
        currentRole: "Founder & Lead Consultant",
        company: "GhanaTech Advisors",
        cohort: "2021 Cohort",
        description: "Emmanuel started his own consulting firm focusing on helping small businesses adopt appropriate technology solutions for growth.",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      }
    ]
  },
  
  application: {
    title: "Join Our Next Cohort",
    description: "We're looking for motivated individuals with a passion for business and technology. Our intensive program will prepare you for a rewarding career in business technology consulting.",
    nextCohort: "September 15 - December 15, 2025",
    location: "Accra Tech Hub with some virtual components",
    cohortSize: "25 participants",
    buttonText: "Apply Now",
    buttonLink: "/contact"
  }
};

export default consultantsData;
