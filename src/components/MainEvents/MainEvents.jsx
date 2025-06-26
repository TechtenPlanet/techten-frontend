import React, { useState } from 'react';
import style from './MainEvents.module.css';
import { FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import eventsData from '../../data/eventsData';

const MainEvents = () => {
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [activeTag, setActiveTag] = useState('All');

  // Function to trim text to the specified maxLength
  const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
    } else {
      return text; // Return the original text if it's already maxLength or less
    }
  };

  // Get all unique tags from events
  const allTags = ['All', ...new Set(eventsData.flatMap(event => event.tags))];

  // Filter events by tag
  const filteredEvents = activeTag === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.tags.includes(activeTag));

  const loadMoreEvents = () => {
    setVisibleEvents(prev => prev + 3);
  };

  return (
    <div className={style.eventsSection}>
      <div className={style.eventsSectionWrapper}>
        <div className={style.eventFilters}>
          <h2 className={style.sectionTitle}>Upcoming Events & Workshops</h2>
          <div className={style.tagFilters}>
            {allTags.map(tag => (
              <button 
                key={tag} 
                className={`${style.tagButton} ${activeTag === tag ? style.activeTag : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={style.eventCards}>
          {filteredEvents.slice(0, visibleEvents).map(event => (
            <div key={event.id} className={style.eventCard}>
              <div 
                className={style.eventImg} 
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <div className={style.eventTxt}>
                <div className={style.aboutEvent}>
                  <p className={style.eventLocation}>
                    <FaMapMarkerAlt className={style.eventIcon} />
                    {event.location.split(',')[0]}
                  </p>
                  <p className={style.eventDate}>
                    <FaCalendarAlt className={style.eventIcon} />
                    {event.date}
                  </p>
                </div>
                <h4 className={style.eventHeading}>
                  {event.title}
                </h4>
                <p className={style.eventTime}>
                  <FaRegClock className={style.eventIcon} />
                  {event.time}
                </p>
                <p className={style.eventBrief}>
                  {trimText(event.excerpt, 120)}
                </p>
                <div className={style.eventTags}>
                  <FaTags className={style.tagIcon} />
                  {event.tags.map((tag, index) => (
                    <span key={index} className={style.tag}>
                      {tag}{index < event.tags.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <div className={style.eventActions}>
                  <Link className={style.eventLink} to={`/events/${event.id}`}>
                    Event Details
                  </Link>
                  <Link className={style.registerLink} to={event.registrationLink}>
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleEvents < filteredEvents.length && (
          <div className={style.loadMoreContainer}>
            <button className={style.loadMoreButton} onClick={loadMoreEvents}>
              Load More Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainEvents;
