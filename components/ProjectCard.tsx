
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Check for dark mode via document class to disable tilt in light mode
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    // Observer for class changes on html element
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Disable tilt range in light mode by returning 0
  const rotateX = useTransform(mouseY, [-0.5, 0.5], isDark ? ["15deg", "-15deg"] : ["0deg", "0deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], isDark ? ["-15deg", "15deg"] : ["0deg", "0deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDark) return; // Skip calculation in light mode

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: isDark ? 1000 : 'none',
      }}
      className="w-full h-96"
    >
      <motion.div
        layoutId={`card-${project.id}`}
        onClick={() => onClick(project)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`
            group relative h-full w-full cursor-pointer rounded-xl transition-all duration-500 
            dark:bg-neutral-900 bg-slate-200 
            border dark:border-white/5 border-slate-300
            hover:shadow-2xl hover:z-20 shadow-md
        `}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 overflow-hidden rounded-xl"
          style={{ 
             transform: "translateZ(0px)", 
             // Apply mask only in dark mode to fix clipping, removed in light for sharpness if needed
             WebkitMaskImage: "-webkit-radial-gradient(white, black)" 
          }} 
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="h-full w-full object-cover opacity-80 dark:opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t dark:from-black via-transparent to-transparent from-slate-900/50" />
        </div>

        {/* Content - Floating Effect */}
        <div 
          className="absolute bottom-0 w-full p-6"
          style={{ transform: isDark ? "translateZ(30px)" : "none" }}
        >
          <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-between items-end mb-2"
          >
               <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-indigo-600 px-2 py-1 rounded shadow-sm">
                 {project.category}
               </span>
          </motion.div>
         
          <h3 className="text-2xl font-bold text-white mb-2 shadow-black drop-shadow-md">{project.title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2 mb-4 font-medium drop-shadow-md">{project.description}</p>
          
          <div className="flex gap-2 flex-wrap">
            {project.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="text-[10px] font-bold bg-[#6366f1] text-white px-2 py-1 rounded shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Shine effect on hover (Dark mode only) */}
        {isDark && (
           <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0" style={{ transform: "translateZ(1px)" }} />
        )}
      </motion.div>
    </motion.div>
  );
};
