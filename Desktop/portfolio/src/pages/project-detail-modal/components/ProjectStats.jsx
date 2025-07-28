import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ project }) => {
  const defaultStats = {
    linesOfCode: "2.5K+",
    components: "25+", 
    features: "15+",
    testCoverage: "85%"
  };

  const stats = project.stats || defaultStats;

  const getStatIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'linesofcode': case'lines':
        return 'Code';
      case 'components':
        return 'Layers';
      case 'features':
        return 'Star';
      case 'testcoverage': case'coverage':
        return 'Shield';
      case 'users':
        return 'Users';
      case 'downloads':
        return 'Download';
      case 'stars':
        return 'Star';
      case 'forks':
        return 'GitFork';
      default:
        return 'BarChart3';
    }
  };

  const formatStatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  if (!stats || Object.keys(stats).length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-foreground flex items-center mb-6">
        <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
        Project Metrics
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div 
            key={key} 
            className="group p-4 bg-muted/30 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-1 text-center"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors duration-300">
              <Icon 
                name={getStatIcon(key)} 
                size={20} 
                className="text-primary" 
              />
            </div>
            <div className="text-2xl font-bold text-primary mb-1 group-hover:glow-theme transition-all duration-300">
              {value}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatStatLabel(key)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;