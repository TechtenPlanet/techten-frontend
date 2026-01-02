import { notion, EVENTS_DB_ID } from '../config/notion.js';

const getEventImage = (page) => {
  const { cover, properties } = page;
  let imageUrl = '/images/students_at_techten.jpeg';

  if (cover && cover.type === 'external') {
    imageUrl = cover.external.url;
  } else if (cover && cover.type === 'file') {
    imageUrl = cover.file.url;
  } else if (properties.Image?.files && properties.Image.files.length > 0) {
    imageUrl = properties.Image.files[0].file?.url || properties.Image.files[0].external?.url;
  } else if (properties.Image?.url) {
    imageUrl = properties.Image.url;
  }

  return imageUrl;
};

const buildEvent = (page) => {
  const { properties } = page;
  const description = properties.Description?.rich_text[0]?.plain_text || '';
  return {
    id: page.id,
    title: properties.Name?.title[0]?.plain_text || 'Untitled Event',
    date: properties.Date?.date?.start || '',
    time: properties.Time?.rich_text[0]?.plain_text || '',
    location: properties.Location?.rich_text[0]?.plain_text || '',
    description,
    image: getEventImage(page),
    tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
    registrationLink: `/events/register/${page.id}`,
    excerpt: description ? `${description.substring(0, 150)}...` : '',
    status: properties.Status?.select?.name || ''
  };
};

const queryEventsByStatus = async (status, { pageSize = 100, direction = 'ascending' } = {}) => {
  const response = await notion.databases.query({
    database_id: EVENTS_DB_ID,
    filter: {
      property: 'Status',
      select: {
        equals: status,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction,
      },
    ],
    page_size: pageSize,
  });
  return response.results.map(buildEvent);
};

export const eventsRoutes = [
  // Events Routes
  {
    method: 'GET',
    path: '/events',
    handler: async (request, h) => {
      try {
        const [inProgress, upcoming, past] = await Promise.all([
          queryEventsByStatus('In progress'),
          queryEventsByStatus('Not started', { pageSize: 2, direction: 'ascending' }),
          queryEventsByStatus('Done', { pageSize: 1, direction: 'descending' }),
        ]);

        return [...inProgress, ...upcoming, ...past];
      } catch (err) {
        console.error('Events API Error:', err);
        return h.response({ error: 'Failed to fetch events' }).code(500);
      }
    },
  },

  // Single Event Route
  {
    method: 'GET',
    path: '/events/{id}',
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
          registrationLink: `/events/register/${page.id}`,
          status: properties.Status?.select?.name || ''
        };
        
        return event;
      } catch (err) {
        console.error('Single Event API Error:', err);
        return h.response({ error: 'Event not found' }).code(404);
      }
    },
  }
];
