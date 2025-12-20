import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './GalleryPage.css';

const GalleryPage = () => {
  const eventImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
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

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default GalleryPage;

