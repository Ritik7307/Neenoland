import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import '../components/Home.css';
import { getImageUrl, getVideoUrl } from '../config/images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EnquiryButton from '../components/EnquiryButton';
import { useNavigate } from 'react-router-dom';
import ExperimentalLayer from '../components/ExperimentalLayer';



const LazyVideo = ({ src, poster, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play only when visible
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              // Auto-play was prevented
              console.log("Autoplay prevented:", error);
            });
          }
        } else {
          // Pause when out of view to save resources
          videoRef.current.pause();
        }
      });
    }, { threshold: 0.1 });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
    />
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse Parallax Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = ((clientY / innerHeight) - 0.5) * 5; // Reduced intensity
      const y = ((clientX / innerWidth) - 0.5) * -5;
      setRotation({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animations and Page SEO
  useEffect(() => {
    // Page SEO
    document.title = 'Neeno Land - Best Kids Party Venue & Indoor Play Area in Indirapuram, Ghaziabad';

    // Hero Text Animation
    anime({
      targets: '.hero-text-anim',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(200, { start: 500 })
    });

    // Bento Grid Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll('.bento-item'),
            scale: [0.9, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 800,
            delay: anime.stagger(100)
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const gridSection = document.querySelector('.bento-section');
    if (gridSection) observer.observe(gridSection);

  }, []);



  return (
    <div className="home-page">

      <Navbar />

      {/* IMMERSIVE HERO SECTION */}
      <section className="hero-section">
        <div className="video-background-container" style={{ transform: `scale(1.1) translate(${rotation.y * -0.5}px, ${rotation.x * -0.5}px)`, transition: 'transform 0.1s linear' }}>
          <video
            src={getVideoUrl("kqh5biuauk6p4vrvcyg8.mp4")}
            className="video-background"
            autoPlay loop muted playsInline
            preload="auto"
            fetchpriority="high"
            poster={getImageUrl("neenoland_playzone.jpg")}
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="hero-content container">
          <div className="hero-text-wrapper">
            <h2 className="hero-subtitle hero-text-anim">WELCOME TO NEENOLAND</h2>
            <h1 className="hero-title hero-text-anim">
              WHERE <span className="highlight-text">JOY</span><br />
              KNOWS NO BOUNDS
            </h1>
            <p className="hero-desc hero-text-anim">
              Experience the ultimate indoor amusement park. Games, Food, and Celebration all under one roof.
            </p>
            <div className="hero-buttons hero-text-anim">
              <button className="primary-btn" onClick={() => navigate('/packages')}>Book a Party</button>
              <button className="secondary-btn" onClick={() => navigate('/contact')}>Plan Visit</button>
            </div>
          </div>
        </div>


      </section>

      {/* BENTO GRID ATTRACTIONS */}
      <section className="bento-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">EXPLORE THE <span className="highlight-text">FUN</span></h2>
            <p className="section-subtitle">Something amazing for everyone at Neenoland</p>
          </div>

          <div className="bento-grid">
            {/* Large Item: Playzone */}
            <div className="bento-item large box-playzone">
              <LazyVideo
                className="bento-video-bg"
                src={getVideoUrl("zzksbafixkq3oicgcrc0.mp4")}
                poster={getImageUrl("playzone.jpeg")}
              />
              <div className="bento-content">
                <h3>Soft Play Area</h3>
                <p>Safe & colorful adventures for little ones.</p>
                {/* <div className="bento-icon">🏰</div> */}
              </div>
            </div>

            {/* Medium Item: Cafe */}
            <div className="bento-item medium box-cafe">
              <img className="bento-bg-img" src={getImageUrl('eating.jpeg')} alt="Cafe" loading="lazy" />
              <div className="bento-content">
                <h3>Global Tastes Cafe</h3>
                <p>Delicious treats while you play.</p>
                {/* <div className="bento-icon">🍔</div> */}
              </div>
            </div>

            {/* Medium Item: Arcade */}
            <div className="bento-item medium box-arcade">
              <LazyVideo
                className="bento-video-bg"
                src={getVideoUrl("onikmmdmotxlu2dugiog.mp4")}
                poster={getImageUrl("playssone.jpeg")}
              />
              <div className="bento-content">
                <h3>Arcade Zone</h3>
                <p>Next-gen gaming experience.</p>
                {/* <div className="bento-icon">🕹️</div> */}
              </div>
            </div>

            {/* Wide Item: Trampoline */}
            <div className="bento-item wide box-trampoline">
              <img className="bento-bg-img" src={getImageUrl('1G4A2495.jpg')} alt="Trampoline" loading="lazy" />
              <div className="bento-content">
                <h3>Trampoline Park</h3>
                <p>Jump high and defy gravity!</p>
                {/* <div className="bento-icon">🤸</div> */}
              </div>
            </div>



            {/* Small Item: Bowling */}
            {/* <div className="bento-item small box-bowling">
              <div className="bento-bg" style={{ backgroundImage: "url('/images/1G4A2765.JPG')" }}></div>
              <div className="bento-content centered">
                <h3>Bowling</h3>
                <div className="bento-icon">🎳</div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* INFINITE GALLERY LOOP */}
      <section className="gallery-section">
        <div className="section-header center-text mb-40">
          <h2 className="section-title">CAPTURED <span className="highlight-text">MOMENTS</span></h2>
          <p className="section-subtitle">Real smiles, real fun at Neenoland</p>
        </div>

        <div className="gallery-marquee">
          <div className="marquee-track">
            {/* Set 1 */}
            <div className="marquee-group">
              <img src={getImageUrl("1G4A2495.jpg")} alt="Gallery 1" loading="lazy" />
              <img src={getImageUrl("1G4A2508.jpg")} alt="Gallery 2" loading="lazy" />
              <img src={getImageUrl("1G4A2552.jpg")} alt="Gallery 3" loading="lazy" />
              <img src={getImageUrl("1G4A2676.jpg")} alt="Gallery 4" loading="lazy" />
              <img src={getImageUrl("1G4A2796.jpg")} alt="Gallery 5" loading="lazy" />
              <img src={getImageUrl("1G4A2808.jpg")} alt="Gallery 6" loading="lazy" />
              <img src={getImageUrl("1G4A2867.jpg")} alt="Gallery 7" loading="lazy" />
              <img src={getImageUrl("neenoland_playzone.jpg")} alt="Gallery 8" loading="lazy" />
              <img src={getImageUrl("happy birthday.jpeg")} alt="Gallery 9" loading="lazy" />
              <img src={getImageUrl("playzone.jpeg")} alt="Gallery 10" loading="lazy" />
              <img src={getImageUrl("neenoland_cake.jpg")} alt="Gallery 11" loading="lazy" />
              <img src={getImageUrl("sitting.avif")} alt="Gallery 12" loading="lazy" />
              <img src={getImageUrl("decoration.jpeg")} alt="Gallery 13" loading="lazy" />
              <img src={getImageUrl("g3gictoxytip6nyyhipz.jpg")} alt="Gallery 14" loading="lazy" />
              <img src={getImageUrl("moeralpgh0zlrnq80dke.jpg")} alt="Gallery 15" loading="lazy" />
              <img src={getImageUrl("playzone 1.jpeg")} alt="Gallery 16" loading="lazy" />
              <img src={getImageUrl("playzone 22.jpeg")} alt="Gallery 17" loading="lazy" />
              <img src={getImageUrl("playzone 3.jpeg")} alt="Gallery 18" loading="lazy" />
              <img src={getImageUrl("playzone 4.jpeg")} alt="Gallery 19" loading="lazy" />
              <img src={getImageUrl("soft balls.jpeg")} alt="Gallery 20" loading="lazy" />
            </div>
            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="marquee-group">
              <img src={getImageUrl("1G4A2495.jpg")} alt="Gallery 1" loading="lazy" />
              <img src={getImageUrl("1G4A2508.jpg")} alt="Gallery 2" loading="lazy" />
              <img src={getImageUrl("1G4A2552.jpg")} alt="Gallery 3" loading="lazy" />
              <img src={getImageUrl("1G4A2676.jpg")} alt="Gallery 4" loading="lazy" />
              <img src={getImageUrl("1G4A2796.jpg")} alt="Gallery 5" loading="lazy" />
              <img src={getImageUrl("1G4A2808.jpg")} alt="Gallery 6" loading="lazy" />
              <img src={getImageUrl("1G4A2867.jpg")} alt="Gallery 7" loading="lazy" />
              <img src={getImageUrl("neenoland_playzone.jpg")} alt="Gallery 8" loading="lazy" />
              <img src={getImageUrl("happy birthday.jpeg")} alt="Gallery 9" loading="lazy" />
              <img src={getImageUrl("playzone.jpeg")} alt="Gallery 10" loading="lazy" />
              <img src={getImageUrl("neenoland_cake.jpg")} alt="Gallery 11" loading="lazy" />
              <img src={getImageUrl("sitting.avif")} alt="Gallery 12" loading="lazy" />
              <img src={getImageUrl("decoration.jpeg")} alt="Gallery 13" loading="lazy" />
              <img src={getImageUrl("g3gictoxytip6nyyhipz.jpg")} alt="Gallery 14" loading="lazy" />
              <img src={getImageUrl("moeralpgh0zlrnq80dke.jpg")} alt="Gallery 15" loading="lazy" />
              <img src={getImageUrl("playzone 1.jpeg")} alt="Gallery 16" loading="lazy" />
              <img src={getImageUrl("playzone 22.jpeg")} alt="Gallery 17" loading="lazy" />
              <img src={getImageUrl("playzone 3.jpeg")} alt="Gallery 18" loading="lazy" />
              <img src={getImageUrl("playzone 4.jpeg")} alt="Gallery 19" loading="lazy" />
              <img src={getImageUrl("soft balls.jpeg")} alt="Gallery 20" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <EnquiryButton />
      <ExperimentalLayer />
      <Footer />
    </div>
  );
};
export default HomePage;
