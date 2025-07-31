import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createSponsorshipDatabase() {
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
            content: 'Sponsorship Form Submissions'
          }
        }
      ],
      properties: {
        'Organization/Individual Name': {
          title: {}
        },
        'Contact Person': {
          rich_text: {}
        },
        'Email': {
          email: {}
        },
        'Phone Number': {
          phone_number: {}
        },
        'Sponsorship Level': {
          select: {
            options: [
              { name: 'Platinum' },
              { name: 'Gold' },
              { name: 'Silver' },
              { name: 'Bronze' },
              { name: 'Custom' }
            ]
          }
        },
        'Message': {
          rich_text: {}
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
              { name: 'Pledge Received', color: 'purple' },
              { name: 'Completed', color: 'green' }
            ]
          }
        }
      }
    });

    console.log('✅ Sponsorship Form Submissions database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_SPONSORSHIP_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Sponsorship database:', error);
  }
}

createSponsorshipDatabase();
