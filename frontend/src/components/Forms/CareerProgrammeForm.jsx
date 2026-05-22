import React, { useState } from 'react';
import style from './Forms.module.css';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { apiPost } from '../../utils/apiClient';

const CareerProgrammeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    courseCompleted: '',
    employmentStatus: '',
    desiredRole: '',
    aboutMe: '',
    heardFrom: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  });
  const [techSkills, setTechSkills] = useState({});
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSkillToggle = (e) => {
    const { name, checked } = e.target;
    setTechSkills(prev => ({ ...prev, [name]: checked }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.courseCompleted) newErrors.courseCompleted = 'Please select a course';
    if (!formData.employmentStatus) newErrors.employmentStatus = 'Please select your employment status';
    if (!formData.desiredRole) newErrors.desiredRole = 'Please select a desired role';
    if (!formData.heardFrom) newErrors.heardFrom = 'Please tell us how you heard about us';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to continue';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedSkills = Object.entries(techSkills)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(', ');

    const payload = {
      ...formData,
      techSkills: selectedSkills,
    };

    try {
      await apiPost('/api/career-programme', payload);
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className={style.formContainer}>
        <div className={style.formSuccess}>
          <FaCheckCircle className={style.successIcon} />
          <h3>We've received your application!</h3>
          <p>
            We'll review your details and reach out within 3 working days via WhatsApp
            or email. Keep an eye on both. — The Techten Team
          </p>
          <button
            className={style.submitButton}
            onClick={() => { setFormStatus(null); setFormData({ fullName: '', email: '', phone: '', age: '', location: '', courseCompleted: '', employmentStatus: '', desiredRole: '', aboutMe: '', heardFrom: '', agreeToTerms: false, agreeToMarketing: false }); setTechSkills({}); }}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>
        <h2 className={style.formTitle}>Career Programme — Expression of Interest</h2>
        <p className={style.formDescription}>
          We match Techten graduates with real paid internships and help them convert to full-time
          roles. We cover placement costs — you contribute a small % of your first salary only.
          Fill in your details and we'll reach out within 3 working days.
        </p>
      </div>

      {formStatus === 'error' && (
        <div className={style.formError}>
          <FaExclamationTriangle className={style.errorIcon} />
          <p>
            Something went wrong. Please WhatsApp us on{' '}
            <strong>+233 596 905 337</strong> or email{' '}
            <a href="mailto:admin@techtenplanet.org">admin@techtenplanet.org</a>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        {/* Full Name */}
        <div className={style.formGroup}>
          <label htmlFor="fullName" className={style.formLabel}>
            Full Name <span className={style.requiredStar}>*</span>
          </label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName}
            onChange={handleChange} className={`form-control ${errors.fullName ? style.inputError : ''}`}
            placeholder="e.g. Ama Mensah" />
          {errors.fullName && <div className={style.errorMessage}>{errors.fullName}</div>}
        </div>

        {/* Email */}
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.formLabel}>
            Email Address <span className={style.requiredStar}>*</span>
          </label>
          <input type="email" id="email" name="email" value={formData.email}
            onChange={handleChange} className={`form-control ${errors.email ? style.inputError : ''}`}
            placeholder="your@email.com" />
          {errors.email && <div className={style.errorMessage}>{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className={style.formGroup}>
          <label htmlFor="phone" className={style.formLabel}>
            WhatsApp / Phone <span className={style.requiredStar}>*</span>
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone}
            onChange={handleChange} className={`form-control ${errors.phone ? style.inputError : ''}`}
            placeholder="+233 ..." />
          {errors.phone && <div className={style.errorMessage}>{errors.phone}</div>}
        </div>

        {/* Age */}
        <div className={style.formGroup}>
          <label htmlFor="age" className={style.formLabel}>
            Age <span className={style.requiredStar}>*</span>
          </label>
          <input type="number" id="age" name="age" value={formData.age}
            onChange={handleChange} className={`form-control ${errors.age ? style.inputError : ''}`}
            min={16} max={35} placeholder="Your age" />
          {errors.age && <div className={style.errorMessage}>{errors.age}</div>}
        </div>

        {/* Location */}
        <div className={style.formGroup}>
          <label htmlFor="location" className={style.formLabel}>
            Location (City / Region) <span className={style.requiredStar}>*</span>
          </label>
          <input type="text" id="location" name="location" value={formData.location}
            onChange={handleChange} className={`form-control ${errors.location ? style.inputError : ''}`}
            placeholder="e.g. Accra, Kumasi, Takoradi" />
          {errors.location && <div className={style.errorMessage}>{errors.location}</div>}
        </div>

        {/* Course Completed */}
        <div className={style.formGroup}>
          <label htmlFor="courseCompleted" className={style.formLabel}>
            Techten Course or Programme Completed <span className={style.requiredStar}>*</span>
          </label>
          <select id="courseCompleted" name="courseCompleted" value={formData.courseCompleted}
            onChange={handleChange} className={`form-select ${errors.courseCompleted ? style.inputError : ''}`}>
            <option value="">Select one</option>
            <option value="STEM Squad">STEM Squad</option>
            <option value="Tech Labs / Code Club">Tech Labs / Code Club</option>
            <option value="Hackathon Participant">Hackathon Participant</option>
            <option value="Project That Matters">Project That Matters</option>
            <option value="Online Course (Techten LMS)">Online Course (Techten LMS)</option>
            <option value="Business Consultant Cohort">Business Consultant Cohort</option>
            <option value="Tech for Girls">Tech for Girls</option>
            <option value="Not yet enrolled">I haven't enrolled yet but I'm interested</option>
          </select>
          {errors.courseCompleted && <div className={style.errorMessage}>{errors.courseCompleted}</div>}
        </div>

        {/* Tech Skills */}
        <div className={style.formGroup}>
          <label className={style.formLabel}>Tech Skills (select all that apply)</label>
          {[
            ['web-dev', 'Web Development'],
            ['mobile-dev', 'Mobile Development'],
            ['python-data', 'Python / Data'],
            ['ui-ux', 'UI/UX Design'],
            ['robotics-hardware', 'Robotics / Hardware'],
            ['it-support', 'IT Support'],
            ['other', 'Other'],
          ].map(([value, label]) => (
            <div className="form-check" key={value}>
              <input type="checkbox" id={`skill-${value}`} name={value}
                checked={techSkills[value] || false} onChange={handleSkillToggle}
                className="form-check-input" />
              <label className="form-check-label" htmlFor={`skill-${value}`}>{label}</label>
            </div>
          ))}
        </div>

        {/* Employment Status */}
        <div className={style.formGroup}>
          <label className={style.formLabel}>
            Employment Status <span className={style.requiredStar}>*</span>
          </label>
          {[
            ['in-school', 'Currently in school / university'],
            ['recently-graduated', 'Recently graduated — looking for first role'],
            ['career-change', 'Employed but want a tech career change'],
            ['unemployed', 'Unemployed and actively looking'],
          ].map(([value, label]) => (
            <div className="form-check" key={value}>
              <input type="radio" id={`status-${value}`} name="employmentStatus"
                value={value} checked={formData.employmentStatus === value}
                onChange={handleChange} className="form-check-input" />
              <label className="form-check-label" htmlFor={`status-${value}`}>{label}</label>
            </div>
          ))}
          {errors.employmentStatus && <div className={style.errorMessage}>{errors.employmentStatus}</div>}
        </div>

        {/* Desired Role */}
        <div className={style.formGroup}>
          <label htmlFor="desiredRole" className={style.formLabel}>
            What type of role are you hoping for? <span className={style.requiredStar}>*</span>
          </label>
          <select id="desiredRole" name="desiredRole" value={formData.desiredRole}
            onChange={handleChange} className={`form-select ${errors.desiredRole ? style.inputError : ''}`}>
            <option value="">Select one</option>
            <option value="Junior Frontend Developer">Junior Frontend Developer</option>
            <option value="Junior Backend Developer">Junior Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="Data / ML Analyst">Data / ML Analyst</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="IT Support / Systems">IT Support / Systems</option>
            <option value="Other / Not sure yet">Other / Not sure yet</option>
          </select>
          {errors.desiredRole && <div className={style.errorMessage}>{errors.desiredRole}</div>}
        </div>

        {/* About Me */}
        <div className={style.formGroup}>
          <label htmlFor="aboutMe" className={style.formLabel}>
            Tell us about yourself and what you've built
          </label>
          <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe}
            onChange={handleChange} className="form-control" rows={4}
            placeholder="Share a project, a GitHub link, or anything that shows what you can do." />
        </div>

        {/* Heard From */}
        <div className={style.formGroup}>
          <label htmlFor="heardFrom" className={style.formLabel}>
            How did you hear about this programme? <span className={style.requiredStar}>*</span>
          </label>
          <select id="heardFrom" name="heardFrom" value={formData.heardFrom}
            onChange={handleChange} className={`form-select ${errors.heardFrom ? style.inputError : ''}`}>
            <option value="">Select one</option>
            <option value="Techten Website">Techten Website</option>
            <option value="WhatsApp from Techten">WhatsApp message from Techten</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="Techten Event or Workshop">Techten Event or Workshop</option>
            <option value="Other">Other</option>
          </select>
          {errors.heardFrom && <div className={style.errorMessage}>{errors.heardFrom}</div>}
        </div>

        {/* Terms checkbox */}
        <div className={style.formGroup}>
          <div className="form-check">
            <input type="checkbox" id="agreeToTerms" name="agreeToTerms"
              checked={formData.agreeToTerms} onChange={handleChange}
              className={`form-check-input ${errors.agreeToTerms ? style.inputError : ''}`} />
            <label className="form-check-label" htmlFor="agreeToTerms">
              I understand this is an expression of interest, not a guaranteed placement.
              Techten will contact shortlisted candidates only.
            </label>
          </div>
          {errors.agreeToTerms && <div className={style.errorMessage}>{errors.agreeToTerms}</div>}
        </div>

        {/* Marketing checkbox */}
        <div className={style.formGroup}>
          <div className="form-check">
            <input type="checkbox" id="agreeToMarketing" name="agreeToMarketing"
              checked={formData.agreeToMarketing} onChange={handleChange}
              className="form-check-input" />
            <label className="form-check-label" htmlFor="agreeToMarketing">
              I would like to receive updates about the Career Programme and future Techten opportunities.
            </label>
          </div>
        </div>

        <div className={style.formActions}>
          <button type="submit" className={style.submitButton}>
            Submit My Interest
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerProgrammeForm;
