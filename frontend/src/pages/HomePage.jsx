import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero/HomeHero';
import ProgramHighlights from '../components/ProgramHighlights/ProgramHighlights';
import StemSquadCta from '../components/StemSquadCta/StemSquadCta';
import CourseTeasers from '../components/CourseTeasers/CourseTeasers';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import PartnersCollaborators from '../components/PartnersCollaborators/PartnersCollaborators'; // Import the component
import InternshipBanner from '../components/InternshipBanner/InternshipBanner';
import VacationBanner from '../components/VacationBanner/VacationBanner';
import WhatsAppChatButton from '../components/WhatsAppChatButton/WhatsAppChatButton';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Techten Planet — STEM Education & Coding Classes for Kids in Ghana</title>
        <meta name="description" content="Techten Planet delivers hands-on robotics, coding, and STEM education for children aged 6–18 across Ghana. Join STEM Squad, book a vacation bootcamp in Accra, or bring Tech Labs to your school." />
        <link rel="canonical" href="https://techtenplanet.org" />
        <meta property="og:url" content="https://techtenplanet.org" />
        <meta property="og:title" content="Techten Planet — STEM & Coding for Kids in Ghana" />
        <meta property="og:description" content="Hands-on robotics, coding, and engineering for Ghanaian children. Vacation bootcamps, STEM Squad membership, Tech Labs, and school programmes." />
      </Helmet>
      <HomeHero />
   {/*    <PhotoCollage /> */}
      <ProgramHighlights />
      <StemSquadCta />
      <div style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <VacationBanner />
      </div>
      <CourseTeasers />
      <InternshipBanner />
      <ImpactStats />
      <TestimonialSection />
      <PartnersCollaborators /> {/* Add the component here */}
      <ActionButtons />
      <WhatsAppChatButton />
    </>
  );
};

export default HomePage;
