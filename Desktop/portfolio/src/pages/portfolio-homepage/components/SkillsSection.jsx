import React, { useMemo, useState } from 'react';
import Icon from '../../../components/AppIcon';
import SkillCard from '../../../components/SkillCard';

const categoryIconMap = {
  frontend: 'Monitor',
  backend: 'ServerCog',
  database: 'Database',
  ai: 'Brain',
  tools: 'Wrench',
  all: 'Grid3X3'
};

const categoryLabel = (id) => {
  switch (id) {
    case 'frontend': return 'Frontend';
    case 'backend': return 'Backend';
    case 'database': return 'Database';
    case 'ai': return 'AI/ML';
    case 'tools': return 'Tools';
    default: return id;
  }
};

const levelLabelAndStars = (level) => {
  if (level >= 90) return { label: 'Expert', stars: 5 };
  if (level >= 75) return { label: 'Advanced', stars: 4 };
  if (level >= 50) return { label: 'Intermediate', stars: 3 };
  return { label: 'Beginner', stars: 2 };
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'ServerCog' },
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
    { name: 'API', category: 'ai', level: 92, icon: 'MessageSquare', color: '#412991' },
    { name: 'Hugging Face', category: 'ai', level: 85, icon: 'Heart', color: '#FFD21E' },

    // Tools
    { name: 'Git', category: 'tools', level: 95, icon: 'GitBranch', color: '#F05032' },
    { name: 'Render', category: 'tools', level: 85, icon: 'Package', color: '#2496ED' },
    { name: 'AWS', category: 'tools', level: 80, icon: 'Cloud', color: '#FF9900' },
    { name: 'Vercel', category: 'tools', level: 88, icon: 'Triangle', color: '#000000' },
    { name: 'Figma', category: 'tools', level: 82, icon: 'Figma', color: '#F24E1E' },
    { name: 'Azure Devops', category: 'tools', level: 80, icon: 'Docker', color: '#2496ED' }
  ];

  const filteredSkills = useMemo(() => (
    activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory)
  ), [activeCategory]);

  return (
    <section id="skills" className="section-padding section-margin bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="section-heading animate-underline">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                }`}
                aria-pressed={activeCategory === category.id}
              >
                <Icon name={categoryIconMap[category.id] || category.icon} size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid using SkillCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const { label, stars } = levelLabelAndStars(skill.level);
            return (
              <SkillCard
                key={skill.name}
                icon={<div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: `${skill.color}22` }}>
                  <Icon name={skill.icon} size={18} style={{ color: skill.color }} />
                </div>}
                name={skill.name}
                category={categoryLabel(skill.category)}
                level={label}
                stars={stars}
                proficiency={skill.level}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;