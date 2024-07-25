import React from 'react'
import style from './Footer.module.css'
import logo from './../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="Footer">
    <div className={style.footer}>
        <div className={style.footerWrapper}>
          <div className={style.footerCard}>
            <div className={style.footerImg}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style.footerTxt}>
              <p>Give S.T.E.M education to your children, your students for them to build a strong future (rocket)
                Raise the next generation of tech innovators, industrialist, and  makers to transform Ghana. 
                They can learn programming, Technology, Maths, Science by exploration and experimental 
                learning while being creative and having fun. Join us </p>
            </div>
          </div>
          <div className={style.footerCard}>
            <h4 className={style.footerHeader}>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Volunteers</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/"> Join Us</Link>
              </li>
              <li>
                <Link to="/"> Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={style.footerCard}>
            <h4 className={style.footerHeader}>Subscribe</h4>
            <div className={style.subscribeWrapper}>
              <div className={style.subscribeInput}>
                <input type="email" />
                <button>Subscribe</button>
              </div>
              <p>Your data will not be shared to any third party</p>
            </div>
            <div className={style.socialWrapper}>
              <h4>Follow our Social media handles</h4>
              <div className={style.socials}>
                <a href="https://www.facebook.com/techtenplanet"><FaFacebook className={style.social} /></a>
                <a href="#"><FaTwitter className={style.social} /></a>
                <a href="https://www.instagram.com/techtenplanet"><FaInstagram className={style.social} /></a>
                <a href="https://www.linkedin.com/techtenplanetgh"><FaLinkedin className={style.social} /></a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer