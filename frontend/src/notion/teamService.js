const API_BASE_URL = '/api';

/**
 * Fetch all active team members from backend API
 * @returns {Promise<Array>} Array of team member objects
 */
export const getTeamMembers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching team members from backend:', error);
    // Return fallback data if API fails
    return getFallbackTeamData();
  }
};

/**
 * Get a specific team member by ID
 * @param {string} memberId - Team member ID
 * @returns {Promise<Object|null>} Team member object or null if not found
 */
export const getTeamMemberById = async (memberId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${memberId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || null;
  } catch (error) {
    console.error('Error fetching team member by ID:', error);
    return null;
  }
};

/**
 * Get team members by role (partial match)
 * @param {string} role - Role to search for
 * @returns {Promise<Array>} Array of matching team members
 */
export const getTeamMembersByRole = async (role) => {
  try {
    const response = await fetch(`${API_BASE_URL}/team/role/${encodeURIComponent(role)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching team members by role:', error);
    return [];
  }
};

/**
 * Fallback team data when Notion is not available
 * This uses the original hardcoded data as a backup
 */
const getFallbackTeamData = () => {
  return [
    {
      id: 'fallback-1',
      name: 'Oscar Yaw Asamoah',
      role: 'CEO & Founder',
      quote: 'Creating a future where Ghanaian youth lead through innovation.',
      bio: 'Oscar is the visionary founder of Techten Planet, passionate about empowering Ghanaian youth through technology education.',
      image: '/src/assets/images/Team/Techten team/Yaw_Oscar.JPG',
      linkedin: '',
      email: '',
      specialties: ['Leadership', 'Innovation', 'STEM Education'],
      displayOrder: 1,
      status: 'Active'
    },
    {
      id: 'fallback-2',
      name: 'Lawrence K. Manu',
      role: 'Operations Manager & BM',
      quote: 'Every student deserves the opportunity to build and apply knowledge.',
      bio: 'Lawrence oversees daily operations and ensures our programs run smoothly while maintaining high educational standards.',
      image: '/src/assets/images/Team/Techten team/Lawrence_Manu.jpg',
      linkedin: '',
      email: '',
      specialties: ['Operations Management', 'Business Strategy', 'Program Development'],
      displayOrder: 2,
      status: 'Active'
    },
    {
      id: 'fallback-3',
      name: 'Bernard Boateng',
      role: 'Board Member & CTO',
      quote: 'Education is the seed of sustainable development.',
      bio: 'Bernard leads our technical initiatives and ensures our curriculum stays current with industry trends.',
      image: '/src/assets/images/Team/Techten team/Bernard_Boaten.jpg',
      linkedin: '',
      email: '',
      specialties: ['Technology Leadership', 'Curriculum Development', 'Software Engineering'],
      displayOrder: 3,
      status: 'Active'
    },
    {
      id: 'fallback-4',
      name: 'Derrick Edem Sosoo',
      role: 'General Manager',
      quote: 'Teaching hands-on skills that transform societies in the long term.',
      bio: 'Derrick manages our overall operations and strategic initiatives to expand our impact across Ghana.',
      image: '/src/assets/images/Team/Techten team/Derrick Edem Sosoo2.jpg',
      linkedin: '',
      email: '',
      specialties: ['General Management', 'Strategic Planning', 'Community Outreach'],
      displayOrder: 4,
      status: 'Active'
    },
    {
      id: 'fallback-5',
      name: 'Gabriel Agoh',
      role: 'CRO & PR',
      quote: 'No one person can do it all, it calls for partnerships with all stakeholders',
      bio: 'Gabriel builds relationships with partners and manages our public relations to expand our reach and impact.',
      image: '/src/assets/images/Team/Techten team/Gabriel_Agoh.jpg',
      linkedin: '',
      email: '',
      specialties: ['Public Relations', 'Partnership Development', 'Community Relations'],
      displayOrder: 5,
      status: 'Active'
    }
  ];
};

/**
 * Get team section configuration
 * This could also be moved to Notion in the future
 */
export const getTeamSectionConfig = () => {
  return {
    sectionTitle: "Meet the Team",
    sectionDescription: "Get to know the passionate individuals driving innovation and education at Techten Planet."
  };
};

export default {
  getTeamMembers,
  getTeamMemberById,
  getTeamMembersByRole,
  getTeamSectionConfig
};
