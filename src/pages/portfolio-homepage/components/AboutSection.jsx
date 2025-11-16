import React from 'react';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '5+', icon: 'FolderOpen' },
    { label: 'Technologies Mastered', value: '15+', icon: 'Code' },
    { label: 'VS extensions', value: '2', icon: 'IDE' },
    { label: 'Research Papers', value: '2', icon: 'paper' }
  ];

  return (
    <section id="about" className="section-padding section-margin bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading animate-underline">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building thoughtful, performant experiences across web and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center">
                <Icon name="Sparkles" size={24} className="mr-3 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Fullstack Developer and AI/ML Enthusiast with a deep love for creating innovative solutions that bridge the gap between human needs and technological possibilities. My journey in tech began with curiosity and has evolved into a mission to build impactful applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise spanning modern web technologies and artificial intelligence, I specialize in developing scalable applications that not only meet current requirements but anticipate future needs. I believe in writing clean, maintainable code and creating user experiences that delight and inspire.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center">
                <Icon name="Target" size={24} className="mr-3 text-primary" />
                What Drives Me
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the endless possibilities that emerge when creativity meets technology. Whether it's developing AI-powered educational platforms, building efficient web applications, or exploring the frontiers of machine learning, I approach each project with enthusiasm and attention to detail.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevation-1 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={stat.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl max-w-3xl mx-auto bg-transparent">
            <Icon name="Quote" size={32} className="text-primary mx-auto mb-4" />
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "The best way to predict the future is to create it. Every line of code I write is a step towards building tomorrow's solutions today."
            </blockquote>
            <cite className="text-primary font-semibold">- Swaraj Ladke</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;