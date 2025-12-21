import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on body
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

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
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div className="menu-backdrop" onClick={closeMenu}></div>
      )}
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

