const API_BASE_URL = 'http://localhost:5000/api';

export const getCourses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const courses = await response.json();
    return courses;
  } catch (error) {
    console.error('Error fetching courses from backend:', error);
    return [];
  }
};
