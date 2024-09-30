import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">EV</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact" className="nav-contact">Contact</Link></li>
      </ul>
    </div>
  );
}
