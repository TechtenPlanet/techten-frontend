import { notion } from '../config/notion.js';

const TEAM_DB_ID = process.env.NOTION_TEAM_DB_ID;

export const teamRoutes = [
  // Get all active team members
  {
    method: 'GET',
    path: '/team',
    handler: async (request, h) => {
      try {
        if (!TEAM_DB_ID) {
          return h.response({ error: 'Team database not configured' }).code(500);
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
          count: teamMembers.length
        };
      } catch (err) {
        console.error('Team API Error:', err);
        return h.response({ error: 'Failed to fetch team members' }).code(500);
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
