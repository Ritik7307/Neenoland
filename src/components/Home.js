import React from 'react';
import './Home.css';

const Home = () => {
  // Unsplash images for gallery - party and celebration themed
  const eventImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
  ];

  // Contact details
  const phoneNumber = '+919876543210'; // Replace with actual phone number
  const email = 'info@neenoland.com'; // Replace with actual email
  const address = 'Indirapuram, Ghaziabad, Uttar Pradesh';
  const instagramUrl = 'https://www.instagram.com/neenoland'; // Replace with actual Instagram URL
  const facebookUrl = 'https://www.facebook.com/neenoland'; // Replace with actual Facebook URL

  // WhatsApp message handler
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about Neeno Land.');
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Neeno Land</div>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#packages">Our Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Neeno Land</h1>
          <p className="hero-subtitle">
            The ultimate party and play destination for families in Indirapuram, Ghaziabad!
          </p>
          <p className="hero-description">
            At Neeno Land, we believe that every moment spent with loved ones should be filled with joy, 
            laughter, and unforgettable memories. Whether you're planning a birthday celebration, a kitty party, 
            an anniversary, or any special occasion, we offer a vibrant and welcoming environment for guests of all ages.
          </p>
          <p className="hero-tagline">
            Where fun, laughter, and memories come to life! Located in the heart of Indirapuram, Ghaziabad, 
            Neeno Land is a vibrant indoor play center and event venue designed to offer an exceptional experience 
            for both kids and adults. Whether it's a birthday bash, a kitty party, an anniversary celebration, 
            or any special occasion, Neeno Land is the place to be for all your family-friendly events.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-content">
            At Neeno Land, we understand that family time is precious, and we believe in making those moments 
            unforgettable. Our journey began with the simple idea of creating a space where kids could play and 
            learn, while parents could relax and enjoy themselves. Over time, we've grown into a multi-faceted 
            event venue offering personalized party experiences and unique play areas designed for children of all ages.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-content">
            We aspire to be the go-to destination for families looking to celebrate life's special moments in a 
            safe, fun, and inspiring environment. Our goal is to provide a space where kids can explore their 
            creativity, improve their social skills, and enjoy themselves, while parents can unwind and create 
            lasting memories.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">🎠</div>
              <h3>Play Areas for All Ages</h3>
              <p>
                Spanning over 4000 sq ft, our indoor play zones are designed with different age groups in mind. 
                From soft play areas for toddlers to more adventurous setups for older kids, Neeno Land has 
                something for everyone.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🎉</div>
              <h3>Tailored Party Packages</h3>
              <p>
                No two events are the same, and that's why we offer customized party packages to fit your unique 
                needs. Whether you're hosting a small, intimate gathering or a grand celebration, we'll work 
                with you every step of the way to bring your vision to life.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🎨</div>
              <h3>Fun & Interactive Activities</h3>
              <p>
                Our play zones are equipped with engaging activities that encourage physical activity, creativity, 
                and social interaction. From interactive games to arts and crafts, kids will never run out of 
                things to do.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🏛️</div>
              <h3>Fully Equipped Event Spaces</h3>
              <p>
                Our versatile event rooms are designed to accommodate both kids' and adult parties. We provide 
                everything from catering and decor to entertainment and party favors, so you can focus on enjoying 
                the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Neeno Land Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Neeno Land?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Safety and Security</h3>
              <p>
                We take the safety of our guests very seriously. All our play areas are regularly cleaned and 
                maintained, and we have professional staff to ensure a safe and secure environment for your 
                little ones.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">📋</div>
              <h3>Expert Event Planning</h3>
              <p>
                Planning an event can be stressful, but with Neeno Land, you can leave the hard work to us. 
                Our team of experienced event planners will guide you through every detail, from choosing the 
                right party package to coordinating activities, ensuring your event is seamless and stress-free.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">✨</div>
              <h3>Unforgettable Experiences</h3>
              <p>
                Every visit to Neeno Land is more than just a playtime – it's an experience. From the moment 
                you step through our doors, you'll feel the energy, excitement, and warmth of a space designed 
                to bring joy to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2 className="section-title">Previous Events</h2>
          <p className="gallery-subtitle">Take a look at some of our memorable celebrations</p>
          <div className="gallery-grid">
            {eventImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/ff7a00/ffffff?text=Event+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button 
        className="whatsapp-float" 
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Neeno Land</h3>
              <p>Where fun, laughter, and memories come to life!</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#packages">Our Packages</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>{address}</p>
              <p><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="footer-social">
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Neeno Land. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

