import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HERO_SUBTITLE, HERO_TITLE } from '../constants';
import { NavigationSection } from '../types';

export const Hero: React.FC = () => {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <section id={NavigationSection.HERO} className="hero-shell">
    <div className="page-width hero-layout">
      <div className="hero-copy">
        <p className="hero-name">Amen Allah Youssef <span>/ Sousse, Tunisia</span></p>
        <h1 className="hero-title">Making language systems <em>earn their answers.</em></h1>
        <p className="hero-summary">{HERO_SUBTITLE}</p>
        <div className="hero-actions">
          <button className="button-solid" onClick={() => goTo(NavigationSection.WORK)}>See selected work <ArrowDownRight size={17} /></button>
          <a className="text-link" href="/Amen_Allah_Youssef_Resume.pdf" target="_blank" rel="noreferrer">Read résumé <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="hero-aside">
        <img src="/image/profile.png" alt={HERO_TITLE} width={1024} height={1024} />
        <div><span>Currently</span><strong>Researching reliable RAG,<br />retrieval and model evaluation.</strong></div>
      </div>
    </div>
  </section>;
};
