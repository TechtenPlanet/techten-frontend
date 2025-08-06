import { notion, PARTNERS_DB_ID } from '../config/notion.js';
import { parsePartner } from '../utils/notionParsers.js';

export const partnersRoutes = [
  {
    method: 'GET',
    path: '/partners',
    handler: async (request, h) => {
      try {
        if (!PARTNERS_DB_ID) {
          console.error('PARTNERS_DB_ID is not defined.');
          return h.response({ error: 'Partners database ID is not configured.' }).code(500);
        }

        const response = await notion.databases.query({
          database_id: PARTNERS_DB_ID,
          filter: {
            property: 'Featured', // Assuming you have a 'Featured' checkbox in your partners DB
            checkbox: {
              equals: true,
            },
          },
          sorts: [
            {
              property: 'Order', // Assuming you have an 'Order' number property
              direction: 'ascending',
            },
          ],
        });

        const partners = response.results.map(parsePartner);
        return h.response(partners).code(200);
      } catch (error) {
        console.error('Error fetching partners:', error);
        return h.response({ error: 'Failed to fetch partners.' }).code(500);
      }
    },
  },
];
