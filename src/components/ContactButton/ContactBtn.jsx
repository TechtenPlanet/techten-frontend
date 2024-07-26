// ToggleButton.js
import React from 'react';
import style from './ToggleButton.module.css';
import {Link as ScrollLink} from 'react-scroll'

const ToggleButton = ({ showForm, onClick }) => {
  return (
    <ScrollLink to="ContactForm" smooth={true} duration={500}>
        <button className={style.primaryBtn} onClick={onClick}>
      {showForm ? 'Hide Form' : 'Contact Us'}
        </button>
    </ScrollLink>
  );
};

export default ToggleButton;
