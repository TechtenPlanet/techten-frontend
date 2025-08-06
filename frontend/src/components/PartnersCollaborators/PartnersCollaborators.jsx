import React, { useEffect, useState } from 'react';
import style from './PartnersCollaborators.module.css';
import { getPartners } from '../../notion/partnerService'; // Import the new service

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const PartnersCollaborators = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const data = await getPartners();
                setPartners(data);
            } catch (err) {
                setError('Failed to load partners. Please try again later.');
                console.error('Error fetching partners:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    if (loading) {
        return <div className={style.loading}>Loading partners...</div>;
    }

    if (error) {
        return <div className={style.error}>{error}</div>;
    }

    return (
        <div className={style.partnersCollaborators}>
            <h2 className={style.sectionTitle}>Partners & Collaborators</h2>
            
            <div className={style.content}>
                <div className={style.textSection}>
                    <h3 className={style.subtitle}>🤝 We proudly work with:</h3>
                    <p className={style.description}>
                        Our partners help us provide learning materials, host labs, sponsor events, and co-develop curriculum.
                    </p>
                    <button className={style.partnerButton}>Partner With Us</button>
                </div>
                
                <div className={style.logoSection}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className={style.logoSwiper}
                    >
                        {partners.map((partner) => (
                            <SwiperSlide key={partner.id} className={style.logoSlide}>
                                <div className={style.logoCard}>
                                    {/* Use partner.logo.url as per Notion API response */}
                                    <img src={partner.logo.url} alt={partner.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PartnersCollaborators;
