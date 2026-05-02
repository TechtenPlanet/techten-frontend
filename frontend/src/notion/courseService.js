import { apiGet } from '../utils/apiClient'

const TIMEOUT_MS = 9000;

export const getCourses = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const courses = await apiGet('/api/courses', { signal: controller.signal });
    return courses;
  } catch (error) {
    const msg = error.name === 'AbortError'
      ? 'Courses request timed out after 9 s'
      : error.message;
    console.error('Error fetching courses from backend:', msg);
    throw error; // let CoursesPage handle the error state
  } finally {
    clearTimeout(timeout);
  }
};
