import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import style from './EventRegistrationPage.module.css';
import eventsData from '../data/eventsData';
import { FaArrowLeft } from 'react-icons/fa';
import EventRegistrationForm from '../components/Forms/EventRegistrationForm';

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    console.log('Current pathname:', location.pathname);
    console.log('Event ID from params:', eventId);
    console.log('Available events:', eventsData.map(e => ({ 
      id: e.id, 
      title: e.title, 
      registrationLink: e.registrationLink 
    })));
    
    // First try to find the event by ID from URL parameters
    if (eventId) {
      console.log('Searching for event by ID:', eventId);
      const foundEvent = eventsData.find(e => e.id === parseInt(eventId));
      if (foundEvent) {
        console.log('Found event by ID:', foundEvent.title);
        setEvent(foundEvent);
        return;
      }
    }
    
    // If no event found by ID, try to extract from the path
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    console.log('Last path segment:', lastSegment);
    
    // Check if the last segment matches any event registration link
    for (const e of eventsData) {
      const eventSlug = e.registrationLink.split('/').pop();
      console.log(`Comparing slug "${eventSlug}" with "${lastSegment}"`);
      if (eventSlug === lastSegment) {
        console.log('Found event by slug match:', e.title);
        setEvent(e);
        return;
      }
    }
    
    // If we still haven't found an event, check if we're on a direct registration link path
    // like /events/register/hackathon-2024
    if (location.pathname.includes('/events/register/')) {
      const slug = location.pathname.split('/events/register/')[1];
      console.log('Extracted slug from path:', slug);
      
      // Try to find the event by matching the slug with the last part of the registration link
      const foundEvent = eventsData.find(e => {
        const eventSlug = e.registrationLink.split('/').pop();
        console.log(`Comparing extracted slug "${slug}" with event slug "${eventSlug}"`);
        return eventSlug === slug;
      });
      
      if (foundEvent) {
        console.log('Found event by registration link:', foundEvent.title);
        setEvent(foundEvent);
        return;
      }
    }
    
    // If we get here, no event was found
    console.log('No matching event found');
    setEvent(null);
  }, [eventId, location]);

  if (!event) {
    return (
      <>
        <OtherPagesHero heading="Event Registration" />
        <div className="container py-5">
          <div className={style.notFound}>
            <h2>Event not found</h2>
            <p>Sorry, we couldn't find the event you're looking for.</p>
            <Link to="/events" className={style.backLink}>
              <FaArrowLeft /> Back to Events
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <OtherPagesHero heading="Event Registration" />
      <div className="container py-5">
        <div className={style.registrationPage}>
          <Link to={`/events/${event.id}`} className={style.backLink}>
            <FaArrowLeft /> Back to Event Details
          </Link>
          
          <div className={style.eventInfo}>
            <h2 className={style.eventTitle}>{event.title}</h2>
            <div className={style.eventDetails}>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
          
          <div className={style.registrationFormContainer}>
            <EventRegistrationForm eventId={event.id} eventTitle={event.title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistrationPage;
