import React from 'react';
import Icon from '../../../components/AppIcon';
import CursorTrail from './CursorTrail';

const HeroSection = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-transparent" style={{ zIndex: 1 }}>
      {/* Hero Background Video - only in this section */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
        src="assets/videos/bk3.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          objectPosition: '55% 15%', // shifted right and down
          transform: 'translateY(-50%) scale(1.08)',
          height: '150%',
          width: '108%',
          left: '-4%'
        }}
        aria-hidden
      />
      <CursorTrail />
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm Swaraj Ladke
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Transforming{' '}
                <span className="text-primary">Ideas</span>
                {' '}into Seamless{' '}
                <span className="text-accent">User Experience</span>
              </span>
            </h1>

            {/* Description */}
            <p className="bounce-text text-lg md:text-xl text-gray-300 max-w-2xl">
              A Full Stack Software Engineer specializing in building modern web applications.
            </p>
            <style>{`
              .bounce-text {
                animation: bounce 2s ease-in-out infinite;
              }
              @keyframes bounce {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
            `}</style>
          </div>

          {/* Right Side - Hero Image */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Circular Comet Animation */}
            <div className="comet-orbit">
              <div className="comet">
                {/* Circular trail particles */}
                <div className="trail-particle trail-1"></div>
                <div className="trail-particle trail-2"></div>
                <div className="trail-particle trail-3"></div>
                <div className="trail-particle trail-4"></div>
                <div className="trail-particle trail-5"></div>
                <div className="trail-particle trail-6"></div>
                <div className="trail-particle trail-7"></div>
                <div className="trail-particle trail-8"></div>
              </div>
            </div>
            <img 
              src="assets/images/heroi-bg.svg" 
              alt="Hero illustration" 
              className="w-full h-auto max-w-lg object-contain relative z-10"
            />
            <style>{`
              .comet-orbit {
                position: absolute;
                width: 350px;
                height: 350px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: rotate-orbit 8s linear infinite;
                z-index: 5;
              }
              .comet {
                position: absolute;
                top: 0;
                left: 50%;
                width: 16px;
                height: 16px;
                transform: translateX(-50%);
                background: radial-gradient(
                  circle,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(52, 142, 255, 1) 20%,
                  rgba(52, 142, 255, 0.9) 40%,
                  rgba(52, 142, 255, 0.6) 60%,
                  transparent 100%
                );
                border-radius: 50%;
                box-shadow: 
                  0 0 15px rgba(52, 142, 255, 1),
                  0 0 30px rgba(52, 142, 255, 0.9),
                  0 0 50px rgba(52, 142, 255, 0.7),
                  0 0 70px rgba(52, 142, 255, 0.5);
                filter: blur(0.5px);
              }
              .trail-particle {
                position: absolute;
                width: 8px;
                height: 8px;
                background: radial-gradient(
                  circle,
                  rgba(52, 142, 255, 0.9) 0%,
                  rgba(52, 142, 255, 0.6) 50%,
                  transparent 100%
                );
                border-radius: 50%;
                box-shadow: 0 0 8px rgba(52, 142, 255, 0.8);
                filter: blur(0.5px);
              }
              .trail-1 { transform: rotate(-15deg) translateY(-175px) translateX(0); opacity: 0.9; }
              .trail-2 { transform: rotate(-30deg) translateY(-175px) translateX(0); opacity: 0.8; }
              .trail-3 { transform: rotate(-45deg) translateY(-175px) translateX(0); opacity: 0.7; }
              .trail-4 { transform: rotate(-60deg) translateY(-175px) translateX(0); opacity: 0.6; }
              .trail-5 { transform: rotate(-75deg) translateY(-175px) translateX(0); opacity: 0.5; }
              .trail-6 { transform: rotate(-90deg) translateY(-175px) translateX(0); opacity: 0.4; }
              .trail-7 { transform: rotate(-105deg) translateY(-175px) translateX(0); opacity: 0.3; }
              .trail-8 { transform: rotate(-120deg) translateY(-175px) translateX(0); opacity: 0.2; }
              @keyframes rotate-orbit {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;