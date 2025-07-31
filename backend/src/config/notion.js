import dotenv from 'dotenv';
import { Client } from '@notionhq/client';
dotenv.config();

// Initialize Notion client
export const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

// Database IDs
export const EVENTS_DB_ID = process.env.NOTION_EVENTS_DB_ID;
export const BLOGS_DB_ID = process.env.NOTION_BLOGS_DB_ID;
export const COURSES_DB_ID = process.env.NOTION_COURSES_DB_ID;
export const CONTACT_DB_ID = process.env.NOTION_CONTACT_DB_ID;
export const ENROLLMENTS_DB_ID = process.env.NOTION_ENROLLMENTS_DB_ID;
export const EVENT_REGISTRATIONS_DB_ID = process.env.NOTION_EVENT_REGISTRATIONS_DB_ID;
export const VOLUNTEER_DB_ID = process.env.NOTION_VOLUNTEER_DB_ID;
export const PARTNERSHIP_DB_ID = process.env.NOTION_PARTNERSHIP_DB_ID;
export const SPONSORSHIP_DB_ID = process.env.NOTION_SPONSORSHIP_DB_ID;
export const MENTORSHIP_DB_ID = process.env.NOTION_MENTORSHIP_DB_ID;

// Content Management Database IDs
export const HOME_HERO_DB_ID = process.env.NOTION_HOME_HERO_DB_ID;
export const IMPACT_DATA_DB_ID = process.env.NOTION_IMPACT_DATA_DB_ID;
export const TESTIMONIALS_DB_ID = process.env.NOTION_TESTIMONIALS_DB_ID;
export const SERVICES_DB_ID = process.env._NOTION_SERVICES_DB_ID;
export const PARTNERS_DB_ID = process.env.NOTION_PARTNERS_DB_ID;
export const TEAM_DB_ID = process.env.NOTION_TEAM_DB_ID;
export const PROGRAMS_DB_ID = process.env.NOTION_PROGRAMS_DB_ID;
export const MISSION_DB_ID = process.env.NOTION_MISSION_DB_ID;
export const ABOUT_SECTION_DB_ID = process.env.NOTION_ABOUT_SECTION_DB_ID;
export const BENEFITS_DB_ID = process.env.NOTION_BENEFITS_DB_ID;
export const PROJECT_HIGHLIGHTS_DB_ID = process.env.NOTION_PROJECT_HIGHLIGHTS_DB_ID;
export const TECH_FOR_GIRLS_DB_ID = process.env.NOTION_TECH_FOR_GIRLS_DB_ID;
export const TECH_LABS_DB_ID = process.env.NOTION_TECH_LABS_DB_ID;
export const HACKATHONS_DB_ID = process.env.NOTION_HACKATHONS_DB_ID;
export const CONSULTANTS_DB_ID = process.env.NOTION_CONSULTANTS_DB_ID;
export const GET_INVOLVED_DB_ID = process.env.NOTION_GET_INVOLVED_DB_ID;
