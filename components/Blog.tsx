
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_DATA } from '../constants';
import { NavigationSection } from '../types';
import { ArrowUpRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section id={NavigationSection.BLOG} className="py-32 px-4 md:px-8 dark:bg-black bg-slate-50 border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-center flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-accent" />
              <p className="font-mono text-[12px] dark:text-gray-500 text-indigo-900/60 tracking-widest uppercase">Intel_Stream_Active</p>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white text-ink uppercase tracking-tighter">Neural Logs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_DATA.map((post, i) => (
                <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col h-full"
                >
                    <a 
                      href={post.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col"
                    >
                        <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video shadow-lg" style={{ transform: "translateZ(0)", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
                            <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            <div className="absolute top-4 left-4 z-20 bg-white/95 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-xl text-[10px] font-mono font-black border dark:border-white/10 border-black/5 uppercase tracking-widest">
                                {post.date}
                            </div>
                        </div>

                        <div className="flex-1 p-8 rounded-3xl dark:bg-white/5 bg-white border dark:border-white/5 border-indigo-100 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.15)] flex flex-col">
                            <div className="flex gap-3 mb-6">
                                {post.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl md:text-2xl font-black dark:text-white text-ink mb-4 group-hover:text-accent transition-all leading-[1.1] uppercase tracking-tight">
                                {post.title}
                            </h3>
                            
                            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-8 line-clamp-3 font-medium">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center justify-between">
                                <div className="text-[10px] font-mono dark:text-gray-600 text-gray-400 group-hover:dark:text-white group-hover:text-indigo-900 transition-colors uppercase tracking-widest">
                                    Read_Time: {post.readTime}
                                </div>
                                <div className="p-3 rounded-full dark:bg-white/10 bg-black/5 group-hover:bg-accent group-hover:text-white transition-all transform group-hover:rotate-45">
                                   <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
};
