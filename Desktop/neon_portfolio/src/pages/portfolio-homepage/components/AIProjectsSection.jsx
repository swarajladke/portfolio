import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AIProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const aiProjects = [
    {
      id: 1,
      title: 'AI Digital Twin for Virtual Classrooms',
      category: 'Research & Development',
      status: 'In Progress',
      description: 'Developing an AI-powered digital twin system that creates virtual representations of physical classrooms, enabling immersive remote learning experiences with real-time interaction capabilities.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'WebRTC', 'Three.js'],
      keyFeatures: [
        'Real-time 3D classroom reconstruction',
        'AI-powered gesture recognition',
        'Virtual presence simulation',
        'Adaptive learning environment',
        'Multi-user synchronization',
        'Performance analytics'
      ],
      challenges: [
        'Low-latency real-time processing',
        'Cross-platform compatibility',
        'Scalable architecture design',
        'Privacy and security concerns'
      ],
      impact: 'Potential to revolutionize remote education by providing immersive learning experiences that closely mimic physical classroom interactions.',
      publications: [
        'IEEE Conference on Virtual Reality (Submitted)',
        'ACM Digital Learning Symposium (In Review)'
      ],
      metrics: {
        accuracy: '94%',
        latency: '<100ms',
        users: '50+ Beta',
        satisfaction: '4.8/5'
      }
    },
    {
      id: 2,
      title: 'Autonomous Drone Swarm Coordination',
      category: 'Robotics & AI',
      status: 'Research Phase',
      description: 'Research project focused on developing intelligent coordination algorithms for autonomous drone swarms using reinforcement learning and distributed computing principles.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      technologies: ['Python', 'PyTorch', 'ROS', 'OpenCV', 'Reinforcement Learning'],
      keyFeatures: [
        'Distributed decision making',
        'Collision avoidance algorithms',
        'Dynamic task allocation',
        'Real-time communication protocols',
        'Adaptive formation control',
        'Emergency response systems'
      ],
      challenges: [
        'Complex multi-agent coordination',
        'Real-time decision making',
        'Communication reliability',
        'Safety and fail-safe mechanisms'
      ],
      impact: 'Applications in search and rescue operations, environmental monitoring, and large-scale surveillance systems.',
      publications: [
        'Robotics and Autonomous Systems Journal (Draft)',
        'International Conference on Robotics (Planned)'
      ],
      metrics: {
        drones: '10+ Swarm',
        efficiency: '87%',
        response: '<2s',
        reliability: '99.2%'
      }
    },
    {
      id: 3,
      title: 'Neural Style Transfer for Real-time Video',
      category: 'Computer Vision',
      status: 'Completed',
      description: 'Optimized neural style transfer algorithms for real-time video processing, enabling artistic style application to live video streams with minimal computational overhead.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'CUDA', 'WebGL'],
      keyFeatures: [
        'Real-time style transfer',
        'Multiple style blending',
        'GPU acceleration',
        'Mobile optimization',
        'Custom style training',
        'Batch processing support'
      ],
      challenges: [
        'Performance optimization',
        'Memory management',
        'Quality preservation',
        'Cross-device compatibility'
      ],
      impact: 'Enables creative content generation for social media, live streaming, and digital art applications.',
      publications: [
        'Computer Vision and Pattern Recognition (Published)',
        'Journal of Visual Computing (Accepted)'
      ],
      metrics: {
        fps: '30+ FPS',
        quality: '95%',
        latency: '<50ms',
        devices: '15+ Tested'
      }
    },
    {
      id: 4,
      title: 'Predictive Healthcare Analytics Platform',
      category: 'Healthcare AI',
      status: 'Prototype',
      description: 'AI-driven platform for predictive healthcare analytics, utilizing machine learning models to forecast patient outcomes and optimize treatment plans.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI', 'PostgreSQL'],
      keyFeatures: [
        'Patient outcome prediction',
        'Treatment optimization',
        'Risk assessment algorithms',
        'Data visualization dashboard',
        'HIPAA compliance',
        'Integration APIs'
      ],
      challenges: [
        'Data privacy and security',
        'Model interpretability',
        'Regulatory compliance',
        'Clinical validation'
      ],
      impact: 'Potential to improve patient outcomes and reduce healthcare costs through predictive insights.',
      publications: [
        'Journal of Medical Internet Research (Under Review)',
        'Healthcare AI Conference (Accepted)'
      ],
      metrics: {
        accuracy: '92%',
        patients: '1K+ Records',
        predictions: '5K+',
        validation: '89%'
      }
    }
  ];

  const toggleExpanded = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-success bg-success/10 border-success/20';
      case 'In Progress': return 'text-primary bg-primary/10 border-primary/20';
      case 'Research Phase': return 'text-warning bg-warning/10 border-warning/20';
      case 'Prototype': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section id="ai-projects" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 gradient-text">AI Research & Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of artificial intelligence through innovative research and practical applications
          </p>
        </div>

        {/* AI Projects List */}
        <div className="space-y-8">
          {aiProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <Icon name="Brain" size={20} color="currentColor" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Icon 
                        name={expandedProject === project.id ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="p-6 animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="space-y-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl border border-border"
                      />
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-muted/50 rounded-xl border border-border">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="Code" size={18} className="mr-2 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="CheckCircle" size={18} className="mr-2 text-primary" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="AlertTriangle" size={18} className="mr-2 text-warning" />
                          Technical Challenges
                        </h4>
                        <div className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Icon name="Zap" size={14} className="text-warning flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact & Publications */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="Target" size={18} className="mr-2 text-accent" />
                          Impact & Applications
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="BookOpen" size={18} className="mr-2 text-accent" />
                          Publications & Research
                        </h4>
                        <div className="space-y-2">
                          {project.publications.map((pub, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Icon name="FileText" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{pub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <Icon name="Lightbulb" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">Current Research Interests</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                'Computer Vision',
                'Natural Language Processing',
                'Reinforcement Learning',
                'Distributed Systems',
                'Edge Computing',
                'Human-AI Interaction'
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {interest}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              Always exploring new frontiers in AI and machine learning. Open to collaboration on innovative research projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;