
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { HERO_SUBTITLE, HERO_TITLE } from '../constants';
import { NavigationSection } from '../types';

const TITLES = [
  "FULL STACK ENGINEER",
  "AI ENGINEER",
  "AGENTIC WORKFLOWS"
];

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x * 10); 
    mouseY.set(y * 10);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      id={NavigationSection.HERO}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500 dark:bg-void bg-paper pt-52 md:pt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 opacity-30 dark:opacity-20">
        <div className="dark:block hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[100px] animate-blob" />
           <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        </div>
        <div className="dark:hidden block">
           <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-r from-soft-rose/30 to-soft-violet/30 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-l from-soft-sky/30 to-soft-lime/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y: y1 }} className="text-left">
          <motion.div initial={{ width: 0 }} animate={{ width: "100px" }} className="h-1 bg-gradient-to-r from-accent to-purple-500 mb-6 rounded-full" />
          <div className="min-h-[160px] md:min-h-[290px] mb-6 relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={titleIndex}
                initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] transition-colors duration-500 dark:text-white text-transparent bg-clip-text bg-gradient-to-br from-ink to-indigo-600 w-full uppercase"
              >
                {TITLES[titleIndex].split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-sm md:text-lg font-mono tracking-widest uppercase transition-colors duration-500 dark:text-gray-400 text-indigo-900/70 max-w-md leading-relaxed font-bold">
            {HERO_SUBTITLE}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-4">
             <button onClick={() => scrollTo(NavigationSection.WORK)} className="relative group px-8 py-4 rounded-full overflow-hidden transition-all duration-300 backdrop-blur-md border shadow-lg dark:bg-gradient-to-r dark:from-accent dark:to-purple-600 dark:border-white/10 bg-gradient-to-r from-indigo-600 to-purple-600 border-white/40 hover:scale-105 text-white">
                <span className="relative z-10 font-black tracking-widest uppercase text-sm">Selected Works</span>
             </button>
             <button onClick={() => scrollTo(NavigationSection.CONTACT)} className="relative group px-8 py-4 rounded-full overflow-hidden transition-all duration-300 backdrop-blur-md border shadow-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-white border-gray-200 text-black hover:bg-gray-50 hover:scale-105 hover:text-gray-700">
                <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Get in Touch</span>
             </button>
          </motion.div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ rotateX: springY, rotateY: springX, perspective: 1200 }}
            className="relative h-[600px] w-full flex items-center justify-center group"
        >
            <motion.div 
              className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] shadow-2xl dark:bg-neutral-900 bg-white transition-all duration-500 group-hover:shadow-indigo-500/50"
              style={{ transformStyle: "preserve-3d" }}
            >
                 <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-[#111]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-accent/10 to-transparent opacity-40" />
                    <motion.div className="w-full h-full relative" style={{ transform: "translateZ(10px)" }}>
                        <img 
                            src="./image/profile.png" 
                            alt={HERO_TITLE} 
                            className="w-full h-full object-cover transition-all duration-700"
                            
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-black/40 from-indigo-900/20 via-transparent to-transparent pointer-events-none z-20" />
                 </div>
                 <div className="absolute inset-0 rounded-[2.5rem] border-[1.5px] dark:border-white/10 border-white/40 pointer-events-none z-30 group-hover:border-accent/40 transition-colors duration-700 shadow-inner" />
                 <div className="absolute bottom-8 left-8 right-8 p-5 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl transform translate-z-20 z-40 transition-transform duration-500 group-hover:translate-y-[-5px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                <span className="text-accent text-[10px] font-black">AAY</span>
                            </div>
                            <div>
                                <div className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">IDENTITY</div>
                                <div className="text-sm font-black text-white uppercase tracking-tight">{HERO_TITLE}</div>
                            </div>
                        </div>
                        <div className="text-right">
                             <div className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">STATUS</div>
                             <div className="text-xs font-bold text-accent">OPEN TO WORK</div>
                        </div>
                    </div>
                 </div>
                 <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-accent/20 rounded-tr-[2rem] z-10 pointer-events-none transition-all duration-500 group-hover:border-accent group-hover:scale-110" />
            </motion.div>
            <div className="absolute -z-10 inset-10 bg-accent/5 rounded-[2.5rem] blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-mono dark:text-gray-500 text-indigo-900/40 uppercase tracking-[0.4em]">Initialize_Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent dark:via-white/30 via-indigo-900/20 to-transparent" />
      </motion.div>
    </div>
  );
};
