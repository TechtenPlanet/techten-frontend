import { notion } from '../config/notion.js';
import { getCache, setCache } from '../utils/cache.js'; // Import caching utilities

const TEAM_DB_ID = process.env.NOTION_TEAM_DB_ID;
const TEAM_CACHE_KEY = 'allTeamMembers';
const TEAM_CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

export const teamRoutes = [
  // Get all active team members
  {
    method: 'GET',
    path: '/team',
    handler: async (request, h) => {
      try {
        // Try to get data from cache first
        const cachedTeamMembers = getCache(TEAM_CACHE_KEY);
        if (cachedTeamMembers) {
          return { 
            success: true, 
            data: cachedTeamMembers,
            count: cachedTeamMembers.length,
            source: 'cache' // Indicate data came from cache
          };
        }

        if (!TEAM_DB_ID) {
          console.warn('NOTION_TEAM_DB_ID not configured - team database not set up yet');
          return h.response({ 
            success: false, 
            error: 'Team database not configured. Please run setup scripts first.',
            data: []
          }).code(500);
        }

        const response = await notion.databases.query({
          database_id: TEAM_DB_ID,
          filter: {
            property: 'Status',
            select: {
              equals: 'Active'
            }
          },
          sorts: [
            {
              property: 'Display Order',
              direction: 'ascending'
            }
          ]
        });

        const teamMembers = response.results.map(page => {
          const properties = page.properties;
          
          return {
            id: page.id,
            name: properties.Name?.title?.[0]?.text?.content || '',
            role: properties.Role?.rich_text?.[0]?.text?.content || '',
            quote: properties.Quote?.rich_text?.[0]?.text?.content || '',
            bio: properties.Bio?.rich_text?.[0]?.text?.content || '',
            image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
            linkedin: properties.LinkedIn?.url || '',
            email: properties.Email?.email || '',
            specialties: properties.Specialties?.multi_select?.map(item => item.name) || [],
            displayOrder: properties['Display Order']?.number || 0,
            status: properties.Status?.select?.name || 'Active',
            joinDate: properties['Join Date']?.date?.start || '',
            lastUpdated: properties['Last Updated']?.last_edited_time || ''
          };
        });

        // Cache the fetched data
        setCache(TEAM_CACHE_KEY, teamMembers, TEAM_CACHE_TTL);

        return { 
          success: true, 
          data: teamMembers,
          count: teamMembers.length,
          source: 'notion' // Indicate data came from Notion
        };
      } catch (err) {
        console.error('Team API Error:', err);
        
        // Handle specific Notion errors
        if (err.code === 'object_not_found') {
          return h.response({ 
            success: false,
            error: 'Team database not found. Please run setup scripts first.',
            data: []
          }).code(404);
        }
        
        if (err.code === 'unauthorized') {
          return h.response({ 
            success: false,
            error: 'Notion API token invalid or database access denied.',
            data: []
          }).code(401);
        }
        
        return h.response({ 
          success: false,
          error: 'Failed to fetch team members',
          data: []
        }).code(500);
      }
    },
  },

  // Get a specific team member by ID
  {
    method: 'GET',
    path: '/team/{id}',
    handler: async (request, h) => {
      try {
        if (!TEAM_DB_ID) {
          return h.response({ error: 'Team database not configured' }).code(500);
        }

        const { id } = request.params;

        const response = await notion.pages.retrieve({
          page_id: id
        });

        const properties = response.properties;
        
        const teamMember = {
          id: response.id,
          name: properties.Name?.title?.[0]?.text?.content || '',
          role: properties.Role?.rich_text?.[0]?.text?.content || '',
          quote: properties.Quote?.rich_text?.[0]?.text?.content || '',
          bio: properties.Bio?.rich_text?.[0]?.text?.content || '',
          image: properties['Image URL']?.url || '',
          linkedin: properties.LinkedIn?.url || '',
          email: properties.Email?.email || '',
          specialties: properties.Specialties?.multi_select?.map(item => item.name) || [],
          displayOrder: properties['Display Order']?.number || 0,
          status: properties.Status?.select?.name || 'Active',
          joinDate: properties['Join Date']?.date?.start || '',
          lastUpdated: properties['Last Updated']?.last_edited_time || ''
        };

        return { 
          success: true, 
          data: teamMember
        };
      } catch (err) {
        console.error('Team Member API Error:', err);
        if (err.code === 'object_not_found') {
          return h.response({ error: 'Team member not found' }).code(404);
        }
        return h.response({ error: 'Failed to fetch team member' }).code(500);
      }
    },
  },

  // Get team members by role
  {
    method: 'GET',
    path: '/team/role/{role}',
    handler: async (request, h) => {
      try {
        if (!TEAM_DB_ID) {
          return h.response({ error: 'Team database not configured' }).code(500);
        }

        const { role } = request.params;

        const response = await notion.databases.query({
          database_id: TEAM_DB_ID,
          filter: {
            and: [
              {
                property: 'Status',
                select: {
                  equals: 'Active'
                }
              },
              {
                property: 'Role',
                rich_text: {
                  contains: role
                }
              }
            ]
          },
          sorts: [
            {
              property: 'Display Order',
              direction: 'ascending'
            }
          ]
        });

        const teamMembers = response.results.map(page => {
          const properties = page.properties;
          
          return {
            id: page.id,
            name: properties.Name?.title?.[0]?.text?.content || '',
            role: properties.Role?.rich_text?.[0]?.text?.content || '',
            quote: properties.Quote?.rich_text?.[0]?.text?.content || '',
            bio: properties.Bio?.rich_text?.[0]?.text?.content || '',
            image: properties['Image URL']?.url || '',
            linkedin: properties.LinkedIn?.url || '',
            email: properties.Email?.email || '',
            specialties: properties.Specialties?.multi_select?.map(item => item.name) || [],
            displayOrder: properties['Display Order']?.number || 0,
            status: properties.Status?.select?.name || 'Active',
            joinDate: properties['Join Date']?.date?.start || '',
            lastUpdated: properties['Last Updated']?.last_edited_time || ''
          };
        });

        return { 
          success: true, 
          data: teamMembers,
          count: teamMembers.length,
          role: role
        };
      } catch (err) {
        console.error('Team Role API Error:', err);
        return h.response({ error: 'Failed to fetch team members by role' }).code(500);
      }
    },
  }
];
