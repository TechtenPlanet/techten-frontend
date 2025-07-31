import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import MainAboutus from '../components/MainAboutus/MainAboutus';
import TeamSection from '../components/TeamSection/TeamSection';
import PartnersCollaborators from '../components/PartnersCollaborators/PartnersCollaborators';
import GovernanceSection from '../components/GovernanceSection/GovernanceSection';

const AboutUs = () => {
  return (
    <>
      <OtherPagesHero heading="About Us" />
      <MainAboutus />
      <TeamSection />
      <PartnersCollaborators />
      <GovernanceSection />
    </>
  );
};

export default AboutUs;
