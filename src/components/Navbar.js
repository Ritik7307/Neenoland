import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img 
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/AoPqJvwLLKugBZVa/neeno-land-logo-YNqMarZv7OuRLBeL.png" 
          alt="Neeno Land Logo" 
          className="logo-image"
        />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
        <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
        <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
      </button>
      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages" className={location.pathname === '/packages' ? 'active' : ''} onClick={closeMenu}>
            Our Packages
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

