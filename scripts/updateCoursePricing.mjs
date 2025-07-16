import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config({ path: '../.env' });

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_TOKEN });
const databaseId = process.env.REACT_APP_NOTION_COURSES_DB_ID;

async function updateCoursePricing() {
  try {
    console.log('🔄 Updating course pricing in Notion database...');
    
    // Get all courses from the database
    const response = await notion.databases.query({ 
      database_id: databaseId 
    });
    
    console.log(`📚 Found ${response.results.length} courses to update`);
    
    // Sample pricing data for different course types
    const pricingTemplates = [
      {
        regular: 1200,
        earlyBird: 1000,
        student: 800,
        currency: 'GHC',
        notes: 'Special discount available for group enrollments (3+ students)'
      },
      {
        regular: 1500,
        earlyBird: 1200,
        student: 900,
        currency: 'GHC',
        notes: 'Includes all course materials and certification'
      },
      {
        regular: 800,
        earlyBird: 650,
        student: 500,
        currency: 'GHC',
        notes: 'Introductory course - perfect for beginners'
      }
    ];
    
    // Update each course with pricing
    for (let i = 0; i < response.results.length; i++) {
      const course = response.results[i];
      const pricing = pricingTemplates[i % pricingTemplates.length];
      
      try {
        await notion.pages.update({
          page_id: course.id,
          properties: {
            'Regular Price': {
              number: pricing.regular
            },
            'Early Bird Price': {
              number: pricing.earlyBird
            },
            'Student Price': {
              number: pricing.student
            },
            'Currency': {
              select: { name: pricing.currency }
            },
            'Price Notes': {
              rich_text: [{ text: { content: pricing.notes } }]
            }
          }
        });
        
        const courseName = course.properties.Name?.title[0]?.plain_text || 'Untitled Course';
        console.log(`✅ Updated pricing for: ${courseName}`);
        console.log(`   Regular: ₵${pricing.regular} | Early Bird: ₵${pricing.earlyBird} | Student: ₵${pricing.student}`);
        
      } catch (updateErr) {
        console.error(`❌ Error updating course ${course.id}:`, updateErr.message);
      }
    }
    
    console.log('\n🎉 Course pricing update completed!');
    console.log('💡 You can now view the dynamic pricing on your course detail pages');
    
  } catch (error) {
    console.error('❌ Error updating course pricing:', error);
  }
}

updateCoursePricing();
