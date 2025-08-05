const API_BASE_URL = '/api';

export const getStemSquadLandingContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/stem-squad-landing`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    return content;
  } catch (error) {
    console.error('Error fetching STEM Squad Landing Page content:', error);
    return [];
  }
};
