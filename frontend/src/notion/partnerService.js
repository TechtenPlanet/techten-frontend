import { apiGet } from '../utils/apiClient'

export const getPartners = async () => {
  try {
    const partners = await apiGet('/api/partners')
    return partners
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
};
