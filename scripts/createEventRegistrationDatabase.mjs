import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createEventRegistrationDatabase() {
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
            content: 'Event Registrations'
          }
        }
      ],
      properties: {
        'Participant Name': {
          title: {}
        },
        'Email': {
          email: {}
        },
        'Phone': {
          phone_number: {}
        },
        'Event Name': {
          rich_text: {}
        },
        'Event ID': {
          rich_text: {}
        },
        'Organization': {
          rich_text: {}
        },
        'Job Title': {
          rich_text: {}
        },
        'Dietary Requirements': {
          rich_text: {}
        },
        'Registration Date': {
          date: {}
        },
        'Status': {
          select: {
            options: [
              {
                name: 'Registered',
                color: 'green'
              },
              {
                name: 'Confirmed',
                color: 'blue'
              },
              {
                name: 'Attended',
                color: 'purple'
              },
              {
                name: 'No Show',
                color: 'red'
              },
              {
                name: 'Cancelled',
                color: 'gray'
              }
            ]
          }
        },
        'Ticket Type': {
          select: {
            options: [
              {
                name: 'Free',
                color: 'green'
              },
              {
                name: 'Student',
                color: 'blue'
              },
              {
                name: 'Regular',
                color: 'yellow'
              },
              {
                name: 'VIP',
                color: 'red'
              }
            ]
          }
        },
        'How did you hear about us?': {
          select: {
            options: [
              {
                name: 'Website',
                color: 'blue'
              },
              {
                name: 'Social Media',
                color: 'purple'
              },
              {
                name: 'Friend/Colleague',
                color: 'green'
              },
              {
                name: 'Email Newsletter',
                color: 'orange'
              },
              {
                name: 'Other',
                color: 'gray'
              }
            ]
          }
        },
        'Special Requests': {
          rich_text: {}
        }
      }
    });

    console.log('✅ Event Registrations database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_EVENT_REGISTRATIONS_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Event Registrations database:', error);
    
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

createEventRegistrationDatabase();
