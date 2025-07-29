import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [themeColor, setThemeColor] = useState('blue');

  const themeOptions = [
    { name: 'blue', color: '#00BFFF', label: 'Blue' },
    { name: 'aqua', color: '#00FFFF', label: 'Aqua' },
    { name: 'red', color: '#FF3366', label: 'Red' },
    { name: 'violet', color: '#8B5CF6', label: 'Violet' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('neon-portfolio-theme');
    if (savedTheme && themeOptions.find(theme => theme.name === savedTheme)) {
      setThemeColor(savedTheme);
    }
  }, []);

  useEffect(() => {
    const selectedTheme = themeOptions.find(theme => theme.name === themeColor);
    if (selectedTheme) {
      document.documentElement.style.setProperty('--color-primary', selectedTheme.color);
      document.documentElement.style.setProperty('--color-ring', selectedTheme.color);
      
      // Update accent color for blue theme
      if (themeColor === 'blue') {
        document.documentElement.style.setProperty('--color-accent', '#0080FF');
      } else if (themeColor === 'aqua') {
        document.documentElement.style.setProperty('--color-accent', '#FF0080');
      } else if (themeColor === 'red') {
        document.documentElement.style.setProperty('--color-accent', '#FF6B35');
      } else if (themeColor === 'violet') {
        document.documentElement.style.setProperty('--color-accent', '#A855F7');
      }
      
      localStorage.setItem('neon-portfolio-theme', themeColor);
    }
  }, [themeColor]);

  const handleThemeChange = (themeName) => {
    setThemeColor(themeName);
  };

  return (
    <div className="theme-switcher">
      {themeOptions.map((theme) => (
        <button
          key={theme.name}
          className={`theme-option ${themeColor === theme.name ? 'active' : ''}`}
          style={{ backgroundColor: theme.color }}
          onClick={() => handleThemeChange(theme.name)}
          title={`Switch to ${theme.label} theme`}
          aria-label={`Switch to ${theme.label} theme`}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher; 