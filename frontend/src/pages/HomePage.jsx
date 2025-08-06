import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import ProgramHighlights from '../components/ProgramHighlights/ProgramHighlights';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import PhotoCollage from '../components/PhotoCollage/PhotoCollage';
import CourseSamples from '../components/CourseSamples/CourseSamples';
import PartnersCollaborators from '../components/PartnersCollaborators/PartnersCollaborators'; // Import the component

const HomePage = () => {
  return (
    <>
      <HomeHero />
   {/*    <PhotoCollage /> */}
      <ProgramHighlights />
      <CourseSamples />
      <ImpactStats />
      <TestimonialSection />
      <PartnersCollaborators /> {/* Add the component here */}
      <ActionButtons />
    </>
  );
};

export default HomePage;
