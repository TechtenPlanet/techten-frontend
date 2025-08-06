import { Client } from '@notionhq/client';
import 'dotenv/config'; // Ensure environment variables are loaded

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID; // Optional: for nesting databases

// Directly define partner data here, as local image imports are not supported in .mjs scripts
const partnersData = {
  partners: [
    { id: "rpi", name: "Raspberry Pi" },
    { id: "arduino", name: "Arduino" },
    { id: "yabs", name: "Yabs Network" },
    { id: "suaye", name: "Suaye Electronics" },
    { id: "placeholder", name: "Placeholder Partner" }
  ]
};

if (!process.env.NOTION_API_TOKEN) {
  console.error('NOTION_API_TOKEN is not set in your .env file.');
  process.exit(1);
}
if (!PARENT_PAGE_ID) {
  console.error('NOTION_PARENT_PAGE_ID is not set in your .env file. This is required to create the database.');
  process.exit(1);
}

const databaseTitle = 'Partners-Collabs'; // New database title

const createPartnersDatabase = async () => {
  try {
    console.log(`Attempting to create database: "${databaseTitle}"`);

    const response = await notion.databases.create({
      parent: { page_id: PARENT_PAGE_ID }, // Always use parent page ID
      title: [{ type: 'text', text: { content: databaseTitle } }],
      properties: {
        'Name': { title: {} },
        'Logo': { files: {} },
        'Website': { url: {} },
        'Description': { rich_text: {} },
        'Category': { select: { options: [{ name: 'Technology' }, { name: 'Education' }, { name: 'Community' }] } }, // Example categories
        'Featured': { checkbox: {} },
        'Order': { number: {} },
      },
    });

    console.log(`Successfully created database: ${response.url}`);
    console.log(`Database ID: ${response.id}`);
    return response.id;
  } catch (error) {
    console.error('Error creating Partners database:', error.body || error);
    throw error;
  }
};

const addPartnersContentToDatabase = async (databaseId) => {
  console.log(`Adding ${partnersData.partners.length} partners to database ID: ${databaseId}`);

  for (const partner of partnersData.partners) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          'Name': { title: [{ text: { content: partner.name } }] },
          'Logo': { files: [] }, // Logos must be manually uploaded to Notion after creation
          'Website': { url: null }, // No website in current data, set to null
          'Description': { rich_text: [{ text: { content: '' } }] }, // No description in current data
          'Category': { select: { name: 'Technology' } }, // Default category
          'Featured': { checkbox: false }, // Default to not featured
          'Order': { number: 0 }, // Default order
        },
      });
      console.log(`Added partner: "${partner.name}"`);
    } catch (error) {
      console.error(`Error adding partner "${partner.name}":`, error.body || error);
    }
  }
  console.log('Finished adding partner content to database.');
};

const main = async () => {
  try {
    // Always create the database
    const databaseId = await createPartnersDatabase();

    // Add content only if the database is empty
    const queryResponse = await notion.databases.query({ database_id: databaseId });
    if (queryResponse.results.length === 0) {
      await addPartnersContentToDatabase(databaseId);
    } else {
      console.log(`Database "${databaseTitle}" already contains content. Skipping content pre-fill.`);
    }

    console.log('\nIMPORTANT: After running this script, you MUST manually share the Notion database with your integration.');
    console.log(`1. Open the database in Notion: https://www.notion.so/${databaseId.replace(/-/g, '')}`);
    console.log('2. Click the "..." menu at the top right, select "Connections", and add your integration.');
    console.log('\nAlso, for the "Logo" property, you will need to manually upload the images to Notion for each partner entry.');

  } catch (error) {
    console.error('Script failed:', error);
    process.exit(1);
  }
};

main();
