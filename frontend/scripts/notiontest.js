import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '../.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });

const runTest = async () => {
  try {
    const user = await notion.users.me();
    console.log("✅ Token is valid! You are:", user.name);
  } catch (err) {
    console.error("❌ Token test failed:", err.message);
  }
};

runTest();
