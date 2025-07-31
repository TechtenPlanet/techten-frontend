import React, { useState, useEffect } from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import MainEvents from '../components/MainEvents/MainEvents';
import { getEvents } from '../notion/eventService';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <OtherPagesHero heading="Events" />
      <MainEvents events={events} loading={loading} />
    </>
  );
};

export default EventsPage;
