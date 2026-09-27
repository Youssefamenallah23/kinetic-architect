import React from 'react';
import { ABOUT_TEXT, TECH_STACK } from '../constants';
import { NavigationSection } from '../types';
export const About: React.FC = () => <section id={NavigationSection.ABOUT} className="section-shell about-section"><div className="page-width about-grid"><p className="eyebrow">Profile / 00</p><div><h2>Systems over spectacle.</h2><p className="body-large">{ABOUT_TEXT}</p><div className="skill-list">{TECH_STACK.map(skill => <span key={skill}>{skill}</span>)}</div></div></div></section>;
