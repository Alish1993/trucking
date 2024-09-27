import React from 'react';
import '../hero/hero.css';
import Arrow from '../assets/arrow.png';
import pause from '../assets/pause.png';
import play from '../assets/play.png';

export default function Hero({ hero, setHero, setPlayStatus, playStatus, heroData }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore</p>
        <img src={Arrow} alt="Arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHero(0)}
            className={hero === 0 ? 'hero-dot orange' : 'hero-dot'}
          ></li>
          <li
            onClick={() => setHero(1)}
            className={hero === 1 ? 'hero-dot orange' : 'hero-dot'}
          ></li>
          <li
            onClick={() => setHero(2)}
            className={hero === 2 ? 'hero-dot orange' : 'hero-dot'}
          ></li>
        </ul>
        <ul className="hero-play">
          <li onClick={() => setPlayStatus(!playStatus)}>
            <img src={playStatus ? pause : play} alt="Play" />
            <p>{playStatus ? 'Pause' : 'Play'}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
