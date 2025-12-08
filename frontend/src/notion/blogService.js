import { apiGet } from '../utils/apiClient'

export const getBlogs = async () => {
  try {
    const blogs = await apiGet('/api/blogs')
    return blogs
  } catch (error) {
    console.error('Error fetching blogs from backend:', error)
    return []
  }
};

export const getBlog = async (id) => {
  try {
    const blog = await apiGet(`/api/blogs/${id}`)
    return blog
  } catch (error) {
    console.error('Error fetching blog from backend:', error)
    return null
  }
};
