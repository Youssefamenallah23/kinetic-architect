import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { NavigationSection } from '../types';
export const Experience: React.FC = () => <section id={NavigationSection.EXPERIENCE} className="section-shell border-t border-[var(--color-rule)]"><div className="page-width"><header className="section-heading"><p className="eyebrow">Experience / 02</p><h2>Applied work, <em>grounded in evidence.</em></h2></header><div className="timeline">{EXPERIENCE_DATA.map(job => <article key={job.id}><p>{job.period}</p><div><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.description}</p><div className="skill-list">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></article>)}</div></div></section>;
