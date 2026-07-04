import {
  Github,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  Command,
} from "lucide-react";
import { Language } from "../types";
import { translations } from "../data";

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GITHUB",
      url: "https://github.com/adityarachmansyach",
      icon: Github,
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/aditya-rahman-syach",
      icon: Linkedin,
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/adityarns_",
      icon: Instagram,
    },
  ];

  return (
    <footer
      id="main-app-footer"
      className="py-12 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 gap-8 items-center justify-between">
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
      </div>
    </footer>
  );
}
