import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const nameToType = 'Swaraj Ladke';

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleDisplay, setTitleDisplay] = useState('');
  const [titleCharIndex, setTitleCharIndex] = useState(0);
  const [isTitleDeleting, setIsTitleDeleting] = useState(false);

  const titles = [
    'Fullstack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;
    if (!isTitleDeleting) {
      if (titleCharIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setTitleDisplay(currentTitle.slice(0, titleCharIndex + 1));
          setTitleCharIndex(titleCharIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTitleDeleting(true), 2000);
      }
    } else {
      if (titleCharIndex > 0) {
        timeout = setTimeout(() => {
          setTitleDisplay(currentTitle.slice(0, titleCharIndex - 1));
          setTitleCharIndex(titleCharIndex - 1);
        }, 50);
      } else {
        setIsTitleDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [titleCharIndex, isTitleDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-[70vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-2 md:px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-4 md:mb-6 relative rounded-full w-48 h-48 md:w-56 md:h-56 mx-auto glow-avatar overflow-visible">
          {/* Glow is applied via ::after on this container; no extra wrapper elements */}
          <img 
            src="assets/images/photo.png" 
            alt="Test"
            className="relative z-10 w-full h-full rounded-full object-cover object-center"
          />
        </div>

        {/* Name static with bounce */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 gradient-text animate-bounce">
          {nameToType}
        </h1>
        {/* Rotating Titles Typing Animation */}
        <div className="mb-6 md:mb-8 h-12 md:h-14 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            <span className="text-primary">&gt;</span> {titleDisplay}
            <span className="animate-pulse text-primary">|</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold btn-glow hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Icon name="FolderOpen" size={20} />
            <span>View My Work</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-primary text-primary rounded-xl font-semibold btn-glow hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-2"
          >
            <Icon name="Mail" size={20} />
            <span>Get In Touch</span>
          </button>
        </div>
        {/* Move horizontal line further down */}
        <div className="w-full h-0.5 bg-primary/40 mx-auto mt-10 md:mt-12 mb-8" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-primary animate-pulse" />
        </div>
      </div>
      <style>{`
        .glow-avatar::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          z-index: 0;
          pointer-events: none;
          box-shadow: 0 0 24px 8px rgba(0, 247, 255, 0.45);
          background: radial-gradient(circle, rgba(0,247,255,0.35) 0%, rgba(0,247,255,0.18) 40%, transparent 70%);
          filter: blur(10px);
          animation: neonPulse 2.6s ease-in-out infinite;
        }
        @keyframes neonPulse {
          0% { opacity: 0.5; box-shadow: 0 0 18px 6px rgba(0,247,255,0.35); }
          50% { opacity: 1; box-shadow: 0 0 36px 14px rgba(0,247,255,0.7); }
          100% { opacity: 0.5; box-shadow: 0 0 18px 6px rgba(0,247,255,0.35); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;