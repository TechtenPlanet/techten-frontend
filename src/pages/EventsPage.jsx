import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import MainEvents from '../components/MainEvents/MainEvents';

const EventsPage = () => {
  return (
    <>
      <OtherPagesHero heading="Events" />
      <MainEvents />
    </>
  );
};

export default EventsPage;
