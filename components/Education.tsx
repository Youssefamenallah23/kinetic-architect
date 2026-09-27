import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { NavigationSection } from '../types';
export const Education: React.FC = () => <section id={NavigationSection.EDUCATION} className="section-shell border-t border-[var(--color-rule)]"><div className="page-width"><header className="section-heading"><p className="eyebrow">Education / 03</p><h2>Foundations.</h2></header><div className="timeline">{EDUCATION_DATA.map(item => <article key={item.id}><p>{item.year}</p><div><h3>{item.degree}</h3><h4>{item.institution}</h4><div className="skill-list">{item.focus.map(f => <span key={f}>{f}</span>)}</div></div></article>)}</div></div></section>;
