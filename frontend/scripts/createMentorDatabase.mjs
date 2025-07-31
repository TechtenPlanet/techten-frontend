import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

async function createMentorDatabase() {
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
            content: 'Mentor Form Submissions'
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
        'Phone Number': {
          phone_number: {}
        },
        'Area of Expertise': {
          rich_text: {}
        },
        'Years of Experience': {
          number: {}
        },
        'LinkedIn Profile': {
          url: {}
        },
        'Mentorship Interest': {
          multi_select: {
            options: [
              { name: '1-on-1 Mentoring' },
              { name: 'Group Workshops' },
              { name: 'Project Guidance' },
              { name: 'Career Advice' }
            ]
          }
        },
        'Availability': {
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
              { name: 'Onboarded', color: 'green' }
            ]
          }
        }
      }
    });

    console.log('✅ Mentor Form Submissions database created successfully!');
    console.log('📋 Database ID:', response.id);
    console.log('🔗 Database URL:', response.url);
    console.log('\n📝 Add this to your .env file:');
    console.log(`REACT_APP_NOTION_MENTOR_DB_ID=${response.id}`);
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating Mentor database:', error);
  }
}

createMentorDatabase();
