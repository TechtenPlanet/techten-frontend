import { notion, EVENTS_DB_ID } from '../config/notion.js';

export const eventsRoutes = [
  // Events Routes
  {
    method: 'GET',
    path: '/api/events',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({ 
          database_id: EVENTS_DB_ID 
        });
        
        const events = response.results.map(page => {
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
            title: properties.Name?.title[0]?.plain_text || 'Untitled Event',
            date: properties.Date?.date?.start || '',
            time: properties.Time?.rich_text[0]?.plain_text || '',
            location: properties.Location?.rich_text[0]?.plain_text || '',
            description: properties.Description?.rich_text[0]?.plain_text || '',
            image: imageUrl,
            tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
            registrationLink: `/events/register/${page.id}`,
            excerpt: properties.Description?.rich_text[0]?.plain_text?.substring(0, 150) + '...' || ''
          };
        });
        
        return events;
      } catch (err) {
        console.error('Events API Error:', err);
        return h.response({ error: 'Failed to fetch events' }).code(500);
      }
    },
  },

  // Single Event Route
  {
    method: 'GET',
    path: '/api/events/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const page = await notion.pages.retrieve({ page_id: id });
        const { properties } = page;
        
        const event = {
          id: page.id,
          title: properties.Name?.title[0]?.plain_text || 'Untitled Event',
          date: properties.Date?.date?.start || '',
          time: properties.Time?.rich_text[0]?.plain_text || '',
          location: properties.Location?.rich_text[0]?.plain_text || '',
          description: properties.Description?.rich_text[0]?.plain_text || '',
          image: '/images/students_at_techten.jpeg',
          tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
          registrationLink: `/events/register/${page.id}`
        };
        
        return event;
      } catch (err) {
        console.error('Single Event API Error:', err);
        return h.response({ error: 'Event not found' }).code(404);
      }
    },
  }
];
