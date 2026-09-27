import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationSection } from '../types';

interface NavigationProps { toggleTheme: () => void; isDark: boolean; isVisible: boolean; }
const items = [['About', NavigationSection.ABOUT], ['Experience', NavigationSection.EXPERIENCE], ['Work', NavigationSection.WORK], ['Contact', NavigationSection.CONTACT]] as const;

export const Navigation: React.FC<NavigationProps> = ({ isVisible }) => {
  const [open, setOpen] = useState(false);
  const scroll = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  if (!isVisible) return null;
  return <nav className="site-nav">
    <div className="page-width nav-inner">
      <button className="wordmark" onClick={() => scroll(NavigationSection.HERO)}>AAY<span>.</span></button>
      <div className="nav-links">{items.map(([label, id]) => <button key={id} onClick={() => scroll(id)}>{label}</button>)}<a href="/Amen_Allah_Youssef_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {open && <div className="nav-drawer">{items.map(([label, id]) => <button key={id} onClick={() => scroll(id)}>{label}</button>)}<a href="/Amen_Allah_Youssef_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a></div>}
  </nav>;
};
