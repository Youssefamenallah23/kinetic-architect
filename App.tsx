
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Navigation } from './components/Navigation';
import { ArchiveGrid } from './components/ArchiveGrid';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { AICommandBar } from './components/AICommandBar';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state - initialize from localStorage or default to dark for first-time visitors
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    // If no saved preference, default to dark mode
    if (savedTheme === null) {
      return true;
    }
    return savedTheme === 'dark';
  });
  
  // Controls navbar visibility
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  // Initialize theme based on preference and persist to localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDark ? 'dark bg-void' : 'bg-gradient-to-b from-paper via-white to-indigo-50/50'} dark:text-white text-ink selection:bg-indigo-500/30 selection:text-indigo-200`}>
      <Navigation toggleTheme={toggleTheme} isDark={isDark} isVisible={!isVaultOpen} />
      
      <main className="relative z-0">
        <Hero />
        
        <TechTicker />
        
        <About />

        <Experience />
        
        <ArchiveGrid 
            onVaultOpen={() => setIsVaultOpen(true)} 
            onVaultClose={() => setIsVaultOpen(false)}
        />
        
        <Education />
        
        <Testimonials />

        <Blog />
        
        <Contact />
      </main>

      <AICommandBar />
      <Footer isDark={isDark} />
    </div>
  );
}
