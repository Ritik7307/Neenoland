import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img 
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/AoPqJvwLLKugBZVa/neeno-land-logo-YNqMarZv7OuRLBeL.png" 
          alt="Neeno Land Logo" 
          className="logo-image"
        />
      </Link>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages" className={location.pathname === '/packages' ? 'active' : ''}>
            Our Packages
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

