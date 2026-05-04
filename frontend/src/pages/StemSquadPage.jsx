import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';
import { MdAssignment, MdLocalShipping, MdScience } from 'react-icons/md';
import { getStemSquadLandingContent } from '../notion/stemSquadService';
import styles from './StemSquadPage.module.css'; // Assuming you'll create a CSS module for styling
import WhatsAppChatButton from '../components/WhatsAppChatButton/WhatsAppChatButton';
import collageImg1 from '../assets/images/techten_girl_robotics.png';
import collageImg2 from '../assets/images/LearnwithRaspberrypi-at-Techtenplanet.jpeg';
import collageImg3 from '../assets/images/students_at_techten.jpeg';

const StemSquadPage = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pricingMode, setPricingMode] = useState('individual');
  const [activeTierInfo, setActiveTierInfo] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

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

  const buildStemLink = (plan = '', subscription = '') => {
    const params = new URLSearchParams({ form: 'stem-squad' });
    if (plan) {
      params.set('plan', plan);
    }
    if (subscription === 'group') {
      params.set('subscription', 'group');
    }
    return `/get-involved?${params.toString()}`;
  };
  const howItWorksIcons = [MdAssignment, MdLocalShipping, MdScience];
  const planTypes = new Set(['Plan – Individual', 'Plan – Intermediate', 'Plan – Advanced', 'Plan – Group Buy']);
  const planSections = content.filter((section) => planTypes.has(section.type));
  const primaryPlanSectionId = planSections[0]?.id;
  const isGroupPricing = pricingMode === 'group';
  const faqSections = content.filter((section) => section.type === 'FAQ');
  const primaryFaqSectionId = faqSections[0]?.id;
  const faqTitleFromSection = faqSections.find((section) => /faq|frequently/i.test(section.title || ''))?.title;
  const faqTitle =
    faqTitleFromSection ||
    (faqSections.length === 1 && faqSections[0].title && !/\?/.test(faqSections[0].title)
      ? faqSections[0].title
      : 'Frequently Asked Questions');
  const faqItems = faqSections.flatMap((section) => {
    if (section.faqItems && section.faqItems.length > 0) {
      return section.faqItems;
    }
    if (section.title || section.content) {
      return [
        {
          question: section.title || 'Question',
          answer: section.content || '',
        },
      ];
    }
    return [];
  });

  const tierDefaults = [
    {
      key: 'explorer',
      type: 'Plan – Individual',
      planKey: 'starter',
      rank: 'Rank 1',
      name: 'The Explorer',
      tierLabel: 'Starter',
      price: 350,
      groupPrice: 300,
      ageRange: 'Ages 6-12',
      headline: 'Start the Journey.',
      features: [
        'Instant access to Techten Mission Control (LMS).',
        'Semester STEM Kit (Basic Electronics & Logic).',
        'Monthly Digital Missions & Badges.',
        'Official STEM Squad T-Shirt.',
      ],
      theme: 'tierExplorer',
      buttonLabel: 'Enroll Now — Explorer',
    },
    {
      key: 'maker',
      type: 'Plan – Intermediate',
      planKey: 'intermediate',
      rank: 'Rank 2',
      name: 'The Maker',
      tierLabel: 'Intermediate',
      price: 450,
      groupPrice: 400,
      ageRange: 'Ages 12-18',
      headline: 'Build Real Tech.',
      features: [
        'All Explorer features + Advanced Robotics Missions.',
        'Semester Kit featuring Cytron Maker UNO & Sensors.',
        'Access to the exclusive online community.',
      ],
      theme: 'tierMaker',
      isPopular: true,
      buttonLabel: 'Enroll Now — Maker',
    },
    {
      key: 'innovator',
      type: 'Plan – Advanced',
      planKey: 'advanced',
      rank: 'Rank 3',
      name: 'The Innovator',
      tierLabel: 'Advanced',
      price: 550,
      groupPrice: 500,
      ageRange: 'Advanced/All Ages',
      headline: 'Engineer the Future.',
      features: [
        'All Maker features + Raspberry Pi & IoT Projects.',
        'Premium hardware components for cutting-edge builds.',
        'Priority Support & Bonus project materials.',
      ],
      theme: 'tierInnovator',
      badge: 'School / Group Plan',
      isSchoolTier: true,
      buttonLabel: 'Enquire for Schools',
    },
  ];
  const planDataByType = planSections.reduce((acc, section) => {
    acc[section.type] = section;
    return acc;
  }, {});
  const tiers = tierDefaults.map((tier) => {
    const section = planDataByType[tier.type];
    if (!section) return tier;
    return {
      ...tier,
      name: section.tierName || tier.name,
      tierLabel: section.tierLabel || tier.tierLabel,
      ageRange: section.ageRange || tier.ageRange,
      headline: section.headline || tier.headline,
      features: section.features && section.features.length > 0 ? section.features : tier.features,
      price: typeof section.price === 'number' ? section.price : tier.price,
      groupPrice: typeof section.groupPrice === 'number' ? section.groupPrice : tier.groupPrice,
      badge: section.badge || tier.badge,
      buttonLabel: section.buttonLabel || tier.buttonLabel,
    };
  });

  const toggleTierInfo = (tierKey) => {
    setActiveTierInfo((prev) => (prev === tierKey ? null : tierKey));
  };

  const toggleFaqItem = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  const renderPlansSection = () => (
    <section className={styles.tiersSection}>
      <div className={styles.tiersHeader}>
        <div>
          <p className={styles.tiersEyebrow}>Membership Tiers</p>
          <h2 className={styles.tiersTitle}>Choose the STEM Squad that fits your builder</h2>
          <p className={styles.tiersIntro}>
            Every plan includes access to Techten Mission Control (LMS) alongside hands-on kits.
          </p>
        </div>
        <div className={styles.pricingToggle}>
          <span className={!isGroupPricing ? styles.toggleLabelActive : styles.toggleLabel}>Individual</span>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={isGroupPricing}
              onChange={() => setPricingMode(isGroupPricing ? 'individual' : 'group')}
              aria-label="Toggle group pricing"
            />
            <span className={styles.toggleSlider} />
          </label>
          <span className={isGroupPricing ? styles.toggleLabelActive : styles.toggleLabel}>Group (Save 10-15%)</span>
        </div>
      </div>
      <div className={styles.tiersGrid}>
        {/* ── Static Scout free-tier card — always rendered, no Notion dependency ── */}
        <article className={`${styles.pricingCard} ${styles.pricingCardFree}`}>
          <span className={`${styles.cardBadge} ${styles.cardBadgeFree}`}>FREE</span>
          <p className={styles.cardRank}>Rank 0</p>
          <h3 className={styles.cardTitle}>The Scout</h3>
          <p className={styles.cardSubtitle}>Community</p>
          <p className={styles.cardTagline}>Start for free. No card needed.</p>
          <p className={styles.cardAge}>Ages 8–18</p>
          <div className={styles.priceBlock}>
            <span className={styles.priceCurrency}>GHS</span>
            <span className={styles.priceAmount}>0</span>
            <span className={styles.priceFreq}>/month</span>
          </div>
          <div className={styles.cardIncludes}>
            <span className={styles.includeTag}>Mission Zero</span>
            <span className={styles.includeTag}>WhatsApp Community</span>
          </div>
          <ul className={styles.cardFeatures}>
            {[
              'Mission Zero — 6-week guided learning path',
              'Intro to Scratch & Python (self-paced)',
              'WhatsApp community access',
              'Monthly live webinar',
              'Peer project showcase at Week 6',
              'Digital completion badge',
            ].map((feature) => (
              <li key={feature}><span>{feature}</span></li>
            ))}
          </ul>
          <Link className={`${styles.cardCta} ${styles.cardCtaGhost}`} to="/get-involved?form=community">
            Join Free →
          </Link>
        </article>
        {/* ── End static Scout card ── */}

        {tiers.map((tier) => {
          const resolvedGroupPrice = typeof tier.groupPrice === 'number' ? tier.groupPrice : tier.price;
          const displayPrice = isGroupPricing ? resolvedGroupPrice : tier.price;
          const badgeText = tier.badge || (tier.isPopular ? 'Most Popular' : '');
          return (
            <article
              key={tier.key}
              className={`${styles.pricingCard} ${tier.isPopular ? styles.pricingCardPopular : ''} ${tier.isSchoolTier ? styles.pricingCardSchool : ''}`}
            >
              {badgeText && (
                <span className={`${styles.cardBadge} ${tier.isPopular ? styles.cardBadgePopular : styles.cardBadgeSchool}`}>
                  {badgeText}
                </span>
              )}
              <p className={styles.cardRank}>{tier.rank}</p>
              <h3 className={styles.cardTitle}>{tier.name}</h3>
              <p className={styles.cardSubtitle}>{tier.tierLabel}</p>
              <p className={styles.cardTagline}>{tier.headline}</p>
              <p className={styles.cardAge}>{tier.ageRange}</p>
              <div className={styles.priceBlock}>
                <span className={styles.priceCurrency}>GHS</span>
                <span className={styles.priceAmount}>{displayPrice}</span>
                <span className={styles.priceFreq}>/month</span>
              </div>
              {tier.isSchoolTier && (
                <div className={styles.tierSchoolMeta}>
                  <p className={styles.tierSchoolLabel}>Best for schools, aftercare centres &amp; group buys</p>
                  <p className={styles.tierSchoolNote}>Individual pricing available — <a href="/contact">contact us</a>.</p>
                </div>
              )}
              <div className={styles.cardIncludes}>
                <span className={styles.includeTag}>Mission Control LMS</span>
                <span className={styles.includeTag}>STEM Kits</span>
              </div>
              <ul className={styles.cardFeatures}>
                {tier.features.map((feature, index) => (
                  <li key={`${tier.key}-feature-${index}`}><span>{feature}</span></li>
                ))}
              </ul>
              <Link
                className={`${styles.cardCta} ${styles.cardCtaFilled} ${tier.isPopular ? styles.cardCtaAmber : ''}`}
                to={buildStemLink(tier.planKey, pricingMode)}
              >
                {tier.buttonLabel}
              </Link>
              <div className={styles.tierNoteRow}>
                <p className={styles.tierNote}>
                  Pay monthly, kits ship every semester
                  <button
                    type="button"
                    className={styles.infoButton}
                    onClick={() => toggleTierInfo(tier.key)}
                    aria-expanded={activeTierInfo === tier.key}
                    aria-label="Shipping and ownership details"
                  >
                    i
                  </button>
                  . Cancel anytime.
                </p>
                {activeTierInfo === tier.key && (
                  <div className={styles.tierInfoPopup} role="status">
                    Kits ship after 3 months. Ownership is earned after 6 months.
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <p className={styles.pricingNote}>
        Need support? Ask about our{' '}
        <a href="/get-involved?form=scholarship">scholarship spots</a> and{' '}
        <a href="/get-involved?form=stem-squad">group buy discounts</a>.{' '}
        We never want cost to be a barrier.
      </p>
    </section>
  );

  const renderSection = (section) => {
    switch (section.type) {
      case 'Hero': {
        const heroSubtitleContent =
          section.content && /premium monthly membership/i.test(section.content)
            ? "Join the STEM Squad — Ghana's hands-on STEM programme that ships real hardware to your door and builds the skills schools don't teach."
            : section.content;
        return (
          <section key={section.id} className={styles.heroSection}>
            {/* Left — text + trust bar */}
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                <FaRocket /> STEM Squad
              </div>
              <h1 className={styles.heroTitle}>{section.title}</h1>
              <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: heroSubtitleContent }} />
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
              <div className={styles.heroTrustBar}>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustNumber}>50+</span>
                  <span className={styles.heroTrustLabel}>Active Members</span>
                </div>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustNumber}>4+</span>
                  <span className={styles.heroTrustLabel}>Years Running</span>
                </div>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustNumber}>2190+</span>
                  <span className={styles.heroTrustLabel}>Learning Hours</span>
                </div>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustNumber}>Arduino · Pi · Cytron</span>
                  <span className={styles.heroTrustLabel}>Hardware Partners</span>
                </div>
              </div>
            </div>
            {/* Right — image collage */}
            <div className={styles.heroRight}>
              <div className={styles.heroCollage}>
                <img
                  className={`${styles.collageImg} ${styles.collageImg1}`}
                  src={collageImg1}
                  alt="Techten student with robotics kit"
                />
                <img
                  className={`${styles.collageImg} ${styles.collageImg2}`}
                  src={collageImg2}
                  alt="Learning with Raspberry Pi at Techten"
                />
                <img
                  className={`${styles.collageImg} ${styles.collageImg3}`}
                  src={collageImg3}
                  alt="Students at Techten"
                />
                <span className={styles.collageBadge}>Real Hardware. Real Skills.</span>
              </div>
            </div>
          </section>
        );
      }
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
        if (section.id !== primaryPlanSectionId) {
          return null;
        }
        return renderPlansSection();
      case 'Why STEM Squad':
        return (
          <section key={section.id} className={styles.whySection}>
            <h2>{section.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        );
      case 'FAQ':
        {
          if (section.id !== primaryFaqSectionId) {
            return null;
          }
          return (
            <section key={section.id} className={styles.faqSection}>
              <h2>{faqTitle}</h2>
              {faqItems.length > 0 ? (
                <div className={styles.faqAccordion}>
                  {faqItems.map((item, index) => {
                    const isOpen = activeFaqIndex === index;
                    const contentId = `${section.id}-faq-${index}`;
                    return (
                      <div key={contentId} className={styles.faqItem}>
                        <button
                          type="button"
                          className={`${styles.faqHeader} ${isOpen ? styles.faqHeaderActive : ''}`}
                          onClick={() => toggleFaqItem(index)}
                          aria-expanded={isOpen}
                          aria-controls={contentId}
                        >
                          <span>{item.question}</span>
                          <span className={styles.faqIcon}>{isOpen ? '-' : '+'}</span>
                        </button>
                        <div
                          id={contentId}
                          className={`${styles.faqContent} ${isOpen ? styles.faqContentOpen : ''}`}
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
            </section>
          );
        }
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
      <Helmet>
        <title>STEM Squad — Monthly STEM Membership for Kids in Ghana | Techten Planet</title>
        <meta name="description" content="STEM Squad is Ghana's hands-on STEM membership for children aged 8–18. Real hardware — Arduino, Raspberry Pi, Cytron — delivered to your door every semester. Join Explorer or Maker tier today." />
        <link rel="canonical" href="https://techtenplanet.org/stem-squad" />
        <meta property="og:url" content="https://techtenplanet.org/stem-squad" />
        <meta property="og:title" content="STEM Squad — Monthly STEM Membership for Kids in Ghana" />
        <meta property="og:description" content="Ghana's hands-on STEM membership. Real hardware — Arduino, Raspberry Pi, Cytron — delivered every semester. For children aged 8–18." />
      </Helmet>
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
      <WhatsAppChatButton />
    </div>
  );
};

export default StemSquadPage;
