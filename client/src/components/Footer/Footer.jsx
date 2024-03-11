import React from 'react'
import style from './Footer.module.css'
import logo from './../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerWrapper}>
          <div className={style.footerCard}>
            <div className={style.footerImg}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style.footerTxt}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quidem, fugiat earum quo assumenda in voluptate corporis non, fuga sint commodi natus culpa, dolorem adipisci facilis reiciendis veniam suscipit exercitationem?
              Magni nobis laborum rem reiciendis quae eum, ducimus vel exercitationem inventore commodi facere quibusdam, culpa distinctio perferendis ipsam. Magnam, ut amet alias error assumenda molestias placeat maiores temporibus dolore quo.</p>
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
                <a> <FaFacebook className={style.social} /> </a>
                <a> <FaTwitter className={style.social} /> </a>
                <a> <FaInstagram className={style.social} /> </a>
                <a> <FaLinkedin className={style.social} /> </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer