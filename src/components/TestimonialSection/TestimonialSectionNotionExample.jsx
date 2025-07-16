import React from 'react';
import { useTestimonials, createFallbackData } from '../../hooks/useNotionContent';
import testimonialsData from '../../data/testimonialsData'; // Keep as fallback
import style from './TestimonialSection.module.css'; // Assuming you have styles

/**
 * Example component showing how to migrate from static data to Notion CMS
 * This demonstrates the migration of TestimonialSection component
 */
const TestimonialSectionNotionExample = ({ featured = false }) => {
  // Use the custom hook with fallback data
  const { data: testimonials, loading, error } = useTestimonials(
    featured, 
    createFallbackData(testimonialsData)
  );

  // Loading state
  if (loading) {
    return (
      <div className={style.testimonialSection}>
        <div className={style.container}>
          <div className={style.loadingState}>
            <div className={style.spinner}></div>
            <p>Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state (with fallback data)
  if (error && !testimonials) {
    return (
      <div className={style.testimonialSection}>
        <div className={style.container}>
          <div className={style.errorState}>
            <p>Unable to load testimonials. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  // No testimonials available
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={style.testimonialSection}>
      <div className={style.container}>
        <h2 className={style.sectionTitle}>
          {featured ? 'Featured Testimonials' : 'What People Say About Us'}
        </h2>
        
        {error && (
          <div className={style.warningBanner}>
            <p>⚠️ Using cached content. Some information may be outdated.</p>
          </div>
        )}

        <div className={style.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={style.testimonialCard}>
              <div className={style.testimonialContent}>
                <blockquote className={style.testimonialText}>
                  "{testimonial.text}"
                </blockquote>
                
                <div className={style.testimonialAuthor}>
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className={style.authorImage}
                    />
                  )}
                  <div className={style.authorInfo}>
                    <cite className={style.authorName}>
                      {testimonial.author}
                    </cite>
                    {testimonial.position && (
                      <p className={style.authorPosition}>
                        {testimonial.position}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {testimonial.featured && (
                <div className={style.featuredBadge}>
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionNotionExample;

/**
 * MIGRATION NOTES:
 * 
 * 1. BEFORE (Static Data):
 *    import testimonialsData from '../../data/testimonialsData';
 *    // Use testimonialsData directly
 * 
 * 2. AFTER (Notion CMS):
 *    import { useTestimonials, createFallbackData } from '../../hooks/useNotionContent';
 *    import testimonialsData from '../../data/testimonialsData'; // Keep as fallback
 *    const { data: testimonials, loading, error } = useTestimonials(featured, createFallbackData(testimonialsData));
 * 
 * 3. BENEFITS:
 *    - Dynamic content updates without code deployment
 *    - Loading and error states handled
 *    - Fallback to static data if API fails
 *    - Featured testimonials can be managed in Notion
 *    - Order can be controlled via Notion database
 * 
 * 4. NOTION DATABASE STRUCTURE NEEDED:
 *    - Text (Rich Text): The testimonial content
 *    - Author (Title): Person's name
 *    - Position (Rich Text): Job title
 *    - Company (Rich Text): Company name
 *    - Image (Files): Profile photo
 *    - Featured (Checkbox): Whether to show in featured section
 *    - Order (Number): Display order
 *    - Active (Checkbox): Whether testimonial is published
 * 
 * 5. GRADUAL MIGRATION STRATEGY:
 *    - Keep original static data as fallback
 *    - Test with Notion data in development
 *    - Switch components one by one
 *    - Remove static data only after full migration is stable
 */
