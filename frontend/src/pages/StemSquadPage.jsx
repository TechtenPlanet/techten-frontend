import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';
import { MdAssignment, MdLocalShipping, MdScience } from 'react-icons/md';
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

  const buildStemLink = (plan = '') => `/get-involved?form=stem-squad${plan ? `&plan=${plan}` : ''}`;
  const planKeyFromType = (type) => {
    if (type === 'Plan – Individual') return 'starter';
    if (type === 'Plan – Intermediate') return 'intermediate';
    if (type === 'Plan – Advanced') return 'advanced';
    if (type === 'Plan – Group Buy') return 'group';
    return '';
  };
  const howItWorksIcons = [MdAssignment, MdLocalShipping, MdScience];

  const renderSection = (section) => {
    switch (section.type) {
      case 'Hero':
        return (
          <section 
            key={section.id} 
            className={styles.heroSection}
            style={section.media && section.media.length > 0 ? { backgroundImage: `url(${section.media[0].url})` } : {}}
          >
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <FaRocket /> STEM Squad
              </div>
              <h1 className={styles.heroTitle}>{section.title}</h1>
              <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: section.content }} />
              <div className={styles.heroActions}>
                {section.buttonLabel && (
                  <Link
                    to={section.buttonLink.startsWith('/') ? section.buttonLink : buildStemLink()}
                    className={styles.heroButton}
                  >
                    {section.buttonLabel}
                  </Link>
                )}
                <Link to="/get-involved?form=stem-squad" className={styles.heroSecondary}>
                  View Plans →
                </Link>
              </div>
            </div>
          </section>
        );
      case 'Hero Highlights':
        return (
          <section key={section.id} className={styles.heroCards}>
            <div className={styles.heroCard}>
              <FaShieldAlt className={styles.heroCardIcon} aria-label="Curated Kits icon" />
              <span><strong>Curated Kits:</strong> Hands-on STEM experiences delivered per semester.</span>
            </div>
            <div className={styles.heroCard}>
              <FaClock className={styles.heroCardIcon} aria-label="Age-Appropriate Tracks icon" />
              <span><strong>Age-Appropriate Tracks:</strong> Starter, Intermediate, Advanced, and Group options.</span>
            </div>
          </section>
        );
      case 'How It Works': {
        const fallbackSteps = [
          {
            title: 'Subscribe',
            description: "Choose a plan that fits your child's age & learning level. Individual or Group Buy options available.",
          },
          {
            title: 'Receive Your STEM Kit',
            description: 'Delivered every semester with all the tools, materials & instructions needed for hands-on learning.',
          },
          {
            title: 'Explore & Learn',
            description: 'Monthly learning activities keep your child engaged and excited about STEM while building real-world skills.',
          },
        ];
        const howItWorksSteps = section.steps && section.steps.length > 0 ? section.steps : fallbackSteps;
        const howItWorksSubtitle =
          section.subtitle || 'Get your child started with hands-on STEM learning in just three simple steps';

        return (
          <section key={section.id} className={styles.howItWorksSection}>
            <h2>{section.title}</h2>
            <p className={styles.sectionDescription}>{howItWorksSubtitle}</p>
            <div className={styles.stepsContainer}>
              {howItWorksSteps.map((step, index) => {
                const StepIcon = howItWorksIcons[index];
                return (
                  <div key={`${section.id}-step-${index}`} className={styles.stepCard}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepIcon}>
                      {StepIcon && <StepIcon aria-hidden="true" focusable="false" />}
                    </div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.howItWorksContent} dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      }
      case 'Plan – Individual':
      case 'Plan – Group Buy':
      case 'Plan – Intermediate':
      case 'Plan – Advanced':
        return (
          <section key={section.id} className={styles.planSection}>
            <h2>{section.title}</h2>
            <div className={styles.planContent} dangerouslySetInnerHTML={{ __html: section.content }} />
            {section.buttonLabel && section.buttonLink && (
              <Link
                to={buildStemLink(planKeyFromType(section.type))}
                className={styles.primaryButton}
              >
                {section.buttonLabel}
              </Link>
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
              <Link
                to={section.buttonLink.startsWith('/') ? section.buttonLink : buildStemLink()}
                className={styles.ctaButton}
              >
                {section.buttonLabel}
              </Link>
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
