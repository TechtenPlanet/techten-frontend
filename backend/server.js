import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Path from 'path';
import { fileURLToPath } from 'url';

import { 
  EVENTS_DB_ID, BLOGS_DB_ID, COURSES_DB_ID, CONTACT_DB_ID,
  ENROLLMENTS_DB_ID, EVENT_REGISTRATIONS_DB_ID, VOLUNTEER_DB_ID,
  PARTNERSHIP_DB_ID, SPONSORSHIP_DB_ID, MENTORSHIP_DB_ID,
  STEM_SQUAD_LANDING_PAGE_DB_ID // Import the new DB ID
} from './src/config/notion.js';

import { eventsRoutes } from './src/routes/events.js';
import { blogsRoutes } from './src/routes/blogs.js';
import { coursesRoutes } from './src/routes/courses.js';
import { formsRoutes } from './src/routes/forms.js';
import contentRoutes from './src/routes/content.js';
import { stemSquadRoutes } from './src/routes/stemSquad.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: [
          'http://localhost:3000',
          'https://www.techtenplanet.org',
          'https://techtenplanet.org'
        ],
        headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'],
        credentials: true
      },
      files: { relativeTo: Path.join(__dirname, 'public') }
    }
  });

  await server.register(Inert);

  // Prefix all API routes with /api
  const prefixRoutes = (routes) => routes.map(r => ({ ...r, path: `/api${r.path}` }));
  server.route([
    ...prefixRoutes(eventsRoutes),
    ...prefixRoutes(blogsRoutes),
    ...prefixRoutes(coursesRoutes),
    ...prefixRoutes(formsRoutes),
    ...prefixRoutes(contentRoutes),
    ...prefixRoutes(stemSquadRoutes)
  ]);

  // Serve static frontend files
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        index: ['index.html'],
        redirectToSlash: true
      }
    }
  });

  // React Router catch-all for deep links
  server.ext('onPreResponse', (request, h) => {
    const response = request.response;
    if (
      response.isBoom &&
      response.output.statusCode === 404 &&
      !request.path.startsWith('/api') &&
      !request.path.startsWith('/health')
    ) {
      return h.file(Path.join(__dirname, 'public', 'index.html'));
    }
    return h.continue;
  });

  // Health check
  server.route({
    method: 'GET',
    path: '/health',
    handler: () => ({ status: 'OK', timestamp: new Date().toISOString() })
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
  console.log(`� STEM Squad Landing Page DB: ${STEM_SQUAD_LANDING_PAGE_DB_ID ? '✅ Connected' : '❌ Missing'}`);
  console.log(`�🔑 Notion Token: ${process.env.NOTION_API_TOKEN ? '✅ Loaded' : '❌ Missing'}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
