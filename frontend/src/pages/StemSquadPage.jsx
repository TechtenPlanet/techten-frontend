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
          <section 
            key={section.id} 
            className={styles.heroSection}
            style={section.media && section.media.length > 0 ? { backgroundImage: `url(${section.media[0].url})` } : {}}
          >
            <h1>{section.title}</h1>
            <p>{section.content}</p>
            {section.buttonLabel && section.buttonLink && (
              <a href={section.buttonLink.startsWith('/') ? section.buttonLink : `/get-involved?form=${section.buttonLink}`} className={styles.heroButton}>
                {section.buttonLabel}
              </a>
            )}
          </section>
        );
      case 'How It Works':
        return (
          <section key={section.id} className={styles.howItWorksSection}>
            <h2>{section.title}</h2>
            <p className={styles.sectionDescription}>
              Our structured approach ensures every participant gets the support and skills they need to succeed in STEM
            </p>
            <div className={styles.stepsContainer}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>🎯</div>
                <h4 className={styles.stepTitle}>Apply & Assess</h4>
                <p className={styles.stepDescription}>
                  Complete our application and take a skills assessment to help us understand your current level and goals.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>👥</div>
                <h4 className={styles.stepTitle}>Join Your Squad</h4>
                <p className={styles.stepDescription}>
                  Get matched with a small group of peers and assigned a dedicated mentor who will guide your journey.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>💻</div>
                <h4 className={styles.stepTitle}>Learn & Build</h4>
                <p className={styles.stepDescription}>
                  Participate in hands-on workshops, coding sessions, and project-based learning with expert instructors.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepIcon}>⭐</div>
                <h4 className={styles.stepTitle}>Showcase & Grow</h4>
                <p className={styles.stepDescription}>
                  Present your projects, receive feedback, and continue growing with ongoing support and opportunities.
                </p>
              </div>
            </div>
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
              <a href={section.buttonLink.startsWith('/') ? section.buttonLink : `/get-involved?form=${section.buttonLink}`} className={styles.planButton}>
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
              <a href={section.buttonLink.startsWith('/') ? section.buttonLink : `/get-involved?form=${section.buttonLink}`} className={styles.ctaButton}>
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
      
      {/* Navigation Section */}
      <section className={styles.navigationSection}>
        <h3 className={styles.navigationTitle}>Explore Other Programs</h3>
        <div className={styles.navigationButtons}>
          <a href="/programs/project-that-matters" className={styles.navigationButton}>
            Projects That Matter →
          </a>
          <a href="/programs/tech-labs" className={styles.navigationButton}>
            Tech Labs →
          </a>
          <a href="/programs/hackathons" className={styles.navigationButton}>
            Hackathons →
          </a>
          <a href="/programs/consultants" className={styles.navigationButton}>
            Business Consultant Cohort →
          </a>
          <a href="/programs" className={styles.navigationButton}>
            All Programs →
          </a>
        </div>
      </section>
    </div>
  );
};

export default StemSquadPage;
