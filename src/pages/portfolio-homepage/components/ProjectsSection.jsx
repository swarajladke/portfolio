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
      title: 'Personal Relationship Manager',
      category: 'ai',
      description: 'An autonomous AI agent built for Activepieces that analyzes Gmail history weekly, identifies fading relationships, scores contact decay, and crafts personalized reconnection drafts referencing past conversations directly in Gmail Drafts.',
      image: 'https://insightscdn.manageengine.com/insights/sites/default/files/media/wp/2025/01/ai-agents.jpg',
      technologies: ['Activepieces', 'Node.js', 'Gmail API', 'Prompt Engineering', 'LLMs'],
      githubUrl: 'https://github.com/swarajladke/personal-relationship-manager-AI-Agent',
      liveUrl: 'https://github.com/swarajladke/personal-relationship-manager-AI-Agent#readme',
      status: 'Live',
      features: [
        'Automated weekly relationship decay analysis',
        'Contextual draft generation referencing prior exchanges',
        'Authentic writing voice calibration',
        'Strict draft-only safety guard (never auto-sends)',
        'Cooldown suppression & priority tracking sheet',
        'Offline verification suite covering 6 edge-case scenarios'
      ],
      stats: {
        frequency: 'Weekly Routine',
        candidates: 'Top 5 Scored',
        safety: 'Zero Auto-Sends',
        scenarios: '6 Verified Tests'
      }
    },
    {
      id: 4,
      title: 'Agnis AI',
      category: 'ai',
      description: 'AGNIS (Autonomous Gated Neural Inference System) is a ground-up attempt to build a biologically-plausible Deep Learning framework. It discards backpropagation in favor of Predictive Coding and SNAP-ATP (Synchronized Aggressive Target Propagation) using local Hebbian updates to solve catastrophic forgetting.',
      image: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/VFLt5vHV7aCoLrLGjP9Qwm.jpg',
      technologies: ['Python', 'PyTorch', 'Predictive Coding', 'Hebbian Learning', 'SNAP-ATP', 'CUDA'],
      githubUrl: 'https://github.com/swarajladke/Neural-Networks',
      liveUrl: 'To be updated',
      status: 'In Development',
      features: [
        'Backprop-free Hebbian Learning',
        'Iterative Settlement Mechanism',
        'Synaptic Homeostasis & Clamping',
        'Spectral Stable Recurrence',
        'Zero-Forgetting Continual Learning',
        'Thermal Guardian Protocol'
      ],
      stats: {
        architecture: 'Predictive Coding',
        training: 'SNAP-ATP Target Propagation',
        retention: '92% Bilingual Retention',
        inference: '40+ Tokens/sec (RTX 3060)'
      }
    },
    {
      id: 5,
      title: 'Emoify',
      category: 'web',
      description: 'An AI-powered music recommender that detects your real-time emotions via webcam using CNN + OpenCV and instantly curates YouTube songs to match your mood.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2wTRoc3vW-YSoCJ9_P7SQwqSitIXgZ9ZfixBOs61XecUJJShxTvLJnRKfR8B41sp-Xw&usqp=CAU',
      technologies: ['TensorFlow', 'OpenCV', 'Flask', 'YouTube API', 'React', 'keras'],
      githubUrl: 'https://github.com/swarajladke/emoify',
      liveUrl: 'https://huggingface.co/spaces/swaraj020/Emoify',
      status: 'Live',
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
      }
    },
    {
      id: 6,
      title: 'Recasta-Studios(Content Repurposing with AI)',
      category: 'AI',
      description: 'Turn any video into multiple content formats instantly! 🎬Generate shorts, captions, blog posts, hashtags, and social media threads in seconds.',
      image: 'https://cms.rightblogger.com/wp-content/uploads/2024/05/repurposing-content-with-ai.jpg',
      technologies: ['JavaScript', 'python', 'React', 'Webpack', 'FastAPI', 'AI/ML',],
      githubUrl: 'https://github.com/swarajladke/recasta_studios',
      liveUrl: 'https://recastastudios.vercel.app/',
      status: 'Live',
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
        modes: 'Multiple (text, video, audio)',
        update: 'under upgradation to introduce new features'
      }
    },

    {
      id: 7,
      title: 'OrbitSight (OrbitAI)',
      category: 'ai',
      description: 'Neuromorphic event-based Resident Space Object (RSO) detection system developed for the TII OrbitSight Challenge. Detects satellites and debris in LEO/MEO/GEO from telescope event cameras on CPU in real time (<40ms latency) without neural networks, achieving 0.394 test mAP@0.5.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      technologies: ['Python 3.11', 'OpenCV', 'Scikit-Learn', 'Neuromorphic Vision', 'Docker'],
      githubUrl: 'https://github.com/swarajladke/OrbitAI',
      liveUrl: 'https://github.com/swarajladke/OrbitAI#readme',
      status: 'Completed',
      features: [
        'Real-time RSO satellite & debris detection (<40ms compute p99)',
        'Neuromorphic event-stream slicing & 2D count accumulation',
        'Gated multi-pass architecture: Candidate scoring + Window objectness',
        'Sensor-adaptive morphology and continuous static starfield suppression',
        'Dual log-HGBR bounding box regression preserving ranking invariance',
        'Sub-second cold-start CPU-only container with ~1.5 MB model footprint'
      ],
      stats: {
        'mAP@0.5': '0.394 (Test)',
        latency: '<40ms (CPU p99)',
        modelSize: '1.5 MB (No GPU)',
        benchmark: '21 Sequences (TII Challenge)'
      }
    },


    {
      id: 9,
      title: 'AirWrite',
      category: 'AI',
      description: 'AirWrite is a gesture-based writing tool built using OpenCV, allowing users to draw and write in the air using hand-tracking. The system converts finger movement into real-time digital ink on a virtual canvas.',
      image: 'https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2F59A537CF942F46C1B18B8E4505058A2E%2F8e0e62a6f709a54d23e92b9847059014%2FAirWriting-WHITELC.jpg&w=3840&q=75',
      technologies: ['python', 'numpy', 'opencv', 'mediapipe', 'gesture recognition', 'virtual canvas'],
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
      title: 'EchoDesk Voice OS Agent',
      category: 'ai',
      description: 'EchoDesk is a voice-controlled Windows OS assistant with continuous speech listening, low-latency "Jarvis mode" local command routing, multi-step command chaining, and LLM tool-calling fallback for automated desktop workflows.',
      image: 'https://www.medicaltranscriptionservicecompany.com/wp-content/uploads/2023/03/5-ways-voice-recognition-is-improving-healthcare.jpg',
      technologies: ['Python', 'Whisper STT', 'LLM Tool Calling', 'PyAutoGUI', 'Windows SAPI', 'OS Automation'],
      githubUrl: 'https://github.com/swarajladke/EchoDesk',
      liveUrl: 'https://github.com/swarajladke/EchoDesk#readme',
      status: 'Live',
      features: [
        'Fast "Jarvis mode" local command routing',
        'Multi-step command chaining in a single utterance',
        'Continuous Whisper speech recognition with spoken voice replies',
        'App and folder opening with fuzzy matching and alias handling',
        'Workspace autopilot for IDE and developer workflows',
        'LLM tool-calling fallback for arbitrary system tasks'
      ],
      stats: {
        routing: 'Low-latency Jarvis mode',
        stt: 'Whisper STT',
        speech: 'Windows SAPI voice',
        platform: 'Windows Desktop'
      }

    },

    {
      id: 11,
      title: 'Agnis Design Studio',
      category: 'Designing',
      description: 'Agnis Design Studio is a fast, modern UI/UX design and collaboration platform inspired by Figma, built for seamless creation, real-time collaboration, and efficient product design workflows.',
      image: 'https://i.ytimg.com/vi/SIoOS6tFw1Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCIOaYi7Bq1g7RFyqaSrlwL_rtO1w',
      technologies: ['Next.js', 'Tailwind CSS', 'shadcn', 'Fabric.js', 'TypeScript', 'Vercel', 'liveblocks'],
      githubUrl: 'https://github.com/swarajladke/agnis-design-studio',
      liveUrl: 'https://agnis-design-studio.vercel.app/',
      status: 'Live',
      features: [
        'Multi Cursors, Cursor Chat, and Reactions',
        'Real-time collaboration',
        'Design tools',
        'File management',
        'Freeform Drawing',
        'Complex task execution',
        'Uploading Images'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
      }

    },

    {
      id: 12,
      title: 'PREDICTX',
      category: 'Stock-Trading',
      description: 'Stock Market app built with Next.js, Shadcn, Better Auth, and Inngest. Track prices, set alerts, explore insights, manage watchlists, and automate workflows for notifications and analytics.',
      image: 'https://repository-images.githubusercontent.com/143637640/398d0a80-7a48-11ea-8cad-5e9a4e77ba55',
      technologies: ['Next.js', 'Tailwind CSS', 'Better Auth', 'coderabbit', 'TypeScript', 'Vercel', 'shadcn', 'inngest', 'MongoDB', 'Finnhub', 'nodemailer',],
      githubUrl: 'https://github.com/swarajladke/PREDICTX',
      liveUrl: 'https://predictx-eta.vercel.app/',
      status: 'Live',
      features: [
        'Stock Market Dashboard',
        'Stock Price Tracking',
        'Stock Market Insights',
        'Stock Market Analysis',
        'Stock Market News',
        'Stock Market Alerts',
        'Stock Market Watchlists',
        'Stock Market Analytics'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
      }

    },

    {
      id: 13,
      title: 'Agnis-Drive',
      category: 'storage-Database',
      description: 'A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.',
      image: 'https://img.freepik.com/premium-photo/hand-holding-virtual-cloud-icon-black-background-cloud-technology-system-is-computing-sharing-management-uploading-downloading-transferring-information-applications_27634-1477.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Appwrite', 'React 19', 'TypeScript', 'Vercel', 'shadcn'],
      githubUrl: 'https://github.com/swarajladke/agnis_drive',
      liveUrl: 'https://agnis-drive.vercel.app/',
      status: 'Live',
      features: [
        'User Authentication with Appwrite',
        'Storage Dashboard',
        'File Storage',
        'File Share',
        'Database Management',
        'Storage Analysis',
        'Storage News',
        'Storage Alerts',
        'Storage Watchlists',
        'Storage Analytics'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
      }

    },
    {
      id: 14,
      title: 'Live-chat-webapp',
      category: 'Chat-App',
      description: 'A real-time chat application built with Next.js and convex, featuring instant messaging, user authentication, and real-time updates.',
      image: 'https://files.ably.io/ghost/prod/2023/06/the-ultimate-guide-to-chat-app-architecture.png',
      technologies: ['Next.js', 'Tailwind CSS', 'convex', 'React 19', 'TypeScript', 'Vercel', 'shadcn'],
      githubUrl: 'https://github.com/swarajladke/live-chat-webapp.',
      liveUrl: 'https://live-chat-webapp-xi.vercel.app/',
      status: 'Live',
      features: [
        'Real-time messaging',
        'User Authentication',
        'Real-time updates',
        'Message Timestamps',
        'Online/Offline Status',
        'Smart Auto-Scroll'],
      stats: {
        averageSpeed: ' To be updated',
        accuracy: 'To be updated'
      }

    },
    {
      id: 15,
      title: 'HireFlow AI',
      category: 'ai',
      description: 'An AI-driven automated recruitment ecosystem. Replaces manual screening with an AI-powered ATS, featuring customized MCQ assessments, an AI behavioral interview module, and a real-time coding challenge environment.',
      image: 'assets/images/hireflow-ai.png',
      technologies: ['React.js', 'Vite', 'Flask', 'SQLAlchemy', 'JWT', 'Brevo API', 'AI/ML'],
      githubUrl: 'https://github.com/swarajladke/Automated-Recruitment-System',
      liveUrl: 'To be updated',
      status: 'Completed',
      features: [
        'AI-ATS Resume Screening',
        'Custom MCQ Assessments',
        'Voice/Video AI Behavioral Interview',
        'Real-time Coding Challenge',
        'HR Admin Command Center',
        'Visual Recruitment Funnel'
      ],
      stats: {
        modules: '3 Assessment Types',
        automation: '100% Automated Screening'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category?.toLowerCase() === activeFilter.toLowerCase());

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
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${activeFilter === filter.id
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