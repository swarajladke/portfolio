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
      title: 'ARM AI Developer Challenge  2025',
      position: 'To be updated',
      date: 'Dec 4 2025',
      category: 'AI/ML Track',
      description: 'Developing an AI-powered solution for smart city traffic management using computer vision and predictive analytics.',
      image: 'https://www.arm.com/blogs/blueprint/wp-content/uploads/2023/08/Arm_Hero_Cortex_2020.jpg',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'flask'],
      prize: '$15,000',
      team: 'solo',
      participants: '500+'
    },
    {
      id: 2,
      title: 'E-Techh Hacks 2025',
      position: 'To be updated',
      date: 'Dec 20 2025',
      category: 'Education',
      description: 'Building a Python-based system that analyzes student performance data to predict weak areas using scikit-learn models..',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/809/270/datas/original.jpeg',
      technologies: ['Python', 'Flask', 'Pandas', 'scikit-learn', 'MongoDB'],
      prize: 'Non-cash prizes',
      team: 'solo',
      participants: '100+'
    },
    {
      id: 3,
      title: 'PyTorch Dendritic Optimization Hackathon 2025',
      position: 'To be updated',
      date: 'Oct to jan 2026',
      category: 'AI/ML Track',
      description: 'Experimenting with Dendritic Optimization — an AI framework inspired by how brain dendrites learn and adapt.',
      image: 'https://codewave.com/insights/wp-content/uploads/2025/02/Understanding-Machine-Learning-Frameworks-for-Model-Development.png',
      technologies: [ 'Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Flask (API layer)', 'Streamlit (dashboard)'],
      prize: '$18,500',
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
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle',
      date: 'Oct 2025',
      credentialId: '102407713APEX24CDOCP',
      image: 'https://images.surferseo.art/b775813f-af1a-4f57-a2b8-99484022e6ba.jpeg',
      skills: [ 'Oracle APEX', 'SQL', 'PL/SQL', 'Oracle Cloud Infrastructure (OCI)', 'Low-Code Development', 'Application Deployment'],
      description: 'Earned certification demonstrating advanced proficiency in Oracle Application Express (APEX) and Oracle Cloud Infrastructure (OCI) for developing, securing, and deploying enterprise-grade, low-code web applications.',
      verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=7CC5C939C41DCF5E14FB14AA73C28227B67D6965287DE5E5BB1C743A7FE7B21F'
    },
    {
      id: 4,
      title: 'Web Development in React.js',
      issuer: 'Coursera',
      date: 'July 2025',
      credentialId: '3ZF9EFXTT23Q',
      image: 'https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75',
      skills: [ 'React', 'JavaScript', 'Web Development', 'Frontend Development'],
      description: 'Professional certificate covering advanced web development concepts using React.js, including state management, routing, and performance optimization.',
      verifyUrl: 'https://coursera.org/verify/3ZF9EFXTT23Q'
    },
    {
      id: 5,
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
      id: 6,
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
      id: 2,
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      date: 'August 2025',
      credentialId: '102407713OCI25GAIOCP',
      image: 'https://blogs.cloudare.in/wp-content/uploads/2025/01/4765971.jpg',
      skills: [ 'Generative AI', 'Oracle Cloud', 'AI Models', 'AI Integration'],
      description: 'Certification validating expertise in generative AI concepts, Oracle Cloud Infrastructure, and the ability to design and deploy AI-driven solutions.',
      verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=90D1726627922C232F12843FBCFC54577E5DFE3C7E10B0C29FA5726D815F110E'
    },

    {
      id: 7,
      title: 'Certificate of publication of research paper (AI Augmented DigitalTwin for personalized learning in virtual classrooms',
      issuer: 'IJSCI',
      date: 'October 2025',
      credentialId: '323390829OCI25AICFA',
      image: 'https://wallpapers.com/images/featured/cloud-storage-background-qnc7mnsd9pjxtquw.jpg',
      skills: [ 'AI','Machine learning','LLMs','deep learning','FastAPI','RNNs, CNNs LSTMs'],
      description: 'Oracle-certified in AI and ML fundamentals with hands-on knowledge of Oracle Cloud Infrastructure and intelligent solution development.)',
      verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9311F55024E089FCFD613862A051C576F4D325AAD6E4D6E80A3981B037041C1'

    },

    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'October 2025',
      credentialId: '518769296831',
      image: 'https://knowledgeworks.org/wp-content/uploads/2023/08/kate-goodman-smart-technologies-covid-19-scaled-1.jpg',
      skills: [ 'Python','tesorflow','reactjs','tailwind','FastAPI','Flask'],
      description: 'Certification of publication of research paper of EduTwin(AI Augmented digital twin for personalized learning in virtual classrooms.).',
      verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9311F55024E089FCFD613862A051C576F4D325AAD6E4D6E80A3981B037041C1'

    }
  ];

  const recognitions = [
    {
      id: 1,
      title: 'Elora-Dynamic glowing VS code theme engine',
      issuer: 'GitHub-VS code themes.com(open source community)',
      date: 'July 2025',
      description: 'Developed a dynamic glowing VS Code theme engine that adapts to user preferences and enhances coding experience with customizable glow effects.',
      image: 'https://www.gitkraken.com/wp-content/uploads/2024/04/Best-VS-Code-themes-hero-2.png',
      category: 'VS Code Theme Development',
      View:'https://vscodethemes.com/e/swarajladke.elora/elora-cyan'
    },

    {
      id: 2,
      title: 'Oracle certified generative AI professional',
      issuer: 'Oracle',
      date: 'August 2025',
      description: 'Achieved Oracle Cloud Infrastructure 2025 Certified Generative AI Professional certification, demonstrating expertise in generative AI concepts and Oracle Cloud services.',
      image: 'https://revistayume.com/wp-content/uploads/2023/06/Oracle.jpg',
      category: 'Generative AI',
      View:'https://drive.google.com/file/d/1SlMy-_3kPjxeOiHzoJ5ct2bYwsYqC82W/preview'

    },
    
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'October 2025',
      credentialId: '518769296831',
      image: 'https://www.xlncacademy.com/Blogs/admin/postimages/a02ef84e7525c7107f2f989197eb9d05.png',
      category: 'Artificial intelligence',
      skills: [ 'Python','tesorflow','reactjs','tailwind','FastAPI','Flask'],
      description: 'Certification of publication of research paper of EduTwin(AI Augmented digital twin for personalized learning in virtual classrooms.).',
      verifyUrl: 'https://drive.google.com/file/d/1A3tjLQ1v_irC4M2qxDBIcAVJaHmZ-4RW/view?usp=drive_link'
    },

    {
      id: 4,
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle',
      date: 'Oct 2025',
      credentialId: '102407713APEX24CDOCP',
      image: 'https://images.surferseo.art/b775813f-af1a-4f57-a2b8-99484022e6ba.jpeg',
      category: 'Cloud',
      skills: [ 'Oracle APEX', 'SQL', 'PL/SQL', 'Oracle Cloud Infrastructure (OCI)', 'Low-Code Development', 'Application Deployment'],
      description: 'Earned certification demonstrating advanced proficiency in Oracle Application Express (APEX) and Oracle Cloud Infrastructure (OCI) for developing, securing, and deploying enterprise-grade, low-code web applications.',
      verifyUrl: 'https://drive.google.com/file/d/1bl5UUgK63kGLewh_TPPxeunR9kFCJzib/preview'
    },
    
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
    <section id="achievements" className="section-padding section-margin bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading animate-underline">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognitions earned through dedication and innovation
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg ${
                  isActive
                    ? 'bg-transparent border border-white/20 text-primary hover:shadow-cyan-500/40'
                    : 'bg-transparent border border-transparent text-muted-foreground hover:text-foreground hover:border-white/20 hover:shadow-cyan-500/40'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {getTabContent().map((item, index) => (
            <div
              key={item.id}
              className="bg-transparent rounded-2xl border border-transparent overflow-hidden transition-all duration-300 animate-fade-in shadow-lg shadow-black/30 hover:shadow-cyan-500/40 hover:border-white/20 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 rounded-t-2xl ring-0 group-hover:ring-2 group-hover:ring-cyan-300/40 transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
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
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs border border-white/10"
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
                  {item.View && (
                    <button
                      onClick={() => window.open(item.View, '_blank')}
                      className="flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-300"
                    >
                      <Icon name="ExternalLink" size={14} />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-transparent rounded-2xl border border-transparent hover:border-white/20 shadow-lg shadow-black/30 hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Hackathons Participated</div>
          </div>
          <div className="text-center p-6 bg-transparent rounded-2xl border border-transparent hover:border-white/20 shadow-lg shadow-black/30 hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center p-6 bg-transparent rounded-2xl border border-transparent hover:border-white/20 shadow-lg shadow-black/30 hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-success mb-2">2</div>
            <div className="text-sm text-muted-foreground">projects in production</div>
          </div>
          <div className="text-center p-6 bg-transparent rounded-2xl border border-transparent hover:border-white/20 shadow-lg shadow-black/30 hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-warning mb-2">4</div>
            <div className="text-sm text-muted-foreground">Recognition Received</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;