import React, { useState } from 'react';
import '../nav/nav.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" className='mob-nav-links'>About Us</a></li>
          <li><a href="#contact" className='mob-nav-links' >Contact Us</a></li>
          <li><a href="#fact" className='mob-nav-links'>Fact</a></li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Nav;
