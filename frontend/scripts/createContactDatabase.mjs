import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createContactDatabase() {
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
            content: 'Contact Form Submissions'
          }
        }
      ],
      properties: {
        'Name': {
          title: {}
        },
        'Email': {
          email: {}
        },
        'Phone': {
          phone_number: {}
        },
        'Subject': {
          rich_text: {}
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
              {
                name: 'New',
                color: 'red'
              },
              {
                name: 'In Progress',
                color: 'yellow'
              },
              {
                name: 'Resolved',
                color: 'green'
              }
            ]
          }
        },
        'Source': {
          select: {
            options: [
              {
                name: 'Website Contact Form',
                color: 'blue'
              },
              {
                name: 'Course Inquiry',
                color: 'purple'
              },
              {
                name: 'Event Inquiry',
                color: 'orange'
              }
            ]
          }
        }
      }
    });

    console.log('✅ Contact Form Submissions database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_CONTACT_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Contact database:', error);
    
    if (error.code === 'validation_error' && error.message.includes('parent')) {
      console.log('\n💡 To fix this:');
      console.log('1. Go to your Notion workspace');
      console.log('2. Create a new page or use an existing page');
      console.log('3. Copy the page ID from the URL');
      console.log('4. Replace YOUR_PARENT_PAGE_ID in this script with the actual page ID');
      console.log('\nPage ID is the part after the last slash in the URL:');
      console.log('https://notion.so/Your-Page-Name-abc123def456 <- abc123def456 is the page ID');
    }
  }
}

createContactDatabase();
