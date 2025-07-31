import { FaUsers, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const hackathonsData = {
  hero: {
    title: "Hackathons"
  },
  
  overview: {
    title: "Innovation Through Collaboration",
    description: "Our hackathons bring together talented students, mentors, and industry partners to solve real-world challenges through technology. These intensive events foster creativity, teamwork, and rapid skill development.",
    stats: [
      {
        icon: FaUsers,
        text: "500+ Participants"
      },
      {
        icon: FaLaptopCode,
        text: "12 Hackathons Completed"
      },
      {
        icon: FaTrophy,
        text: "40+ Winning Projects"
      }
    ]
  },
  
  benefits: {
    title: "Why Participate in Our Hackathons",
    items: [
      {
        title: "Innovation",
        icon: "FaLightbulb",
        description: "Develop creative solutions to real-world problems in a supportive, high-energy environment."
      },
      {
        title: "Collaboration",
        icon: "FaUsers",
        description: "Work with diverse teams and learn from peers with different skills and perspectives."
      },
      {
        title: "Skill Building",
        icon: "FaCode",
        description: "Rapidly improve your technical and soft skills through intensive, hands-on experience."
      },
      {
        title: "Recognition",
        icon: "FaTrophy",
        description: "Showcase your talents, win prizes, and gain recognition from industry professionals."
      }
    ]
  },
  
  upcomingEvents: {
    title: "Upcoming Hackathons",
    events: [
      {
        title: "GreenTech Hackathon",
        theme: "Sustainable Technology Solutions",
        date: "August 12-14, 2025",
        location: "Accra Tech Hub",
        highlights: [
          "Focus on environmental sustainability and climate tech",
          "$2,000 in prizes and mentorship opportunities",
          "Open to students and young professionals",
          "No prior hackathon experience required"
        ],
        registerLink: "/contact"
      },
      {
        title: "HealthTech Challenge",
        theme: "Digital Solutions for Healthcare Access",
        date: "October 8-10, 2025",
        location: "Kumasi Innovation Center",
        highlights: [
          "Develop solutions to improve healthcare access in rural areas",
          "Mentorship from healthcare professionals and tech experts",
          "$3,000 in prizes and incubation support for winning teams",
          "Open to all skill levels"
        ],
        registerLink: "/contact"
      }
    ]
  },
  
  pastEvents: {
    title: "Past Hackathons",
    viewMoreLink: "/programs",
    events: [
      {
        title: "EdTech Hackathon 2024",
        date: "March 2024",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        description: "Focused on creating innovative educational technology solutions for remote learning environments.",
        winner: "Team EduConnect - A peer-to-peer tutoring platform with offline capabilities"
      },
      {
        title: "FinTech Innovation Challenge",
        date: "November 2023",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        description: "Participants developed solutions to improve financial inclusion and literacy in underserved communities.",
        winner: "Team CashWise - A gamified financial literacy app for young adults"
      },
      {
        title: "AgriTech Hackathon",
        date: "July 2023",
        image: "/src/assets/images/techten_hero_image.png", // Placeholder - replace with actual image
        description: "Challenged teams to create technology solutions for small-scale farmers across Ghana.",
        winner: "Team HarvestHub - A mobile marketplace connecting farmers directly to buyers"
      }
    ]
  },
  
  sponsors: {
    title: "Our Sponsors & Partners",
    description: "Our hackathons are made possible through the generous support of these organizations committed to fostering tech talent in Ghana.",
    becomeLink: "/contact",
    companies: [
      {
        name: "Tech Company 1",
        logo: "/src/assets/images/logo.png" // Placeholder - replace with actual logo
      },
      {
        name: "Tech Company 2",
        logo: "/src/assets/images/logo.png" // Placeholder - replace with actual logo
      },
      {
        name: "Tech Company 3",
        logo: "/src/assets/images/logo.png" // Placeholder - replace with actual logo
      },
      {
        name: "Tech Company 4",
        logo: "/src/assets/images/logo.png" // Placeholder - replace with actual logo
      }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    ctaText: "Have more questions about our hackathons?",
    ctaLink: "/contact",
    questions: [
      {
        question: "Do I need to be an experienced programmer to participate?",
        answer: "No, our hackathons welcome participants of all skill levels. We encourage diverse teams with a mix of technical and non-technical backgrounds. What's most important is your enthusiasm, creativity, and willingness to learn."
      },
      {
        question: "How are teams formed?",
        answer: "You can register as an individual or with a pre-formed team. For individual participants, we facilitate team formation sessions at the beginning of each hackathon to help you find teammates with complementary skills."
      },
      {
        question: "What should I bring to a hackathon?",
        answer: "Bring your laptop, charger, any specific hardware you might need for your project, and your enthusiasm! We provide meals, snacks, and a comfortable workspace for the duration of the event."
      },
      {
        question: "How are winners selected?",
        answer: "Projects are judged by a panel of industry experts and mentors based on criteria including innovation, technical implementation, user experience, potential impact, and presentation quality."
      }
    ]
  }
};

export default hackathonsData;
