import React, { useState, useEffect } from 'react';
import style from './AnnouncementBar.module.css';

const STORAGE_KEY = 'techten_ann_stem_may26_dismissed';
const BAR_HEIGHT = '44px';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      visible ? BAR_HEIGHT : '0px'
    );
    return () => {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div className={style.bar} role="banner" aria-label="Announcement">
      <p className={style.text}>
        🤖 Vacation STEM Programme — 18th May&nbsp;|&nbsp;Lashibi, Accra&nbsp;|&nbsp;GHC 250/w&nbsp;
        <span className={style.discount}>(10% off for first 10)</span>
      </p>
      <a
        href="https://gqr.sh/Tzvn"
        target="_blank"
        rel="noopener noreferrer"
        className={style.cta}
      >
        Register →
      </a>
      <button
        type="button"
        className={style.close}
        onClick={dismiss}
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBar;
