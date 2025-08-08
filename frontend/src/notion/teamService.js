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
    
    // If API returns error or no data, throw an error to be caught by the component
    if (!result.success || !result.data) {
      throw new Error(result.error || 'API returned no data');
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching team members from backend:', error);
    throw error; // Re-throw to be handled by the component
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
    if (!result.success || !result.data) {
      throw new Error(result.error || 'API returned no data');
    }
    return result.data;
  } catch (error) {
    console.error('Error fetching team member by ID:', error);
    throw error;
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
    if (!result.success || !result.data) {
      throw new Error(result.error || 'API returned no data');
    }
    return result.data;
  } catch (error) {
    console.error('Error fetching team members by role:', error);
    throw error;
  }
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

const TeamService = {
  getTeamMembers,
  getTeamMemberById,
  getTeamMembersByRole,
  getTeamSectionConfig
};

export default TeamService;
