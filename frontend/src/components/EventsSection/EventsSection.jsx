import React, { useState, useEffect } from 'react'
import style from './EventsSection.module.css'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { getEvents } from '../../notion/eventService';

const EventsSection = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getEvents();
            setEvents(eventsData.slice(0, 5)); // Show only first 5 events
        };
        fetchEvents();
    }, []);

    // Function to trim text to the specified maxLength
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
        } else {
            return text; // Return the original text if it's already maxLength or less
        }
    }
    return (
        <div className={style.eventsSection}>
            <h3 className={style.intro}> <span></span> Upcoming Events <span></span> </h3>
            <div className={style.eventsSectionWrapper}>
                <div className={style.eventCards}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                          }}
                        centeredSlides={true}
                        loop={events.length > 1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className={style.mySwiper}
                    >
                        {events.map((event) => (
                            <SwiperSlide key={event.id} className={style.swiper}>
                                <div className={style.eventCard}>
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
                                            <p className={style.eventTime}>
                                                <FaRegClock className={style.eventIcon} />
                                                {event.time}
                                            </p>
                                        </div>
                                        <h4 className={style.eventHeading}>
                                            {event.title}
                                        </h4>

                                        <p className={style.eventBrief}>
                                            {trimText(event.excerpt, 80)}
                                        </p>

                                        <Link className={style.eventLink} to={`/events/${event.id}`}> Read More </Link>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default EventsSection
