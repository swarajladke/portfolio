import React from "react";

const getLevelLabel = (value) => {
  const v = Math.min(Math.max(Number(value) || 0, 0), 100);
  if (v >= 90) return "Expert";
  if (v >= 75) return "Advanced";
  if (v >= 50) return "Intermediate";
  return "Beginner";
};

const SkillCard = ({ icon, name, category, proficiency = 0 }) => {
  const clamped = Math.min(Math.max(proficiency, 0), 100);
  const levelLabel = getLevelLabel(clamped);

  return (
    <div
      className={`
      bg-transparent rounded-2xl border border-transparent px-3 py-2
      flex flex-col
      transition-all duration-300 transform
      shadow-lg shadow-black/30
      hover:shadow-cyan-500/40 hover:border-white/20 hover:-translate-y-0.5
      min-h-[115px] sm:min-h-[120px] md:min-h-[125px] lg:min-h-[135px]
      w-full md:max-w-[280px] mx-auto
      cursor-pointer
    `}
    >
      {/* Top row: icon + name/category left-aligned */}
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
        <div className="flex flex-col">
          <div className="font-bold text-white text-base sm:text-lg leading-tight">{name}</div>
          <div className="text-sm sm:text-base text-gray-200 leading-tight">{category}</div>
        </div>
      </div>

      {/* Level row */}
      <div className="flex items-center justify-between text-sm text-gray-100 mb-1">
        <span>Level</span>
        <span className="text-cyan-300 font-semibold">{levelLabel}</span>
      </div>

      {/* Progress bar (still based on percentage) */}
      <div className="w-full mt-auto">
        <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
