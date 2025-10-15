import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavBar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('aqua');

  const navigationItems = [
    { label: 'About', anchor: '#about', icon: 'User' },
    { label: 'Skills', anchor: '#skills', icon: 'Code' },
    { label: 'Projects', anchor: '#projects', icon: 'FolderOpen' },
    { label: 'Achievements', anchor: '#achievements', icon: 'Award' },
    { label: 'Resume', anchor: '#resume', icon: 'FileText' },
    { label: 'Contact', anchor: '#contact', icon: 'Mail' }
  ];

  const themeOptions = [
    { name: 'aqua', color: '#00FFFF', label: 'Aqua' },
    { name: 'red', color: '#FF3366', label: 'Red' },
    { name: 'violet', color: '#8B5CF6', label: 'Violet' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.anchor.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', 
      themeColor === 'red' ? '#FF3366' : 
      themeColor === 'violet' ? '#8B5CF6' : '#00FFFF'
    );
    document.documentElement.style.setProperty('--color-ring', 
      themeColor === 'red' ? '#FF3366' : 
      themeColor === 'violet' ? '#8B5CF6' : '#00FFFF'
    );
  }, [themeColor]);

  const handleNavClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Theme Switcher  */}
      <div className="theme-switcher">
        {themeOptions.map((theme) => (
          <button
            key={theme.name}
            className={`theme-option ${themeColor === theme.name ? 'active' : ''}`}
            style={{ backgroundColor: theme.color }}
            onClick={() => setThemeColor(theme.name)}
            title={`Switch to ${theme.label} theme`}
            aria-label={`Switch to ${theme.label} theme`}
          />
        ))}
      </div> 

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-100 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('#about')}
                className="flex items-center space-x-2 text-xl font-bold text-primary hover:glow-theme transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="currentColor" />
                </div>
                <span className="gradient-text">Swaraj's Portfolio</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => handleNavClick(item.anchor)}
                    className={`nav-link ${
                      activeSection === item.anchor.substring(1) ? 'active' : ''
                    }`}
                  >
                    <Icon name={item.icon} size={16} className="inline mr-2" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md">
              {navigationItems.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.anchor.substring(1)
                      ? 'text-primary bg-primary/10 glow-theme' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} className="inline mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default StickyNavBar;