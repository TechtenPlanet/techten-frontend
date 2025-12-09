import React from 'react';
import style from './PartnersSection.module.css';
import partnersData from '../../data/partnersData'; // Import the data

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Logos are now imported in the data file

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const PartnersSection = () => {

    // // Function to trim text to the specified maxLength (Removed as unused)
    // const trimText = (text, maxLength) => {
    //     if (text.length > maxLength) {
    //         return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
    //     } else {
    //         return text; // Return the original text if it's already maxLength or less
    //     }
    // }

    return (
        // Assuming id should be "partners" for scrolling
        <div id="partners"> 
          <div className={style.partnersSection}>
            <h3 className={style.intro}>{partnersData.intro}</h3> {/* Use data */}
            <div className={style.partnersSectionWrapper}>
                <div className={style.partnerCards}>
                    <Swiper
                        breakpoints={{
                            430: {
                                slidesPerView: 4,
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
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        centeredSlides={true}
                        loop={true}
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
                        {partnersData.partners.map((partner) => (
                          <SwiperSlide key={partner.id} className={style.swiper}>
                              <div className={style.partnerCard}>
                                  <img src={partner.image} alt={partner.name} loading="lazy" /> {/* Use data */}
                              </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PartnersSection
