import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import ProgramHighlights from '../components/ProgramHighlights/ProgramHighlights';
import StemSquadCta from '../components/StemSquadCta/StemSquadCta';
import CourseTeasers from '../components/CourseTeasers/CourseTeasers';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import PartnersCollaborators from '../components/PartnersCollaborators/PartnersCollaborators'; // Import the component
import InternshipBanner from '../components/InternshipBanner/InternshipBanner';
import WhatsAppChatButton from '../components/WhatsAppChatButton/WhatsAppChatButton';

const HomePage = () => {
  return (
    <>
      <HomeHero />
   {/*    <PhotoCollage /> */}
      <ProgramHighlights />
      <StemSquadCta />
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
