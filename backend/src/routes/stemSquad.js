import { notion, STEM_SQUAD_LANDING_PAGE_DB_ID } from '../config/notion.js';
import { getRichText, getPlainText, getSelect, getUrl, getFiles } from '../utils/notionParsers.js';

const buildHowItWorksSteps = (properties) => {
  const steps = [];
  for (let i = 1; i <= 3; i += 1) {
    const title = getPlainText(properties[`Step ${i} Title`]?.rich_text);
    const description = getPlainText(properties[`Step ${i} Description`]?.rich_text);
    if (title || description) {
      steps.push({ title, description });
    }
  }
  return steps;
};

const parseFeatureList = (richText) => {
  const text = getPlainText(richText);
  if (!text) return [];
  return text
    .split(/\n+/)
    .map((line) => line.replace(/^[•\-–]\s*/, '').trim())
    .filter(Boolean);
};

const buildFaqItems = (properties) => {
  const items = [];
  for (let i = 1; i <= 8; i += 1) {
    const question = getPlainText(properties[`FAQ ${i} Question`]?.rich_text);
    const answer = getRichText(properties[`FAQ ${i} Answer`]?.rich_text);
    if (question || answer) {
      items.push({ question, answer });
    }
  }
  return items;
};

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
            subtitle: getPlainText(properties.Subtitle?.rich_text),
            buttonLabel: getPlainText(properties['Button Label']?.rich_text),
            buttonLink: getUrl(properties['Button Link']?.url),
            media: getFiles(properties.Media?.files),
            steps: buildHowItWorksSteps(properties),
            tierName: getPlainText(properties['Tier Name']?.rich_text),
            tierLabel: getPlainText(properties['Tier Label']?.rich_text),
            ageRange: getPlainText(properties['Age Range']?.rich_text),
            headline: getPlainText(properties.Headline?.rich_text),
            features: parseFeatureList(properties.Features?.rich_text),
            price: properties.Price?.number,
            groupPrice: properties['Group Price']?.number,
            badge: getPlainText(properties.Badge?.rich_text),
            faqItems: buildFaqItems(properties),
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
