import { Client } from '@notionhq/client';

const notionClient = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default notionClient;
