// Program data for the Programs page
import { FaRocket, FaLaptopCode, FaTrophy, FaBriefcase, FaFemale, FaBook } from 'react-icons/fa';

export const corePrograms = [
    {
        id: 1,
        title: "Project That Matters",
        icon: FaRocket,
        description: "A flagship program where students work in teams to solve real challenges like farm monitoring or overheating in vehicles. Projects are guided by mentors and often lead to job placements or product development.",
        image: require("../assets/images/students_at_techten.jpeg"),
        buttonText: "Learn More",
        buttonLink: "/programs/project-that-matters"
    },
    {
        id: 2,
        title: "Tech Labs & Code Clubs",
        icon: FaLaptopCode,
        description: "Our regional training centers provide 3–6 month project-based learning in coding, electronics, and digital tools. Labs are hosted in schools or community centers.",
        image: require("../assets/images/LearnwithRaspberrypi-at-Techtenplanet.jpeg"),
        buttonText: "Learn More",
        buttonLink: "/programs/tech-labs"
    },
    {
        id: 3,
        title: "Hackathons & Innovation Challenges",
        icon: FaTrophy,
        description: "Annual events where students pitch and build solutions in teams. These events encourage critical thinking and collaboration, and often lead to continued project support.",
        image: require("../assets/images/scratchcoding-at-techtenplanet.jpeg"),
        buttonText: "Learn More",
        buttonLink: "/programs/hackathons"
    },
    {
        id: 4,
        title: "Business Consultant Cohort",
        icon: FaBriefcase,
        description: "A specialized program that trains young professionals in business analysis, project management, and consulting skills. Participants work on real business challenges and develop solutions for local companies.",
        image: require("../assets/images/Joel_at_tehten.jpeg"),
        buttonText: "Learn More",
        buttonLink: "/programs/consultants"
    },
    {
        id: 5,
        title: "Tech for Girls Program",
        icon: FaFemale,
        description: "An initiative designed to encourage and support girls in technology fields. The program offers mentorship, specialized workshops, and projects that address gender-specific challenges in tech education.",
        image: require("../assets/images/techten_girl_robotics.png"),
        buttonText: "Learn More",
        buttonLink: "/programs/tech-for-girls"
    }
];

export const programsOverview = {
    title: "Programs at Techten Planet",
    icon: FaBook,
    description: "We design practical, hands-on programs that prepare young people in Ghana for real-world opportunities in technology and engineering. Our training is built around solving local problems, building job-ready skills, and creating a pathway to employment or entrepreneurship.",
    image: require("../assets/images/Girl-learning-coding-at-Techten-Ghana.jpeg")
};
