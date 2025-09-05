import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import ProjectDetailModal from '../../../components/ui/ProjectDetailModal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: 'Content-repurser',
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

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'text-success bg-success/10 border-success/20';
      case 'Development': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <>
      <section id="projects" className="section-padding section-margin bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 gradient-text">Featured Projects</h2>
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
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-2 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs border border-border"
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
              className="px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 btn-glow flex items-center space-x-2 mx-auto"
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