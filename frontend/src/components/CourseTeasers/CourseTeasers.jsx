import React, { useEffect, useMemo, useState } from 'react';
import style from './CourseTeasers.module.css';
import { submitCourseAlert } from '../../notion/courseAlertService';

const CourseTeasers = ({ source = 'Home Page' }) => {
  const teasers = useMemo(
    () => [
      {
        key: 'bootcamps',
        title: 'Vacation Bootcamps',
        description: 'Intensive 2-week sprints in Accra. From Robotics to Game Design.',
        cta: 'Notify Me for Easter 2026',
      },
      {
        key: 'masterclasses',
        title: 'Masterclasses',
        description: '1-Day deep dives for kids and parents. Learn AI, 3D Printing, or IoT.',
        cta: 'Get Masterclass Updates',
      },
      {
        key: 'projects',
        title: 'Special Projects',
        description: 'Solve real-world Ghanaian problems. Competitive builds and exhibitions.',
        cta: 'Join the Project List',
      },
      {
        key: 'tech-labs',
        title: 'Tech Labs (Mobile)',
        description: 'We bring the lab to your school or neighborhood hub.',
        cta: 'Request a Lab Near You',
      },
    ],
    []
  );

  const [activeTeaser, setActiveTeaser] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    whatsappNumber: '',
    childAge: '',
    email: '',
    participantType: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const closeModal = () => {
    setActiveTeaser(null);
    setSubmitMessage(null);
    setSubmitError(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (activeTeaser) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeTeaser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!activeTeaser) return;

    setSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    try {
      const payload = {
        name: formValues.name.trim(),
        whatsappNumber: formValues.whatsappNumber.trim(),
        childAge: formValues.childAge ? Number(formValues.childAge) : null,
        email: formValues.email.trim(),
        participantType: formValues.participantType,
        interestType: activeTeaser.title,
        source,
      };
      await submitCourseAlert(payload);
      setSubmitMessage('Thanks! We will send early access details via WhatsApp.');
      setFormValues({
        name: '',
        whatsappNumber: '',
        childAge: '',
        email: '',
        participantType: '',
      });
    } catch (error) {
      console.error('Course alert submission failed:', error);
      setSubmitError('Could not submit your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={style.courseTeasers}>
      <div className={style.header}>
        <h2 className={style.sectionTitle}>Choose Your Next Innovation</h2>
        <p className={style.subtext}>
          Courses run in focused sprints, masterclasses, and special projects. Pick what fits your schedule.
        </p>
      </div>
      <div className={style.grid}>
        {teasers.map((teaser) => (
          <article key={teaser.key} className={style.card}>
            <h3>{teaser.title}</h3>
            <p>{teaser.description}</p>
            <button type="button" onClick={() => setActiveTeaser(teaser)} className={style.cardButton}>
              {teaser.cta}
            </button>
          </article>
        ))}
      </div>

      {activeTeaser && (
        <div className={style.modalOverlay} onClick={closeModal} role="presentation">
          <div className={style.modal} onClick={(event) => event.stopPropagation()}>
            <button type="button" className={style.modalClose} onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <p className={style.modalEyebrow}>Don&apos;t Miss Out!</p>
            <h3>{activeTeaser.title}</h3>
            <p className={style.modalCopy}>
              {activeTeaser.key === 'bootcamps' &&
                'Our bootcamps usually sell out in 48 hours. Drop your WhatsApp number and we will send the registration link before it goes public.'}
              {activeTeaser.key === 'masterclasses' &&
                'Masterclasses have limited seats. Share your contact so we can send dates and early access links.'}
              {activeTeaser.key === 'projects' &&
                'Project cohorts open a few times a year. Join the list and we will notify you before applications open.'}
              {activeTeaser.key === 'tech-labs' &&
                'Tell us where you are and we will reach out with the nearest Tech Lab schedule.'}
            </p>
            <form onSubmit={handleSubmit} className={style.modalForm}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  required
                  value={formValues.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                WhatsApp Number
                <input
                  type="tel"
                  name="whatsappNumber"
                  required
                  value={formValues.whatsappNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. +233..."
                />
              </label>
              <label>
                I am a
                <select
                  name="participantType"
                  required
                  value={formValues.participantType}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Parent/Guardian">Parent/Guardian</option>
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                  <option value="Educator">Educator</option>
                </select>
              </label>
              <label>
                Learner&apos;s Age (optional)
                <input
                  type="number"
                  name="childAge"
                  min="4"
                  max="99"
                  value={formValues.childAge}
                  onChange={handleInputChange}
                  placeholder="Age"
                />
              </label>
              <label>
                Email (optional)
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                />
              </label>
              <button type="submit" className={style.submitButton} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Add me to the Early-Access List'}
              </button>
              {submitMessage && <p className={style.successMessage}>{submitMessage}</p>}
              {submitError && <p className={style.errorMessage}>{submitError}</p>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseTeasers;
