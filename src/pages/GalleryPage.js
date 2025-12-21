import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './GalleryPage.css';

const GalleryPage = () => {
  // Add your image filenames here (images should be placed in public/images folder)
  // Example: If you have image1.jpg, image2.jpg, etc., add them like this:
  const eventImages = [
    '/images/1G4A2867.JPG',
    '/images/1G4A2796.JPG',
    '/images/1G4A2489.JPG',
    '/images/1G4A2495.JPG',
    '/images/1G4A2475.JPG',
    '/images/1G4A2473.JPG',
    '/images/1G4A2478.JPG',
    '/images/1G4A2676.JPG',
    '/images/1G4A2674.JPG',
  ];
  
  // Alternative: If you want to use different image names, update the array above
  // For example: ['/images/event1.jpg', '/images/event2.jpg', ...]

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

