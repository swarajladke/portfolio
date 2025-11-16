import React, { useEffect } from 'react';
import StickyNavBar from '../../components/ui/StickyNavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AIProjectsSection from './components/AIProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CSSStarBackground } from '../../components/CSSStarBackground';

const PortfolioHomepage = () => {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground relative">
      {/* Overlay with a gap for Hero Section */}
      {/* Top overlay above HeroSection (if needed) */}
      {/* Bottom overlay covering below the HeroSection */}
      <div className="fixed left-0 right-0 z-10 pointer-events-none bg-black/50" style={{ top: '100vh', bottom: 0 }} aria-hidden="true"></div>
      {/* Blue glow background (matches Hero video effect) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background blur-xl opacity-40" />
      </div>
      {/* Star Background - Full Page */}
      <CSSStarBackground />
      
      {/* Sticky Navigation */}
      <div className="relative z-10">
        <StickyNavBar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* AI Projects Section */}
        <AIProjectsSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Resume Section */}
        <ResumeSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default PortfolioHomepage;