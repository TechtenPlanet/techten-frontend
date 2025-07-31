import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import ProgramHighlights from '../components/ProgramHighlights/ProgramHighlights';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import PhotoCollage from '../components/PhotoCollage/PhotoCollage';
import CourseSamples from '../components/CourseSamples/CourseSamples';

const HomePage = () => {
  return (
    <>
      <HomeHero />
   {/*    <PhotoCollage /> */}
      <ProgramHighlights />
      <CourseSamples />
      <ImpactStats />
      <TestimonialSection />
      <ActionButtons />
    </>
  );
};

export default HomePage;
