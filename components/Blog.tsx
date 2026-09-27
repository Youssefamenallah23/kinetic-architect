import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavigationSection } from '../types';
export const Blog: React.FC = () => <section id={NavigationSection.BLOG} className="section-shell border-t border-[var(--color-rule)]"><div className="page-width note-section"><p className="eyebrow">Notes / 05</p><h2>Thinking in public.</h2><p>Follow the repository stream for implementation notes and active experiments.</p><a className="text-link" href="https://github.com/Youssefamenallah23" target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={16}/></a></div></section>;
