import React from 'react';
import { useLocation } from 'react-router-dom';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import ContactUsContent from '../components/ContactUsContent/ContactUsContent';

const ContactUsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const contactType = searchParams.get('type');
  
  // Determine default subject based on the type parameter
  let defaultSubject = '';
  if (contactType === 'referral') {
    defaultSubject = 'Student or School Referral';
  }
  
  return (
    <>
      <OtherPagesHero heading="Contact Us" />
      <ContactUsContent defaultSubject={defaultSubject} />
    </>
  );
};

export default ContactUsPage;
