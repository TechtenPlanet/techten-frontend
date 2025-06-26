import React from 'react';
import style from './ActionButtons.module.css';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ActionButtons = () => {
  return (
    <div className={style.actionButtons}>
      <Link to="/get-involved">
        <PrimaryButton txt="Get Involved" />
      </Link>
      <Link to="/donate">
        <PrimaryButton txt="Donate" />
      </Link>
      <Link to="/about">
        <PrimaryButton txt="Learn More" />
      </Link>
    </div>
  );
};

export default ActionButtons;
