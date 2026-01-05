
import React from 'react';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => (
  <footer className={`py-12 border-t transition-colors duration-500 ${isDark ? 'bg-black border-white/10 text-white' : 'bg-white border-black/5 text-ink'}`}>
    <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div className="flex flex-col items-center md:items-start">
         <div className="font-mono font-bold tracking-widest text-lg">KINETIC<span className="opacity-50">_ARCHITECT</span></div>
         <p className="text-xs opacity-50 mt-1">System Architecture x Generative Design</p>
      </div>

      <div className="flex gap-6">
         {SOCIAL_LINKS.map((link) => {
           const Icon = {
             Github,
             LinkedIn : Linkedin,
             Facebook: Facebook,
             Mail
           }[link.name];

           if (!Icon) return null;

           return (
            <a 
              key={link.name} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white hover:text-black' : 'bg-black/5 hover:bg-black hover:text-white'}`}
            >
                <Icon size={18} />
            </a>
           );
        })}
      </div>
      
      <div className="text-xs font-mono opacity-40">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </div>
  </footer>
);
