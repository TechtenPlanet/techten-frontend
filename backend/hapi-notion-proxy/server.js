import Hapi from '@hapi/hapi';
import { 
  EVENTS_DB_ID, 
  BLOGS_DB_ID, 
  COURSES_DB_ID, 
  CONTACT_DB_ID, 
  ENROLLMENTS_DB_ID, 
  EVENT_REGISTRATIONS_DB_ID,
  VOLUNTEER_DB_ID,
  PARTNERSHIP_DB_ID,
  SPONSORSHIP_DB_ID,
  MENTORSHIP_DB_ID
} from './src/config/notion.js';
import { eventsRoutes } from './src/routes/events.js';
import { blogsRoutes } from './src/routes/blogs.js';
import { coursesRoutes } from './src/routes/courses.js';
import { formsRoutes } from './src/routes/forms.js';
import contentRoutes from './src/routes/content.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: [
          'http://localhost:3000', // Development
          'https://www.techtenplanet.org', // Production
          'https://techtenplanet.org' // Production (without www)
        ],
        headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'],
        credentials: true
      },
    },
  });

  // Register all routes
  server.route([
    ...eventsRoutes,
    ...blogsRoutes,
    ...coursesRoutes,
    ...formsRoutes,
    ...contentRoutes
  ]);

  // Serve static files from the 'public' directory (for the React frontend)
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        index: ['index.html'],
      },
    },
  });

  // Health check route
  server.route({
    method: 'GET',
    path: '/health',
    handler: (request, h) => {
      return { status: 'OK', timestamp: new Date().toISOString() };
    },
  });

  await server.start();
  console.log('🚀 Hapi-Notion-Proxy Server Info:');
  console.log(`✅ Server running at: ${server.info.uri}`);
  console.log(`📊 Events DB: ${EVENTS_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`📝 Blogs DB: ${BLOGS_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🎓 Courses DB: ${COURSES_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`📞 Contact Forms DB: ${CONTACT_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🎒 Enrollments DB: ${ENROLLMENTS_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🎫 Event Registrations DB: ${EVENT_REGISTRATIONS_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🤝 Volunteer Forms DB: ${VOLUNTEER_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🤝 Partnership Forms DB: ${PARTNERSHIP_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`💰 Sponsorship Forms DB: ${SPONSORSHIP_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🧠 Mentorship Forms DB: ${MENTORSHIP_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`🔑 Notion Token: ${process.env.REACT_APP_NOTION_API_TOKEN ? '✅ Loaded' : '❌ Missing'}`);
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
