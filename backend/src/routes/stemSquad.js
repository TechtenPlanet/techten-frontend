import { notion, STEM_SQUAD_LANDING_PAGE_DB_ID } from '../config/notion.js';
import { getRichText, getPlainText, getSelect, getUrl, getFiles } from '../utils/notionParsers.js';

export const stemSquadRoutes = [
  {
    method: 'GET',
    path: '/stem-squad-landing',
    handler: async (request, h) => {
      try {
        if (!STEM_SQUAD_LANDING_PAGE_DB_ID) {
          console.error('STEM_SQUAD_LANDING_PAGE_DB_ID is not defined.');
          return h.response({ error: 'STEM Squad Landing Page database ID is not configured.' }).code(500);
        }

        const response = await notion.databases.query({
          database_id: STEM_SQUAD_LANDING_PAGE_DB_ID,
          filter: {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
          sorts: [
            {
              property: 'Order',
              direction: 'ascending',
            },
          ],
        });

        const content = response.results.map(page => {
          const properties = page.properties;
          return {
            id: page.id,
            title: getPlainText(properties.Title?.title),
            type: getSelect(properties.Type?.select),
            content: getRichText(properties.Content?.rich_text),
            order: properties.Order?.number,
            status: getSelect(properties.Status?.select),
            buttonLabel: getPlainText(properties['Button Label']?.rich_text),
            buttonLink: getUrl(properties['Button Link']?.url),
            media: getFiles(properties.Media?.files),
          };
        });

        return h.response(content).code(200);
      } catch (error) {
        console.error('Error fetching STEM Squad Landing Page content:', error);
        return h.response({ error: 'Failed to fetch STEM Squad Landing Page content.' }).code(500);
      }
    },
  },
];
