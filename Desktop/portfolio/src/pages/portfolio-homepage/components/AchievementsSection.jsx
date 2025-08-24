import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('hackathons');

  const tabs = [
    { id: 'hackathons', label: 'Hackathons', icon: 'Trophy' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'recognitions', label: 'recognitions', icon: 'Star' }
  ];

  const hackathons = [
    {
      id: 1,
      title: 'OpenAI Open Model Hackathon 2025',
      position: 'To be updated',
      date: 'Aug to Sep 2025',
      category: 'AI/ML Track',
      description: 'Developing an AI-powered solution for smart city traffic management using computer vision and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'flask'],
      prize: '$30,000',
      team: 'solo',
      participants: '6000+'
    },
    {
      id: 2,
      title: 'Proof of Concept Hackathon 2025',
      position: 'To be updated',
      date: 'Jul to Sep 2025',
      category: 'Android Development',
      description: 'Creating a proof of concept for a decentralized application using blockchain technology and smart contracts.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      technologies: ['Solidity', 'React Native', 'Node.js', 'MongoDB'],
      prize: '$25,000',
      team: 'solo',
      participants: '1500+'
    },
    {
      id: 3,
      title: 'Gen AI Chakra 4 Smart Cities Hackathon 2025',
      position: 'To be updated',
      date: 'Aug to Sep 2025',
      category: 'AI/ML Track',
      description: 'Developing a smart waste management system using AI and IoT technologies to optimize city cleanliness and resource allocation.',
      image: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=400&h=300&fit=crop',
      technologies: [ 'Python', 'TensorFlow', 'IoT', 'React', 'Django'],
      prize: '$380',
      team: 'solo',
      participants: '300+'
    },
    {
      id: 4,
      title: 'BatchHacks 2025 - Hackathon',
      position: 'To be updated',
      date: 'Aug to Dec 2025',
      category: 'Web Development',
      description: 'Developing a universal application for real-time language translation using AI and NLP techniques.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
      prize: '$1400',
      team: 'solo',
      participants: '100+'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Web Development in React.js:',
      issuer: 'Coursera',
      date: 'July 2025',
      credentialId: '3ZF9EFXTT23Q',
      image: 'https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75',
      skills: [ 'React', 'JavaScript', 'Web Development', 'Frontend Development'],
      description: 'Professional certificate covering advanced web development concepts using React.js, including state management, routing, and performance optimization.',
      verifyUrl: 'https://coursera.org/verify/3ZF9EFXTT23Q'
    },
    {
      id: 2,
      title: 'Technology Job Simulation-Deloitte',
      issuer: 'Forage',
      date: 'June 2025',
      credentialId: 'bPckrErRrGvhebJW5 ',
      image: 'https://intersectjobsims.com/wp-content/uploads/2018/05/adults-chairs-colleagues-5151661.jpg?w=656&h=300&crop=1',
      skills: ['Deloitte', 'Technology Consulting', 'Problem Solving', 'Team Collaboration'],
      description: 'A hands-on simulation experience with Deloitte, focusing on technology consulting and problem-solving in real-world scenarios.',
      verifyUrl: 'https://drive.google.com/file/d/1ZlsgW31luqVJeYQS7ULwww9OV4U-vQdU/preview'
    },
    {
      id: 3,
      title: 'Developer and Technology Job Simulation-Accenture',
      issuer: 'Forage',
      date: 'June 2025',
      credentialId: '2JHoWMZC7Y6aNWQ8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_klSz5NLV1-BfwMGU1AoOLWR8loaLRWJtImgncdxhY8B7xDu91evzHQdSJ6CMqdHqRA&usqp=CAU',
      skills: ['Software Development', 'Problem Solving', 'Team Collaboration', 'Technology Consulting'],
      description: 'A comprehensive simulation experience focusing on software development and technology consulting, providing insights into real-world challenges and solutions.',
      verifyUrl: 'https://drive.google.com/file/d/1ipWwwLKsk6PNJCtJOiz1mBhaQPG4RbdU/preview'
    },
    {
      id: 4,
      title: 'Introduction to Git and GitHub',
      issuer: 'coursera',
      date: 'Nov 2024',
      credentialId: 'LJ9FNITVL8EQ',
      image: 'https://ilkinvaliyev.com/uploads/HNbj1yLc4ZaIpapLYdTUghp4jH7zie6OBC9yQQHP.jpg',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      description: 'Comprehensive introduction to Git and GitHub, covering version control, branching, merging, and collaboration workflows for software development projects.',
      verifyUrl: 'https://coursera.org/verify/LJ9FNITVL8EQ'
    }
  ];

  const recognitions = [
    {
      id: 1,
      title: 'Elora-Dynamic glowing VS code theme engine',
      issuer: 'GitHub-VS code themes.com(open source community)',
      date: 'July 2025',
      description: 'Developed a dynamic glowing VS Code theme engine that adapts to user preferences and enhances coding experience with customizable glow effects.',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
      category: 'VS Code Theme Development',
    }
    
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'hackathons':
        return hackathons;
      case 'certifications':
        return certifications;
      case 'recognitions':
        return recognitions;
      default:
        return hackathons;
    }
  };

  const getPositionColor = (position) => {
    if (position?.includes('1st') || position?.includes('Winner')) {
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    } else if (position?.includes('2nd') || position?.includes('Runner')) {
      return 'text-gray-300 bg-gray-300/10 border-gray-300/20';
    } else if (position?.includes('3rd') || position?.includes('Bronze')) {
      return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    }
    return 'text-primary bg-primary/10 border-primary/20';
  };

  return (
    <section id="achievements" className="section-padding section-margin bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognitions earned through dedication and innovation
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-elevation-1'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {getTabContent().map((item, index) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {item.position && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPositionColor(item.position)}`}>
                      {item.position}
                    </span>
                  </div>
                )}
                {item.category && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{item.issuer}</p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies/Skills */}
                {(item.technologies || item.skills) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(item.technologies || item.skills).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Additional Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    {item.prize && (
                      <div className="flex items-center space-x-1">
                        <Icon name="DollarSign" size={14} />
                        <span>{item.prize}</span>
                      </div>
                    )}
                    {item.team && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{item.team}</span>
                      </div>
                    )}
                    {item.credentialId && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Shield" size={14} />
                        <span>ID: {item.credentialId}</span>
                      </div>
                    )}
                  </div>
                  {item.verifyUrl && (
                    <button
                      onClick={() => window.open(item.verifyUrl, '_blank')}
                      className="flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-300"
                    >
                      <Icon name="ExternalLink" size={14} />
                      <span>Verify</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Hackathons Participated</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-success mb-2">2</div>
            <div className="text-sm text-muted-foreground">projects in production</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-warning mb-2">1</div>
            <div className="text-sm text-muted-foreground">Recognition Received</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;