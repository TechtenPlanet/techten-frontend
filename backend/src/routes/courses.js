import { notion, COURSES_DB_ID } from '../config/notion.js';
import { parseNotionBlocks, createExcerpt } from '../utils/notionParsers.js';

export const coursesRoutes = [
  // Courses Routes
  {
    method: 'GET',
    path: '/courses',
    handler: async (request, h) => {
      try {
        const response = await notion.databases.query({ 
          database_id: COURSES_DB_ID 
        });
        
        const courses = await Promise.all(response.results.map(async (page) => {
          const { properties, cover } = page;
          
          // Get image from cover, Image property, or use default
          let imageUrl = '/images/courses_images/TechtenPlanet _Open_day_1.png'; // Default fallback
          
          if (cover && cover.type === 'external') {
            imageUrl = cover.external.url;
          } else if (cover && cover.type === 'file') {
            imageUrl = cover.file.url;
          } else if (properties.Image?.files && properties.Image.files.length > 0) {
            imageUrl = properties.Image.files[0].file?.url || properties.Image.files[0].external?.url;
          } else if (properties.Image?.url) {
            imageUrl = properties.Image.url;
          }
          
          // Get course content for excerpt
          let excerpt = 'Course description will be available soon.';
          let instructor = 'TechTen Instructor';
          let schedule = 'Schedule TBD';
          let parsedContent = { schedule: [], instructors: [], courseOverview: '' };
          
          try {
            const blocks = await notion.blocks.children.list({ block_id: page.id });
            parsedContent = await parseNotionBlocks(blocks.results, notion);
            
            if (parsedContent.courseOverview) {
              excerpt = createExcerpt(parsedContent.courseOverview, 100);
            }
            if (parsedContent.instructors && parsedContent.instructors.length > 0) {
              instructor = parsedContent.instructors[0].name || 'TechTen Instructor';
            }
            if (parsedContent.schedule && parsedContent.schedule.length > 0) {
              const firstSchedule = parsedContent.schedule[0];
              schedule = `${firstSchedule.days || 'TBD'} ${firstSchedule.time || ''}`.trim();
            }
          } catch (contentErr) {
            console.log(`Could not fetch content for course ${page.id}:`, contentErr.message);
          }
          const pricing = {
            regular: properties['Regular Price']?.number || null,
            earlyBird: properties['Early Bird Price']?.number || null,
            student: properties['Student Price']?.number || null,
            currency: properties.Currency?.select?.name || 'GHC',
            notes: properties['Price Notes']?.rich_text[0]?.plain_text || ''
          };

          let displayPrice = null;
          if (pricing.earlyBird) {
            displayPrice = pricing.earlyBird;
          } else if (pricing.student) {
            displayPrice = pricing.student;
          } else {
            displayPrice = pricing.regular;
          }
          
          return {
            id: page.id,
            title: properties.Name?.title[0]?.plain_text || 'Untitled Course',
            category: properties.Category?.select?.name || 'General',
            description: excerpt,
            excerpt: excerpt,
            instructor: instructor,
            schedule: schedule,
            grades: 'All levels',
            format: 'Online',
            image: imageUrl,
            active: properties.Active?.checkbox || false,
            pricing: displayPrice ? {
              student: displayPrice,
              currency: pricing.currency,
            } : null,
            links: [
              { label: 'Course Overview', url: `/course/${page.id}` },
              { label: 'Enrollment', url: `/enrollment?id=${page.id}&title=${encodeURIComponent(properties.Name?.title[0]?.plain_text || 'Untitled Course')}` }
            ],
            sessions: parsedContent.schedule.length > 0 ? parsedContent.schedule.map(sched => ({
              date: sched.days || 'Coming Soon',
              time: sched.time || 'TBD',
              location: sched.location || 'Online',
              full: false
            })) : [
              {
                date: 'Coming Soon',
                time: 'TBD',
                location: 'Online',
                full: false
              }
            ]
          };
        }));
        
        return courses.filter(course => course.active)
      } catch (err) {
        console.error('Courses API Error:', err);
        return h.response({ error: 'Failed to fetch courses' }).code(500);
      }
    },
  },

  // Single Course Route
  {
    method: 'GET',
    path: '/api/courses/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        
        // Get all courses and find the one with matching ID
        const response = await notion.databases.query({ 
          database_id: COURSES_DB_ID 
        });
        
        const foundPage = response.results.find(page => page.id === id);
        
        if (!foundPage) {
          return h.response({ error: 'Course not found' }).code(404);
        }
        
        const { properties, cover } = foundPage;
        
        // Get image from cover, Image property, or use default
        let imageUrl = '/images/courses_images/TechtenPlanet _Open_day_1.png'; // Default fallback
        
        if (cover && cover.type === 'external') {
          imageUrl = cover.external.url;
        } else if (cover && cover.type === 'file') {
          imageUrl = cover.file.url;
        } else if (properties.Image?.files && properties.Image.files.length > 0) {
          imageUrl = properties.Image.files[0].file?.url || properties.Image.files[0].external?.url;
        } else if (properties.Image?.url) {
          imageUrl = properties.Image.url;
        }
        
        // Get detailed course content
        let parsedContent = {
          courseOverview: 'Course description will be available soon.',
          instructors: [{ name: 'TechTen Instructor', contact: '', email: '', linkedin: '' }],
          schedule: [],
          learningOutcomes: [],
          courseContents: [],
          prerequisites: ['Basic computer literacy'],
          courseDelivery: 'Course delivery information will be available soon.'
        };
        
        try {
          const blocks = await notion.blocks.children.list({ block_id: foundPage.id });
          const contentFromBlocks = await parseNotionBlocks(blocks.results, notion);
          
          // Merge parsed content with defaults
          parsedContent = {
            courseOverview: contentFromBlocks.courseOverview || parsedContent.courseOverview,
            instructors: contentFromBlocks.instructors.length > 0 ? contentFromBlocks.instructors : parsedContent.instructors,
            schedule: contentFromBlocks.schedule.length > 0 ? contentFromBlocks.schedule : parsedContent.schedule,
            learningOutcomes: contentFromBlocks.learningOutcomes.length > 0 ? contentFromBlocks.learningOutcomes : parsedContent.learningOutcomes,
            courseContents: contentFromBlocks.courseContents.length > 0 ? contentFromBlocks.courseContents : parsedContent.courseContents,
            prerequisites: contentFromBlocks.prerequisites.length > 0 ? contentFromBlocks.prerequisites : parsedContent.prerequisites,
            courseDelivery: contentFromBlocks.courseDelivery || parsedContent.courseDelivery
          };
        } catch (contentErr) {
          console.log(`Could not fetch detailed content for course ${foundPage.id}:`, contentErr.message);
        }
        const pricing = {
          regular: properties['Regular Price']?.number || null,
          earlyBird: properties['Early Bird Price']?.number || null,
          student: properties['Student Price']?.number || null,
          currency: properties.Currency?.select?.name || 'GHC',
          notes: properties['Price Notes']?.rich_text[0]?.plain_text || ''
        };
        
        const course = {
          id: foundPage.id,
          title: properties.Name?.title[0]?.plain_text || 'Untitled Course',
          courseCode: properties.Code?.rich_text[0]?.plain_text || '',
          category: properties.Category?.select?.name || 'General',
          description: createExcerpt(parsedContent.courseOverview, 50),
          fullOverview: parsedContent.courseOverview,
          detailedDescription: parsedContent.courseOverview,
          learningOutcomes: parsedContent.learningOutcomes,
          courseContents: parsedContent.courseContents,
          courseDelivery: parsedContent.courseDelivery,
          grades: 'All levels',
          format: 'Online',
          image: imageUrl,
          pricing: pricing,
          instructors: parsedContent.instructors.map(instructor => ({
            name: instructor.name || 'TechTen Instructor',
            contact: instructor.contact || '',
            email: instructor.email || '',
            linkedin: instructor.linkedin || '',
            image: '/images/Team/Techten team/Oscar_Asamoah_image.jpg',
            title: 'Course Instructor'
          })),
          classSchedule: parsedContent.schedule,
          prerequisites: parsedContent.prerequisites,
          materials: ['A laptop with internet access'],
          studentProjects: [
            imageUrl,
            imageUrl,
            imageUrl
          ],
          links: [
            { label: 'Course Overview', url: `/course/${foundPage.id}` },
            { label: 'Enrollment', url: `/enrollment?id=${foundPage.id}&title=${encodeURIComponent(properties.Name?.title[0]?.plain_text || 'Untitled Course')}` }
          ],
          sessions: parsedContent.schedule.length > 0 ? parsedContent.schedule.map(sched => ({
            date: sched.days || 'Coming Soon',
            time: sched.time || 'TBD',
            location: sched.location || 'Online',
            full: false
          })) : [
            {
              date: 'Coming Soon',
              time: 'TBD',
              location: 'Online',
              full: false
            }
          ]
        };
        
        return course;
       
      } catch (err) {
        console.error('Single Course API Error:', err);
        console.error('Error details:', err.message);
        console.error('Course ID requested:', id);
        return h.response({ error: 'Course not found' }).code(404);
      }
    },
  }
];
