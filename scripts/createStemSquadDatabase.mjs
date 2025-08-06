import { Client } from '@notionhq/client';
import 'dotenv/config'; // Ensure environment variables are loaded

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID; // You might need to define a parent page ID in your .env

if (!process.env.NOTION_API_TOKEN) {
  console.error('NOTION_API_TOKEN is not set in your .env file.');
  process.exit(1);
}

if (!PARENT_PAGE_ID) {
  console.warn('NOTION_PARENT_PAGE_ID is not set. The database will be created as a top-level page. Consider setting it to a specific page ID if you want to nest it.');
  // For now, if no parent page is specified, it will create it at the root level accessible by the token.
  // In a real scenario, you might want to ask the user for a specific parent page ID.
}

const databaseTitle = 'STEM Squad Landing Page Content';

const createDatabase = async () => {
  try {
    console.log(`Attempting to create database: "${databaseTitle}"`);

    const response = await notion.databases.create({
      parent: PARENT_PAGE_ID ? { page_id: PARENT_PAGE_ID } : { workspace: true },
      title: [{ type: 'text', text: { content: databaseTitle } }],
      properties: {
        'Title': { title: {} },
        'Type': {
          select: {
            options: [
              { name: 'Hero', color: 'blue' },
              { name: 'How It Works', color: 'green' },
              { name: 'Plan – Individual', color: 'purple' },
              { name: 'Plan – Group Buy', color: 'orange' },
              { name: 'Why STEM Squad', color: 'red' },
              { name: 'FAQ', color: 'yellow' },
              { name: 'CTA', color: 'pink' },
              { name: 'Footer', color: 'brown' },
            ],
          },
        },
        'Content': { rich_text: {} },
        'Order': { number: {} },
        'Status': {
          select: {
            options: [
              { name: 'Draft', color: 'default' },
              { name: 'In Review', color: 'blue' },
              { name: 'Published', color: 'green' },
            ],
          },
        },
        'Button Label': { rich_text: {} },
        'Button Link': { url: {} },
        'Media': { files: {} },
      },
    });

    console.log(`Successfully created database: ${response.url}`);
    console.log(`Database ID: ${response.id}`);
    return response.id;
  } catch (error) {
    console.error('Error creating database:', error.body || error);
    throw error;
  }
};

const addContentToDatabase = async (databaseId) => {
  const contentRows = [
    {
      Title: 'Unlock Your Child’s Future',
      Type: 'Hero',
      Content: 'Join Techten’s STEM Squad – A monthly program that delivers STEM kits, fun activities, and skills for kids aged 6–18!',
      Order: 1,
      Status: 'Published',
      'Button Label': 'Enroll Now',
      'Button Link': '[link-to-enroll]',
      Media: [], // Media will be handled manually or in a separate script if needed
    },
    {
      Title: 'How It Works',
      Type: 'How It Works',
      Content: '1. Subscribe – Choose a plan. 2. Receive Kit – Delivered every semester. 3. Explore & Learn – Guided activities monthly.',
      Order: 2,
      Status: 'Published',
    },
    {
      Title: 'Starter Plan (6–12)',
      Type: 'Plan – Individual',
      Content: 'GHS 350/month – Hands-on science & engineering kits for beginners. Includes: STEM kits, T-shirt, and guided activities.',
      Order: 3,
      Status: 'Published',
      'Button Label': 'Enroll My Child',
      'Button Link': '[link-to-enroll]',
    },
    {
      Title: 'Group Buy Plan',
      Type: 'Plan – Group Buy',
      Content: 'Team up with 3–5 parents and save 10–15%! Get discounted STEM kits delivered in bulk to one location.',
      Order: 4,
      Status: 'Published',
      'Button Label': 'Start a Group',
      'Button Link': '[link-to-group-enroll]',
    },
    {
      Title: 'Why Join STEM Squad',
      Type: 'Why STEM Squad',
      Content: 'Hands-on learning, future-ready skills, and a community of curious young minds. Pay monthly, get semester kits!',
      Order: 5,
      Status: 'Published',
    },
    {
      Title: 'When do kits ship?',
      Type: 'FAQ',
      Content: 'Your child’s first kit ships after 3 months of subscription (this allows us to prepare a full semester kit).',
      Order: 6,
      Status: 'Published',
    },
    {
      Title: 'Form a Group Today',
      Type: 'CTA',
      Content: 'Want to save? Start a Parent Group Buy today and enjoy discounted kits!',
      Order: 7,
      Status: 'Published',
      'Button Label': 'Start a Group',
      'Button Link': '[link-to-group-enroll]',
    },
  ];

  console.log(`Adding ${contentRows.length} rows to database ID: ${databaseId}`);

  for (const row of contentRows) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          'Title': { title: [{ text: { content: row.Title } }] },
          'Type': { select: { name: row.Type } },
          'Content': { rich_text: [{ text: { content: row.Content } }] },
          'Order': { number: row.Order },
          'Status': { select: { name: row.Status } },
          'Button Label': row['Button Label'] ? { rich_text: [{ text: { content: row['Button Label'] } }] } : undefined,
          'Button Link': row['Button Link'] ? { url: row['Button Link'] } : undefined,
          // Media property is complex; leave as undefined or handle separately if needed
          'Media': row.Media && row.Media.length > 0 ? { files: row.Media.map(m => ({ external: { url: m.url }, name: m.name })) } : undefined,
        },
      });
      console.log(`Added row: "${row.Title}"`);
    } catch (error) {
      console.error(`Error adding row "${row.Title}":`, error.body || error);
    }
  }
  console.log('Finished adding content to database.');
};

const main = async () => {
  try {
    // Check if the database already exists by querying for its title
    const searchResponse = await notion.search({
      query: databaseTitle,
      filter: {
        property: 'object',
        value: 'database'
      }
    });

    let databaseId;
    if (searchResponse.results.length > 0) {
      databaseId = searchResponse.results[0].id;
      console.log(`Database "${databaseTitle}" already exists with ID: ${databaseId}. Skipping creation.`);
    } else {
      databaseId = await createDatabase();
    }

    // Add content only if the database was just created or if it's empty
    const queryResponse = await notion.databases.query({ database_id: databaseId });
    if (queryResponse.results.length === 0) {
      await addContentToDatabase(databaseId);
    } else {
      console.log(`Database "${databaseTitle}" already contains content. Skipping content pre-fill.`);
    }

    console.log('\nIMPORTANT: After running this script, you MUST manually share the Notion database with your integration.');
    console.log(`1. Open the database in Notion: https://www.notion.so/${databaseId.replace(/-/g, '')}`);
    console.log('2. Click the "Share" button at the top right.');
    console.log('3. Click "Invite" or "Add people, emails, groups, or integrations".');
    console.log('4. Search for your integration\'s name (it appears as a greyed-out user with "bot" next to it).');
    console.log('5. Select your integration and grant it "Can edit content" or full access.');
    console.log('6. Click "Invite".');
    console.log('\nOnce shared, trigger a new deployment on DigitalOcean App Platform.');

  } catch (error) {
    console.error('Script failed:', error);
    process.exit(1);
  }
};

main();
