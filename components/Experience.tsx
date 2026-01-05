
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { NavigationSection } from '../types';

export const Experience: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id={NavigationSection.EXPERIENCE} className="py-32 px-4 md:px-8 dark:bg-void bg-paper border-t dark:border-white/5 border-black/5 relative">
      <div className="max-w-5xl mx-auto">
         <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black dark:text-white text-ink mb-4">Experience Logs</h2>
            <p className="font-mono text-xs dark:text-gray-500 text-indigo-900/60 tracking-[0.3em]">CAREER_TRAJECTORY // DECLASSIFIED</p>
         </div>

         <div className="space-y-12 relative">
             {/* Circuit Line Background */}
             <div className="absolute left-[28px] top-0 bottom-0 w-[4px] dark:bg-white/5 bg-black/5 rounded-full" />
             
             {/* Glowing Active Line (Simulated) */}
             <motion.div 
               className="absolute left-[28px] top-0 w-[4px] bg-gradient-to-b from-accent via-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
               style={{ height: hoveredId ? '100%' : '0%', transition: 'height 0.5s ease' }}
             />

             {EXPERIENCE_DATA.map((job, i) => (
                 <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredId(job.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative pl-24 group"
                 >
                     {/* Node Connector */}
                     <div className={`absolute left-0 top-0 w-[60px] h-[60px] rounded-2xl flex items-center justify-center border-2 transition-all duration-300 z-10
                        ${hoveredId === job.id 
                            ? 'bg-accent border-accent scale-110 shadow-[0_0_20px_rgba(99,102,241,0.6)] rotate-12' 
                            : 'dark:bg-neutral-900 bg-white dark:border-white/10 border-black/10'
                        }
                     `}>
                         <span className={`font-mono text-xl font-bold ${hoveredId === job.id ? 'text-white' : 'dark:text-gray-500 text-gray-300'}`}>
                            {String(i + 1).padStart(2, '0')}
                         </span>
                     </div>

                     {/* Horizontal Connector */}
                     <div className={`absolute left-[50px] top-[30px] w-20 h-[2px] transition-colors duration-300 ${hoveredId === job.id ? 'bg-accent' : 'dark:bg-white/5 bg-black/5'}`} />

                     <div className={`relative p-8 rounded-3xl border transition-all duration-300
                        ${hoveredId === job.id 
                            ? 'dark:bg-white/10 bg-white border-accent/50 translate-x-2 shadow-2xl' 
                            : 'dark:bg-white/5 bg-white/50 dark:border-white/5 border-white border-transparent'
                        }
                     `}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                           <h3 className={`text-2xl font-bold transition-colors ${hoveredId === job.id ? 'text-accent' : 'dark:text-white text-ink'}`}>{job.role}</h3>
                           <span className="font-mono text-xs dark:bg-black/40 bg-indigo-50 px-3 py-1 rounded-full dark:text-gray-400 text-indigo-800 border dark:border-white/10 border-indigo-100">{job.period}</span>
                        </div>
                        
                        <div className="text-lg font-medium dark:text-gray-300 text-gray-800 mb-6 flex items-center gap-2">
                             @{job.company}
                        </div>
                        
                        <p className="dark:text-gray-400 text-gray-600 mb-8 leading-relaxed">
                            {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {job.skills.map(skill => (
                                <span key={skill} className={`px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-colors
                                    ${hoveredId === job.id 
                                        ? 'border-accent/30 text-accent bg-accent/10' 
                                        : 'dark:border-white/10 border-black/5 dark:text-gray-500 text-gray-500'
                                    }
                                `}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                     </div>
                 </motion.div>
             ))}
         </div>
      </div>
    </section>
  );
};
