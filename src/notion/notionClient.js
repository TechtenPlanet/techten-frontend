import { Client } from '@notionhq/client';

const notionClient = new Client({
  auth: process.env.REACT_APP_NOTION_API_TOKEN,
});

export default notionClient;
