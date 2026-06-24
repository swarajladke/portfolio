import React from 'react';
import Icon from '../../../components/AppIcon';

const BooksSection = () => {
  return (
    <section id="books" className="section-padding section-margin bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading animate-underline">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            As an independent author, I enjoy writing long-form books based on my deep research and explorations into AI, life, the world, and everything in between.
          </p>
        </div>

        <div className="bg-[#080C14]/90 backdrop-blur-3xl rounded-3xl border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,191,255,0.1)] overflow-hidden group hover:border-cyan-500/40 transition-all duration-500" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Book Cover Side */}
            <div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-cyan-900/10 to-[#050505] border-b md:border-b-0 md:border-r border-white/5">
              <div className="relative w-full max-w-sm aspect-[2/3] rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:shadow-[0_20px_60px_rgba(0,191,255,0.2)] transition-all duration-700 group-hover:scale-[1.02]">
                <img 
                  src={`${import.meta.env.BASE_URL}bookcover.png`} 
                  alt="The Autocatalytic Cage Book Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-bold uppercase tracking-widest">
                  New Release
                </span>
                <span className="text-muted-foreground text-sm flex items-center gap-2">
                  <Icon name="BookOpen" size={14} /> Research Monograph
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-3 leading-tight">
                The Autocatalytic Cage
              </h3>
              <h4 className="text-lg md:text-xl text-cyan-100 mb-6 font-medium">
                A Field Study of the Human Superorganism and Its Self-Consuming Systems
              </h4>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
                <p>
                  Observe the human nest from the outside. The Autocatalytic Cage adopts the clinical, detached lens of an external biological observer to document how human coordination systems—language, agriculture, money, states, and corporations—have inverted.
                </p>
                <p>
                  Originally built to serve human survival, these systems have transitioned into self-perpetuating, autocatalytic loops that consume human energy and planetary resources to optimize for their own metrics (like GDP and profit). 
                </p>
                <p>
                  With no political critique or moralizing, this field report analyzes the somatic decay of the human population, the ecological liquidation of the Earth, and the future evolutionary trajectories of the human colony.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a 
                  href="https://drive.google.com/file/d/1FNL3O_-WSOgwMTgIvRQNpQVdBMy1423h/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.15)] hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] hover:-translate-y-1"
                >
                  <Icon name="ExternalLink" size={18} />
                  Read Full Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
