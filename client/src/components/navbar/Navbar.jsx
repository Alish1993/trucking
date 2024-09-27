import React from 'react';
import '../navbar/navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">EV</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
}
