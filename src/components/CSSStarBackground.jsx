import React, { useEffect, useRef } from 'react';

export const CSSStarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple layers of twinkling stars - static positions for visibility
    const layers = [
      { count: 35, speed: 20, size: 1, opacity: 1 }, // Far stars: fewer
      { count: 22, speed: 40, size: 1.5, opacity: 1 }, // Mid stars: fewer
      { count: 10, speed: 60, size: 2, opacity: 1 }, // Near stars: fewer
    ];

    const stars = [];

    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement('div');
        star.className = `star star-layer-${layerIndex}`;
        
        // Random static positions across the screen
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Random animation duration
        const duration = layer.speed + Math.random() * 10;
        const delay = Math.random() * duration;
        // Random twinkle delay and duration so stars don't twinkle at the same time
        const twinkleDelay = Math.random() * 5; // Random delay between 0-5 seconds
        const twinkleDuration = 2 + Math.random() * 3; // Random duration between 2-5 seconds
        
        star.style.left = `${startX}%`;
        star.style.top = `${startY}%`;
        star.style.width = `${layer.size}px`;
        star.style.height = `${layer.size}px`;
        star.style.opacity = layer.opacity;
        star.style.animationDuration = `${duration}s, ${twinkleDuration}s`;
        star.style.animationDelay = `${delay}s, ${twinkleDelay}s`;
        
        container.appendChild(star);
        stars.push(star);
      }
    });

    return () => {
      stars.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        background: 'transparent',
        zIndex: 5
      }}
    >
      <style>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 1),
                      0 0 20px rgba(255, 255, 255, 0.9),
                      0 0 30px rgba(255, 255, 255, 0.7),
                      0 0 40px rgba(255, 255, 255, 0.5);
          animation: twinkle 3s infinite ease-in-out;
          filter: brightness(1.5);
          opacity: 1 !important;
        }
        
        @keyframes moveStar {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.8),
                        0 0 12px rgba(255, 255, 255, 0.6),
                        0 0 18px rgba(255, 255, 255, 0.4),
                        0 0 24px rgba(255, 255, 255, 0.2);
          }
          25% {
            opacity: 0.9;
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(255, 255, 255, 1),
                        0 0 20px rgba(255, 255, 255, 0.9),
                        0 0 30px rgba(255, 255, 255, 0.7),
                        0 0 40px rgba(255, 255, 255, 0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.6);
            box-shadow: 0 0 14px rgba(255, 255, 255, 1),
                        0 0 28px rgba(255, 255, 255, 1),
                        0 0 42px rgba(255, 255, 255, 0.8),
                        0 0 56px rgba(255, 255, 255, 0.6);
          }
          75% {
            opacity: 0.9;
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(255, 255, 255, 1),
                        0 0 20px rgba(255, 255, 255, 0.9),
                        0 0 30px rgba(255, 255, 255, 0.7),
                        0 0 40px rgba(255, 255, 255, 0.5);
          }
        }
        
        /* Different twinkle speeds for variety */
        .star:nth-child(3n) {
          animation-duration: var(--animation-duration, 30s), 2s;
        }
        
        .star:nth-child(5n) {
          animation-duration: var(--animation-duration, 30s), 4s;
        }
        
        .star:nth-child(7n) {
          animation-duration: var(--animation-duration, 30s), 1.5s;
        }
        
        .star:nth-child(11n) {
          animation-duration: var(--animation-duration, 30s), 5s;
        }
        
        .star:nth-child(13n) {
          animation-duration: var(--animation-duration, 30s), 2.5s;
        }
        
        /* Add pulsing glow effect */
        .star::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          animation: pulseGlow 2s infinite ease-in-out;
          opacity: 0;
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

