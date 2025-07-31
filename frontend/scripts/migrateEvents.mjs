import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const eventsData = [
  {
    id: 1,
    title: "Annual Tech Hackathon 2024",
    excerpt: "Join us for 48 hours of coding, collaboration, and innovation as teams compete to develop solutions for sustainable development.",
    description: "Techten Planet's Annual Tech Hackathon brings together talented students, mentors, and industry professionals for an intensive weekend of creative problem-solving. This year's theme focuses on developing technology solutions that address the United Nations Sustainable Development Goals, with a particular emphasis on challenges facing Ghanaian communities.\n\nParticipants will form teams of 3-5 members and have 48 hours to conceptualize, design, and build a working prototype. Throughout the event, teams will have access to mentors from leading technology companies who will provide guidance and feedback. The hackathon will conclude with team presentations and judging by a panel of industry experts.\n\nPrizes include cash awards, internship opportunities, and continued support to develop promising projects beyond the hackathon. Whether you're an experienced coder or just starting your tech journey, this event offers a valuable opportunity to enhance your skills, expand your network, and make a positive impact through technology.",
    location: "Techten Innovation Hub, Accra",
    date: "July 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    image: "/images/students_at_techten.jpeg",
    registrationLink: "/events/register/hackathon-2024",
    tags: ["Hackathon", "Coding", "Innovation"]
  },
  {
    id: 2,
    title: "Girls in STEM Workshop Series",
    excerpt: "A monthly workshop series designed to inspire and equip young women with hands-on experience in various STEM fields.",
    description: "The Girls in STEM Workshop Series is a monthly program designed to encourage female participation in science, technology, engineering, and mathematics. Each session focuses on a different STEM discipline, providing hands-on activities, inspiring speakers, and practical skills development.\n\nThis month's workshop will focus on robotics and automation, with participants learning to build and program simple robots using Arduino kits. The session will be led by Akosua Mensah, a robotics engineer and Techten Planet alumna who now works with a leading technology company in Ghana.\n\nThe workshop is open to girls aged 12-18, with no prior experience required. All materials will be provided, and participants will work in small groups to ensure personalized attention and support. Beyond the technical skills, the workshop emphasizes collaboration, creative problem-solving, and building confidence in STEM abilities.\n\nBy creating a supportive environment where girls can explore technology without gender stereotypes or barriers, we aim to inspire the next generation of female scientists, engineers, and technology leaders in Ghana.",
    location: "Techten Learning Center, Kumasi",
    date: "June 24, 2024",
    time: "10:00 AM - 3:00 PM",
    image: "/images/techten_girl_robotics.png",
    registrationLink: "/events/register/girls-stem-workshop",
    tags: ["Women in Tech", "STEM Education", "Robotics"]
  },
  {
    id: 3,
    title: "Tech Career Fair 2024",
    excerpt: "Connect with technology companies, startups, and educational institutions to explore career opportunities in Ghana's growing tech sector.",
    description: "The Tech Career Fair brings together employers, educational institutions, and job seekers for a day of networking, learning, and career development. This event is designed to bridge the gap between technical talent and employment opportunities in Ghana's rapidly expanding technology sector.\n\nAttendees will have the opportunity to meet representatives from leading technology companies, innovative startups, and organizations with technical needs. The fair will feature company booths, on-site interviews, resume reviews, and a series of short presentations on technology career paths and industry trends.\n\nIn addition to job opportunities, the event will showcase educational programs, bootcamps, and certification courses for those looking to enhance their skills or transition into technology careers. Career advisors will be available to provide guidance on professional development, interview preparation, and navigating the tech job market.\n\nWhether you're a recent graduate, an experienced professional looking to change careers, or a tech enthusiast exploring your options, the Tech Career Fair offers valuable connections and insights to help you advance your professional journey in the technology sector.",
    location: "Accra International Conference Center",
    date: "August 5, 2024",
    time: "9:00 AM - 4:00 PM",
    image: "/images/Joel_at_tehten.jpeg",
    registrationLink: "/events/register/career-fair-2024",
    tags: ["Career Development", "Networking", "Tech Industry"]
  },
  {
    id: 4,
    title: "Raspberry Pi Workshop for Educators",
    excerpt: "Learn how to integrate affordable computing into your classroom with hands-on training on Raspberry Pi projects and curriculum resources.",
    description: "This professional development workshop is designed for teachers and educators who want to incorporate affordable computing technology into their classrooms. The Raspberry Pi, a credit card-sized computer, offers an accessible and engaging platform for teaching programming, electronics, and computational thinking across various subject areas.\n\nDuring this full-day workshop, participants will receive hands-on training with Raspberry Pi hardware and software. The session will cover basic setup, programming fundamentals using Python, and a variety of educational projects that can be implemented in classroom settings. Educators will learn how to create interactive learning experiences that align with curriculum objectives while building students' digital skills.\n\nThe workshop will also introduce free educational resources, lesson plans, and assessment strategies that can be adapted for different age groups and subject areas. Participants will explore how Raspberry Pi projects can be used to teach concepts in science, mathematics, art, and even humanities subjects through cross-disciplinary approaches.\n\nAll participants will receive a Raspberry Pi starter kit to take back to their schools, along with ongoing support through our educator community. No prior experience with programming or electronics is required – just bring your curiosity and enthusiasm for innovative teaching methods.",
    location: "Techten Training Center, Cape Coast",
    date: "July 8, 2024",
    time: "9:00 AM - 4:00 PM",
    image: "/images/LearnwithRaspberrypi-at-Techtenplanet.jpeg",
    registrationLink: "/events/register/raspberry-pi-workshop",
    tags: ["Teacher Training", "Educational Technology", "Raspberry Pi"]
  },
  {
    id: 5,
    title: "Tech Startup Weekend",
    excerpt: "Transform your idea into a viable business in just 54 hours with mentorship from successful entrepreneurs and industry experts.",
    description: "Tech Startup Weekend is an intensive 54-hour event where aspiring entrepreneurs, developers, designers, and business professionals come together to pitch ideas, form teams, and launch technology startups. This hands-on experience takes participants through the fundamental stages of founding a startup, from idea validation to business model development and prototype creation.\n\nThe weekend begins with open pitches, where attendees present their startup ideas in 60 seconds. Teams then form organically around the most popular concepts, and the real work begins. Over the next two days, teams will validate their business models, conduct market research, develop minimum viable products, and prepare for final presentations.\n\nThroughout the weekend, experienced mentors from Ghana's technology and business ecosystem will provide guidance, feedback, and practical advice. These mentors include successful entrepreneurs, investors, technical experts, and industry specialists who volunteer their time to support the next generation of innovators.\n\nThe event culminates in final presentations to a panel of judges, with prizes awarded to the most promising ventures. However, the real value lies in the connections made, skills developed, and the potential to continue building your startup beyond the weekend. Many successful Ghanaian startups trace their origins to previous Startup Weekend events, and several teams have gone on to secure funding and build sustainable businesses.",
    location: "Impact Hub, Accra",
    date: "September 12-14, 2024",
    time: "5:00 PM (Friday) - 9:00 PM (Sunday)",
    image: "/images/scratchcoding-at-techtenplanet.jpeg",
    registrationLink: "/events/register/startup-weekend",
    tags: ["Entrepreneurship", "Startups", "Business Development"]
  }
];
const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });
const databaseId = process.env.REACT_APP_NOTION_EVENTS_DB_ID;

async function migrateEvents() {
  for (const event of eventsData) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Name: { title: [{ text: { content: event.title } }] },
          Date: { date: { start: new Date(event.date).toISOString().split('T')[0] } },
          Location: { rich_text: [{ text: { content: event.location } }] },
          Status: { status: { name: 'Done' } },
          Tags: { multi_select: event.tags.map(tag => ({ name: tag })) },
        },
      });
      console.log(`Successfully migrated event: ${event.title}`);
    } catch (error) {
      console.error(`Error migrating event: ${event.title}`, error);
    }
  }
}

migrateEvents();
