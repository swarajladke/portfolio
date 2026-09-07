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
    'personal-relationship-manager': {
      id: 'personal-relationship-manager',
      title: 'Personal Relationship Manager (AI Agent)',
      category: 'AI / Automation',
      status: 'Live',
      image: 'https://insightscdn.manageengine.com/insights/sites/default/files/media/wp/2025/01/ai-agents.jpg',
      description: `Personal Relationship Manager is an autonomous AI agent built for Activepieces that reads your Gmail history weekly, identifies relationships that are fading and worth reviving, and writes each a personal email draft in your authentic voice referencing real past exchanges.\n\nIt features 5 custom-tested Code steps, synthetic mailbox verification across 6 distinct scenarios, bot noise filtering, cooldown suppression, and a strict safety design that never auto-sends emails.`,
      technologies: ['Activepieces', 'Node.js', 'Gmail API', 'Prompt Engineering', 'LLMs', 'Workflow Automation'],
      features: [
        'Automated weekly relationship decay analysis',
        'Contextual draft generation referencing prior exchanges',
        'Authentic writing voice calibration',
        'Strict draft-only safety guard (never auto-sends)',
        'Cooldown suppression & priority tracking sheet',
        'Offline verification suite covering 6 edge-case scenarios'
      ],
      stats: {
        frequency: 'Weekly Schedule',
        candidates: 'Top 5 Reconnections',
        safety: '100% Draft-Only',
        accuracy: '6 Verified Scenarios'
      },
      githubUrl: 'https://github.com/swarajladke/personal-relationship-manager-AI-Agent',
      liveUrl: 'https://github.com/swarajladke/personal-relationship-manager-AI-Agent#readme'
    },
    'orbitsight': {
      id: 'orbitsight',
      title: 'OrbitSight (OrbitAI) — Neuromorphic Event-Based RSO Detection',
      category: 'AI / Computer Vision',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      description: `OrbitSight detects resident space objects (RSOs) — satellites and orbital debris in LEO, MEO and GEO — in neuromorphic event-camera recordings from telescope observations.\n\nDeveloped for the TII OrbitSight Challenge (Propulsion and Space Research Center, Abu Dhabi), the system runs on CPU fully offline with no neural network, achieving a test mAP@0.5 of 0.394 with under 40ms compute latency and a model footprint of only ~1.5 MB.`,
      technologies: ['Python 3.11', 'OpenCV', 'Scikit-Learn (HistGradientBoosting)', 'Neuromorphic Vision', 'Docker', 'Event Cameras'],
      features: [
        'Real-time resident space object (RSO) detection (<40ms compute p99)',
        'Neuromorphic event-stream slicing & 2D count accumulation',
        'Gated multi-pass architecture: Candidate scoring + Window objectness',
        'Sensor-adaptive morphology and continuous static starfield suppression',
        'Dual log-HGBR bounding box regression preserving bit-for-bit ranking invariance',
        'Sub-second cold-start CPU-only container with ~1.5 MB weight'
      ],
      stats: {
        'mAP@0.5': '0.394 (Test)',
        latency: '<40ms (CPU p99)',
        modelSize: '1.5 MB (No GPU)',
        benchmark: '21 Sequences (TII Challenge)'
      },
      githubUrl: 'https://github.com/swarajladke/OrbitAI',
      liveUrl: 'https://github.com/swarajladke/OrbitAI#readme'
    },
    'echodesk': {
      id: 'echodesk',
      title: 'EchoDesk Voice OS Agent',
      category: 'AI / Desktop Automation',
      status: 'Live',
      image: 'https://www.medicaltranscriptionservicecompany.com/wp-content/uploads/2023/03/5-ways-voice-recognition-is-improving-healthcare.jpg',
      description: `EchoDesk is a Windows voice-controlled OS assistant that listens continuously, converts speech to text using Whisper, runs fast local command handlers first in Jarvis mode, and falls back to LLM tool-calling for general tasks.\n\nIt features multi-step utterance command chaining, browser follow-up context across tabs, app/folder fuzzy matching, workspace autopilot for modern IDE flows, and natural spoken replies via Windows SAPI.`,
      technologies: ['Python', 'Whisper STT', 'LLM Tool Calling', 'PyAutoGUI', 'Windows SAPI', 'OpenRouter API', 'Gemini API'],
      features: [
        'Fast "Jarvis mode" command routing',
        'Multi-step command chaining in one utterance',
        'Browser follow-up context in the same tab',
        'App and folder opening with fuzzy matching and alias handling',
        'Workspace autopilot for IDE and developer workflows',
        'Reminder scheduling, session memory queries, and spoken feedback'
      ],
      stats: {
        routing: 'Low-latency Jarvis mode',
        stt: 'Whisper STT',
        speech: 'Windows SAPI voice',
        platform: 'Windows Desktop'
      },
      githubUrl: 'https://github.com/swarajladke/EchoDesk',
      liveUrl: 'https://github.com/swarajladke/EchoDesk#readme'
    },
    'agnis-ai': {
      id: 'agnis-ai',
      title: 'Agnis AI (Neural Architecture)',
      category: 'Deep Learning / Neural Architecture',
      status: 'In Development',
      image: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/VFLt5vHV7aCoLrLGjP9Qwm.jpg',
      description: `AGNIS (Autonomous Gated Neural Inference System) is a biologically-plausible Deep Learning framework that discards backpropagation in favor of Predictive Coding and SNAP-ATP (Synchronized Aggressive Target Propagation) using local Hebbian updates to solve catastrophic forgetting.`,
      technologies: ['Python', 'PyTorch', 'Predictive Coding', 'Hebbian Learning', 'SNAP-ATP', 'CUDA'],
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
        inference: '40+ Tokens/sec'
      },
      githubUrl: 'https://github.com/swarajladke/Neural-Networks',
      liveUrl: 'To be updated'
    },
    'agnis-agent': {
      id: 'agnis-agent',
      title: 'AGNIS (Self-Evolving AI Agent)',
      category: 'Autonomous AI / Agentic Systems',
      status: 'Live',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
      description: `AGNIS (Autonomous Generative Neural Intelligence System) is a self-evolving AI agent architecture designed to transcend static pre-trained models.\n\nIt features continuous learning, metacognitive reasoning ("Wisdom Cycle": Intuition -> Critique -> Synthesis), sandboxed code self-modification via AST analysis, urge-driven background autonomy via the Sentinel daemon, multi-modal knowledge ingestion into ChromaDB, and P2P swarm intelligence with distributed consensus voting under a strict Constitutional Safety Core and cryptographic HMAC Owner Lock.`,
      technologies: ['Python', 'FastAPI', 'PyTorch / LoRA', 'ChromaDB', 'AST Sandboxing', 'Swarm Intelligence', 'HMAC Security'],
      features: [
        'Metacognitive Reasoning: 3-stage "Wisdom Cycle" (Intuition -> Critique -> Synthesis)',
        'Self-Evolution & AST code modification with isolated sandboxing & rollback',
        'Urge-driven Sentinel daemon (knowledge hunger, evolution drive, eco-awareness)',
        'Multi-modal knowledge ingestion (Web crawler, Hacker News, YouTube, PDFs)',
        'P2P Swarm collective intelligence with distributed consensus voting',
        'Constitutional Safety Core & cryptographic HMAC Owner Lock authorization'
      ],
      stats: {
        architecture: 'Self-Evolving Agent Architecture',
        reasoning: '3-Stage Wisdom Cycle',
        evolution: 'AST Sandboxed Patching',
        memory: 'ChromaDB Vector RAG'
      },
      githubUrl: 'https://github.com/swarajladke/AGNIS-Agent',
      liveUrl: 'https://github.com/swarajladke/AGNIS-Agent#readme'
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