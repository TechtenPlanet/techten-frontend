import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '../.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });
const parentPageId = '226eb453424280f4884eea944a32396c';

async function createDatabase() {
  try {
    const response = await notion.databases.create({
      parent: { page_id: parentPageId },
      title: [{ type: 'text', text: { content: 'Blogs' } }],
      properties: {
        Title: { title: {} },
        Content: { rich_text: {} },
        Image: { url: {} },
        'Published Date': { date: {} },
        Author: { rich_text: {} },
        Tags: { multi_select: {} },
        Active: { checkbox: {} },
      },
    });
    console.log('Successfully created database:', response);
  } catch (error) {
    console.error('Error creating database:', error);
  }
}

createDatabase();
