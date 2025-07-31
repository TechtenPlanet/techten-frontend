import { 
  notion, 
  HOME_HERO_DB_ID,
  IMPACT_DATA_DB_ID,
  TESTIMONIALS_DB_ID,
  SERVICES_DB_ID,
  PARTNERS_DB_ID,
  TEAM_DB_ID,
  PROGRAMS_DB_ID,
  MISSION_DB_ID,
  ABOUT_SECTION_DB_ID,
  BENEFITS_DB_ID,
  PROJECT_HIGHLIGHTS_DB_ID,
  TECH_FOR_GIRLS_DB_ID,
  TECH_LABS_DB_ID,
  HACKATHONS_DB_ID,
  CONSULTANTS_DB_ID,
  GET_INVOLVED_DB_ID
} from '../config/notion.js';

import { 
  parseHomeHero,
  parseImpactData,
  parseTestimonial,
  parseService,
  parsePartner,
  parseTeamMember,
  parseProgram,
  parseContent
} from '../utils/notionParsers.js';

// Generic function to fetch content from Notion
async function fetchNotionContent(databaseId, parser, sortBy = 'Order') {
  try {
    if (!databaseId) {
      throw new Error('Database ID not configured');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: sortBy,
          direction: 'ascending'
        }
      ],
      filter: {
        property: 'Active',
        checkbox: {
          equals: true
        }
      }
    });

    return response.results.map(parser);
  } catch (error) {
    console.error(`Error fetching content from database ${databaseId}:`, error);
    throw error;
  }
}

// Content routes
export default [
  // Home Hero Content
  {
    method: 'GET',
    path: '/content/home-hero',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(HOME_HERO_DB_ID, parseHomeHero);
        return h.response(content[0] || {}).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Impact Data
  {
    method: 'GET',
    path: '/content/impact',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(IMPACT_DATA_DB_ID, parseImpactData);
        
        // Group by section for easier consumption
        const groupedContent = content.reduce((acc, item) => {
          if (!acc[item.section]) {
            acc[item.section] = [];
          }
          acc[item.section].push(item);
          return acc;
        }, {});

        return h.response(groupedContent).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Testimonials
  {
    method: 'GET',
    path: '/content/testimonials',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(TESTIMONIALS_DB_ID, parseTestimonial);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Featured Testimonials
  {
    method: 'GET',
    path: '/content/testimonials/featured',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({
          database_id: TESTIMONIALS_DB_ID,
          filter: {
            and: [
              {
                property: 'Active',
                checkbox: {
                  equals: true
                }
              },
              {
                property: 'Featured',
                checkbox: {
                  equals: true
                }
              }
            ]
          },
          sorts: [
            {
              property: 'Order',
              direction: 'ascending'
            }
          ]
        });

        const content = response.results.map(parseTestimonial);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Services
  {
    method: 'GET',
    path: '/content/services',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(SERVICES_DB_ID, parseService);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Partners
  {
    method: 'GET',
    path: '/content/partners',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(PARTNERS_DB_ID, parsePartner);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Featured Partners
  {
    method: 'GET',
    path: '/content/partners/featured',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({
          database_id: PARTNERS_DB_ID,
          filter: {
            and: [
              {
                property: 'Active',
                checkbox: {
                  equals: true
                }
              },
              {
                property: 'Featured',
                checkbox: {
                  equals: true
                }
              }
            ]
          },
          sorts: [
            {
              property: 'Order',
              direction: 'ascending'
            }
          ]
        });

        const content = response.results.map(parsePartner);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Team Members
  {
    method: 'GET',
    path: '/content/team',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(TEAM_DB_ID, parseTeamMember);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Team by Department
  {
    method: 'GET',
    path: '/content/team/{department}',
    handler: async (request, h) => {
      try {
        const { department } = request.params;
        
        const response = await notion.databases.query({
          database_id: TEAM_DB_ID,
          filter: {
            and: [
              {
                property: 'Active',
                checkbox: {
                  equals: true
                }
              },
              {
                property: 'Department',
                select: {
                  equals: department
                }
              }
            ]
          },
          sorts: [
            {
              property: 'Order',
              direction: 'ascending'
            }
          ]
        });

        const content = response.results.map(parseTeamMember);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Programs
  {
    method: 'GET',
    path: '/content/programs',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(PROGRAMS_DB_ID, parseProgram);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Featured Programs
  {
    method: 'GET',
    path: '/content/programs/featured',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({
          database_id: PROGRAMS_DB_ID,
          filter: {
            and: [
              {
                property: 'Active',
                checkbox: {
                  equals: true
                }
              },
              {
                property: 'Featured',
                checkbox: {
                  equals: true
                }
              }
            ]
          },
          sorts: [
            {
              property: 'Order',
              direction: 'ascending'
            }
          ]
        });

        const content = response.results.map(parseProgram);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  // Generic content endpoints for simple content types
  {
    method: 'GET',
    path: '/content/mission',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(MISSION_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/about-section',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(ABOUT_SECTION_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/benefits',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(BENEFITS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/project-highlights',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(PROJECT_HIGHLIGHTS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/tech-for-girls',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(TECH_FOR_GIRLS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/tech-labs',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(TECH_LABS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/hackathons',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(HACKATHONS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/consultants',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(CONSULTANTS_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  },

  {
    method: 'GET',
    path: '/content/get-involved',
    handler: async (request, h) => {
      try {
        const content = await fetchNotionContent(GET_INVOLVED_DB_ID, parseContent);
        return h.response(content).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    }
  }
];
