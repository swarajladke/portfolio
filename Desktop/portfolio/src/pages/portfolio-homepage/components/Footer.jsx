import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/swarajladke' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/swaraj-ladke-868387315/' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/itz_swaraj_4399/' },
    { name: 'Email', icon: 'Mail', url: 'mailto:swarajladke20@gmail.com' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Code2" size={24} color="currentColor" />
              </div>
              <span className="text-xl font-bold gradient-text">Swaraj Ladke</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Fullstack Developer & AI/ML Enthusiast passionate about creating innovative solutions 
              that bridge technology and human needs. Building the future, one project at a time.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleLinkClick(social.url)}
                  className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon name={social.icon} size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">Pune, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                <button
                  onClick={() => handleLinkClick('mailto:swaraj.ladke@example.com')}
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  swarajladke20@gmail.com
                </button>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">IST (UTC+5:30)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Swaraj Ladke. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
               href="#/privacy-policy"
               className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                 Privacy Policy
                   </a>
              <a
                   href="#/terms-of-service"
                     className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                 Terms of Service
                   </a>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span>Back to Top</span>
                <Icon name="ArrowUp" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;