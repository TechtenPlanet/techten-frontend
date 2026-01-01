import React, { useState } from 'react';
import style from './Navbar.module.css';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [res, setRes] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleRes = () => {
    setRes(!res);
  };

  const closeMobileMenu = () => {
    setRes(false);
    setAboutOpen(false);
  };

  const toggleAboutMenu = () => {
    setAboutOpen((prev) => !prev);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbarWrapper}>
        <div className={style.logo}>
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={style.links}>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <div className={style.dropdown}>
                <NavLink to="/about" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                  About Us
                </NavLink>
                <span className={style.dropdownCaret} aria-hidden="true" />
                <ul className={style.dropdownMenu} aria-label="About Us">
                  <li>
                    <NavLink to="/programs" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                      Programs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/impact" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                      Impact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/get-involved" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                      Get Involved
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/stem-squad" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                STEM Squad
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.navbarBtn}>
          <Link to="/donate">
            <SecondaryButton txt="Donate" />
          </Link>
        </div>
        <div onClick={handleRes} className={style.resIcon}>
          {!res ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      <div className={res ? style.show : style.noShow}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <div className={style.mobileDropdown}>
              <div className={style.mobileDropdownHeader}>
                <NavLink to="/about" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                  About Us
                </NavLink>
                <button
                  type="button"
                  className={style.mobileDropdownToggle}
                  onClick={toggleAboutMenu}
                  aria-expanded={aboutOpen}
                  aria-label="Toggle About Us menu"
                >
                  <span className={style.dropdownCaret} aria-hidden="true" />
                </button>
              </div>
              <ul className={`${style.mobileSubmenu} ${aboutOpen ? style.mobileSubmenuOpen : ''}`}>
                <li>
                  <NavLink to="/programs" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/impact" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                    Impact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/get-involved" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
                    Get Involved
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/stem-squad" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              STEM Squad
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={closeMobileMenu}>
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
