import React from 'react';
import { TECH_STACK } from '../constants';

export const TechTicker: React.FC = () => {
  return (
    <div className="w-full py-10 border-y dark:border-white/5 border-indigo-100/50 dark:bg-black/40 bg-white/60 backdrop-blur-md overflow-hidden flex relative z-20">
      
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r dark:from-void from-paper to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l dark:from-void from-paper to-transparent z-10" />

      <div className="flex animate-marquee-slow whitespace-nowrap hover:[animation-play-state:paused]">
        {/* Render twice for seamless loop */}
        {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div key={index} className="mx-8 flex items-center gap-2 group cursor-default">
            <span className="w-2 h-2 rounded-full dark:bg-white/20 bg-indigo-200 group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
            <span className="text-xl md:text-3xl font-black uppercase tracking-tighter dark:text-white/20 text-indigo-900/20 group-hover:dark:text-white group-hover:text-indigo-600 transition-colors font-sans transform group-hover:-translate-y-1 duration-300">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};