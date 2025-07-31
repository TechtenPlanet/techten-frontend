import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import ProgramsOverview from '../components/ProgramsOverview/ProgramsOverview';
import CorePrograms from '../components/CorePrograms/CorePrograms';
import StudentJourney from '../components/StudentJourney/StudentJourney';
import HowToJoin from '../components/HowToJoin/HowToJoin';
import PartnerWithUs from '../components/PartnerWithUs/PartnerWithUs';

const ProgramsPage = () => {
  return (
    <>
      <OtherPagesHero heading="Our Programs" />
      <ProgramsOverview />
      <CorePrograms />
      <StudentJourney />
      <HowToJoin />
      <PartnerWithUs />
    </>
  );
};

export default ProgramsPage;
