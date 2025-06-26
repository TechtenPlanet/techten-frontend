import { 
  FaHandsHelping, 
  FaUserFriends, 
  FaDollarSign, 
  FaHandshake, 
  FaUsers,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';

const getInvolvedData = {
  hero: {
    title: "Join Our Mission",
    description: "Change starts with people like you. Whether you're a professional, student, donor, or organization, there's a place for you at Techten Planet. Together, we can empower Ghana's youth with the tools to shape the future."
  },
  
  stats: [
    {
      icon: FaUsers,
      text: "500+ Students Impacted"
    },
    {
      icon: FaLaptopCode,
      text: "20+ Tech Programs"
    },
    {
      icon: FaMapMarkerAlt,
      text: "5 Regions in Ghana"
    }
  ],
  
  contributionWays: {
    title: "How You Can Make an Impact",
    subtitle: "Choose the path that matches your skills, interests, and availability",
    ways: [
      {
        id: 1,
        icon: FaHandsHelping,
        title: "Volunteer Your Skills",
        description: "Support workshops, mentor students, help us build content or translate materials.",
        highlight: "Engineers, educators, creators — all welcome!",
        buttonText: "Volunteer Sign-Up",
        buttonLink: "#get-involved-forms"
      },
      {
        id: 2,
        icon: FaUserFriends,
        title: "Mentorship Programs",
        description: "Guide a student or team working on real-world projects.",
        highlight: "Virtual or in-person. 1–2 hours a week.",
        buttonText: "Mentor Registration",
        buttonLink: "#get-involved-forms"
      },
      {
        id: 3,
        icon: FaDollarSign,
        title: "Sponsor a Program",
        description: "Fund a lab, a hackathon, or a student team.",
        highlight: "$5,000 can launch a full 3-month lab cycle.",
        buttonText: "Sponsorship Interest",
        buttonLink: "#get-involved-forms"
      },
      {
        id: 4,
        icon: FaHandshake,
        title: "Partner with Us",
        description: "We collaborate with schools, NGOs, and tech companies to expand STEM access. Let's build something together.",
        buttonText: "Partnership Inquiry",
        buttonLink: "#get-involved-forms"
      }
    ]
  },
  
  urgentNeeds: {
    title: "Urgent Volunteer Needs",
    subtitle: "These high-priority roles directly impact our ability to serve more students",
    needs: [
      "Guest speakers for our upcoming hackathon",
      "UX/UI designers to support our student projects",
      "Local coordinators in Eastern and Ashanti regions"
    ],
    buttonText: "Apply or Refer Someone",
    buttonLink: "#get-involved-forms"
  },
  
  testimonial: {
    quote: "Being part of Techten Planet has reminded me that small efforts can lead to life-changing opportunities for young people in Ghana. The joy on students' faces when they create their first program is priceless.",
    author: "Past volunteer mentor, Belgium"
  },
  
  callToAction: {
    title: "Ready to make a difference?",
    buttons: [
      {
        text: "Get Started",
        link: "#get-involved-forms",
        primary: true
      },
      {
        text: "Donate Now",
        link: "/donate",
        primary: true
      },
      {
        text: "Share Our Mission",
        link: "#",
        primary: false
      }
    ]
  },
  
  contact: {
    title: "Have Questions? Reach Out Directly",
    email: "admin@techtenplanet.org",
    whatsapp: "+233 596 905 337",
    responseTime: "We typically respond within 24 hours"
  }
};

export default getInvolvedData;
