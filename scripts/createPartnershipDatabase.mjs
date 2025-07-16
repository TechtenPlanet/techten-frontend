import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createPartnershipDatabase() {
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
            content: 'Partnership Form Submissions'
          }
        }
      ],
      properties: {
        'Organization Name': {
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
        'Website': {
          url: {}
        },
        'Partnership Type': {
          select: {
            options: [
              { name: 'Corporate Partnership' },
              { name: 'Educational Institution' },
              { name: 'NGO/Non-Profit' },
              { name: 'Community Group' },
              { name: 'Other' }
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
              { name: 'Agreement Sent', color: 'purple' },
              { name: 'Active', color: 'green' }
            ]
          }
        }
      }
    });

    console.log('✅ Partnership Form Submissions database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_PARTNERSHIP_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Partnership database:', error);
  }
}

createPartnershipDatabase();
