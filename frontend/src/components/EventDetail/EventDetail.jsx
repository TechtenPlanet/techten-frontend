import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaTags, FaArrowLeft } from 'react-icons/fa';
import style from './EventDetail.module.css';
import { getEvents } from '../../notion/eventService';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const events = await getEvents();
      const event = events.find(event => event.id === id || event.id === parseInt(id));
      setEvent(event);

      if (event) {
        const related = events
          .filter(relatedEvent =>
            relatedEvent.id !== event.id &&
            relatedEvent.tags.some(tag => event.tags.includes(tag))
          )
          .slice(0, 3);
        setRelatedEvents(related);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className={style.notFound}>
        <h2>Event not found</h2>
        <Link to="/events" className={style.backLink}>
          <FaArrowLeft /> Back to Events
        </Link>
      </div>
    );
  }

  // Function to convert newlines in content to paragraphs
  const formatDescription = (description) => {
    return description.split('\n\n').map((paragraph, index) => (
      <p key={index} className={style.paragraph}>{paragraph}</p>
    ));
  };

  const metaTitle = `${event.title} | Techten Planet Events`;
  const metaDescription = event.description || 'Upcoming event at Techten Planet';
  const metaImage = event.image;

  return (
    <div className={style.eventDetail}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {metaImage && <meta property="og:image" content={metaImage} />}
      </Helmet>
      <div className={style.eventDetailWrapper}>
        <Link to="/events" className={style.backLink}>
          <FaArrowLeft /> Back to Events
        </Link>
        
        <div className={style.eventHeader}>
          <h1 className={style.eventTitle}>{event.title}</h1>
          
          <div className={style.eventMeta}>
            <div className={style.metaItem}>
              <FaCalendarAlt className={style.metaIcon} />
              <span>{event.date}</span>
            </div>
            <div className={style.metaItem}>
              <FaRegClock className={style.metaIcon} />
              <span>{event.time}</span>
            </div>
            <div className={style.metaItem}>
              <FaMapMarkerAlt className={style.metaIcon} />
              <span>{event.location}</span>
            </div>
          </div>
          
          <div className={style.eventTags}>
            <FaTags className={style.tagIcon} />
            {event.tags.map((tag, index) => (
              <span key={index} className={style.tag}>
                {tag}{index < event.tags.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
        
        <div 
          className={style.eventImage} 
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        
        <div className={style.eventContent}>
          {formatDescription(event.description)}
        </div>
        
        <div className={style.registrationSection}>
          <h3>Ready to join us?</h3>
          <p className={style.registrationText}>
            Secure your spot at this event by registering now. Limited seats available!
          </p>
          <Link to={`/events/register/${event.registrationLink.split('/').pop()}`} className={style.registerButton}>
            Register for this Event
          </Link>
        </div>
        
        <div className={style.relatedEvents}>
          <h3>Other Events You Might Like</h3>
          <div className={style.relatedEventsGrid}>
            {relatedEvents.map(relatedEvent => (
              <Link
                key={relatedEvent.id}
                to={`/events/${relatedEvent.id}`}
                className={style.relatedEvent}
              >
                <div
                  className={style.relatedEventImage}
                  style={{ backgroundImage: `url(${relatedEvent.image})` }}
                ></div>
                <div className={style.relatedEventInfo}>
                  <h4 className={style.relatedEventTitle}>{relatedEvent.title}</h4>
                  <p className={style.relatedEventDate}>
                    <FaCalendarAlt className={style.relatedEventIcon} />
                    {relatedEvent.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
