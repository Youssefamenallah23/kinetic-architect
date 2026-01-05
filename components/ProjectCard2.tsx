import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCard2Props {
  project: Project;
  onClick?: (project: Project) => void;
  isBlurred?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ProjectCard2: React.FC<ProjectCard2Props> = ({ 
  project, 
  onClick, 
  isBlurred = false,
  onHoverStart,
  onHoverEnd 
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group"
      style={{
        filter: isBlurred ? 'grayscale(100%) blur(2px)' : 'none',
        opacity: isBlurred ? 0.5 : 1,
        transition: 'filter 0.4s ease-out, opacity 0.4s ease-out',
      }}
    >
      <div 
        onClick={() => onClick?.(project)}
        className={`
          relative rounded-2xl overflow-hidden cursor-pointer
          dark:bg-neutral-900/80 bg-white
          backdrop-blur-sm
          border dark:border-white/5 border-gray-200
          transition-all duration-500 ease-out
          dark:hover:border-white/10 hover:border-gray-300
          hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-gray-300/50
          hover:-translate-y-1
        `}
      >
        {/* Image Container with gradient background */}
        <div 
          className="relative aspect-[16/10] overflow-hidden rounded-t-2xl"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          }}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Optional floating URL bar effect */}
          {project.link && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 right-3 dark:bg-neutral-800/90 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs dark:text-gray-400 text-gray-600 truncate ml-2">{project.link}</span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-extrabold dark:text-[white] text-[#6366f1] dark:group-hover:text-[#5340f1]  group-hover:text-[purple-600] transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Footer: Tech Icons & Link */}
          <div className="flex items-center justify-between pt-2">
            {/* Tech Stack Names */}
            <div className="flex items-center gap-2 flex-wrap">
              {project.techStack.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-md dark:bg-neutral-800 bg-gray-100 dark:text-gray-300 text-gray-700 dark:hover:bg-neutral-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-900 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(project);
              }}
              className="flex items-center gap-2 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300 group/link"
            >
              <span>Learn More</span>
              <svg 
                className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Grid wrapper component for 2 columns layout
interface ProjectGrid2Props {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export const ProjectGrid2: React.FC<ProjectGrid2Props> = ({ projects, onProjectClick }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ProjectCard2 
            project={project} 
            onClick={onProjectClick}
            isBlurred={hoveredId !== null && hoveredId !== project.id}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard2;
