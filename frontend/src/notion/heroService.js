import { apiGet } from '../utils/apiClient'

export const getHeroImages = async () => {
  try {
    const heroImages = await apiGet('/api/hero-images')
    return heroImages
  } catch (error) {
    console.error('Error fetching hero images:', error)
    return []
  }
};
