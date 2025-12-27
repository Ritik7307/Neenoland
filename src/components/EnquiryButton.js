import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EnquiryButton.css';

const EnquiryButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToEnquiryForm = () => {
    const enquirySection = document.getElementById('enquiry-form-section');
    if (enquirySection) {
      // Add a small offset from top
      const offset = 120;
      const elementPosition = enquirySection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      return true;
    }
    return false;
  };

  // Handle scroll when on contact page with hash
  useEffect(() => {
    if (location.pathname === '/contact' && location.hash === '#enquiry') {
      // Multiple attempts to ensure it scrolls
      const attemptScroll = (attempts = 0) => {
        if (scrollToEnquiryForm()) {
          return; // Success
        }
        if (attempts < 10) {
          setTimeout(() => attemptScroll(attempts + 1), 150);
        }
      };
      // Start scrolling after a short delay
      setTimeout(() => attemptScroll(), 200);
    }
  }, [location.pathname, location.hash]);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/contact') {
      // If already on contact page, scroll to enquiry form
      scrollToEnquiryForm();
      // Also update hash
      window.history.pushState(null, '', '#enquiry');
    } else {
      // Navigate to contact page with hash
      navigate('/contact#enquiry');
      // The useEffect will handle the scrolling when the page loads
    }
  };

  return (
    <button 
      className="enquiry-float" 
      onClick={handleEnquiryClick}
      aria-label="Book your party enquiry"
      title="Book Your Party - Enquiry"
    >
      <span className="enquiry-button-text">Enquiry</span>
    </button>
  );
};

export default EnquiryButton;
