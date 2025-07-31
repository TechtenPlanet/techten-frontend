# Content Migration Plan: Static Data Files to Notion CMS

## Overview
This document outlines the plan to migrate all static data files from `src/data/` to Notion databases for dynamic content management.

## Benefits of Migration
- ✅ **Dynamic Content Updates**: Update content without code deployments
- ✅ **Non-Technical Content Management**: Allow non-developers to manage content
- ✅ **Version Control**: Track content changes in Notion
- ✅ **Collaborative Editing**: Multiple team members can update content
- ✅ **Rich Media Support**: Easy image and file management
- ✅ **Structured Data**: Better organization and relationships between content

## Migration Status

### ✅ Already Migrated
- **Courses** (`coursedata.js`) → Notion Courses DB
- **Events** (`eventsData.js`) → Notion Events DB  
- **Blogs** (`blogsData.js`) → Notion Blogs DB

### 🔄 Ready for Migration (Backend Complete)
The following have backend API endpoints ready and just need Notion databases created:

1. **Home Hero** (`homeHeroData.js`)
   - API: `/api/content/home-hero`
   - Database Fields: Heading (Rich Text), Items (Rich Text - JSON)

2. **Impact Data** (`impactData.js`)
   - API: `/api/content/impact`
   - Database Fields: Section (Select), Title (Title), Description (Rich Text), Value (Rich Text), Icon (Rich Text), Image (Files), Order (Number)

3. **Testimonials** (`testimonialsData.js`)
   - API: `/api/content/testimonials`, `/api/content/testimonials/featured`
   - Database Fields: Text (Rich Text), Author (Title), Position (Rich Text), Company (Rich Text), Image (Files), Featured (Checkbox), Order (Number)

4. **Services** (`servicesData.js`)
   - API: `/api/content/services`
   - Database Fields: Title (Title), Description (Rich Text), Image (Files), Icon (Rich Text), Order (Number), Active (Checkbox)

5. **Partners** (`partnersData.js`)
   - API: `/api/content/partners`, `/api/content/partners/featured`
   - Database Fields: Name (Title), Logo (Files), Website (URL), Description (Rich Text), Category (Select), Featured (Checkbox), Order (Number)

6. **Team Members** (if exists)
   - API: `/api/content/team`, `/api/content/team/{department}`
   - Database Fields: Name (Title), Position (Rich Text), Bio (Rich Text), Image (Files), LinkedIn (URL), Twitter (URL), Email (Email), Department (Select), Order (Number), Active (Checkbox)

7. **Programs** (`programdata.js`)
   - API: `/api/content/programs`, `/api/content/programs/featured`
   - Database Fields: Title (Title), Description (Rich Text), Image (Files), Duration (Rich Text), AgeGroup (Rich Text), Category (Select), Featured (Checkbox), Active (Checkbox), Order (Number)

8. **Generic Content Types** (for simple content):
   - **Mission** (`missionData.js`) → `/api/content/mission`
   - **About Section** (`aboutSectionData.js`) → `/api/content/about-section`
   - **Benefits** (`benefitsData.js`) → `/api/content/benefits`
   - **Project Highlights** (`projectThatMattersData.js`) → `/api/content/project-highlights`
   - **Tech for Girls** (`techForGirlsData.js`) → `/api/content/tech-for-girls`
   - **Tech Labs** (`techLabsData.js`) → `/api/content/tech-labs`
   - **Hackathons** (`hackathonsData.js`) → `/api/content/hackathons`
   - **Consultants** (`consultantsData.js`) → `/api/content/consultants`
   - **Get Involved** (`getInvolvedData.js`) → `/api/content/get-involved`

   Generic Database Fields: Title (Title), Content (Rich Text), Type (Select), Order (Number), Active (Checkbox)

## Implementation Steps

### Step 1: Create Notion Databases
For each content type, create a Notion database with the specified fields above.

### Step 2: Add Database IDs to Environment
Update `../hapi-notion-proxy/.env` with the actual database IDs:
```env
# Content Management Databases
REACT_APP_NOTION_HOME_HERO_DB_ID=your-database-id-here
REACT_APP_NOTION_IMPACT_DATA_DB_ID=your-database-id-here
REACT_APP_NOTION_TESTIMONIALS_DB_ID=your-database-id-here
# ... etc
```

### Step 3: Migrate Data to Notion
Manually copy existing data from the `.js` files to the corresponding Notion databases.

### Step 4: Update Frontend Components
Replace static imports with API calls to fetch content from Notion.

## Example: Migrating Home Hero Data

### Current Static Data (`src/data/homeHeroData.js`):
```javascript
const homeHeroData = {
  heading: "We're giving young people in Ghana...",
  items: [
    { id: "student", icon: PiStudentThin, text: "I'm a Student", scrollTarget: "ContactUsContent" },
    { id: "school", icon: IoSchoolOutline, text: "I'm a School", scrollTarget: "ContactUsContent" },
    { id: "donor", icon: LiaDonateSolid, text: "I'm a Donor", scrollTarget: "ContactUsContent" }
  ]
};
```

### Notion Database Structure:
- **Database Name**: Home Hero Content
- **Fields**:
  - `Heading` (Rich Text): Main heading text
  - `Items` (Rich Text): JSON string of items array
  - `Active` (Checkbox): Whether this content is active
  - `Order` (Number): For ordering multiple entries

### Frontend Integration:
```javascript
// Replace static import
// import homeHeroData from '../data/homeHeroData';

// With API call
const [homeHeroData, setHomeHeroData] = useState(null);

useEffect(() => {
  fetch('http://localhost:5000/api/content/home-hero')
    .then(res => res.json())
    .then(data => {
      // Parse items JSON string back to array
      const parsedData = {
        ...data,
        items: JSON.parse(data.items || '[]')
      };
      setHomeHeroData(parsedData);
    })
    .catch(err => console.error('Error fetching home hero data:', err));
}, []);
```

## Database Field Types Reference

### Common Field Types:
- **Title**: Main identifier field
- **Rich Text**: For longer text content, descriptions
- **Select**: For categories, types, status
- **Multi-select**: For tags, multiple categories
- **Checkbox**: For boolean values (active, featured, published)
- **Number**: For ordering, counts, prices
- **Date**: For dates and times
- **URL**: For links and external references
- **Email**: For email addresses
- **Files & Media**: For images, documents, attachments

### Recommended Standard Fields:
All content databases should include:
- `Active` (Checkbox): Whether content is published
- `Order` (Number): For manual ordering
- `Created` (Created time): Auto-populated
- `Last Modified` (Last edited time): Auto-populated

## Migration Priority

### High Priority (Core Content):
1. Home Hero Data
2. Impact Data  
3. Services Data
4. Testimonials

### Medium Priority (Program Content):
1. Programs Data
2. Mission Data
3. About Section Data

### Low Priority (Specialized Content):
1. Tech for Girls Data
2. Tech Labs Data
3. Hackathons Data
4. Consultants Data
5. Benefits Data
6. Project Highlights Data

## Testing Strategy

1. **API Testing**: Test each endpoint with Postman or browser
2. **Frontend Integration**: Update one component at a time
3. **Fallback Handling**: Ensure graceful degradation if API fails
4. **Performance**: Monitor loading times with dynamic content

## Rollback Plan

Keep original `.js` files as backup until migration is fully tested and stable. Components can easily switch back to static imports if needed.

## Production Deployment Notes

### Domain Configuration
- **Production Domain**: `https://www.techtenplanet.org` and `https://techtenplanet.org`
- **CORS Settings**: Already configured for both development and production domains
- **API Base URL**: Configured to automatically switch between development and production

### Environment Setup
You'll need to deploy the Hapi-Notion-Proxy server and update the API base URL in the React hook:

```javascript
// In src/hooks/useNotionContent.js, update this line:
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-actual-proxy-server-domain.com/api/content' // Replace with your deployed proxy server URL
  : 'http://localhost:5000/api/content';
```

## Next Steps

1. **Create Notion Databases**: Set up databases with proper field structures
2. **Populate Database IDs**: Add real database IDs to environment variables
3. **Deploy Proxy Server**: Deploy the Hapi-Notion-Proxy server to your hosting platform
4. **Update API URL**: Update the production API base URL in the React hook
5. **Migrate Content**: Copy existing data to Notion databases
6. **Update Components**: Replace static imports with API calls
7. **Test Thoroughly**: Ensure all content loads correctly on both development and production
8. **Deploy Frontend**: Deploy the updated frontend to techtenplanet.org

## Support

The backend infrastructure is ready. The main work remaining is:
1. Creating the Notion databases
2. Migrating the content
3. Updating frontend components to use the APIs

All API endpoints are documented and ready for use!
