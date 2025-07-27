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
      marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=swaraj.codelixer',
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
        downloads: '10K+',
        rating: '4.8/5',
        users: '2.5K+',
        updates: '15+'
      }
    },
    {
      id: 2,
      title: 'Elora',
      category: 'web',
      description: 'An elegant e-commerce platform built with modern web technologies, featuring advanced product management and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      githubUrl: 'https://github.com/swarajladke/elora',
      liveUrl: 'https://elora-ecommerce.vercel.app',
      status: 'Live',
      features: [
        'Responsive design',
        'Payment integration',
        'Product catalog',
        'User authentication',
        'Order management',
        'Admin dashboard'
      ],
      stats: {
        users: '500+',
        transactions: '1.2K+',
        uptime: '99.9%',
        performance: '95/100'
      }
    },
    {
      id: 3,
      title: 'EduTwin',
      category: 'ai',
      description: 'AI-powered educational platform that creates personalized learning experiences through adaptive content delivery and intelligent tutoring systems.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      githubUrl: 'https://github.com/swarajladke/edutwin',
      liveUrl: 'https://edutwin-ai.vercel.app',
      status: 'Beta',
      features: [
        'Personalized learning paths',
        'AI-powered content recommendations',
        'Progress tracking',
        'Interactive assessments',
        'Real-time feedback',
        'Multi-modal learning support'
      ],
      stats: {
        students: '1K+',
        courses: '50+',
        accuracy: '92%',
        engagement: '85%'
      }
    },
    {
      id: 4,
      title: 'AI Portfolio Builder',
      category: 'ai',
      description: 'Intelligent portfolio generation tool that creates professional portfolios using AI analysis of user skills, projects, and career goals.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/swarajladke/ai-portfolio-builder',
      liveUrl: 'https://ai-portfolio-builder.vercel.app',
      status: 'Live',
      features: [
        'AI-generated content',
        'Template customization',
        'SEO optimization',
        'Real-time preview',
        'Export functionality',
        'Analytics integration'
      ],
      stats: {
        portfolios: '2K+',
        templates: '25+',
        satisfaction: '4.7/5',
        exports: '5K+'
      }
    },
    {
      id: 5,
      title: 'Smart Task Manager',
      category: 'web',
      description: 'Intelligent task management application with AI-powered priority suggestions and automated workflow optimization.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/swarajladke/smart-task-manager',
      liveUrl: 'https://smart-tasks.vercel.app',
      status: 'Live',
      features: [
        'AI priority suggestions',
        'Team collaboration',
        'Time tracking',
        'Progress analytics',
        'Deadline predictions',
        'Integration support'
      ],
      stats: {
        tasks: '50K+',
        teams: '200+',
        productivity: '+35%',
        satisfaction: '4.6/5'
      }
    },
    {
      id: 6,
      title: 'DevTools Extension',
      category: 'extensions',
      description: 'Comprehensive browser extension for developers with debugging tools, performance monitoring, and code analysis features.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
      technologies: ['JavaScript', 'Chrome APIs', 'React', 'Webpack'],
      githubUrl: 'https://github.com/swarajladke/devtools-extension',
      marketplaceUrl: 'https://chrome.google.com/webstore/detail/devtools-pro',
      status: 'Live',
      features: [
        'Performance monitoring',
        'Network analysis',
        'Console enhancements',
        'Element inspection',
        'Storage management',
        'API testing tools'
      ],
      stats: {
        installs: '25K+',
        rating: '4.9/5',
        reviews: '500+',
        updates: '20+'
      }
    }
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
      case 'Beta': return 'text-warning bg-warning/10 border-warning/20';
      case 'Development': return 'text-primary bg-primary/10 border-primary/20';
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