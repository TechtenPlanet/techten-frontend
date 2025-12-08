import { apiGet } from '../utils/apiClient'

export const getStemSquadLandingContent = async () => {
  try {
    const content = await apiGet('/api/stem-squad-landing')
    return content
  } catch (error) {
    console.error('Error fetching STEM Squad Landing Page content:', error)
    return []
  }
};
