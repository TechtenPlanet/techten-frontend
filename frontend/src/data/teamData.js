import oscarImg from '../assets/images/Team/Techten team/Yaw_Oscar.JPG';
import lawrenceImg from '../assets/images/Team/Techten team/Lawrence_Manu.jpg';
import bernardImg from '../assets/images/Team/Techten team/Bernard_Boaten.jpg';
import derrickImg from '../assets/images/Team/Techten team/Derrick Edem Sosoo2.jpg';
import billyImg from '../assets/images/Team/Techten team/Gabriel_Agoh.jpg';

export const teamData = {
  sectionTitle: "Meet the Team",
  sectionDescription: "Get to know the passionate individuals driving innovation and education at Techten Planet.",
  
  members: [
    {
      id: 1,
      name: 'Oscar Yaw Asamoah',
      role: 'CEO & Founder',
      quote: '"Creating a future where Ghanaian youth lead through innovation."',
      image: oscarImg,
      bio: 'Oscar is the visionary founder of Techten Planet, passionate about empowering Ghanaian youth through technology education.',
      linkedin: '', // Add LinkedIn URL if available
      email: '', // Add email if you want to display it
      specialties: ['Leadership', 'Innovation', 'STEM Education']
    },
    {
      id: 2,
      name: 'Lawrence K. Manu',
      role: 'Operations Manager & BM',
      quote: '"Every student deserves the opportunity to build and apply knowledge."',
      image: lawrenceImg,
      bio: 'Lawrence oversees daily operations and ensures our programs run smoothly while maintaining high educational standards.',
      linkedin: '',
      email: '',
      specialties: ['Operations Management', 'Business Strategy', 'Program Development']
    },
    {
      id: 3,
      name: 'Bernard Boateng',
      role: 'Board Member & CTO',
      quote: '"Education is the seed of sustainable development."',
      image: bernardImg,
      bio: 'Bernard leads our technical initiatives and ensures our curriculum stays current with industry trends.',
      linkedin: '',
      email: '',
      specialties: ['Technology Leadership', 'Curriculum Development', 'Software Engineering']
    },
    {
      id: 4,
      name: 'Derrick Edem Sosoo',
      role: 'General Manager',
      quote: '"Teaching hands-on skills that transform societies in the long term."',
      image: derrickImg,
      bio: 'Derrick manages our overall operations and strategic initiatives to expand our impact across Ghana.',
      linkedin: '',
      email: '',
      specialties: ['General Management', 'Strategic Planning', 'Community Outreach']
    },
    {
      id: 5,
      name: 'Gabriel Agoe',
      role: 'CRO & PR',
      quote: '"No one person can do it all, it calls for partnerships with all stakeholders"',
      image: billyImg,
      bio: 'Gabriel builds relationships with partners and manages our public relations to expand our reach and impact.',
      linkedin: '',
      email: '',
      specialties: ['Public Relations', 'Partnership Development', 'Community Relations']
    }
  ]
};

// Helper functions for team management
export const getTeamMemberById = (id) => {
  return teamData.members.find(member => member.id === id);
};

export const getTeamMembersByRole = (role) => {
  return teamData.members.filter(member => 
    member.role.toLowerCase().includes(role.toLowerCase())
  );
};

export const getActiveTeamMembers = () => {
  return teamData.members.filter(member => member.active !== false);
};

// You can add more helper functions as needed
export const addTeamMember = (newMember) => {
  const maxId = Math.max(...teamData.members.map(m => m.id));
  const memberWithId = { ...newMember, id: maxId + 1 };
  teamData.members.push(memberWithId);
  return memberWithId;
};

export default teamData;
