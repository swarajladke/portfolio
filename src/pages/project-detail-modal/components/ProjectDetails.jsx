import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectDetails = ({ project }) => {
  const defaultFeatures = [
    "Responsive Design",
    "Real-time Updates", 
    "User Authentication",
    "API Integration",
    "Performance Optimization",
    "Cross-browser Compatibility"
  ];

  const defaultTechnologies = [
    "React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "JWT"
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      {/* Project Description */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center mb-4">
            <Icon name="FileText" size={20} className="mr-2 text-primary" />
            Project Overview
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description || `A comprehensive project showcasing modern web development practices with cutting-edge technologies and user-centric design principles. This application demonstrates proficiency in full-stack development, incorporating responsive design, real-time functionality, and seamless user experience across all devices.`}
          </p>
        </div>

        {/* Challenge & Solution */}
        {project.challenge && (
          <div>
            <h4 className="text-lg font-semibold text-foreground flex items-center mb-3">
              <Icon name="Target" size={18} className="mr-2 text-accent" />
              Challenge
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.challenge}
            </p>
            {project.solution && (
              <>
                <h4 className="text-lg font-semibold text-foreground flex items-center mb-3">
                  <Icon name="Lightbulb" size={18} className="mr-2 text-success" />
                  Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Technical Stack & Features */}
      <div className="space-y-6">
        {/* Technology Stack */}
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center mb-4">
            <Icon name="Settings" size={20} className="mr-2 text-primary" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {(project.technologies || defaultTechnologies).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-muted/50 text-muted-foreground rounded-lg text-sm border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center mb-4">
            <Icon name="CheckCircle" size={20} className="mr-2 text-primary" />
            Key Features
          </h3>
          <div className="space-y-3">
            {(project.features || defaultFeatures).map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;