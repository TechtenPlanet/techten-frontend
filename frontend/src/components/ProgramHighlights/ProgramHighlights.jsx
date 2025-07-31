import React from 'react';
import style from './ProgramHighlights.module.css';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { FaProjectDiagram, FaCode, FaTrophy } from 'react-icons/fa';

const ProgramHighlights = () => {
  return (
    <div className={style.programHighlights}>
      <h2>Highlights of key programs</h2>
      <div className={style.programs}>
        <div className={style.program}>
          <FaProjectDiagram className={style.icon} />
          <h3>Project That Matters</h3>
          <p><strong>What it is:</strong> A hands-on innovation program where students form teams to solve real problems and build prototypes.</p>
          <p><strong>Outcomes:</strong></p>
          <ul>
            <li>Students gained remote jobs</li>
            <li>Local solutions like:</li>
            <ul>
              <li>Overheating in Cars System</li>
              <li>Farm & Weather Monitoring</li>
              <li>Prenatal Health Tools</li>
            </ul>
          </ul>
          <Link to="/programs/project-that-matters">
            <PrimaryButton txt="Learn More" />
          </Link>
        </div>
        <div className={style.program}>
          <FaCode className={style.icon} />
          <h3>Tech Labs & Code Clubs</h3>
          <p><strong>What it is:</strong> Intensive 3–6 month training in coding and electronics in Accra and partner schools around Ghana.</p>
          <p><strong>Reach:</strong></p>
          <ul>
            <li>3–4 teams trained per cycle</li>
            <li>Over 2190 hours invested per semester</li>
            <li>200+ students & teachers reached beyond Accra</li>
          </ul>
          <Link to="/programs/tech-labs">
            <PrimaryButton txt="Learn More" />
          </Link>
        </div>
        <div className={style.program}>
          <FaTrophy className={style.icon} />
          <h3>Hackathons & Innovation Challenges</h3>
          <p><strong>What it is:</strong> Events that spark creativity and teamwork, tackling real community challenges.</p>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Egg incubation tech for poultry farmers</li>
            <li>Early warning system for car heatstroke deaths (SASEK LABS)</li>
          </ul>
          <Link to="/programs/hackathons">
            <PrimaryButton txt="Learn More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
