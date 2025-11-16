import React, { useEffect, useRef, useState } from 'react';

const TRAIL_LENGTH = 22;
const HEAD_SIZE = 13;
const TAIL_SIZE = 4;
const BASE_COLOR = '52, 142, 255'; // soft blue
const WHITE = '255,255,255';

// Helper to interpolate between head and tail values
const lerp = (a, b, t) => a + (b - a) * t;

// Stable twinkle with time and index (not per render)
function twinkleAmount(i, key) {
  // Use i (trail index) + key (timestamp) to seed randomness
  const base = Math.sin((i + 1) * 997 + key / 75);
  return 0.7 + 0.3 * Math.abs(base % 1); // 0.7 .. 1
}

const CursorTrail = () => {
  const [positions, setPositions] = useState([]);
  const raf = useRef(null);

  useEffect(() => {
    const handleMouseMove = e => {
      setPositions(prev => [
        { x: e.clientX, y: e.clientY, t: Date.now() },
        ...prev
      ].slice(0, TRAIL_LENGTH));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPositions(prev => prev.filter(dot => Date.now() - dot.t < 800));
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        mixBlendMode: 'screen',
      }}
      aria-hidden
    >
      {positions.map((pos, i) => {
        const t = i / (TRAIL_LENGTH - 1);
        const size = lerp(HEAD_SIZE, TAIL_SIZE, t);
        const opacity = lerp(0.95, 0.35, t);
        const blur = lerp(2, 1, t);
        // Twinkle: randomize scale and brightness with stable time-indexed value
        const twinkle = twinkleAmount(i, pos.t);
        const starColor = t < 0.2
          ? `rgba(${WHITE},${0.75 * twinkle})`
          : `rgba(${BASE_COLOR},${0.32 * twinkle})`;
        const shadow = t < 0.2 
          ? `0 0 12px 3px rgba(255,255,255,0.46)`: `0 0 6px 1px rgba(100,180,255,0.15)`;
        return (
          <div
            key={pos.t + '-' + i}
            style={{
              position: 'absolute',
              left: pos.x - (size * twinkle) / 2,
              top: pos.y - (size * twinkle) / 2,
              width: size * twinkle,
              height: size * twinkle,
              background: `radial-gradient(ellipse at 60% 47%, ${starColor} 0%, transparent 100%)`,
              borderRadius: '50%',
              opacity: opacity * twinkle,
              filter: `blur(${blur}px)`,
              pointerEvents: 'none',
              boxShadow: shadow,
              transition: 'opacity 0.2s, width 0.14s, height 0.14s, filter 0.18s',
              willChange: 'opacity, width, height, filter',
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
