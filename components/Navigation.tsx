
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NavigationSection } from '../types';

interface NavigationProps {
  toggleTheme: () => void;
  isDark: boolean;
  isVisible: boolean; // Controlled by App (hidden when Vault is open)
}

// Reordered to match page flow: Hero -> About -> Work -> Contact
const navItems = [
  { label: 'About', id: NavigationSection.ABOUT },
  { label: 'Work', id: NavigationSection.WORK },
  { label: 'Contact', id: NavigationSection.CONTACT }
];

export const Navigation: React.FC<NavigationProps> = ({ toggleTheme, isDark, isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
            className={`
                flex items-center gap-4 py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-xl border shadow-2xl
                ${isDark 
                    ? 'bg-black/80 border-white/10 shadow-black/50' 
                    : 'bg-white/90 border-white/60 shadow-indigo-500/10'
                }
            `}
        >
            {/* Logo / Home Trigger */}
            <button 
                onClick={() => scrollToSection(NavigationSection.HERO)}
                className={`font-mono font-bold tracking-widest text-base mr-4 hover:opacity-70 transition-opacity ${isDark ? 'text-white' : 'text-ink'}`}
            >
                KA<span className="opacity-50">_SYS</span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            px-6 py-2.5 rounded-full text-sm font-bold transition-all
                            ${isDark 
                                ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                                : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                            }
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className={`w-[1px] h-8 mx-4 ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className={`
                    p-3 rounded-full transition-colors
                    ${isDark 
                        ? 'hover:bg-white/10 text-yellow-300' 
                        : 'hover:bg-black/5 text-indigo-600'
                    }
                `}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-3 rounded-full ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
                <Menu size={24} className={isDark ? 'text-white' : 'text-ink'} />
            </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-2xl`}
          >
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
                <X size={32} className={isDark ? 'text-white' : 'text-ink'} />
            </button>

            <div className="flex flex-col gap-10 text-center">
                {navItems.map((item, i) => (
                    <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-ink'}`}
                    >
                        {item.label}
                    </motion.button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
