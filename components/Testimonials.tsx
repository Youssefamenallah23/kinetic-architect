
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote, Radio } from 'lucide-react';
import { NavigationSection } from '../types';

export const Testimonials: React.FC = () => {
  return (
    <section id={NavigationSection.TESTIMONIALS} className="py-24 px-4 md:px-8 transition-colors duration-500 dark:bg-void bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 mb-4"
           >
              <Radio size={14} className="text-lime animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] dark:text-lime text-emerald-600">INCOMING_TRANSMISSIONS</span>
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black dark:text-white text-ink mb-4">Peer Signals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {TESTIMONIALS_DATA.map((t, i) => (
             <motion.div
                key={t.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
             >
                <div className="h-full p-8 rounded-2xl transition-all duration-300 dark:bg-neutral-900 bg-white border border-transparent dark:border-white/5 shadow-sm hover:shadow-2xl dark:hover:border-white/20 hover:scale-105">
                   {/* Decorative Quote Mark */}
                   <div className="absolute top-6 right-6 opacity-10 dark:text-white text-black transition-opacity group-hover:opacity-20">
                      <Quote size={48} />
                   </div>

                   <p className="relative z-10 text-lg leading-relaxed dark:text-gray-300 text-gray-700 italic mb-8">
                     "{t.text}"
                   </p>

                   <div className="flex items-center gap-4 border-t dark:border-white/10 border-black/5 pt-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                         <div className="font-bold dark:text-white text-ink">{t.author}</div>
                         <div className="text-xs font-mono dark:text-gray-500 text-gray-400">
                           {t.role} @ {t.company}
                         </div>
                      </div>
                   </div>
                   
                   {/* Light mode colorful accent line */}
                   <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-soft-rose via-soft-violet to-soft-sky opacity-0 group-hover:opacity-100 transition-opacity rounded-t-full" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
