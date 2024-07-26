import React, {useState} from 'react'
import style from './Navbar.module.css'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import {Link} from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
  const [res, setRes] = useState(false)

  const handleRes = () => {
    setRes(!res)
  }

  const navigate = useNavigate()
  return (
    <div className={style.navbar}>
        <div className={style.navbarWrapper}>
            <div className={style.logo}>
               <Link to="/"><img src={logo} alt="logo" /> </Link>
            </div>
           <div className={style.links}>
            <ul>
              <li>
                <ScrollLink to="/" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink">Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="Mission" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink" >| About Us</ScrollLink>
              </li>
              <li>
                <ScrollLink to="Benefit" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink">| Vision</ScrollLink>
              </li>
              <li>
                <ScrollLink to="Banner1" smooth={true} className={style.scrollLink} ></ScrollLink>
              </li>
              <li>
                <ScrollLink to="AboutSection" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink" >| What we do</ScrollLink>
              </li>
              <li>
                <ScrollLink to="ServicesSection" smooth={true} className={style.scrollLink} >| Services</ScrollLink>
              </li>
              <li>
                <ScrollLink to="Banner2" smooth={true} className={style.scrollLink} ></ScrollLink>
              </li>
              <li>
                <ScrollLink to="PartnersSection" smooth={true} className={style.scrollLink} ></ScrollLink>
              </li>
              <li>
                <ScrollLink to="ContactUsContent" smooth={true} className={style.scrollLink} >| Contact Us</ScrollLink>
              </li>
              <li>
                <ScrollLink to="Footer" smooth={true} className={style.scrollLink} ></ScrollLink>
              </li>
            </ul>
           
           </div>

           
           <div className={style.navbarBtn}>
            <ScrollLink to="ContactUsContent" smooth={true}><SecondaryButton txt="Donate" /></ScrollLink>
           </div>
           <div onClick={handleRes} className={style.resIcon}>
              {!res ? <FaBars /> : <FaTimes />}
            </div>
        </div>
        <div className={ res ? style.show : style.noShow }>
        <ul>
              <li>
              <ScrollLink to="/" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink">Home</ScrollLink>
              </li>
              <li>
              <ScrollLink to="Mission" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink" >About Us</ScrollLink>
              </li>
              <li>
              <ScrollLink to="Benefit" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink">Vision</ScrollLink>
              </li>
  
              <li>
              <ScrollLink to="AboutSection" smooth={true} className={style.scrollLink} spy={true} activeClass="activeLink">What we do</ScrollLink>
              </li>
              <li>
              <ScrollLink to="ServicesSection" smooth={true} className={style.scrollLink}>Services</ScrollLink>
              </li>
              <li>
              <ScrollLink to="ContactBanner" smooth={true} className={style.scrollLink}>Contact Us</ScrollLink>
              </li>
            </ul>
        </div>
    </div>
)
}

export default Navbar