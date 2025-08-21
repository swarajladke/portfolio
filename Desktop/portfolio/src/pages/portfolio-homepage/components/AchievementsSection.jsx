import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('hackathons');

  const tabs = [
    { id: 'hackathons', label: 'Hackathons', icon: 'Trophy' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'recognitions', label: 'Publications', icon: 'Star' }
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
      title: 'TechFest Mumbai 2023',
      position: '3rd Place - Bronze',
      date: 'September 2023',
      category: 'Innovation Challenge',
      description: 'Created an innovative IoT-based solution for smart agriculture with predictive crop monitoring and automated irrigation.',
      image: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=400&h=300&fit=crop',
      technologies: ['Arduino', 'Python', 'React', 'Firebase'],
      prize: '₹25,000',
      team: '5 Members',
      participants: '8,000+'
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
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'November 2023',
      credentialId: 'ML-2023-SL-001',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and neural networks with practical implementations.',
      verifyUrl: 'https://coursera.org/verify/ML-2023-SL-001'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'October 2023',
      credentialId: 'AWS-SAA-2023-001',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Scalability'],
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS platform.',
      verifyUrl: 'https://aws.amazon.com/verification/AWS-SAA-2023-001'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'Meta (Coursera)',
      date: 'September 2023',
      credentialId: 'META-FSWD-2023-001',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      skills: ['React', 'Node.js', 'Database Design', 'API Development'],
      description: 'Professional certificate covering modern full-stack development with React, Node.js, and database technologies.',
      verifyUrl: 'https://coursera.org/verify/META-FSWD-2023-001'
    },
    {
      id: 4,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'August 2023',
      credentialId: 'GCP-PD-2023-001',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      skills: ['Google Cloud', 'Kubernetes', 'Microservices', 'CI/CD'],
      description: 'Professional certification for designing, building, and deploying applications on Google Cloud Platform.',
      verifyUrl: 'https://cloud.google.com/certification/verify/GCP-PD-2023-001'
    }
  ];

  const recognitions = [
    {
      id: 1,
      title: 'Outstanding Student Developer Award',
      issuer: 'University Tech Department',
      date: 'December 2023',
      description: 'Recognized for exceptional contributions to open-source projects and innovative solutions in AI/ML domain.',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
      category: 'Academic Excellence'
    },
    {
      id: 2,
      title: 'GitHub Campus Expert',
      issuer: 'GitHub Education',
      date: 'November 2023',
      description: 'Selected as a GitHub Campus Expert for promoting open-source culture and technical education in the community.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
      category: 'Community Leadership'
    },
    {
      id: 3,
      title: 'Best Innovation Project',
      issuer: 'National Tech Symposium',
      date: 'October 2023',
      description: 'Awarded for developing an innovative AI-powered educational platform that enhances personalized learning experiences.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'Top Contributor - Open Source',
      issuer: 'DevCommunity India',
      date: 'September 2023',
      description: 'Recognized as a top contributor to open-source projects with significant impact on developer community.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      category: 'Open Source'
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'hackathons':
        return hackathons;
      case 'certifications':
        return certifications;
      case 'Publications':
        return Publications;
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
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Hackathons Participated</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-success mb-2">5</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-3xl font-bold text-warning mb-2">12</div>
            <div className="text-sm text-muted-foreground">Recognition Received</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;