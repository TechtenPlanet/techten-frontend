import React from 'react';
import Slider from 'react-slick';
import './PhotoCollage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/images/Classes_images/Junior_Clubs.jpg';
import img2 from '../../assets/images/Classes_images/Junior_Clubs2.jpg';
import img3 from '../../assets/images/Classes_images/Junior_Clubs3.jpg';
import img4 from '../../assets/images/Classes_images/Junior_Clubs4.jpg';
import img5 from '../../assets/images/Classes_images/Openday_event.jpg';
import img6 from '../../assets/images/Classes_images/hackathon_image.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const PhotoCollage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  return (
    <div className="photo-collage-wrapper">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Class glimpse ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCollage;
