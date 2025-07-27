import React from 'react';
import Button from '../../../components/ui/Button';

const ProjectActions = ({ project }) => {
  const handleLiveDemo = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithub = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCaseStudy = () => {
    if (project.caseStudyUrl) {
      window.open(project.caseStudyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleMarketplace = () => {
    if (project.marketplaceUrl) {
      window.open(project.marketplaceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="pt-6 border-t border-border">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Primary Actions */}
        {project.liveUrl && (
          <Button
            variant="default"
            className="btn-glow flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
            onClick={handleLiveDemo}
            iconName="ExternalLink"
            iconPosition="right"
          >
            View Live Demo
          </Button>
        )}

        {project.githubUrl && (
          <Button
            variant="outline"
            className="btn-glow flex-1 border-primary/50 text-primary hover:bg-primary/10"
            onClick={handleGithub}
            iconName="Github"
            iconPosition="right"
          >
            View Source Code
          </Button>
        )}

        {/* Secondary Actions */}
        {project.marketplaceUrl && (
          <Button
            variant="secondary"
            className="btn-glow flex-1"
            onClick={handleMarketplace}
            iconName="Store"
            iconPosition="right"
          >
            Marketplace
          </Button>
        )}

        {project.caseStudyUrl && (
          <Button
            variant="ghost"
            className="btn-glow flex-1 border border-border hover:border-primary/50"
            onClick={handleCaseStudy}
            iconName="BookOpen"
            iconPosition="right"
          >
            Case Study
          </Button>
        )}
      </div>

      {/* Additional Links */}
      {(project.documentationUrl || project.apiUrl) && (
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {project.documentationUrl && (
            <Button
              variant="link"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open(project.documentationUrl, '_blank')}
              iconName="FileText"
              iconPosition="left"
            >
              Documentation
            </Button>
          )}
          {project.apiUrl && (
            <Button
              variant="link"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open(project.apiUrl, '_blank')}
              iconName="Code"
              iconPosition="left"
            >
              API Reference
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectActions;