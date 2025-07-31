import { FaFemale, FaUsers, FaGraduationCap } from 'react-icons/fa';

const techForGirlsData = {
  hero: {
    title: "Tech for Girls Program"
  },
  
  overview: {
    title: "Empowering Girls in Technology",
    description: "Our Tech for Girls Program is designed to encourage and support girls in technology fields. We provide mentorship, specialized workshops, and projects that address gender-specific challenges in tech education.",
    stats: [
      {
        icon: FaFemale,
        text: "500+ Girls Trained"
      },
      {
        icon: FaUsers,
        text: "25+ Female Mentors"
      },
      {
        icon: FaGraduationCap,
        text: "12 Schools Partnered"
      }
    ]
  },
  
  mission: {
    title: "Our Mission",
    description: "We're on a mission to close the gender gap in technology by creating supportive, engaging, and inspiring environments where girls can develop technical skills and confidence.",
    image: require("../assets/images/techten_girl_robotics.png"),
    points: [
      "Provide girls with female role models in technology fields",
      "Create safe spaces for learning and experimentation",
      "Develop curriculum that connects technology to real-world problems girls care about",
      "Build a supportive community of peers and mentors",
      "Prepare girls for higher education and careers in STEM"
    ]
  },
  
  programs: {
    title: "Our Programs",
    description: "We offer a variety of programs tailored to different age groups and interests, all designed to make technology accessible, engaging, and relevant for girls.",
    items: [
      {
        title: "Code Girls Club",
        icon: "FaLaptopCode",
        description: "An after-school program where girls learn programming through creative projects like animations, games, and interactive stories.",
        ageGroup: "10-14 years",
        duration: "12 weeks",
        link: "/contact"
      },
      {
        title: "Tech Mentorship",
        icon: "FaUsers",
        description: "A one-on-one mentorship program pairing girls with women working in technology fields for guidance, support, and career advice.",
        ageGroup: "15-18 years",
        duration: "6 months",
        link: "/contact"
      },
      {
        title: "Girls Innovation Lab",
        icon: "FaFemale",
        description: "A project-based program where girls identify community problems and develop technology solutions, from concept to prototype.",
        ageGroup: "14-18 years",
        duration: "16 weeks",
        link: "/contact"
      }
    ]
  },
  
  impact: {
    title: "Our Impact",
    stats: [
      {
        number: "85%",
        label: "Continued Interest",
        description: "of participants express interest in pursuing further education or careers in technology fields"
      },
      {
        number: "90%",
        label: "Confidence Boost",
        description: "of girls report increased confidence in their technical abilities after completing our programs"
      },
      {
        number: "70%",
        label: "Leadership Roles",
        description: "of alumni take on leadership roles in STEM clubs or activities at their schools"
      }
    ],
    quote: {
      text: "The Tech for Girls program changed my life. Before, I thought technology wasn't for me. Now I'm studying computer science and mentoring younger girls in the program.",
      author: "Abena Mensah",
      title: "Program Alumna, now Computer Science Student at University of Ghana"
    }
  },
  
  mentors: {
    title: "Our Mentors",
    description: "Our programs are supported by a dedicated team of female mentors who work in various technology fields and are passionate about inspiring the next generation.",
    profiles: [
      {
        name: "Grace Asamoah",
        title: "Software Engineer",
        company: "Google Ghana",
        specialty: "Web Development",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        name: "Fatima Alhassan",
        title: "Data Scientist",
        company: "MTN Ghana",
        specialty: "AI & Machine Learning",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        name: "Esther Osei",
        title: "UX Designer",
        company: "Techten Planet",
        specialty: "User Experience Design",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      },
      {
        name: "Akosua Darko",
        title: "Robotics Engineer",
        company: "Ashesi University",
        specialty: "Robotics & Electronics",
        image: "/src/assets/images/techten_hero_image.png" // Placeholder - replace with actual image
      }
    ],
    becomeLink: "/get-involved?form=mentor"
  },
  
  events: {
    title: "Upcoming Events",
    items: [
      {
        title: "Girls Code Weekend",
        type: "Workshop",
        date: "July 15-16, 2025",
        location: "Accra Tech Hub",
        description: "A weekend-long coding workshop for beginners. Learn the basics of programming through fun, creative projects. No prior experience required!",
        registerLink: "/contact"
      },
      {
        title: "Women in Tech Panel",
        type: "Discussion",
        date: "August 5, 2025",
        location: "Virtual Event",
        description: "Join us for an inspiring panel discussion with successful women in technology sharing their journeys, challenges, and advice for girls interested in tech careers.",
        registerLink: "/contact"
      }
    ]
  },
  
  registration: {
    title: "Join Our Program",
    description: "We're always looking for enthusiastic girls who want to explore the world of technology in a supportive, fun environment. Our next program cycle begins soon!",
    buttonText: "Register Now",
    buttonLink: "/contact"
  }
};

export default techForGirlsData;
