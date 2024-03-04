import React, {useState} from 'react'
import style from './Navbar.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import {Link} from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [res, setRes] = useState(false)

  const handleRes = () => {
    setRes(!res)
  }
  return (
    <div className={style.navbar}>
        <div className={style.navbarWrapper}>
            <div className={style.logo}>
               <Link><img src={logo} alt="logo" /> </Link>
            </div>
           <div className={style.links}>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
              <li>
                <Link>Gallery</Link>
              </li>
            </ul>
           
           </div>
           <div className={style.navbarBtn}>
            <SecondaryButton txt="Donate" />
            <PrimaryButton txt="Contact Us" />
           </div>
           <div onClick={handleRes} className={style.resIcon}>
              {!res ? <FaBars /> : <FaTimes />}
            </div>
        </div>
        <div className={ res ? style.show : style.noShow }>
        <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
              <li>
                <Link>Gallery</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar