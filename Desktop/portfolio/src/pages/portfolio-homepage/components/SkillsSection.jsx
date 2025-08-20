import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'database', label: 'Database', icon: 'Database' },
    { id: 'ai', label: 'AI/ML', icon: 'Brain' },
    { id: 'tools', label: 'Tools', icon: 'Wrench' }
  ];

  const skills = [
    // Frontend
    { name: 'React', category: 'frontend', level: 95, icon: 'Component', color: '#61DAFB' },
    { name: 'Next.js', category: 'frontend', level: 90, icon: 'Zap', color: '#000000' },
    { name: 'TypeScript', category: 'frontend', level: 88, icon: 'FileCode', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: 'Palette', color: '#06B6D4' },
    { name: 'Html', category: 'frontend', level: 95, icon: 'Layers', color: '#4FC08D' },
    { name: 'JavaScript', category: 'frontend', level: 95, icon: 'Code', color: '#F7DF1E' },

    // Backend
    { name: 'Python', category: 'backend', level: 92, icon: 'FileCode2', color: '#3776AB' },
    { name: 'Django', category: 'backend', level: 85, icon: 'Globe', color: '#092E20' },
    { name: 'FastAPI', category: 'backend', level: 82, icon: 'Rocket', color: '#009688' },
    { name: 'Java', category: 'backend', level: 70, icon: 'Share2', color: '#E10098' },
    { name: 'Flask', category: 'backend', level: 90, icon: 'Server', color: '#8CC84B' },

    // Database
    { name: 'MongoDB', category: 'database', level: 90, icon: 'Database', color: '#47A248' },
    { name: 'PostgreSQL', category: 'database', level: 85, icon: 'HardDrive', color: '#336791' },
    { name: 'Redis', category: 'database', level: 80, icon: 'Zap', color: '#DC382D' },
    { name: 'MySQL', category: 'database', level: 82, icon: 'Database', color: '#4479A1' },

    // AI/ML
    { name: 'TensorFlow', category: 'ai', level: 88, icon: 'Brain', color: '#FF6F00' },
    { name: 'PyTorch', category: 'ai', level: 85, icon: 'Cpu', color: '#EE4C2C' },
    { name: 'Scikit-learn', category: 'ai', level: 90, icon: 'BarChart3', color: '#F7931E' },
    { name: 'OpenAI API', category: 'ai', level: 92, icon: 'MessageSquare', color: '#412991' },
    { name: 'Hugging Face', category: 'ai', level: 85, icon: 'Heart', color: '#FFD21E' },

    // Tools
    { name: 'Git', category: 'tools', level: 95, icon: 'GitBranch', color: '#F05032' },
    { name: 'Render', category: 'tools', level: 85, icon: 'Package', color: '#2496ED' },
    { name: 'AWS', category: 'tools', level: 80, icon: 'Cloud', color: '#FF9900' },
    { name: 'Vercel', category: 'tools', level: 88, icon: 'Triangle', color: '#000000' },
    { name: 'Figma', category: 'tools', level: 82, icon: 'Figma', color: '#F24E1E' },
    { name: 'Azure Devops', category: 'tools', level: 80, icon: 'Docker', color: '#2496ED' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-elevation-1'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <Icon name={skill.icon} size={20} style={{ color: skill.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{skill.category}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Code" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground">
              End-to-end application development with modern frameworks and best practices
            </p>
          </div>

          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Brain" size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Intelligent solutions using cutting-edge AI technologies and frameworks
            </p>
          </div>

          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Rocket" size={32} className="text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Performance & Scale</h3>
            <p className="text-muted-foreground">
              Optimized applications built for performance, scalability, and reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;