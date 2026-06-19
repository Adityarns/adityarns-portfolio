import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Database, Bell, Github, Linkedin, Instagram, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
  unreadNotifications: number;
  toggleTelemetry: () => void;
  showTelemetry: boolean;
  toggleNotifications: () => void;
  showNotifications: boolean;
}

export default function Header({
  currentLang,
  setLang,
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
  unreadNotifications,
  toggleTelemetry,
  showTelemetry,
  toggleNotifications,
  showNotifications,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-app-header"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 transition-all duration-300"
    >
      <div 
        className={`w-full px-6 py-3 flex items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-[0_12px_45px_-8px_rgba(0,0,0,0.12)] border-neutral-200/80 dark:border-neutral-800/80'
            : 'bg-white/80 dark:bg-black/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-neutral-200/50 dark:border-neutral-800/40'
        }`}
      >
        {/* Modern Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => handleNavClick('hero')}
          className="font-sans text-lg md:text-xl tracking-tight font-black text-black dark:text-white flex items-center space-x-1 hover:opacity-80 transition-all duration-300 focus:outline-none"
        >
          <span className="font-extrabold">Portfolio</span>
          <FileText className="w-4.5 h-4.5 text-black dark:text-white shrink-0" />
        </button>

        {/* Desktop Central Navigation Menu */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-xs lg:text-[13px] font-medium tracking-tight transition-all duration-300 relative py-1 focus:outline-none ${
                activeSection === item.id
                  ? 'text-black dark:text-white font-bold'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white rounded-full animate-scale-x" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls & Social Icons Row */}
        <div id="header-action-controls" className="hidden md:flex items-center space-x-4">
          
          {/* Social Icons matching Screenshot */}
          <div className="flex items-center space-x-3.5 pr-3.5 border-r border-neutral-200 dark:border-neutral-800">
            <a
              href="https://github.com/adityarachmansyach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rahman-syach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-colors duration-200"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-[#e1306c] dark:hover:text-[#e1306c] transition-colors duration-200"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Multilingual Switch */}
          <button
            id="language-toggle-btn"
            onClick={() => setLang(currentLang === 'en' ? 'id' : 'en')}
            className="p-1 px-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-gray-500 dark:text-gray-400 hover:border-black dark:hover:border-white transition-all flex items-center space-x-1 font-mono text-[10px] uppercase tracking-wider cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang}</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-gray-500 dark:text-gray-400 hover:border-black dark:hover:border-white transition-all cursor-pointer"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Nav Trigger & Panel Row */}
        <div id="mobile-controls-row" className="flex md:hidden items-center space-x-2">
          {/* Multilingual Switch Mobile */}
          <button
            id="mobile-language-toggle-btn"
            onClick={() => setLang(currentLang === 'en' ? 'id' : 'en')}
            className="p-1 px-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-gray-500 dark:text-gray-400 hover:border-black dark:hover:border-white transition-all flex items-center space-x-1 font-mono text-[10px] uppercase tracking-wider"
          >
            <span>{currentLang}</span>
          </button>
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            id="mobile-menu-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full border border-black dark:border-white text-black dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="md:hidden mt-2 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl rounded-2xl py-5 px-4 z-30 transition-all duration-300"
        >
          <nav id="mobile-drawer-nav" className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-left text-sm tracking-tight p-2.5 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-bold pl-4'
                    : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Mobile Socials */}
          <div className="flex items-center justify-center space-x-6 pt-5 mt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <a href="https://github.com/adityarachmansyach" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-rahman-syach" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
