const API_BASE_URL = '/api';

export const getHeroImages = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/hero-images`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const heroImages = await response.json();
    return heroImages;
  } catch (error) {
    console.error('Error fetching hero images:', error);
    return [];
  }
};
