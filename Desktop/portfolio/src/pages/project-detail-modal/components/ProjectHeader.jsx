import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectHeader = ({ project, onClose }) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-elevation-1">
          <Icon name="FolderOpen" size={24} color="currentColor" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground gradient-text">
            {project.title}
          </h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 glow-primary">
              {project.category}
            </span>
            {project.status && (
              <span className={`px-3 py-1 rounded-full text-sm border ${
                project.status === 'completed' 
                  ? 'bg-success/20 text-success border-success/30' :'bg-warning/20 text-warning border-warning/30'
              }`}>
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
      >
        <Icon name="X" size={24} />
      </Button>
    </div>
  );
};

export default ProjectHeader;