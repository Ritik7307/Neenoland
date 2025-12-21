import React, { useState, useEffect } from 'react';
import './PartyPopper.css';

const PartyPopper = () => {
  const [showPopper, setShowPopper] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles for the popper effect
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 1 + Math.random() * 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Hide popper after animation completes
    const timer = setTimeout(() => {
      setShowPopper(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopper) return null;

  return (
    <div className="party-popper-overlay">
      <div className="party-popper-container">
        <div className="confetti-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="confetti"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                backgroundColor: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'][
                  Math.floor(Math.random() * 5)
                ],
              }}
            />
          ))}
        </div>
        <div className="popper-text">Welcome to Neeno Land</div>
      </div>
    </div>
  );
};

export default PartyPopper;

