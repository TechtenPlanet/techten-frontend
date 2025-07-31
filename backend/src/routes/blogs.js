import { notion, BLOGS_DB_ID } from '../config/notion.js';

export const blogsRoutes = [
  // Blogs Routes
  {
    method: 'GET',
    path: '/api/blogs',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({ 
          database_id: BLOGS_DB_ID 
        });
        
        const blogs = response.results.map(page => {
          const { properties, cover } = page;
          
          // Get image from cover, Image property, or use default
          let imageUrl = '/images/students_at_techten.jpeg'; // Default fallback
          
          if (cover && cover.type === 'external') {
            imageUrl = cover.external.url;
          } else if (cover && cover.type === 'file') {
            imageUrl = cover.file.url;
          } else if (properties.Image?.files && properties.Image.files.length > 0) {
            imageUrl = properties.Image.files[0].file?.url || properties.Image.files[0].external?.url;
          } else if (properties.Image?.url) {
            imageUrl = properties.Image.url;
          }
          
          return {
            id: page.id,
            title: properties.Title?.title[0]?.plain_text || 'Untitled Blog',
            content: properties.Content?.rich_text[0]?.plain_text || '',
            author: properties.Author?.rich_text[0]?.plain_text || 'Techten Team',
            date: properties['Published Date']?.date?.start || new Date().toISOString().split('T')[0],
            image: imageUrl,
            tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
            excerpt: properties.Content?.rich_text[0]?.plain_text?.substring(0, 150) + '...' || '',
            active: properties.Active?.checkbox || true
          };
        });
        
        return blogs.filter(blog => blog.active);
      } catch (err) {
        console.error('Blogs API Error:', err);
        return h.response({ error: 'Failed to fetch blogs' }).code(500);
      }
    },
  },

  // Single Blog Route
  {
    method: 'GET',
    path: '/api/blogs/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const page = await notion.pages.retrieve({ page_id: id });
        const { properties } = page;
        
        const blog = {
          id: page.id,
          title: properties.Title?.title[0]?.plain_text || 'Untitled Blog',
          content: properties.Content?.rich_text[0]?.plain_text || '',
          author: properties.Author?.rich_text[0]?.plain_text || 'Techten Team',
          date: properties['Published Date']?.date?.start || new Date().toISOString().split('T')[0],
          image: properties.Image?.url || '/images/students_at_techten.jpeg',
          tags: properties.Tags?.multi_select?.map(tag => tag.name) || []
        };
        
        return blog;
      } catch (err) {
        console.error('Single Blog API Error:', err);
        return h.response({ error: 'Blog not found' }).code(404);
      }
    },
  }
];
