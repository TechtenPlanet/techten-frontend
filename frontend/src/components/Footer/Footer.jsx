import React, { useState } from 'react';
import style from './Footer.module.css';
import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaArrowRight,
  FaChevronUp
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset the subscribed message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="Footer" className={style.footer}>
      <div className={style.footerTop}>
        <button className={style.scrollTopButton} onClick={scrollToTop}>
          <FaChevronUp />
        </button>
      </div>
      
      <div className={style.footerMain}>
        <div className={style.footerContainer}>
          {/* About Section */}
          <div className={style.footerSection}>
            <div className={style.footerBrand}>
              <img src={logo} alt="TechTen Planet Logo" className={style.footerLogo} />
              <h2 className={style.footerBrandName}>TechTen Planet</h2>
            </div>
            <p className={style.footerAbout}>
              Empowering Ghana's youth through innovative STEM education. We nurture the next generation of tech leaders through hands-on learning, creativity, and fun.
            </p>
            <div className={style.footerSocial}>
              <a href="https://www.facebook.com/techtenplanet" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/techtenplanet" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/techtenplanet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/techtenplanetgh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className={style.footerSection}>
            <h3 className={style.footerHeading}>Quick Links</h3>
            <ul className={style.footerLinks}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Programs Section */}
          <div className={style.footerSection}>
            <h3 className={style.footerHeading}>Our Programs</h3>
            <ul className={style.footerLinks}>
              <li><Link to="/programs/tech-labs">Tech Labs</Link></li>
              <li><Link to="/programs/tech-for-girls">Tech for Girls</Link></li>
              <li><Link to="/programs/hackathons">Hackathons</Link></li>
              <li><Link to="/programs/project-that-matters">Project That Matters</Link></li>
              <li><Link to="/programs/consultants">Tech Consultants</Link></li>
            </ul>
          </div>
          
          {/* Contact & Subscribe Section */}
          <div className={style.footerSection}>
            <h3 className={style.footerHeading}>Contact Us</h3>
            <ul className={style.footerContactInfo}>
              <li>
                <FaMapMarkerAlt className={style.contactIcon} />
                <span>
                  Lashibi FM, Nungua Ashaiman Road, Community 16
                  <br />
                  Digital: GQ-362-8765
                </span>
              </li>
              <li>
                <FaPhone className={style.contactIcon} />
                <span>+233 596 905 337</span>
              </li>
              <li>
                <FaEnvelope className={style.contactIcon} />
                <span>admin@techtenplanet.org</span>
              </li>
              <li>
                <FaEnvelope className={style.contactIcon} />
                <span>techtenplanet@gmail.com</span>
              </li>
            </ul>
            
            <h3 className={style.footerHeading}>Newsletter</h3>
            <form className={style.subscribeForm} onSubmit={handleSubscribe}>
              <div className={style.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={style.subscribeButton}>
                  <FaArrowRight />
                </button>
              </div>
              {subscribed && (
                <p className={style.subscribeSuccess}>Thank you for subscribing!</p>
              )}
              <p className={style.subscribeDisclaimer}>
                Stay updated with our latest news and events.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <div className={style.footerBottom}>
        <div className={style.footerContainer}>
          <p className={style.copyright}>
            &copy; {new Date().getFullYear()} TechTen Planet. All rights reserved.
          </p>
          <div className={style.footerBottomLinks}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
