
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';
import { NavigationSection } from '../types';

export const Education: React.FC = () => {
  return (
    <section id={NavigationSection.EDUCATION} className="py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-500 dark:bg-void bg-paper border-t dark:border-white/5 border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center">
             <GraduationCap className="dark:text-white text-ink" size={24} />
           </div>
           <div>
              <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-ink">Knowledge Base</h2>
              <p className="font-mono text-xs dark:text-gray-500 text-gray-400 mt-1">ACADEMIC_PROTOCOLS_LOADED</p>
           </div>
        </div>

        <div className="relative border-l-2 dark:border-white/10 border-black/10 ml-6 md:ml-10 space-y-12">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Connector Dot */}
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 dark:border-void border-paper transition-colors duration-500 ${edu.color ? edu.color.replace('bg-', 'bg-') : 'bg-accent'}`} />
              
              <div className="group relative p-6 rounded-2xl transition-all duration-300 dark:hover:bg-white/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent dark:hover:border-white/10 hover:border-black/5">
                 {/* Degree Header */}
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold dark:text-white text-ink group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-sm dark:text-gray-400 text-gray-500 px-3 py-1 rounded-full dark:bg-white/5 bg-black/5">
                      {edu.year}
                    </span>
                 </div>
                 
                 <div className="mb-6">
                    <p className="text-lg dark:text-gray-300 text-gray-700 font-medium">{edu.institution}</p>
                 </div>

                 {/* Focus Tags (Data Chips) */}
                 <div className="flex flex-wrap gap-2">
                    {edu.focus.map((f, i) => (
                        <span key={i} className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded border dark:border-white/10 border-black/10 dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-black transition-colors">
                            {f}
                        </span>
                    ))}
                 </div>
                 
                 {/* Hover Decorative Effect */}
                 <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-${edu.color?.replace('bg-', '') || 'indigo-500'}/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
