import { HERO_DB_ID } from '../config/notion.js';
import { notion } from '../config/notion.js';

export const heroRoutes = [
  {
    method: 'GET',
    path: '/hero-images',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({
          database_id: HERO_DB_ID,
          sorts: [
            {
              property: 'Order',
              direction: 'ascending',
            },
          ],
        });

        const heroImages = response.results.map((page) => {
          const imageUrl = page.properties.Image.files[0]?.file?.url || page.properties.Image.files[0]?.external?.url;
          const altText = page.properties.AltText?.rich_text[0]?.plain_text || '';
          const title = page.properties.Title?.title[0]?.plain_text || '';
          const description = page.properties.Description?.rich_text[0]?.plain_text || '';

          return {
            id: page.id,
            image: imageUrl,
            alt: altText,
            title: title,
            description: description,
          };
        });
        return heroImages;
      } catch (error) {
        console.error('Error fetching hero images from Notion:', error);
        return h.response({ error: 'Failed to fetch hero images' }).code(500);
      }
    },
  },
];
