import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
export const Footer: React.FC<{ isDark: boolean }> = () => <footer className="site-footer"><div className="page-width"><span className="wordmark">AAY<span>.</span></span><p>AI / ML Research Engineer</p><div>{SOCIAL_LINKS.map(link => { const Icon = link.name === 'Github' ? Github : link.name === 'LinkedIn' ? Linkedin : Mail; return <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}><Icon size={18}/></a>; })}</div><small>© {new Date().getFullYear()} Amen Allah Youssef</small></div></footer>;
