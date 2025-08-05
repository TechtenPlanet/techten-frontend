import React, { useEffect, useState } from 'react';
import { getStemSquadLandingContent } from '../notion/stemSquadService';
import styles from './StemSquadPage.module.css'; // Assuming you'll create a CSS module for styling

const StemSquadPage = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getStemSquadLandingContent();
        setContent(data);
      } catch (err) {
        setError('Failed to load STEM Squad content. Please try again later.');
        console.error('Error fetching STEM Squad content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading STEM Squad page...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const renderSection = (section) => {
    switch (section.type) {
      case 'Hero':
        return (
          <section key={section.id} className={styles.heroSection}>
            <h1>{section.title}</h1>
            <p>{section.content}</p>
            {section.buttonLabel && section.buttonLink && (
              <a href={section.buttonLink} className={styles.heroButton}>
                {section.buttonLabel}
              </a>
            )}
            {section.media && section.media.length > 0 && (
              <img src={section.media[0].url} alt={section.title} className={styles.heroImage} />
            )}
          </section>
        );
      case 'How It Works':
        return (
          <section key={section.id} className={styles.howItWorksSection}>
            <h2>{section.title}</h2>
            <div className={styles.howItWorksContent} dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      case 'Plan – Individual':
      case 'Plan – Group Buy':
        return (
          <section key={section.id} className={styles.planSection}>
            <h2>{section.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
            {section.buttonLabel && section.buttonLink && (
              <a href={section.buttonLink} className={styles.planButton}>
                {section.buttonLabel}
              </a>
            )}
          </section>
        );
      case 'Why STEM Squad':
        return (
          <section key={section.id} className={styles.whySection}>
            <h2>{section.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      case 'FAQ':
        return (
          <section key={section.id} className={styles.faqSection}>
            <h2>{section.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      case 'CTA':
        return (
          <section key={section.id} className={styles.ctaSection}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.buttonLabel && section.buttonLink && (
              <a href={section.buttonLink} className={styles.ctaButton}>
                {section.buttonLabel}
              </a>
            )}
          </section>
        );
      case 'Footer':
        return (
          <footer key={section.id} className={styles.footerSection}>
            <p>{section.content}</p>
          </footer>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.stemSquadPage}>
      {content.map(section => renderSection(section))}
    </div>
  );
};

export default StemSquadPage;
