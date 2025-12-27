import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EnquiryForm from '../components/EnquiryForm';
import './ContactPage.css';

const ContactPage = () => {
  // Page SEO
  useEffect(() => {
    document.title = 'Contact Us | Neeno Land - Book Your Party in Indirapuram, Ghaziabad';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Contact Neeno Land for party bookings and inquiries. Visit us at Niti Khand-1, Indirapuram, Ghaziabad. Call or WhatsApp to book your birthday or kitty party.');
  }, []);
  const phoneNumber = '+91-9266420361';
  // const phoneNumber2 = '+91-9266420361';
  const email = 'neenoland4u@gmail.com';
  const address = '887, 2nd Floor, Niti Khand-1, Indirapuram, Ghaziabad, 201014 Uttar Pradesh, India';
  const instagramUrl = 'https://www.instagram.com/neenolandindia?igsh=dWR3dzJuM2xrMXMz';
  const facebookUrl = 'https://www.facebook.com/share/184gYNuv4V/';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=887%2C+2nd+Floor%2C+Niti+Khand-1%2C+Indirapuram%2C+Ghaziabad%2C+201014%2C+Uttar+Pradesh%2C+India';

  return (
    <div className="contact-page page-content-spacer" style={{ background: 'var(--dark-bg)', minHeight: '100vh', color: 'white' }}>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">Get in touch with us to plan your perfect celebration</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>{address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="maps-link"
                aria-label="View on Google Maps"
              >
                <div className="maps-icon"></div>
                <span>View on Google Maps</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="enquiry-section">
        <div className="container">
          <EnquiryForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="map-subtitle">Visit us at our location</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=887,+2nd+Floor,+Niti+Khand-1,+Indirapuram,+Ghaziabad,+201014,+Uttar+Pradesh,+India&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neeno Land Location"
            ></iframe>
            <div className="map-overlay">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-button"
              >
                <span></span>
                <span>Open in Google Maps</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ContactPage;

