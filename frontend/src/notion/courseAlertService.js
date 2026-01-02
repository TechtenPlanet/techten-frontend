import { apiPost } from '../utils/apiClient';

export const submitCourseAlert = async (payload) => {
  return apiPost('/api/course-alerts', payload);
};
