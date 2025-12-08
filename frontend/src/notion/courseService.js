import { apiGet } from '../utils/apiClient'

export const getCourses = async () => {
  try {
    const courses = await apiGet('/api/courses')
    return courses
  } catch (error) {
    console.error('Error fetching courses from backend:', error)
    return []
  }
};
