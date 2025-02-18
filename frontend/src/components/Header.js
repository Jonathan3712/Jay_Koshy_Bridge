import React from 'react';
// import React, { useState } from 'react';

import './Style.css';  // Make sure to import the CSS file

function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

  return (
    <header className="head_of">
      <div className="header-content">
        <h1>Welcome to the Bridge - Evangelical Chaplaincy Hendricks Chapel</h1><br></br>
        <h2>Syracuse University</h2>
      </div>

      {/* Hamburger Menu */}
      {/* <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

      {/* Mobile Navigation */}
      {/* <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
