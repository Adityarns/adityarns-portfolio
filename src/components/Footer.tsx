import { Github, Twitter, Linkedin, Youtube, ExternalLink, Command } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/adityarachmansyach', icon: Github },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/aditya-rahman-syach', icon: Linkedin },
    { name: 'TWITTER', url: 'https://twitter.com/adityar_syach', icon: Twitter },
  ];

  return (
    <footer
      id="main-app-footer"
      className="py-12 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
        
        {/* Left Column: System Status metadata */}
        <div className="md:col-span-4 space-y-2 text-center md:text-left">
          <p className="font-mono text-xs font-bold uppercase flex items-center justify-center md:justify-start space-x-1.5 text-black dark:text-white">
            <Command className="w-4.5 h-4.5" />
            <span>SYSTEM_ARCH.IO // {year}</span>
          </p>
          <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest leading-relaxed">
            STARK MONOCHROME VECTORS. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Center Column: Social Network Links */}
        <div className="md:col-span-4 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 flex items-center space-x-1.5"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{social.name}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>
            );
          })}
        </div>

        {/* Right Column: Encrypted handshake indicator */}
        <div className="md:col-span-4 font-mono text-[9px] text-gray-400 text-center md:text-right space-y-1">
          <p className="uppercase tracking-widest text-black dark:text-white font-bold">
            TIME_COORDINATES: UTC_P_7_EAST
          </p>
          <p className="opacity-70 uppercase tracking-wide">
            FRAME RATE COMPRESSION: STANDARD // VECTORS INTENSITY: 100%
          </p>
        </div>

      </div>
    </footer>
  );
}
