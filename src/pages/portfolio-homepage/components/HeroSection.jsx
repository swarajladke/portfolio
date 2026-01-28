import React, { useRef, useEffect } from 'react';
import CursorTrail from './CursorTrail';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  useEffect(() => {
    const createTrailParticle = () => {
      const container = document.getElementById('comet-trail-container');
      if (!container) return;

      const cometOrbit = document.querySelector('.comet-orbit');
      if (!cometOrbit) return;

      const comet = cometOrbit.querySelector('.comet');
      if (!comet) return;

      const rect = comet.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const x = rect.left + rect.width / 2 - containerRect.left;
      const y = rect.top + rect.height / 2 - containerRect.top;

      const particle = document.createElement('div');
      particle.className = 'trail-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 2000);
    };

    const interval = setInterval(createTrailParticle, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CursorTrail />
      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--orbit-dist, 25vw)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--orbit-dist, 25vw)) rotate(-360deg);
          }
        }
        @keyframes trailFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }
        @keyframes starOrbit1 {
          0% {
            transform: rotate(0deg) translateX(var(--star-dist-1, 20vw)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--star-dist-1, 20vw)) rotate(-360deg);
          }
        }
        @keyframes starOrbit2 {
          0% {
            transform: rotate(0deg) translateX(var(--star-dist-2, 18vw)) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(var(--star-dist-2, 18vw)) rotate(360deg);
          }
        }
        @keyframes starOrbit3 {
          0% {
            transform: rotate(0deg) translateX(var(--star-dist-3, 22vw)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--star-dist-3, 22vw)) rotate(-360deg);
          }
        }
        @keyframes starOrbit4 {
          0% {
            transform: rotate(0deg) translateX(var(--star-dist-4, 16vw)) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(var(--star-dist-4, 16vw)) rotate(360deg);
          }
        }
        @keyframes starOrbit5 {
          0% {
            transform: rotate(0deg) translateX(var(--star-dist-5, 24vw)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--star-dist-5, 24vw)) rotate(-360deg);
          }
        }
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 4px #FFFFFF, 0 0 8px rgba(255, 255, 255, 0.6);
        }
        .star-large {
          width: 4px;
          height: 4px;
          box-shadow: 0 0 6px #FFFFFF, 0 0 12px rgba(255, 255, 255, 0.8);
        }
        .star-small {
          width: 2px;
          height: 2px;
          box-shadow: 0 0 3px #FFFFFF, 0 0 6px rgba(255, 255, 255, 0.4);
        }
        .star-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .star-orbit-1 {
          animation: starOrbit1 25s linear infinite;
        }
        .star-orbit-2 {
          animation: starOrbit2 30s linear infinite;
        }
        .star-orbit-3 {
          animation: starOrbit3 35s linear infinite;
        }
        .star-orbit-4 {
          animation: starOrbit4 28s linear infinite;
        }
        .star-orbit-5 {
          animation: starOrbit5 32s linear infinite;
        }
        .comet-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          animation: orbit 16s linear infinite;
        }
        .trail-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #00FFFF 0%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 8px #00FFFF, 0 0 16px rgba(0, 255, 255, 0.6);
          animation: trailFade 2s ease-out forwards;
          pointer-events: none;
        }
        .comet {
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #FFFFFF 0%, #00FFFF 30%, #0080FF 60%, transparent 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 10px #FFFFFF,
            0 0 20px #00FFFF,
            0 0 40px #00FFFF,
            0 0 60px rgba(0, 255, 255, 0.5);
          filter: blur(0.5px);
          transform-origin: center center;
        }
        .comet-tail {
          position: absolute;
          top: 50%;
          left: -180px;
          width: 180px;
          height: 4px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 255, 255, 0.1) 10%,
            rgba(0, 255, 255, 0.4) 30%,
            #00FFFF 50%,
            rgba(0, 200, 255, 0.8) 70%,
            rgba(0, 150, 255, 0.4) 85%,
            transparent 100%
          );
          transform: translateY(-50%) rotate(180deg);
          border-radius: 50px;
          box-shadow: 
            0 0 10px rgba(0, 255, 255, 0.6),
            0 0 20px rgba(0, 255, 255, 0.4),
            0 0 40px rgba(0, 255, 255, 0.2);
          filter: blur(2px);
        }
        .comet-tail::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -120px;
          width: 120px;
          height: 3px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 255, 255, 0.15) 20%,
            rgba(0, 255, 255, 0.5) 50%,
            rgba(0, 200, 255, 0.3) 80%,
            transparent 100%
          );
          transform: translateY(-50%) rotate(180deg);
          border-radius: 50px;
          filter: blur(1.5px);
        }
        .comet-tail::after {
          content: '';
          position: absolute;
          top: 50%;
          left: -80px;
          width: 80px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 255, 255, 0.2) 30%,
            rgba(0, 255, 255, 0.4) 60%,
            transparent 100%
          );
          transform: translateY(-50%) rotate(180deg);
          border-radius: 50px;
          filter: blur(1px);
        }
        :root {
          --orbit-dist: 30vw;
          --star-dist-1: 25vw;
          --star-dist-2: 22vw;
          --star-dist-3: 28vw;
          --star-dist-4: 18vw;
          --star-dist-5: 32vw;
        }
        @media (min-width: 768px) {
          :root {
            --orbit-dist: 25vw;
            --star-dist-1: 20vw;
            --star-dist-2: 18vw;
            --star-dist-3: 22vw;
            --star-dist-4: 16vw;
            --star-dist-5: 24vw;
          }
        }
        @media (max-width: 767px) {
          .hero-video {
            object-position: center center !important;
          }
        }
      `}</style>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background video - hidden on mobile, visible on laptop */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden md:block transform md:translate-x-[-15%] transition-transform duration-700">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hero-video"
            style={{ objectPosition: '100% 200%' }}
          >
            <source src="assets/videos/bk3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Overlay SVG on top of the video */}
        <img
          src="assets/images/heroi-bg.svg"
          alt="Decorative Overlay"
          className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 top-[65%] md:top-[60%] -translate-y-1/2 h-[35vh] md:h-[90vh] w-auto max-w-[100vw] md:max-w-[50vw] z-10 pointer-events-none select-none opacity-20 md:opacity-90 transition-all duration-700"
        />
        {/* Comet animation orbiting around the image */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 top-[65%] md:top-[60%] -translate-y-1/2 w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] pointer-events-none" style={{ zIndex: 15 }}>
          <div className="comet-orbit">
            <div className="comet">
              <div className="comet-tail"></div>
            </div>
          </div>
        </div>
        {/* Trail container for persistent trail effect */}
        <div id="comet-trail-container" className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 top-[65%] md:top-[60%] -translate-y-1/2 w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] pointer-events-none" style={{ zIndex: 14 }}></div>
        {/* Stars orbiting around the image */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 top-[65%] md:top-[60%] -translate-y-1/2 w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] pointer-events-none" style={{ zIndex: 12 }}>
          <div className="star-orbit star-orbit-1">
            <div className="star star-large"></div>
          </div>
          <div className="star-orbit star-orbit-2">
            <div className="star"></div>
          </div>
          <div className="star-orbit star-orbit-3">
            <div className="star star-small"></div>
          </div>
          <div className="star-orbit star-orbit-4">
            <div className="star"></div>
          </div>
          <div className="star-orbit star-orbit-5">
            <div className="star star-large"></div>
          </div>
          <div className="star-orbit" style={{ animation: 'starOrbit1 22s linear infinite', animationDirection: 'reverse' }}>
            <div className="star star-small"></div>
          </div>
          <div className="star-orbit" style={{ animation: 'starOrbit2 27s linear infinite', animationDirection: 'reverse' }}>
            <div className="star"></div>
          </div>
          <div className="star-orbit" style={{ animation: 'starOrbit3 33s linear infinite', animationDirection: 'reverse' }}>
            <div className="star star-small"></div>
          </div>
        </div>
        {/* Hero Content - left aligned */}
        <div className="relative z-30 w-full max-w-2xl px-6 pt-32 md:pt-64 pb-8 flex flex-col items-start ml-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-300 via-blue-400 to-teal-200 text-transparent bg-clip-text text-left">Transforming <span className="text-white drop-shadow-md">Ideas</span> into Seamless User <span className="text-white drop-shadow-md">Experience</span></h1>
          <p className="mt-5 text-lg text-white/90 max-w-lg text-left">Hi I'm swaraj ladke, a Full Stack Software Engineer specializing in building modern web applications. Check out my projects and skills.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  const navHeight = 80;
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-4 text-base font-bold text-white bg-transparent rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View my work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const navHeight = 80;
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-4 text-base font-bold text-white bg-transparent rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
