
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { Project, NavigationSection } from '../types';
import { X, ExternalLink, Github, ArrowRight, Grid } from 'lucide-react';
import { TerminalBlock } from './TerminalBlock';
import ProjectCard2 from './ProjectCard2';

interface ArchiveGridProps {
    onVaultOpen: () => void;
    onVaultClose: () => void;
}

export const ArchiveGrid: React.FC<ArchiveGridProps> = ({ onVaultOpen, onVaultClose }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    if (showArchive || selectedProject) {
        onVaultOpen();
    } else {
        onVaultClose();
    }
  }, [showArchive, selectedProject, onVaultOpen, onVaultClose]);

  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 28 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id={NavigationSection.WORK} className="relative py-32 px-4 md:px-8 transition-colors duration-500 dark:bg-void bg-paper border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-4 dark:text-white text-ink uppercase tracking-tighter">Selected Work</h2>
            <p className="font-mono text-xs dark:text-gray-500 text-gray-400 uppercase tracking-widest">Featured Deployments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard2 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
              isBlurred={hoveredCardId !== null && hoveredCardId !== project.id}
              onHoverStart={() => setHoveredCardId(project.id)}
              onHoverEnd={() => setHoveredCardId(null)}
            />
          ))}
        </div>

        <div className="flex justify-center">
            <button 
                onClick={() => setShowArchive(true)}
                className="group relative px-8 py-4 overflow-hidden rounded-full backdrop-blur-md transition-all duration-300 border dark:bg-white/5 bg-white/40 dark:border-white/10 border-black/5 hover:bg-white/10 dark:hover:bg-white/10"
            >
                <span className="relative z-10 font-mono text-sm tracking-widest uppercase flex items-center gap-2 dark:text-white text-ink font-bold">
                    Open Project Vault <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 dark:bg-black/90 bg-white/90 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-5xl dark:bg-neutral-900 bg-white rounded-2xl overflow-hidden border dark:border-white/10 border-black/5 shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-neutral-800">
                <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t dark:from-neutral-900 from-white to-transparent md:hidden" />
                 <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                    className="absolute top-4 right-4 md:hidden bg-black/50 p-2 rounded-full text-white"
                 >
                    <X size={20} />
                 </button>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2 dark:text-white text-ink uppercase tracking-tight">{selectedProject.title}</h2>
                        <span className="text-accent font-mono text-xs uppercase tracking-widest">{selectedProject.category}</span>
                    </div>
                     <button 
                        onClick={() => setSelectedProject(null)}
                        className="hidden md:block dark:hover:bg-white/10 hover:bg-black/5 p-2 rounded-full transition-colors dark:text-white text-ink"
                     >
                        <X size={24} />
                     </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="p-4 dark:bg-white/5 bg-gray-50 rounded-lg border dark:border-white/5 border-black/5">
                        <span className="text-xs font-mono text-gray-500 block mb-1">IMPACT</span>
                        <span className="text-xl font-bold text-lime dark:text-lime text-emerald-600">{selectedProject.metrics}</span>
                     </div>
                     <div className="p-4 dark:bg-white/5 bg-gray-50 rounded-lg border dark:border-white/5 border-black/5">
                        <span className="text-xs font-mono text-gray-500 block mb-1">STATUS</span>
                        <span className="text-xl font-bold dark:text-white text-ink flex items-center gap-2 uppercase">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live
                        </span>
                     </div>
                </div>

                <div className="prose prose-invert prose-sm mb-8">
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg">
                        {selectedProject.description}
                    </p>
                </div>
                
                <div className="mb-8">
                    <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">Core Tech</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(t => (
                            <span key={t} className="px-3 py-1 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/5 rounded-full text-xs font-mono dark:text-gray-300 text-gray-600">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">Logs</h4>
                    <TerminalBlock />
                </div>

                <div className="mt-auto flex gap-4">
                    <a 
                       href={selectedProject.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex-1 dark:bg-white bg-ink dark:text-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity uppercase tracking-widest text-xs"
                    >
                        <ExternalLink size={18} /> View Case Study
                    </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showArchive && (
            <div className="fixed inset-0 z-[150] overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 dark:bg-black/95 bg-white/95 backdrop-blur-3xl"
                />

                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="absolute inset-0 flex flex-col"
                    onMouseMove={handleMouseMove}
                >
                    <div className="flex justify-between items-center p-8 border-b dark:border-white/10 border-black/5">
                        <div className="flex items-center gap-4">
                            <Grid className="dark:text-white text-ink" />
                            <h2 className="text-2xl font-black dark:text-white text-ink uppercase tracking-tight">Project Vault</h2>
                        </div>
                        <button 
                            onClick={() => setShowArchive(false)}
                            className="p-2 rounded-full dark:hover:bg-white/10 hover:bg-black/5 transition-colors dark:text-white text-ink"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-12 gap-4 pb-4 border-b dark:border-white/10 border-black/5 font-mono text-[10px] uppercase dark:text-gray-500 text-gray-400 mb-4 tracking-widest">
                                <div className="col-span-1">Year</div>
                                <div className="col-span-4 md:col-span-3">Project</div>
                                <div className="col-span-3 hidden md:block">Category</div>
                                <div className="col-span-4 md:col-span-3">Stack</div>
                                <div className="col-span-3 md:col-span-2 text-right">Link</div>
                            </div>

                            <div className="space-y-2">
                                {PROJECTS.map((project, index) => (
                                    <motion.a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={project.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onMouseEnter={() => setHoveredProject(project)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                        className="grid grid-cols-12 gap-4 items-center py-6 border-b dark:border-white/5 border-black/5 group cursor-pointer hover:px-4 transition-all duration-300 rounded-xl dark:hover:bg-white/5 hover:bg-black/5"
                                    >
                                        <div className="col-span-1 font-mono text-xs dark:text-gray-500 text-gray-400">{project.year || "2024"}</div>
                                        <div className="col-span-4 md:col-span-3 font-bold text-lg dark:text-white text-ink group-hover:text-accent transition-colors uppercase tracking-tight">{project.title}</div>
                                        <div className="col-span-3 hidden md:block text-xs uppercase font-mono dark:text-gray-400 text-gray-600 tracking-wider">{project.category}</div>
                                        <div className="col-span-4 md:col-span-3 flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 2).map(t => (
                                                <span key={t} className="text-[10px] font-mono border dark:border-white/10 border-black/10 px-2 py-1 rounded-full dark:text-gray-400 text-gray-500">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="col-span-3 md:col-span-2 flex justify-end">
                                            <div className="p-2 rounded-full border dark:border-white/10 border-black/10 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all dark:text-white text-ink">
                                                <ExternalLink size={16} />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {hoveredProject && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                style={{
                                    left: springX,
                                    top: springY,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                                className="fixed z-[200] w-64 h-40 rounded-xl overflow-hidden pointer-events-none shadow-2xl border-2 dark:border-white/20 border-white hidden md:block"
                            >
                                <img 
                                    src={hoveredProject.imageUrl} 
                                    alt={hoveredProject.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md p-2 rounded text-center">
                                    <span className="text-white text-[10px] font-mono uppercase tracking-widest">Preview</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};
