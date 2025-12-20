import React from 'react';
import '../components/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  // Unsplash images for gallery - party and celebration themed
  const eventImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
  ];

  return (
    <div className="home">
      <Navbar />

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <div className="welcome-badge animate-pop">
                <span>🎉</span>
                <span>Welcome to Neeno Land</span>
              </div>
              <h1 className="welcome-title animate-pop-delay-1">
                Where Fun, Laughter &<br />
                <span className="gradient-text-welcome">Memories Come to Life!</span>
              </h1>
              <p className="welcome-description animate-pop-delay-2">
                The ultimate party and play destination for families in Indirapuram, Ghaziabad. 
                Create unforgettable moments with your loved ones in our vibrant play area.
              </p>
              <div className="welcome-features animate-pop-delay-3">
                {/* <div className="feature-item">
                  <span className="feature-icon">🎠</span>
                  <span>4000+ Sq. Ft. Play Area</span>
                </div> */}
                <div className="feature-item">
                  <span className="feature-icon">🎂</span>
                  <span>Birthday Celebrations</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎉</span>
                  <span>Party Packages</span>
                </div>
              </div>
              <div className="welcome-buttons animate-pop-delay-4">
                <a href="/packages" className="welcome-btn primary">
                  Explore Packages
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="/contact" className="welcome-btn secondary">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="welcome-image animate-pop-delay-2">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop&q=80" 
                  alt="Kids playing and having fun at Neeno Land"
                  className="main-image"
                />
                <div className="floating-elements">
                  <div className="float-icon float-1">🎈</div>
                  <div className="float-icon float-2">🎂</div>
                  <div className="float-icon float-3">🎁</div>
                  <div className="float-icon float-4">🎊</div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="offer-icon"></div>
              <h3>Play Areas for All Ages</h3>
              <p>
                Spanning over a large area, our indoor play zones are designed with different age groups in mind. 
                From soft play areas for toddlers to more adventurous setups for older kids, Neeno Land has 
                something for everyone.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon"></div>
              <h3>Tailored Party Packages</h3>
              <p>
                No two events are the same, and that's why we offer customized party packages to fit your unique 
                needs. Whether you're hosting a small, intimate gathering or a grand celebration, we'll work 
                with you every step of the way to bring your vision to life.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon"></div>
              <h3>Fun & Interactive Activities</h3>
              <p>
                Our play zones are equipped with engaging activities that encourage physical activity, creativity, 
                and social interaction. From interactive games to arts and crafts, kids will never run out of 
                things to do.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-icon"></div>
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
              <div className="why-icon"></div>
              <h3>Safety and Security</h3>
              <p>
                We take the safety of our guests very seriously. All our play areas are regularly cleaned and 
                maintained, and we have professional staff to ensure a safe and secure environment for your 
                little ones.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon"></div>
              <h3>Expert Event Planning</h3>
              <p>
                Planning an event can be stressful, but with Neeno Land, you can leave the hard work to us. 
                Our team of experienced event planners will guide you through every detail, from choosing the 
                right party package to coordinating activities, ensuring your event is seamless and stress-free.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon"></div>
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
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Previous Events</h2>
          <p className="gallery-subtitle">Take a look at some of our memorable celebrations</p>
          <div className="gallery-grid">
            {eventImages.slice(0, 6).map((image, index) => (
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

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default HomePage;

