import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BooksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const books = [
    {
      title: "The Autocatalytic Cage",
      subtitle: "A Field Study of the Human Superorganism and Its Self-Consuming Systems",
      badge: "New Release",
      type: "Research Monograph",
      cover: "bookcover.png",
      paragraphs: [
        "Observe the human nest from the outside. The Autocatalytic Cage adopts the clinical, detached lens of an external biological observer to document how human coordination systems—language, agriculture, money, states, and corporations—have inverted.",
        "Originally built to serve human survival, these systems have transitioned into self-perpetuating, autocatalytic loops that consume human energy and planetary resources to optimize for their own metrics (like GDP and profit).",
        "With no political critique or moralizing, this field report analyzes the somatic decay of the human population, the ecological liquidation of the Earth, and the future evolutionary trajectories of the human colony."
      ],
      link: "https://drive.google.com/file/d/1FNL3O_-WSOgwMTgIvRQNpQVdBMy1423h/view?usp=sharing",
      linkText: "Read Full Book",
      linkIcon: "ExternalLink",
      disabled: false
    },
    {
      title: "Perks of Being Fanatical",
      subtitle: "A Philosophical and Psychological Exploration of Ambition",
      badge: "In Progress",
      type: "Philosophical Exploration",
      cover: "bookcover2.png",
      paragraphs: [
        "Perks of Being Fanatical is a philosophical and psychological exploration of ambition, obsession, purpose, and the pursuit of extraordinary dreams. The book challenges conventional ideas of balance and argues that many of history's greatest achievements were built by individuals who became relentlessly committed to a vision larger than themselves.",
        "Through powerful metaphors, reflective narratives, and deep psychological insights, the book examines the roots of dreams, the cost of comfort, the loneliness of ambition, the nature of sacrifice, and the relationship between identity and purpose. Rather than presenting success as a destination, it explores fanaticism as a state of unwavering commitment to a dream that becomes inseparable from one's identity.",
        "\"If your dream is truly your life, is being fanatical a choice—or the only honest response?\""
      ],
      link: "#",
      linkText: "Currently Writing",
      linkIcon: "Edit3",
      disabled: true
    }
  ];

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = books.length - 1;
      if (nextIndex >= books.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentBook = books[currentIndex];

  return (
    <section id="books" className="section-padding section-margin bg-transparent relative z-10">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading animate-underline">Publications</h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            As an independent author, I enjoy writing long-form books based on my deep research and explorations into AI, life, the world, and everything in between.
          </p>
        </div>

        <div className="relative group/carousel md:px-14 lg:px-20" data-aos="fade-up">
          {/* Side Arrows (Desktop) */}
          <button
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100"
            onClick={() => paginate(-1)}
          >
            <Icon name="ChevronLeft" size={24} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          <button
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100"
            onClick={() => paginate(1)}
          >
            <Icon name="ChevronRight" size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="relative w-full overflow-hidden px-2 rounded-[2.5rem]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0, scale: 0.98 }),
                  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
                  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0, scale: 0.98 })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: "easeInOut", duration: 0.2 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full bg-gradient-to-br from-[#0D1320]/90 to-[#05080f]/90 backdrop-blur-3xl rounded-[2.5rem] border border-cyan-500/20 shadow-[0_0_80px_rgba(0,191,255,0.05)] hover:shadow-[0_0_100px_rgba(0,191,255,0.1)] overflow-hidden group transition-all duration-700"
              >
                <div className="grid lg:grid-cols-12 gap-0 min-h-[500px]">
                  {/* Book Cover Side */}
                  <div className={`relative p-8 lg:p-12 flex items-center justify-center lg:col-span-5 bg-black/40 border-b lg:border-b-0 ${currentIndex % 2 === 0 ? 'lg:border-r border-white/5' : 'lg:border-l border-white/5 lg:order-last'}`}>
                    {/* Glowing backlight */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[80px] rounded-full"></div>
                    
                    {/* Book Container with 3D Effect */}
                    <div className="relative w-full max-w-[280px] lg:max-w-[320px] rounded-r-xl rounded-l-sm overflow-hidden shadow-[20px_20px_50px_rgba(0,0,0,0.9),_inset_4px_0_10px_rgba(255,255,255,0.2)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-700 ease-out z-10 border-l-[6px] border-l-black/80">
                      {/* Spine texture overlay */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-white/30 to-transparent z-20 mix-blend-overlay pointer-events-none"></div>
                      <img 
                        src={`${import.meta.env.BASE_URL}${currentBook.cover}`} 
                        alt={`${currentBook.title} Cover`} 
                        className="w-full h-auto object-cover"
                      />
                      {/* Glossy reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-14 lg:col-span-7 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className={`px-4 py-1.5 ${currentBook.disabled ? 'bg-orange-500/10 text-orange-400 border-orange-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'} border rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_currentColor] opacity-90`}>
                        {currentBook.badge}
                      </span>
                      <span className="text-cyan-100/60 text-sm font-semibold tracking-wider flex items-center gap-2 uppercase">
                        <Icon name="BookOpen" size={16} className="text-cyan-400/80" /> {currentBook.type}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-600 mb-4 leading-tight tracking-tight drop-shadow-sm">
                      {currentBook.title}
                    </h3>
                    <h4 className="text-xl md:text-2xl text-cyan-200/90 mb-8 font-light leading-snug">
                      {currentBook.subtitle}
                    </h4>

                    <div className="space-y-5 text-slate-300/80 leading-relaxed text-base md:text-lg mb-10 font-light">
                      {currentBook.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {currentBook.disabled ? (
                        <button 
                          disabled
                          className="px-8 py-4 bg-white/5 text-white/40 border border-white/10 rounded-2xl font-semibold flex items-center gap-3 cursor-not-allowed w-fit tracking-wide"
                        >
                          <Icon name={currentBook.linkIcon} size={20} />
                          {currentBook.linkText}
                        </button>
                      ) : (
                        <a 
                          href={currentBook.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-100 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl font-semibold tracking-wide flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.1)] hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] hover:-translate-y-1 w-fit group/btn"
                        >
                          <Icon name={currentBook.linkIcon} size={20} className="transition-transform group-hover/btn:scale-110" />
                          {currentBook.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          </div>
          
          {/* Controls (Bottom Dots + Mobile Arrows) */}
          <div className="flex items-center justify-center gap-6 mt-8 relative z-20">
            <button
              className="md:hidden group flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white transition-all duration-300"
              onClick={() => paginate(-1)}
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <div className="flex items-center gap-3">
              {books.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 h-1.5 bg-cyan-500' : 'w-2 h-1.5 bg-slate-700 hover:bg-slate-500'}`}
                  aria-label={`Go to book ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="md:hidden group flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white transition-all duration-300"
              onClick={() => paginate(1)}
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
    </section>
  );
};

export default BooksSection;
