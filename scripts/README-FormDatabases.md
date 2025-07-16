# Form Databases Setup Guide

This guide will help you create Notion databases for storing form submissions from your website.

## 📋 Prerequisites

1. **Notion Workspace Access**: Make sure you have access to your Notion workspace
2. **Notion Integration**: Your existing Notion integration should have access to create databases
3. **Parent Page**: You need a Notion page where the databases will be created

## 🔧 Setup Steps

### Step 1: Get Your Parent Page ID

1. Go to your Notion workspace
2. Create a new page or use an existing page (e.g., "Website Forms" or "TechTen Data")
3. Open the page and copy the page ID from the URL

**Example URL:** `https://www.notion.so/Your-Page-Name-abc123def456789`
**Page ID:** `abc123def456789` (the part after the last dash)

### Step 2: Update Database Creation Scripts

Replace `YOUR_PARENT_PAGE_ID` in each script with your actual page ID:

- `scripts/createContactDatabase.js`
- `scripts/createEnrollmentDatabase.js` 
- `scripts/createEventRegistrationDatabase.js`

### Step 3: Run Database Creation Scripts

```bash
# Create Contact Form Submissions database
node scripts/createContactDatabase.js

# Create Course Enrollments database  
node scripts/createEnrollmentDatabase.js

# Create Event Registrations database
node scripts/createEventRegistrationDatabase.js
```

### Step 4: Update Environment Variables

After running each script, add the database IDs to your `.env` file:

```env
# Form Databases
REACT_APP_NOTION_CONTACT_DB_ID=your_contact_db_id
REACT_APP_NOTION_ENROLLMENTS_DB_ID=your_enrollments_db_id
REACT_APP_NOTION_EVENT_REGISTRATIONS_DB_ID=your_event_registrations_db_id
```

## 📊 Database Structures

### Contact Form Submissions
- **Name** (Title)
- **Email** (Email)
- **Phone** (Phone Number)
- **Subject** (Rich Text)
- **Message** (Rich Text)
- **Submitted Date** (Date)
- **Status** (Select: New, In Progress, Resolved)
- **Source** (Select: Website Contact Form, Course Inquiry, Event Inquiry)

### Course Enrollments
- **Student Name** (Title)
- **Email** (Email)
- **Phone** (Phone Number)
- **Course Name** (Rich Text)
- **Course ID** (Rich Text)
- **Age** (Number)
- **Experience Level** (Select: Beginner, Intermediate, Advanced)
- **Enrollment Date** (Date)
- **Status** (Select: Pending, Confirmed, Waitlisted, Cancelled, Completed)
- **Special Requirements** (Rich Text)
- **Emergency Contact** (Rich Text)

### Event Registrations
- **Participant Name** (Title)
- **Email** (Email)
- **Phone** (Phone Number)
- **Event Name** (Rich Text)
- **Event ID** (Rich Text)
- **Organization** (Rich Text)
- **Job Title** (Rich Text)
- **Dietary Requirements** (Rich Text)
- **Registration Date** (Date)
- **Status** (Select: Registered, Confirmed, Attended, No Show, Cancelled)
- **Ticket Type** (Select: Free, Student, Regular, VIP)
- **How did you hear about us?** (Select: Website, Social Media, Friend/Colleague, Email Newsletter, Other)
- **Special Requests** (Rich Text)

## 🚀 Next Steps

After creating the databases:

1. Update your Hapi.js backend with form submission endpoints
2. Update your frontend forms to submit to the backend
3. Test form submissions end-to-end

## 🔍 Troubleshooting

**Error: "parent page not found"**
- Make sure the page ID is correct
- Ensure your Notion integration has access to the parent page
- Try creating the page in your root workspace if you're having permission issues

**Error: "insufficient permissions"**
- Make sure your Notion integration has "Insert content" permissions
- Check that the integration is connected to the correct workspace
