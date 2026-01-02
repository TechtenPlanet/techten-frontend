import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import style from './StemSquadCta.module.css';
import stemSquadImage from '../../assets/images/techten-ghana-robotics-classes.jpeg';

const StemSquadCta = () => {
  return (
    <section className={style.stemSquadCta}>
      <div className={style.container}>
        <div className={style.media}>
          <img
            src={stemSquadImage}
            alt="Student showcasing a STEM project"
            loading="lazy"
          />
        </div>
        <div className={style.content}>
          <p className={style.sectionTitle}>The Future is a Habit, Not a Hobby.</p>
          <div className={style.liveBadge}>
            <span className={style.liveDot} aria-hidden="true" />
            50+ Active Squad Members
          </div>
          <h2>Join the STEM Squad.</h2>
          <p className={style.body}>
            The only program in Ghana that delivers a world-class STEM lab to your door and a
            coding mission to your screen.
          </p>
          <ul className={style.bullets}>
            <li>
              <MdCheckCircle aria-hidden="true" />
              Monthly Missions in our Mission Control.
            </li>
            <li>
              <MdCheckCircle aria-hidden="true" />
              Semester Kits (Arduino, Pi, Sensors).
            </li>
            <li>
              <MdCheckCircle aria-hidden="true" />
              Elite Community of Young Engineers.
            </li>
          </ul>
          <Link to="/stem-squad" className={style.ctaButton}>
            Explore Membership Ranks
          </Link>
        </div>
      </div>
      <Link to="/stem-squad" className={style.stickyJoin}>
        Join the Squad
      </Link>
    </section>
  );
};

export default StemSquadCta;
