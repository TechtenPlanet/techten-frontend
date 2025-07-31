const API_BASE_URL = '/api';

export const getBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blogs = await response.json();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs from backend:', error);
    return [];
  }
};

export const getBlog = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error('Error fetching blog from backend:', error);
    return null;
  }
};
