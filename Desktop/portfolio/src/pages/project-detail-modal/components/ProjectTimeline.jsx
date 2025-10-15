import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ project }) => {
  const defaultTimeline = [
    {
      phase: "Planning & Research",
      description: "Requirements gathering, technology selection, and architecture design",
      date: "Week 1-2",
      status: "completed"
    },
    {
      phase: "Development Setup",
      description: "Environment configuration, repository setup, and initial scaffolding",
      date: "Week 3",
      status: "completed"
    },
    {
      phase: "Core Development",
      description: "Implementation of core features and functionality",
      date: "Week 4-8",
      status: "completed"
    },
    {
      phase: "Testing & Optimization",
      description: "Unit testing, performance optimization, and bug fixes",
      date: "Week 9-10",
      status: "completed"
    },
    {
      phase: "Deployment & Launch",
      description: "Production deployment, monitoring setup, and final testing",
      date: "Week 11",
      status: "completed"
    }
  ];

  const timeline = project.timeline || defaultTimeline;

  if (!timeline || timeline.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-foreground flex items-center mb-6">
        <Icon name="Clock" size={20} className="mr-2 text-primary" />
        Development Timeline
      </h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
        
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                item.status === 'completed' 
                  ? 'bg-success/20 border-success text-success' 
                  : item.status === 'in-progress' ?'bg-warning/20 border-warning text-warning animate-pulse' :'bg-muted/20 border-muted-foreground text-muted-foreground'
              }`}>
                <Icon 
                  name={
                    item.status === 'completed' ? 'CheckCircle' :
                    item.status === 'in-progress' ? 'Clock' : 'Circle'
                  } 
                  size={20} 
                />
              </div>
              
              {/* Timeline Content */}
              <div className="flex-1 min-w-0 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.phase}
                  </h4>
                  <span className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.deliverables && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.deliverables.map((deliverable, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;