import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeroProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
  registerUserEvent: (actionName: string, meta?: string) => void;
}

export default function Hero({ currentLang, scrollToSection, registerUserEvent }: HeroProps) {
  const t = translations[currentLang];
  
  // Dynamic typing simulator for developer roles starting with "Da"
  const [typedRole, setTypedRole] = useState('Da');
  
  useEffect(() => {
    const roles = [
      'Backend Engineer',
      'Data Scientist',
      'Developer',
      'Designer',
      'Data Architect'
    ];
    let roleIdx = 0;
    let charIdx = 2; // start after 'Da'
    let isDeleting = false;
    let typingTimer: NodeJS.Timeout;

    const tick = () => {
      const fullWord = roles[roleIdx];
      
      if (isDeleting) {
        setTypedRole(fullWord.substring(0, charIdx));
        charIdx--;
      } else {
        setTypedRole(fullWord.substring(0, charIdx));
        charIdx++;
      }

      let delta = isDeleting ? 60 : 120;

      if (!isDeleting && charIdx > fullWord.length) {
        isDeleting = true;
        delta = 2000; // Pause at full word
      } else if (isDeleting && charIdx < 2) { // backtrack until "Da"
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delta = 500; // brief pause before typing next
      }

      typingTimer = setTimeout(tick, delta);
    };

    typingTimer = setTimeout(tick, 1000);
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden pt-28 pb-16 transition-colors duration-300"
    >
      {/* Clean high-end radial light vignette backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-50/70 via-white to-white dark:from-neutral-900/40 dark:via-black dark:to-black pointer-events-none z-0" />

      {/* Hero Visual Layout Grid Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pointer-events-none">
        
        {/* Left Side: Modern Typography Profile */}
        <div id="hero-left-content" className="flex flex-col items-start space-y-5 md:space-y-6 pointer-events-auto text-left order-2 lg:order-1 pt-4 lg:pt-0">
          
          {/* Welcome Tag Accent and Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-[#14b8a6] text-sm md:text-base font-bold tracking-tight font-sans"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14b8a6]"></span>
            </span>
            <span>Hello World, I'm</span>
          </motion.div>

          {/* Main Large Display Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-black tracking-tight leading-none text-neutral-900 dark:text-white"
          >
            Aditya Rahman S.
          </motion.h1>

          {/* Subtitle / Role Typing Simulator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-1 font-sans text-neutral-500 dark:text-neutral-400 text-lg md:text-xl font-medium min-h-[30px]"
          >
            <span>{typedRole}</span>
            <span className="w-[1px] h-[20px] bg-neutral-600 dark:bg-neutral-400 animate-pulse ml-0.5" />
          </motion.div>

          {/* Description statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-sans max-w-md leading-relaxed pr-4"
          >
            Informatics student with a passion for backend development. Driven by deep curiosity and a passion for clean code, I build scalable server-side systems and robust database architectures.
          </motion.p>

          {/* Interactive CTAs styled like Screenshot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap gap-4 pt-3"
          >
            <button
              id="hero-cta-btn"
              onClick={() => {
                registerUserEvent('CLICK_HERO_ABOUT_ME');
                scrollToSection('about');
              }}
              className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-150 text-white font-sans text-xs md:text-sm font-bold tracking-tight rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none cursor-pointer"
            >
              About Me
            </button>
            <button
              id="hero-downscroll-btn"
              onClick={() => {
                registerUserEvent('CLICK_HERO_PORTFOLIO');
                scrollToSection('projects');
              }}
              className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-154 text-white font-sans text-xs md:text-sm font-bold tracking-tight rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none cursor-pointer"
            >
              My Project
            </button>
          </motion.div>
        </div>

        {/* Right Side: Circular Portrait with Hand-drawn Glowing Wavy Outline Ring */}
        <div id="hero-right-content" className="flex items-center justify-center pointer-events-auto order-1 lg:order-2 py-6 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-85 md:h-85 flex items-center justify-center"
          >
            {/* The Wavy Hand-Drawn Glowing Active Ring SVG (custom-styled irregular wave imitating screenshot) */}
            <svg 
              className="absolute w-[108%] h-[108%] text-[#14b8a6] animate-[spin_50s_linear_infinite]" 
              viewBox="0 0 200 200" 
              fill="none"
            >
              <path
                d="M100 12C120.3 12 134.7 15.6 151.2 28.5C167.3 41.2 181.7 57.8 185.3 78.5C188.8 98.7 182.2 119.5 171.2 136.5C160.1 153.6 142.3 167.3 122.5 174C102.7 180.7 82.2 181.3 64.2 173C46.1 164.7 30 148.5 21.2 129C12.5 109.5 11 87.2 18.5 67.5C26 47.8 42.5 31.7 61.2 20.5C79.8 9.3 92.5 12 100 12Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_8px_rgba(20,184,166,0.65)]"
              />
            </svg>

            {/* Glowing Backdrop Ray */}
            <div className="absolute inset-2 bg-gradient-to-tr from-[#14b8a6]/5 to-[#14b8a6]/20 dark:from-[#14b8a6]/5 dark:to-[#14b8a6]/20 rounded-full blur-xl z-0 pointer-events-none" />

            {/* Circular Image Container & Grayscale Hover Trigger */}
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-neutral-100 dark:border-zinc-900 shadow-2xl relative z-10 bg-neutral-200 dark:bg-zinc-800">
              <img
                src="/src/assets/images/aditya_futuristic_portrait_1781882689143.jpg"
                alt="Aditya Rahman S."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-110 contrast-[1.03] hover:grayscale-0 transition-all duration-500 scale-102 hover:scale-100 cursor-crosshair"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
