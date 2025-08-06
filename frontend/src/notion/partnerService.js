const API_BASE_URL = '/api';

export const getPartners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const partners = await response.json();
    return partners;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
};
