import React from 'react';
import styles from './GetHiredPage.module.css';
import WhatsAppChatButton from '../components/WhatsAppChatButton/WhatsAppChatButton';

const GetHiredPage = () => {

  return (
    <div className={styles.getHiredPage}>

      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Techten Career Programme</p>
          <h1 className={styles.heroTitle}>From Learning to Your First Tech Job</h1>
          <p className={styles.heroLead}>
            We don't just teach you to code. We help you build a portfolio,
            match you with a real internship, and support you into a paying role.
          </p>
          <a href="/get-involved?form=career-programme" className={styles.btnPrimary}>Apply for the Programme</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionIntro}>Three steps from learning to earning.</p>

          <div className={styles.timeline}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Complete a Techten Course</h3>
                <p>
                  Finish any Techten programme and build at least one real project
                  you can show employers. Our coaches help you document it properly.
                </p>
              </div>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Get Matched to a Paid Internship</h3>
                <p>
                  We connect you with partner companies looking for junior tech talent
                  in Ghana. We cover your initial placement support costs — no upfront
                  payment from you.
                </p>
              </div>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Convert to a Full Role — We Take a Small %</h3>
                <p>
                  Once you're hired full-time, we receive a small percentage of your
                  first salary only. That's how we fund the next cohort. You pay nothing
                  until you're earning.
                </p>
                <p className={styles.stepNote}>
                  This is our Income Share model — we succeed only when you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className={styles.whoItsFor}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who This Programme Is For</h2>
          <ul className={styles.eligibilityList}>
            <li>Recent JHS/SHS graduates looking to enter the tech industry</li>
            <li>University students who want real work experience alongside studies</li>
            <li>Anyone who has completed a Techten course at any tier</li>
            <li>Young Ghanaians aged 17–26 with a strong interest in tech</li>
          </ul>
        </div>
      </section>

      {/* EMPLOYER SECTION */}
      <section className={styles.forEmployers}>
        <div className={styles.container}>
          <div className={styles.employerCard}>
            <div className={styles.employerText}>
              <h2 className={styles.sectionTitle}>Are You a Company Looking for Junior Tech Talent?</h2>
              <p>
                We pre-screen, train, and place motivated young Ghanaian developers,
                designers, and tech operators. Try before you hire — we support the
                first 3 months.
              </p>
              <a href="/contact?type=employer" className={styles.btnSecondary}>
                Become a Hiring Partner →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LAUNCH SECTION */}
      <section className={styles.launchSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>We're Launching Our First Cohort</h2>
          <p>
            We're starting small and personal — 5 interns, matched carefully,
            supported closely. If you're ready to be part of the first group,
            express your interest now.
          </p>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section id="apply" className={styles.applySection}>
        <div className={`${styles.container} ${styles.containerNarrow}`}>
          <h2 className={styles.sectionTitle}>Ready to Apply?</h2>
          <p>
            Fill in your expression of interest through the Techten Get Involved page.
            We'll review your details and reach out within 3 working days.
          </p>
          <a
            href="/get-involved?form=career-programme"
            className={`${styles.btnPrimary} ${styles.btnFull}`}
          >
            Submit My Interest →
          </a>
        </div>
      </section>

      <WhatsAppChatButton />
    </div>
  );
};

export default GetHiredPage;
