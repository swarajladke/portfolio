import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/swarajladke',
      color: '#0077B5',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/swarajladke',
      color: '#333',
      description: 'Open source projects and code repositories'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:swaraj.ladke@example.com',
      color: '#EA4335',
      description: 'Direct email communication'
    },
    {
      name: 'Devpost',
      icon: 'Trophy',
      url: 'https://devpost.com/swarajladke',
      color: '#003E54',
      description: 'Hackathon projects and achievements'
    },
    {
      name: 'Replit',
      icon: 'Code',
      url: 'https://replit.com/@swarajladke',
      color: '#F26207',
      description: 'Code snippets and quick prototypes'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/swarajladke',
      color: '#1DA1F2',
      description: 'Tech thoughts and industry insights'
    }
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      description: 'Available for remote work globally'
    },
    {
      icon: 'Clock',
      label: 'Timezone',
      value: 'IST (UTC+5:30)',
      description: 'Flexible with international collaboration'
    },
    {
      icon: 'Languages',
      label: 'Languages',
      value: 'English, Hindi, Marathi',
      description: 'Fluent in multiple languages'
    },
    {
      icon: 'Briefcase',
      label: 'Availability',
      value: 'Open to opportunities',
      description: 'Full-time, part-time, and freelance projects'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // You could add a success notification here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding section-margin bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on innovative projects and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Intro */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Icon name="MessageSquare" size={24} className="mr-3 text-primary" />
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Whether you're looking for a fullstack developer, AI/ML expertise, or just want to connect with 
                a fellow tech enthusiast, I'd love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible. Let's build something extraordinary together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={info.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{info.label}</div>
                    <div className="text-primary font-medium">{info.value}</div>
                    <div className="text-sm text-muted-foreground">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                <Icon name="Share2" size={20} className="mr-2 text-primary" />
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-1 group text-left"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <Icon name={social.icon} size={20} style={{ color: social.color }} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {social.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-elevation-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="Send" size={24} className="mr-3 text-primary" />
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project Collaboration Opportunity"
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="btn-glow w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={16} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Response Time:</strong> I typically respond within 24-48 hours. 
                    For urgent matters, feel free to reach out via LinkedIn or email directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-3xl mx-auto">
            <Icon name="Rocket" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a cutting-edge web application, an AI-powered solution, or an innovative startup idea, 
              I'm here to help bring your vision to life. Let's create the future together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => window.open('https://linkedin.com/in/swarajladke', '_blank')}
                iconName="Linkedin"
                iconPosition="left"
                className="btn-glow"
              >
                Connect on LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('mailto:swaraj.ladke@example.com', '_blank')}
                iconName="Mail"
                iconPosition="left"
                className="btn-glow"
              >
                Send Direct Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;