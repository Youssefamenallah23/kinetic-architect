
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, HERO_TITLE } from '../constants';
import { Cpu, Globe, Layers, Download } from 'lucide-react';
import { NavigationSection } from '../types';

export const About: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Note: In local development, ensure resume.pdf exists in the public or root directory.
    // This handler adds a small visual feedback for the user.
    console.log("Initiating resume handshake...");
  };

  return (
    <section id={NavigationSection.ABOUT} className="py-32 px-4 md:px-8 relative overflow-hidden transition-colors duration-500 dark:bg-void bg-paper">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
         
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
         >
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            
            <h1 className="text-xl font-bold text-accent mb-4 tracking-widest">{HERO_TITLE}</h1>

            <h2 className="text-5xl md:text-7xl font-bold dark:text-white text-ink mb-8 leading-tight">
               Architecting the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-accent dark:to-purple-400 from-indigo-600 to-soft-rose">Invisible</span>
            </h2>
            <div className="prose prose-lg dark:prose-invert">
               <div className="dark:text-gray-300 text-gray-700 leading-relaxed font-light text-xl">
                  {ABOUT_TEXT}
               </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <a 
                 href="/Amen_Allah_Youssef_Resume.pdf" 
                 download="Amen_Allah_Youssef_Resume.pdf"
                 onClick={handleDownload}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 w-fit"
               >
                  <Download size={18} />
                  Download Resume
               </a>
            </div>
            
            <div className="mt-12 flex gap-12 border-t dark:border-white/10 border-black/10 pt-8">
               {[
                   { val: "2+", label: "Years Exp" },
                   { val: "10+", label: "Projects" },
                   { val: "99%", label: "Uptime" }
               ].map((stat, i) => (
                   <div key={i} className="flex flex-col gap-1 group cursor-default">
                      <h3 className="text-4xl font-black dark:text-white text-ink group-hover:text-accent transition-colors">{stat.val}</h3>
                      <span className="text-xs font-mono uppercase tracking-widest dark:text-gray-500 text-gray-500">{stat.label}</span>
                   </div>
               ))}
            </div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
         >
            <div className="space-y-6 translate-y-12">
               <FeatureCard 
                 icon={<Cpu className="w-8 h-8 text-accent" />}
                 title="Agentic AI"
                 subtitle="n8n & Autonomous Workflows"
                 color="border-l-4 border-accent"
               />
               <FeatureCard 
                 icon={<Globe className="w-8 h-8 text-lime" />}
                 title="RAG Systems"
                 subtitle="Astra DB & Gemini Integration"
                 color="border-l-4 border-lime"
               />
            </div>
            <div className="space-y-6">
               <FeatureCard 
                 icon={<Layers className="w-8 h-8 text-rose-500" />}
                 title="Full Stack"
                 subtitle="End-to-End System Architecture"
                 color="border-l-4 border-rose-500"
               />
               
               {/* Decorative Abstract Card */}
               <div className="h-48 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
                  <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin-slow group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
         </motion.div>

      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, subtitle, color }: any) => (
    <motion.div 
       whileHover={{ y: -5, rotateX: 5 }}
       className={`p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 shadow-lg hover:shadow-2xl
        dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10
        bg-white border-white hover:bg-white/80
        ${color}
       `}
    >
        <div className="mb-4 p-3 rounded-2xl dark:bg-white/5 bg-gray-100 w-fit">{icon}</div>
        <h4 className="font-bold text-lg dark:text-white text-ink mb-2">{title}</h4>
        <p className="text-xs font-mono uppercase dark:text-gray-400 text-gray-500 leading-relaxed">{subtitle}</p>
    </motion.div>
);
