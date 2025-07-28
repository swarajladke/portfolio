import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProjectHeader from './components/ProjectHeader';
import ProjectHero from './components/ProjectHero';
import ProjectDetails from './components/ProjectDetails';
import ProjectStats from './components/ProjectStats';
import ProjectActions from './components/ProjectActions';
import ProjectTimeline from './components/ProjectTimeline';

const ProjectDetailModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState(null);

  // Mock project data - in real app this would come from props or API
  const mockProjects = {
    'codelixer': {
      id: 'codelixer',
      title: 'CodeLixer',
      category: 'VS code Extension',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop'
      ],
      description: `CodeLixer is a comprehensive code analysis and optimization platform designed to help developers write cleaner, more efficient code. The platform integrates advanced static analysis tools with real-time suggestions and automated refactoring capabilities.\n\nBuilt with modern web technologies, CodeLixer provides an intuitive interface for code review, performance analysis, and collaborative development workflows.`,
      challenge: "Developers often struggle with maintaining code quality across large projects, leading to technical debt and reduced productivity. Existing tools were fragmented and didn't provide comprehensive insights.",
      solution: "Created an integrated platform that combines multiple analysis engines with AI-powered suggestions, providing developers with actionable insights and automated fixes in a single, user-friendly interface.",
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Socket.io'],
      features: [
        'Real-time code analysis and suggestions',
        'Automated refactoring capabilities',
        'Performance optimization recommendations',
        'Collaborative code review workflows',
        'Integration with popular IDEs',
        'Custom rule configuration',
        'Detailed analytics and reporting',
        'Multi-language support'
      ],
      stats: {
        linesOfCode: '15K+',
        components: '45+',
        features: '25+',
        testCoverage: '92%',
        users: '500+',
        stars: '128'
      },
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.codelixer&ssr=false',
      githubUrl: 'https://github.com/swarajladke/codelixer',
      marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.codelixer',
      demoVideo: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.codelixer',
      timeline: [
        {
          phase: "Research & Planning",
          description: "Market research, competitor analysis, and technical architecture design",
          date: "Jan 2024",
          status: "completed",
          deliverables: ["Technical Specification", "UI/UX Mockups", "Architecture Diagram"]
        },
        {
          phase: "Core Development",
          description: "Implementation of code analysis engine and web interface",
          date: "Feb-Apr 2024",
          status: "completed",
          deliverables: ["Analysis Engine", "Web Dashboard", "API Layer"]
        },
        {
          phase: "Integration & Testing",
          description: "IDE integrations, comprehensive testing, and performance optimization",
          date: "May 2024",
          status: "completed",
          deliverables: ["VS Code Extension", "Test Suite", "Performance Report"]
        },
        {
          phase: "Launch & Deployment",
          description: "Production deployment, marketplace publishing, and user onboarding",
          date: "Jun 2024",
          status: "completed",
          deliverables: ["Production Release", "Marketplace Listing", "Documentation"]
        }
      ]
    },
    'elora': {
      id: 'elora',
      title: 'Elora AI Assistant',
      category: 'AI/ML',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop'
      ],
      description: `Elora is an intelligent AI assistant designed to streamline productivity and enhance user workflows through natural language processing and machine learning capabilities.\n\nThe platform combines advanced NLP models with intuitive user interfaces to provide personalized assistance across various domains including content creation, data analysis, and task automation.`,
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'OpenAI API'],
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Multi-modal input support',
        'Personalized recommendations',
        'Integration with popular tools',
        'Real-time collaboration'
      ],
      stats: {
        accuracy: '94%',
        users: '1.2K+',
        queries: '50K+',
        uptime: '99.9%'
      },
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=swarajladke.elora&ssr=false',
      githubUrl: 'https://github.com/swarajladke/elora-ai'
    },
    'edutwin': {
      id: 'edutwin',
      title: 'EduTwin Learning Platform',
      category: 'Education',
      status: 'in-progress',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      description: `EduTwin is an AI-powered educational platform that creates personalized learning experiences through adaptive content delivery and intelligent tutoring systems.\n\nThe platform leverages machine learning algorithms to understand individual learning patterns and provide customized educational pathways for optimal knowledge retention.`,
      technologies: ['React', 'Python', 'Django', 'TensorFlow', 'PostgreSQL', 'Redis', 'WebRTC'],
      features: [
        'Adaptive learning algorithms',
        'Real-time progress tracking',
        'Interactive virtual classrooms',
        'AI-powered content recommendations',
        'Collaborative learning tools',
        'Assessment automation'
      ],
      stats: {
        students: '800+',
        courses: '25+',
        completion: '87%',
        satisfaction: '4.8/5'
      },
      githubUrl: 'https://github.com/swarajladke/edutwin'
    }
  };

  useEffect(() => {
    // Get project ID from URL params or state
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id') || location.state?.projectId || 'codelixer';
    
    const selectedProject = mockProjects[projectId] || mockProjects['codelixer'];
    setProject(selectedProject);
  }, [location]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    navigate('/portfolio-homepage');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!project) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen flex items-start justify-center p-4 py-8">
        <div 
          className="relative w-full max-w-5xl bg-card rounded-2xl border border-border shadow-elevation-3 animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Project Header */}
          <ProjectHeader project={project} onClose={handleClose} />
          
          {/* Modal Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {/* Project Hero Section */}
            <ProjectHero project={project} />
            
            {/* Project Details */}
            <ProjectDetails project={project} />
            
            {/* Project Stats */}
            <ProjectStats project={project} />
            
            {/* Project Timeline */}
            <ProjectTimeline project={project} />
            
            {/* Action Buttons */}
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;