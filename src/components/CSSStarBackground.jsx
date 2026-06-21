import React, { useEffect, useRef } from 'react';

export const CSSStarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create fewer layers of twinkling stars for better performance
    const layers = [
      { count: 15, speed: 20, size: 1, opacity: 1 }, // Far stars
      { count: 10, speed: 40, size: 1.5, opacity: 1 }, // Mid stars
      { count: 5, speed: 60, size: 2, opacity: 1 }, // Near stars
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
        const twinkleDelay = Math.random() * 5; 
        const twinkleDuration = 2 + Math.random() * 3; 
        
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
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          animation: twinkle 3s infinite ease-in-out;
          will-change: opacity;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
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
      `}</style>
    </div>
  );
};

