import React from 'react';
import '../background/background.css';
import video1 from '../assets/video1.mp4';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export default function Background({ playStatus, hero }) {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (hero === 0) {
    return <img src={image1} alt="" className="background fade-in" />;
  } else if (hero === 1) {
    return <img src={image2} alt="" className="background fade-in" />;
  } else if (hero === 2) {
    return <img src={image3} alt="" className="background fade-in" />;
  }
}
