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
import ResumeChatWidget from './components/ResumeChatWidget';
import { CSSStarBackground } from '../../components/CSSStarBackground';

const PortfolioHomepage = () => {
  useEffect(() => {
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

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground relative">

      {/* Star Background */}
      <CSSStarBackground />

      {/* Glow Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background blur-xl opacity-40" />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative">
        <HeroSection />
      </main>

      {/* Sticky NavBar (now overlays HeroSection) */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <StickyNavBar />
      </div>

      {/* AboutSection, SkillsSection, ProjectsSection, AIProjectsSection, AchievementsSection, ResumeSection, ContactSection */}
      <div className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AIProjectsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating Glow Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Resume AI Chat Widget */}
      <ResumeChatWidget />
    </div>
  );
};

export default PortfolioHomepage;
