import React from 'react';
import { TECH_STACK } from '../constants';

export const TechTicker: React.FC = () => {
  const entries = [...TECH_STACK, ...TECH_STACK];
  return <div className="tech-rail" aria-label="Technical skills">
    {/* Screen-reader friendly version of the stack (the marquee below is decorative) */}
    <ul className="sr-only">
      {TECH_STACK.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
    <div aria-hidden="true" className="tech-rail__track">
      {entries.map((tech, index) => <span key={`${tech}-${index}`}>
        {index > 0 && <b>/</b>}{tech}
      </span>)}
    </div>
  </div>;
};
