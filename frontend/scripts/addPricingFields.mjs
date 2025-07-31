import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '../.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });
const databaseId = process.env.REACT_APP_NOTION_COURSES_DB_ID;

async function addPricingFieldsToDatabase() {
  try {
    console.log('🔄 Adding pricing fields to Courses database...');
    
    // Get current database schema
    const database = await notion.databases.retrieve({ database_id: databaseId });
    
    // Add new pricing properties to the existing schema
    const updatedProperties = {
      ...database.properties,
      'Regular Price': {
        number: {
          format: 'number'
        }
      },
      'Early Bird Price': {
        number: {
          format: 'number'
        }
      },
      'Student Price': {
        number: {
          format: 'number'
        }
      },
      'Currency': {
        select: {
          options: [
            { name: 'GHC', color: 'blue' },
            { name: 'USD', color: 'green' },
            { name: 'EUR', color: 'yellow' }
          ]
        }
      },
      'Price Notes': {
        rich_text: {}
      }
    };

    // Update the database with new properties
    await notion.databases.update({
      database_id: databaseId,
      properties: updatedProperties
    });

    console.log('✅ Successfully added pricing fields to database!');
    console.log('📋 Added fields:');
    console.log('   - Regular Price (Number)');
    console.log('   - Early Bird Price (Number)');
    console.log('   - Student Price (Number)');
    console.log('   - Currency (Select: GHC, USD, EUR)');
    console.log('   - Price Notes (Rich Text)');
    
  } catch (error) {
    console.error('❌ Error adding pricing fields:', error);
  }
}

addPricingFieldsToDatabase();
