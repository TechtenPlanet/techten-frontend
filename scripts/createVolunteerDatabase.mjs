import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createVolunteerDatabase() {
  try {
    const response = await notion.databases.create({
      parent: {
        type: 'page_id',
        page_id: '228eb453424280fdab17ef5b2b9c1666' // Techten webForms Data page
      },
      title: [
        {
          type: 'text',
          text: {
            content: 'Volunteer Form Submissions'
          }
        }
      ],
      properties: {
        'Full Name': {
          title: {}
        },
        'Email': {
          email: {}
        },
        'Country / Timezone': {
          rich_text: {}
        },
        'Area of Interest': {
          select: {
            options: [
              { name: 'Teaching & Workshop Support' },
              { name: 'Content Creation & Curriculum' },
              { name: 'Event Organization & Support' },
              { name: 'Technical Support & Development' },
              { name: 'Marketing & Communications' },
              { name: 'Administrative Support' },
              { name: 'Other' }
            ]
          }
        },
        'Secondary Interests': {
          multi_select: {
            options: [
              { name: 'Teaching & Workshop Support' },
              { name: 'Content Creation & Curriculum' },
              { name: 'Event Organization & Support' },
              { name: 'Technical Support & Development' },
              { name: 'Marketing & Communications' },
              { name: 'Administrative Support' }
            ]
          }
        },
        'LinkedIn Profile or Brief Background': {
          rich_text: {}
        },
        'Availability (Hours per Week)': {
          select: {
            options: [
              { name: '1-2 hours per week' },
              { name: '3-5 hours per week' },
              { name: '5-10 hours per week' },
              { name: 'More than 10 hours per week' },
              { name: 'Flexible / Project-based' }
            ]
          }
        },
        'Additional Information': {
          rich_text: {}
        },
        'Consent': {
          checkbox: {}
        },
        'Submitted Date': {
          date: {}
        },
        'Status': {
          select: {
            options: [
              { name: 'New', color: 'red' },
              { name: 'In Review', color: 'yellow' },
              { name: 'Contacted', color: 'blue' },
              { name: 'Onboarded', color: 'green' }
            ]
          }
        }
      }
    });

    console.log('✅ Volunteer Form Submissions database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_VOLUNTEER_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Volunteer database:', error);
  }
}

createVolunteerDatabase();
