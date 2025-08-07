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
              Get your child started with hands-on STEM learning in just three simple steps
            </p>
            <div className={styles.stepsContainer}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>📝</div>
                <h4 className={styles.stepTitle}>Subscribe</h4>
                <p className={styles.stepDescription}>
                  Choose a plan that fits your child's age & learning level. Individual or Group Buy options available.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>📦</div>
                <h4 className={styles.stepTitle}>Receive Your STEM Kit</h4>
                <p className={styles.stepDescription}>
                  Delivered every semester with all the tools, materials & instructions needed for hands-on learning.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>🔬</div>
                <h4 className={styles.stepTitle}>Explore & Learn</h4>
                <p className={styles.stepDescription}>
                  Monthly learning activities keep your child engaged and excited about STEM while building real-world skills.
                </p>
              </div>
            </div>
            <div className={styles.howItWorksContent} dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      case 'Plan – Individual':
      case 'Plan – Group Buy':
      case 'Plan – Intermediate':
      case 'Plan – Advanced':
        return (
          <section key={section.id} className={styles.planSection}>
            <h2>{section.title}</h2>
            <div className={styles.planContent} dangerouslySetInnerHTML={{ __html: section.content }} />
            {section.buttonLabel && section.buttonLink && (
              <a href={section.buttonLink.startsWith('/') ? section.buttonLink : `/get-involved?form=stem-squad&plan=${section.type === 'Plan – Individual' ? 'starter' : section.type === 'Plan – Intermediate' ? 'intermediate' : section.type === 'Plan – Advanced' ? 'advanced' : section.type === 'Plan – Group Buy' ? 'group' : 'starter'}`} className={styles.primaryButton}>
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
