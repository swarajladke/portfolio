import React, { useEffect } from 'react';
import Icon from '../AppIcon';
import Image from '../AppImage';
import Button from './Button';

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={handleBackdropClick}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="modal-content w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="FolderOpen" size={24} color="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                <p className="text-muted-foreground">{project.category}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={24} />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project Image */}
            {project.image && (
              <div className="mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl border border-border"
                />
              </div>
            )}

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center">
                  <Icon name="FileText" size={20} className="mr-2 text-primary" />
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description || 'A comprehensive project showcasing modern web development practices with cutting-edge technologies and user-centric design principles.'}
                </p>
              </div>

              {/* Technical Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center">
                  <Icon name="Settings" size={20} className="mr-2 text-primary" />
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center mb-4">
                <Icon name="CheckCircle" size={20} className="mr-2 text-primary" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {(project.features || [
                  'Responsive Design',
                  'Real-time Updates',
                  'User Authentication',
                  'API Integration',
                  'Performance Optimization',
                  'Cross-browser Compatibility'
                ]).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            {project.stats && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground flex items-center mb-4">
                  <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
                  Project Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted/50 rounded-xl border border-border">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              {project.liveUrl && (
                <Button
                  variant="default"
                  className="btn-glow flex-1"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="btn-glow flex-1"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  iconName="Github"
                  iconPosition="right"
                >
                  View Source Code
                </Button>
              )}
              {project.caseStudyUrl && (
                <Button
                  variant="secondary"
                  className="btn-glow flex-1"
                  onClick={() => window.open(project.caseStudyUrl, '_blank')}
                  iconName="BookOpen"
                  iconPosition="right"
                >
                  Case Study
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;