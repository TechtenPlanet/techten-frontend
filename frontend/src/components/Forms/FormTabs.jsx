import React, { useState, useEffect } from 'react';
import style from './Forms.module.css';
import VolunteerForm from './VolunteerForm';
import MentorForm from './MentorForm';
import PartnershipForm from './PartnershipForm';
import SponsorshipForm from './SponsorshipForm';
import StemSquadEnrollmentForm from './StemSquadEnrollmentForm';

const FormTabs = ({ initialTab = 'volunteer' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Update active tab when initialTab prop changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const renderForm = () => {
    switch (activeTab) {
      case 'volunteer':
        return <VolunteerForm />;
      case 'mentor':
        return <MentorForm />;
      case 'partnership':
        return <PartnershipForm />;
      case 'sponsorship':
        return <SponsorshipForm />;
      case 'stem-squad':
        return <StemSquadEnrollmentForm />;
      default:
        return <VolunteerForm />;
    }
  };

  return (
    <div>
      <div className={style.formTabs}>
        <div 
          className={`${style.formTab} ${activeTab === 'volunteer' ? style.formTabActive : ''}`}
          onClick={() => setActiveTab('volunteer')}
        >
          Volunteer Sign-Up
        </div>
        <div 
          className={`${style.formTab} ${activeTab === 'mentor' ? style.formTabActive : ''}`}
          onClick={() => setActiveTab('mentor')}
        >
          Mentor Registration
        </div>
        <div 
          className={`${style.formTab} ${activeTab === 'partnership' ? style.formTabActive : ''}`}
          onClick={() => setActiveTab('partnership')}
        >
          Partnership Inquiry
        </div>
        <div 
          className={`${style.formTab} ${activeTab === 'sponsorship' ? style.formTabActive : ''}`}
          onClick={() => setActiveTab('sponsorship')}
        >
          Sponsorship Interest
        </div>
        <div 
          className={`${style.formTab} ${activeTab === 'stem-squad' ? style.formTabActive : ''}`}
          onClick={() => setActiveTab('stem-squad')}
        >
          STEM Squad Enrollment
        </div>
      </div>
      
      {renderForm()}
    </div>
  );
};

export default FormTabs;
