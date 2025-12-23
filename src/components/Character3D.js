import React, { useState, useRef, useEffect } from 'react';
import { getImageUrl } from '../config/images';
import './Character3D.css';

const Character3D = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const percentX = (mouseX - centerX) / (window.innerWidth / 2);
        const percentY = (mouseY - centerY) / (window.innerHeight / 2);

        // Max rotation typically 15-20 degrees
        setRotation({
            x: -percentY * 20, // Inverted for natural feel
            y: percentX * 20
        });

        // Glare position calculation
        // When tilted left, glare should be on left edge (or right depending on light source)
        setGlare({
            x: 50 + percentX * 40,
            y: 50 + percentY * 40,
            opacity: 0.6 + Math.abs(percentX) * 0.4 // More glare at extremes
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="character-3d-container">
            <div
                className="character-card"
                ref={cardRef}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
            >
                <img
                    src={getImageUrl("Character.png")}
                    alt="Neenoland Character"
                    className="character-image"
                />

                {/* Shiny Glare Overlay */}
                <div
                    className="character-glare"
                    style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
                        opacity: glare.opacity
                    }}
                />
            </div>
        </div>
    );
};

export default Character3D;
