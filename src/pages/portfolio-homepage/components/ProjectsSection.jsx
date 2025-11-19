import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import ProjectDetailModal from '../../../components/ui/ProjectDetailModal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectFilters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'ai', label: 'AI/ML', icon: 'Brain' },
    { id: 'web', label: 'Web Apps', icon: 'Globe' },
    { id: 'extensions', label: 'Extensions', icon: 'Puzzle' }
  ];

  const projects = [
    {
      id: 1,
      title: 'CodeLixer',
      category: 'extensions',
      description: 'A powerful VS Code extension that enhances developer productivity with AI-powered code suggestions and automated refactoring capabilities.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      technologies: ['TypeScript', 'VS Code API', 'Node.js', 'AI/ML'],
      githubUrl: 'https://github.com/swarajladke/codelixer',
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.codelixer',
      status: 'Live',
      features: [
        'AI-powered code completion',
        'Automated refactoring suggestions',
        'Code quality analysis',
        'Multi-language support',
        'Real-time error detection',
        'Performance optimization hints'
      ],
      stats: {
        Installs: 'Growing',
        rating: '4.8/5',
        users: 'Growing',
        updates: '7+'
      }
    },
    {
      id: 2,
      title: 'Elora',
      category: 'web',
      description: 'Elora is a next-gen dynamic glowing theme engine for Visual Studio Code. It brings your editor to life with real-time glowing animations that respond to your current theme color — adding an aesthetic and immersive coding experience.',
      image: 'https://www.gitkraken.com/wp-content/uploads/2024/04/Best-VS-Code-themes-hero-2.png',
      technologies: ['VS-code-api', 'Javascript', 'Typescript', 'Stripe API'],
      githubUrl: 'https://github.com/swarajladke/elora',
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.elora',
      status: 'Live',
      features: [
        'Glowing UI that adapts to your current Elora theme color',
        'Animated glowing borders inside a webview (simulating file explorer glow)',
        'Product catalog',
        'Smooth animations with customizable colors',
        'Designed to match your theme dynamically (e.g. Pink glow for Elora Pink)',
      
      ],
      stats: {
        users: 'Growing',
        Activation: '8ms',
        version: '0.0.4',
        performance: '95/100'
      }
    },
    {
      id: 3,
      title: 'EduTwin',
      category: 'ai',
      description: 'AI-powered educational platform that creates personalized learning experiences through adaptive content delivery and intelligent tutoring systems.',
      image: 'https://knowledgeworks.org/wp-content/uploads/2023/08/kate-goodman-smart-technologies-covid-19-scaled-1.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      githubUrl: 'https://github.com/swarajladke/edutwin',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'Personalized learning paths',
        'AI-powered content recommendations',
        'Progress tracking',
        'Interactive assessments',
        'Real-time feedback',
        'Multi-modal learning support'
      ],
      stats: {
        students: 'TO be updated',
        courses: 'TO be updated',
        accuracy: 'TO be updated',
        engagement: 'TO be updated'
      }
    },
    {
      id: 4,
      title: 'Agnis AI',
      category: 'ai',
      description: 'Agnis AI is an advanced self-adaptive AI system designed to push beyond the limits of traditional Large Language Models. Its goal is not only to understand and respond, but also to evolve over time, adapt its behavior, and operate as a multi-capability intelligence layer..',
      image: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/VFLt5vHV7aCoLrLGjP9Qwm.jpg',
      technologies: ['To be updated'],
      githubUrl: 'https://github.com/swarajladke/ai-portfolio-builder',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'Multi-capability intelligence',
        'Self-adaptive learning',
        'Context-aware responses',
        'Real-time data integration',
        'Scalable architecture',
        'Continuous improvement'
      ],
      stats: {
        capabilities: 'To be updated',
        performance: 'To be updated',
        adaptability: 'To be updated',
        userEngagement: 'To be updated'
      }
    },
    {
      id: 5,
      title: 'Emoify',
      category: 'web',
      description: 'An AI-powered music recommender that detects your real-time emotions via webcam using CNN + OpenCV and instantly curates YouTube songs to match your mood.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2wTRoc3vW-YSoCJ9_P7SQwqSitIXgZ9ZfixBOs61XecUJJShxTvLJnRKfR8B41sp-Xw&usqp=CAU',
      technologies: ['TensorFlow', 'OpenCV', 'Flask', 'YouTube API', 'React','keras'],
      githubUrl: 'https://github.com/swarajladke/emoify',
      liveUrl: 'To be updated',
      status: 'Completed',
      features: [
        'Real-time emotion detection',
        'Personalized music recommendations',
        'YouTube integration',
        'User-friendly interface',
        'Multi-platform support'
      ],
      stats: {
        averageResponseTime: '1-2 seconds',
        accuracy: '85% emotion detection accuracy (based on test cases)',
        users: 'Growing',
        playlists: '100+ curated playlists'
      }
    },
    {
      id: 6,
      title: 'Casper-(Content Repurposing with AI)',
      category: 'AI',
      description: 'Turn any video into multiple content formats instantly! 🎬Generate shorts, captions, blog posts, hashtags, and social media threads in seconds.',
      image: 'https://cms.rightblogger.com/wp-content/uploads/2024/05/repurposing-content-with-ai.jpg',
      technologies: ['JavaScript', 'python', 'React', 'Webpack','FastAPI','AI/ML',],
      githubUrl: 'To be updated',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'Video-to-text transcription',
        'Multi-format content generation',
        'AI-powered insights',
        'User-friendly interface',
        'Customizable settings',
        'Multi-format export',
      ],
      stats: {
        averageSpeed: 'Under 30 seconds per video',
        accuracy: 'To be updated',
        modes: 'Multiple (text, video, audio)'
}
    },

    {
      id: 7,
      title: 'AgilePulse',
      category: 'AI',
      description: 'AgilePulse is an AI-driven Agile automation tool that acts as a virtual Scrum Master for modern development teams. It streamlines Agile ceremonies, automates sprint tracking, and provides intelligent insights to keep teams aligned and productive.',
      image: 'https://www.xavor.com/wp-content/uploads/2023/04/Agile-Software-Development-%E2%80%93-A-Comprehensive-Overview-min.webp',
      technologies: ['React18','vite5','react router v6','Python','Redux','Axios','JWT','AI/ML','Docker'],
      githubUrl: 'To be updated',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'AI Scrum Master - Facilitates stand-ups, retrospectives, and sprint planning',
        'Sprint Intelligence - Auto-generated burndown charts, velocity, and workload balance',
        'Task Automation - AI-powered task prioritization and assignment',
        'Real-time Insights - Predictive analytics for sprint success and risk mitigation',
        'Collaboration Hub - Centralized communication and document sharing',
        ' Customizable Workflows - Tailor Agile processes to team needs',
      ],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
}
    
    },

     {
      id: 8,
      title: 'Agnis-IDE',
      category: 'AI',
      description: 'An AI-powered IDE that can autonomously code, debug, test, and deploy applications with minimal human guidance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR_T5avUt4e9RN0_0OzObnQINutPmBVohXhDiLODKHs3J8rDPeh_b4jwuRIhGZL235BU&usqp=CAU',
      technologies: ['Electron','monaco editor','LLMs-To be updated','Agent Orchestration-To be updated','Memory Management-To be updated'],
      githubUrl: 'To be updated',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'AI Code Generation → Build modules & apps from plain English.',
        'AI Debugging → Identify & fix bugs autonomously.',
        'AI Testing → Generate & run test cases automatically.',
        'AI Deployment → One-click deploy to cloud platforms.',
        'Real-time Insights - Predictive analytics for sprint success and risk mitigation',
        'Collaboration Hub - Centralized communication and document sharing'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
}
    
    },

    {
      id: 9,
      title: 'AirWrite',
      category: 'AI',
      description: 'AirWrite is a gesture-based writing tool built using OpenCV, allowing users to draw and write in the air using hand-tracking. The system converts finger movement into real-time digital ink on a virtual canvas.',
      image: 'https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2F59A537CF942F46C1B18B8E4505058A2E%2F8e0e62a6f709a54d23e92b9847059014%2FAirWriting-WHITELC.jpg&w=3840&q=75',
      technologies: ['python','numpy','opencv','mediapipe','gesture recognition','virtual canvas'],
      githubUrl: 'To be updated',
      liveUrl: 'To be updated',
      status: 'completed',
      features: [
        'Gesture-based writing',
        'Real-time digital ink',
        'Virtual canvas',
        'Hand-tracking',
        'OpenCV',
        'MediaPipe',
        'Gesture recognition',
        'Virtual canvas'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
}
    
    },

    {
      id: 10,
      title: 'EchoDesk',
      category: 'AI',
      description: 'EchoDesk is a voice-controlled Windows automation system that lets you open apps, manage files, navigate the OS, and perform complex tasks hands-free. It combines speech recognition, intent parsing, and system-level automation to create a seamless, AI-powered desktop assistant.',
      image: 'https://www.medicaltranscriptionservicecompany.com/wp-content/uploads/2023/03/5-ways-voice-recognition-is-improving-healthcare.jpg',
      technologies: ['python','speech recognition','intent parsing','system-level automation','pyautogui','pyaudio','opencv','NLU model','pyttsx3'],
      githubUrl: 'To be updated',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'Voice-controlled automation',
        'App opening',
        'File management',
        'OS navigation',
        'Complex task execution',
        'Speech recognition',
        'Intent parsing',
        'System-level automation'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
}
    
    }

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project, event) => {
    if (isAnimating) return;
    const card = event?.currentTarget;
    if (!card) {
      setSelectedProject(project);
      setIsModalOpen(true);
      return;
    }

    setIsAnimating(true);
    card.style.pointerEvents = 'none';

    const rect = card.getBoundingClientRect();
    const clone = card.cloneNode(true);

    // Style the clone for a floating animation to center
    const computed = window.getComputedStyle(card);
    clone.style.position = 'fixed';
    clone.style.left = `${rect.left}px`;
    clone.style.top = `${rect.top}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.margin = '0';
    clone.style.zIndex = '9999';
    clone.style.pointerEvents = 'none';
    clone.style.borderRadius = computed.borderRadius || '16px';
    clone.style.backfaceVisibility = 'visible';
    clone.style.transformStyle = 'preserve-3d';
    clone.style.transformOrigin = '50% 50%';
    document.body.appendChild(clone);

    // Compute delta to center of viewport
    const targetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const targetY = window.innerHeight / 2 - (rect.top + rect.height / 2);

    // Use CSS variables with keyframes to ensure animationend fires
    clone.style.setProperty('--tx', `${targetX}px`);
    clone.style.setProperty('--ty', `${targetY}px`);
    clone.style.animation = 'moveFlipCenter 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';

    let done = false;
    const cleanupAndOpen = () => {
      if (done) return;
      done = true;
      clone.removeEventListener('animationend', onEnd);
      if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
      card.style.pointerEvents = '';
      setIsAnimating(false);
      setSelectedProject(project);
      setIsModalOpen(true);
    };

    const onEnd = (e) => {
      if (e.target !== clone) return;
      cleanupAndOpen();
    };

    const fallback = setTimeout(cleanupAndOpen, 1300);

    clone.addEventListener('animationend', onEnd);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'text-success bg-success/10 border-success/20';
      case 'In Development': return 'text-warning bg-warning/10 border-warning/20';
      case 'Completed': return 'text-primary bg-primary/10 border-primary/20';

      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <>
      <section id="projects" className="section-padding section-margin bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading animate-underline">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions built with cutting-edge technologies
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                }`}
              >
                <Icon name={filter.icon} size={18} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-transparent rounded-2xl border border-transparent overflow-hidden transition-all duration-300 group cursor-pointer animate-fade-in shadow-lg shadow-black/30 hover:shadow-cyan-500/40 hover:border-white/20 hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleProjectClick(project, e)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Glow overlay */}
                  <div className="absolute inset-0 rounded-t-2xl ring-0 group-hover:ring-2 group-hover:ring-cyan-300/40 transition-all duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    {project.githubUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        <Icon name="Github" size={16} />
                        <span className="text-sm">Code</span>
                      </button>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Icon name="ExternalLink" size={16} />
                        <span className="text-sm">Live</span>
                      </button>
                    )}
                    {project.marketplaceUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.marketplaceUrl, '_blank');
                        }}
                        className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        <Icon name="Store" size={16} />
                        <span className="text-sm">Store</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.open('https://github.com/swarajladke', '_blank')}
              className="px-8 py-4 bg-transparent border border-transparent text-foreground rounded-xl font-semibold transition-all duration-300 btn-glow flex items-center space-x-2 mx-auto shadow-lg shadow-black/30 hover:shadow-cyan-500/40 hover:border-white/20 hover:-translate-y-0.5"
            >
              <Icon name="Github" size={20} />
              <span>View All Projects on GitHub</span>
              <Icon name="ExternalLink" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsSection;