import { Client } from '@notionhq/client';
import 'dotenv/config';

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

if (!process.env.NOTION_API_TOKEN) {
  console.error('NOTION_API_TOKEN is not set in your .env file.');
  process.exit(1);
}

const createTeamDatabase = async () => {
  try {
    console.log('🚀 Creating Team Members database in Notion...\n');

    // You'll need to replace this with your actual parent page ID
    const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID || 'YOUR_PARENT_PAGE_ID';
    
    if (PARENT_PAGE_ID === 'YOUR_PARENT_PAGE_ID') {
      console.error('❌ Please set NOTION_PARENT_PAGE_ID in your .env file');
      console.log('To get your parent page ID:');
      console.log('1. Go to your Notion workspace');
      console.log('2. Create or open a page where you want the database');
      console.log('3. Copy the page ID from the URL');
      console.log('4. Add NOTION_PARENT_PAGE_ID=your_page_id to your .env file');
      process.exit(1);
    }

    const response = await notion.databases.create({
      parent: {
        type: 'page_id',
        page_id: PARENT_PAGE_ID,
      },
      title: [
        {
          type: 'text',
          text: {
            content: 'Team Members',
          },
        },
      ],
      properties: {
        'Name': {
          title: {}
        },
        'Role': {
          rich_text: {}
        },
        'Quote': {
          rich_text: {}
        },
        'Bio': {
          rich_text: {}
        },
        'Image': {
          files: {}
        },
        'LinkedIn': {
          url: {}
        },
        'Email': {
          email: {}
        },
        'Specialties': {
          multi_select: {
            options: [
              { name: 'Leadership', color: 'red' },
              { name: 'Innovation', color: 'orange' },
              { name: 'STEM Education', color: 'yellow' },
              { name: 'Operations Management', color: 'green' },
              { name: 'Business Strategy', color: 'blue' },
              { name: 'Program Development', color: 'purple' },
              { name: 'Technology Leadership', color: 'pink' },
              { name: 'Curriculum Development', color: 'brown' },
              { name: 'Software Engineering', color: 'gray' },
              { name: 'General Management', color: 'red' },
              { name: 'Strategic Planning', color: 'orange' },
              { name: 'Community Outreach', color: 'yellow' },
              { name: 'Public Relations', color: 'green' },
              { name: 'Partnership Development', color: 'blue' },
              { name: 'Community Relations', color: 'purple' }
            ]
          }
        },
        'Display Order': {
          number: {}
        },
        'Status': {
          select: {
            options: [
              { name: 'Active', color: 'green' },
              { name: 'Inactive', color: 'red' },
              { name: 'Alumni', color: 'gray' }
            ]
          }
        },
        'Join Date': {
          date: {}
        },
        'Last Updated': {
          last_edited_time: {}
        }
      },
    });

    console.log('✅ Team Members database created successfully!');
    console.log(`📋 Database ID: ${response.id}`);
    console.log(`🔗 Database URL: ${response.url}`);
    
    console.log('\n📝 Please add this to your .env file:');
    console.log(`NOTION_TEAM_DB_ID=${response.id}`);
    
    console.log('\n🎯 Next steps:');
    console.log('1. Add the database ID to your .env file');
    console.log('2. Run the migration script to populate the database');
    console.log('3. Update your frontend to fetch from Notion');
    
    return response.id;
  } catch (error) {
    console.error('❌ Error creating database:', error.body || error);
    throw error;
  }
};

const main = async () => {
  try {
    await createTeamDatabase();
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
};

main();
