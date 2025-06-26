import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import ImpactOverview from '../components/ImpactOverview/ImpactOverview';
import ImpactGrid from '../components/ImpactGrid/ImpactGrid';
import ProjectHighlights from '../components/ProjectHighlights/ProjectHighlights';
import ImpactReports from '../components/ImpactReports/ImpactReports';
import ImpactCTA from '../components/ImpactCTA/ImpactCTA';
import impactData from '../data/impactData';

const ImpactPage = () => {
  return (
    <>
      <OtherPagesHero heading="Our Impact" />
      <ImpactOverview data={impactData.overview} />
      <ImpactGrid data={impactData.impactGrid} />
      <div className="container py-5">
        <TestimonialSection />
      </div>
      <ProjectHighlights projects={impactData.projectHighlights} />
      <ImpactReports />
      <ImpactCTA />
    </>
  );
};

export default ImpactPage;
