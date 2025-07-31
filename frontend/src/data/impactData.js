// Example data for the Impact Section
// Replace with actual data and image paths
import studentsImage from '../assets/images/students_at_techten.jpeg';
import { FaGraduationCap, FaClock, FaMoneyBillWave, FaPercentage, FaBrain, FaHandshake } from 'react-icons/fa';

const impactData = {
  // Impact Overview Section
  overview: {
    title: "What we have achieved so far",
    description: "At Techten Planet, we believe that hands-on STEM education has the power to transform lives. Since 2021, we've been training the next generation of tech and engineering leaders across Ghana thereby creating job pathways, supporting communities, and solving local challenges.",
    image: studentsImage // Using an existing image from assets
  },
  
  // Stats Section
  sectionTitle: "Our Impact",
  sectionSubtitle: "Making a tangible difference in Ghana's tech landscape.",
  stats: [
    { id: "trained", label: "Students Trained", value: "500+" },
    { id: "partnered", label: "Schools Partnered", value: "20+" },
    { id: "employment", label: "Graduate Employment Rate", value: "75%" }
  ],
  
  // New Impact Stats Grid
  impactGrid: [
    { id: "students", label: "Students & teachers reached outside Accra", value: "200+", icon: FaGraduationCap },
    { id: "hours", label: "Hours of hands-on learning per 6 months", value: "2190+", icon: FaClock },
    { id: "investment", label: "Social value invested in communities", value: "$100,000+", icon: FaMoneyBillWave },
    { id: "donations", label: "Donations used directly for programs", value: "100%", icon: FaPercentage },
    { id: "teams", label: "Innovation teams now working in remote jobs", value: "3", icon: FaBrain },
    { id: "partners", label: "Collaborating STEM/STEAM partners", value: "10+", icon: FaHandshake }
  ],
  
  // Project Highlights
  projectHighlights: [
    {
      id: 1,
      title: "Overheating in Cars",
      description: "Built a safety system to monitor car temperature and alert drivers.",
      result: "Prototype deployed by student team SASEK LABS.",
      image: require("../assets/images/students_at_techten.jpeg")
    },
    {
      id: 2,
      title: "Smart Farm Monitoring",
      description: "AgroTech developed a weather-based monitoring tool for crops.",
      result: "Now being piloted with farmers in the Greater Accra region.",
      image: require("../assets/images/LearnwithRaspberrypi-at-Techtenplanet.jpeg")
    },
    {
      id: 3,
      title: "Prenatal Health Support",
      description: "Student-built app to support exercise and health tracking for pregnant women.",
      result: "",
      image: require("../assets/images/Girl-learning-coding-at-Techten-Ghana.jpeg")
    }
  ],
  
  // Success Story Section
  successStory: { // Optional success story
    heading: "Success Story",
    name: "Akosua Mensah",
    quote: "Techten Planet gave me the skills and confidence to land my dream job as a software developer!",
    image: null // Add path to an image if available, e.g., import img from '...'; image: img;
  }
};

export default impactData;
