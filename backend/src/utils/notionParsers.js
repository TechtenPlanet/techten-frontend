// Helper function to parse Notion blocks and extract course content
export async function parseNotionBlocks(blocks, notionClient) {
  const content = {
    courseOverview: '',
    instructors: [],
    schedule: [],
    learningOutcomes: [],
    courseContents: [],
    prerequisites: [],
    courseDelivery: ''
  };

  let currentSection = '';
  let currentText = '';
  
  for (const block of blocks) {
    const blockText = extractTextFromBlock(block);
    
    if (block.type === 'heading_2' || block.type === 'heading_3') {
      // Save previous section
      if (currentSection && currentText) {
        saveContentToSection(content, currentSection, currentText.trim());
      }
      
      // Start new section
      currentSection = blockText.toLowerCase();
      currentText = '';
    } else if (block.type === 'paragraph' || block.type === 'bulleted_list_item') {
      currentText += blockText + ' ';
    } else if (block.type === 'table') {
      // Handle tables (for instructor info and schedules)
      const tableData = await parseTableBlock(block, notionClient);
      if (currentSection.includes('instructor')) {
        content.instructors.push(...tableData);
      } else if (currentSection.includes('schedule')) {
        content.schedule.push(...tableData);
      }
    }
  }
  
  // Save final section
  if (currentSection && currentText) {
    saveContentToSection(content, currentSection, currentText.trim());
  }
  
  return content;
}

// Helper function to extract text from a Notion block
export function extractTextFromBlock(block) {
  if (!block) return '';
  
  switch (block.type) {
    case 'paragraph':
      return block.paragraph?.rich_text?.map(text => text.plain_text).join('') || '';
    case 'heading_1':
      return block.heading_1?.rich_text?.map(text => text.plain_text).join('') || '';
    case 'heading_2':
      return block.heading_2?.rich_text?.map(text => text.plain_text).join('') || '';
    case 'heading_3':
      return block.heading_3?.rich_text?.map(text => text.plain_text).join('') || '';
    case 'bulleted_list_item':
      return block.bulleted_list_item?.rich_text?.map(text => text.plain_text).join('') || '';
    case 'numbered_list_item':
      return block.numbered_list_item?.rich_text?.map(text => text.plain_text).join('') || '';
    default:
      return '';
  }
}

// Helper function to parse table blocks
export async function parseTableBlock(block, notion) {
  const tableData = [];
  
  if (block.type === 'table' && block.table && block.table.table_width > 0) {
    try {
      // Fetch table children to get the actual table rows
      const tableChildren = await notion.blocks.children.list({ block_id: block.id });
      
      let isHeaderRow = true;
      let headers = [];
      
      for (const row of tableChildren.results) {
        if (row.type === 'table_row') {
          const cells = row.table_row.cells.map(cell => 
            cell.map(text => text.plain_text).join('')
          );
          
          if (isHeaderRow) {
            headers = cells;
            isHeaderRow = false;
          } else {
            // Create object from headers and cells
            const rowData = {};
            headers.forEach((header, index) => {
              rowData[header.toLowerCase()] = cells[index] || '';
            });
            tableData.push(rowData);
          }
        }
      }
    } catch (err) {
      console.log('Error parsing table:', err.message);
    }
  }
  
  return tableData;
}

// Helper function to parse schedule from text content
export function parseScheduleFromText(text) {
  const scheduleItems = [];
  
  // Look for schedule patterns in the text
  const lines = text.split('\n');
  let inScheduleSection = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check if we're in a schedule section
    if (trimmedLine.toLowerCase().includes('schedule') || 
        trimmedLine.toLowerCase().includes('days') ||
        trimmedLine.toLowerCase().includes('time')) {
      inScheduleSection = true;
      continue;
    }
    
    // If we're in schedule section, try to parse schedule items
    if (inScheduleSection && trimmedLine) {
      // Look for patterns like "Monday | 12:00pm - 2:00pm | TechTen Office"
      const scheduleMatch = trimmedLine.match(/(\w+)\s*\|\s*([^|]+)\s*\|\s*(.+)/);
      if (scheduleMatch) {
        scheduleItems.push({
          days: scheduleMatch[1].trim(),
          time: scheduleMatch[2].trim(),
          location: scheduleMatch[3].trim()
        });
      }
      // Also look for simpler patterns like "Sunday 12:00pm - 2:00pm Online"
      else {
        const simpleMatch = trimmedLine.match(/(\w+)\s+([0-9:apm\s-]+)\s+(.+)/);
        if (simpleMatch) {
          scheduleItems.push({
            days: simpleMatch[1].trim(),
            time: simpleMatch[2].trim(),
            location: simpleMatch[3].trim()
          });
        }
      }
    }
    
    // Stop parsing if we hit another section
    if (inScheduleSection && trimmedLine.startsWith('#')) {
      break;
    }
  }
  
  return scheduleItems;
}

// Helper function to save content to appropriate section
export function saveContentToSection(content, section, text) {
  if (section.includes('course overview') || section.includes('overview')) {
    content.courseOverview = text;
  } else if (section.includes('learning outcomes') || section.includes('outcomes')) {
    content.learningOutcomes.push(text);
  } else if (section.includes('course contents') || section.includes('contents')) {
    content.courseContents.push(text);
  } else if (section.includes('prerequisites')) {
    content.prerequisites.push(text);
  } else if (section.includes('course delivery') || section.includes('delivery')) {
    content.courseDelivery = text;
  } else if (section.includes('class schedule') || section.includes('schedule')) {
    // Parse schedule from text content
    const scheduleItems = parseScheduleFromText(text);
    content.schedule.push(...scheduleItems);
  }
}

// Helper function to create excerpt from text
export function createExcerpt(text, maxWords = 100) {
  if (!text) return 'Course description will be available soon.';
  
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  
  // Find the last complete sentence within word limit
  let excerpt = words.slice(0, maxWords).join(' ');
  const lastSentenceEnd = Math.max(
    excerpt.lastIndexOf('.'),
    excerpt.lastIndexOf('!'),
    excerpt.lastIndexOf('?')
  );
  
  if (lastSentenceEnd > excerpt.length * 0.7) {
    excerpt = excerpt.substring(0, lastSentenceEnd + 1);
  } else {
    excerpt += '...';
  }
  
  return excerpt;
}

// Content Management Parsers
export const parseHomeHero = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    heading: properties.Heading?.rich_text?.[0]?.plain_text || '',
    items: JSON.parse(properties.Items?.rich_text?.[0]?.plain_text || '[]'),
    lastModified: page.last_edited_time
  };
};

export const parseImpactData = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    section: properties.Section?.select?.name || '',
    title: properties.Title?.title?.[0]?.plain_text || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    value: properties.Value?.rich_text?.[0]?.plain_text || '',
    icon: properties.Icon?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    order: properties.Order?.number || 0,
    lastModified: page.last_edited_time
  };
};

export const parseTestimonial = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    text: properties.Text?.rich_text?.[0]?.plain_text || '',
    author: properties.Author?.title?.[0]?.plain_text || '',
    position: properties.Position?.rich_text?.[0]?.plain_text || '',
    company: properties.Company?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    featured: properties.Featured?.checkbox || false,
    order: properties.Order?.number || 0,
    lastModified: page.last_edited_time
  };
};

export const parseService = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    icon: properties.Icon?.rich_text?.[0]?.plain_text || '',
    order: properties.Order?.number || 0,
    active: properties.Active?.checkbox !== false,
    lastModified: page.last_edited_time
  };
};

export const parsePartner = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    name: properties.Name?.title?.[0]?.plain_text || '',
    logo: properties.Logo?.files?.[0]?.file?.url || properties.Logo?.files?.[0]?.external?.url || '',
    website: properties.Website?.url || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    category: properties.Category?.select?.name || '',
    featured: properties.Featured?.checkbox || false,
    order: properties.Order?.number || 0,
    lastModified: page.last_edited_time
  };
};

export const parseTeamMember = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    name: properties.Name?.title?.[0]?.plain_text || '',
    position: properties.Position?.rich_text?.[0]?.plain_text || '',
    bio: properties.Bio?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    linkedin: properties.LinkedIn?.url || '',
    twitter: properties.Twitter?.url || '',
    email: properties.Email?.email || '',
    department: properties.Department?.select?.name || '',
    order: properties.Order?.number || 0,
    active: properties.Active?.checkbox !== false,
    lastModified: page.last_edited_time
  };
};

export const parseProgram = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    duration: properties.Duration?.rich_text?.[0]?.plain_text || '',
    ageGroup: properties.AgeGroup?.rich_text?.[0]?.plain_text || '',
    category: properties.Category?.select?.name || '',
    featured: properties.Featured?.checkbox || false,
    active: properties.Active?.checkbox !== false,
    order: properties.Order?.number || 0,
    lastModified: page.last_edited_time
  };
};

// Generic content parser for simple content types
export const parseContent = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    content: properties.Content?.rich_text?.[0]?.plain_text || '',
    type: properties.Type?.select?.name || '',
    order: properties.Order?.number || 0,
    active: properties.Active?.checkbox !== false,
    lastModified: page.last_edited_time
  };
};

// Event parser (already exists but including for completeness)
export const parseEvent = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    date: properties.Date?.date?.start || '',
    endDate: properties.Date?.date?.end || '',
    location: properties.Location?.rich_text?.[0]?.plain_text || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    category: properties.Category?.select?.name || '',
    featured: properties.Featured?.checkbox || false,
    registrationOpen: properties.RegistrationOpen?.checkbox || false,
    maxParticipants: properties.MaxParticipants?.number || null,
    lastModified: page.last_edited_time
  };
};

// Blog parser (already exists but including for completeness)
export const parseBlog = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
    content: properties.Content?.rich_text?.[0]?.plain_text || '',
    author: properties.Author?.rich_text?.[0]?.plain_text || '',
    publishDate: properties.PublishDate?.date?.start || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    category: properties.Category?.select?.name || '',
    tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
    published: properties.Published?.checkbox || false,
    featured: properties.Featured?.checkbox || false,
    lastModified: page.last_edited_time
  };
};

// Course parser (already exists but including for completeness)
export const parseCourse = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    price: properties.Price?.number || 0,
    duration: properties.Duration?.rich_text?.[0]?.plain_text || '',
    level: properties.Level?.select?.name || '',
    category: properties.Category?.select?.name || '',
    image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url || '',
    instructor: properties.Instructor?.rich_text?.[0]?.plain_text || '',
    maxStudents: properties.MaxStudents?.number || null,
    startDate: properties.StartDate?.date?.start || '',
    endDate: properties.EndDate?.date?.start || '',
    enrollmentOpen: properties.EnrollmentOpen?.checkbox || false,
    featured: properties.Featured?.checkbox || false,
    active: properties.Active?.checkbox !== false,
    lastModified: page.last_edited_time
  };
};

// Form submission parser (already exists but including for completeness)
export const parseFormSubmission = (page) => {
  const properties = page.properties;
  return {
    id: page.id,
    name: properties.Name?.title?.[0]?.plain_text || '',
    email: properties.Email?.email || '',
    message: properties.Message?.rich_text?.[0]?.plain_text || '',
    type: properties.Type?.select?.name || '',
    status: properties.Status?.select?.name || 'new',
    submittedAt: properties.SubmittedAt?.created_time || page.created_time,
    lastModified: page.last_edited_time
  };
};

// Helper function to get rich text content as HTML
export function getRichText(richText) {
  if (!richText || richText.length === 0) return '';

  let html = '';
  richText.forEach(segment => {
    let text = segment.plain_text;
    const annotations = segment.annotations;

    if (annotations.bold) text = `<strong>${text}</strong>`;
    if (annotations.italic) text = `<em>${text}</em>`;
    if (annotations.strikethrough) text = `<s>${text}</s>`;
    if (annotations.underline) text = `<u>${text}</u>`;
    if (annotations.code) text = `<code>${text}</code>`;

    if (segment.href) text = `<a href="${segment.href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

    html += text;
  });

  return html;
}

// Helper function to get plain text from a Notion rich_text property
export function getPlainText(richText) {
  if (!richText || richText.length === 0) return '';
  return richText.map(text => text.plain_text).join('');
}

// Helper function to get select option name from a Notion select property
export function getSelect(select) {
  return select?.name || '';
}

// Helper function to get URL from a Notion URL property
export function getUrl(url) {
  return url || '';
}

// Helper function to get file URLs from a Notion files property
export function getFiles(files) {
  if (!files || files.length === 0) return [];
  return files.map(file => ({
    name: file.name,
    url: file.file?.url || file.external?.url || ''
  }));
}
