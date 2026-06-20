import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Terminal, Code2, Cpu, Database, Blocks, Sparkles, Atom, Layers, Server } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface AboutProps {
  currentLang: Language;
  registerUserEvent: (actionName: string, meta?: string) => void;
  scrollToSection: (id: string) => void;
}

export default function About({ currentLang, registerUserEvent, scrollToSection }: AboutProps) {
  const t = translations[currentLang];
  const [downloadProgress, setDownloadProgress] = useState<'idle' | 'compiling' | 'success'>('idle');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    { name: 'TypeScript / React', category: 'frontend', level: 95, icon: Atom, desc: 'Advanced state scheduling, custom compiler pipelines, component trees and responsive web paradigms.' },
    { name: 'Tailwind CSS / Layouts', category: 'design', level: 98, icon: Layers, desc: 'Stark monochrome layout optimization, custom typography hierarchies, extreme variable fluid styling.' },
    { name: 'Node.js / Express', category: 'backend', level: 88, icon: Server, desc: 'Secure rest routing, file-system buffers, lazy sdk loaders, and persistent memory caching.' },
    { name: 'Vector Canvas Math', category: 'ai', level: 90, icon: Cpu, desc: 'Mathematical interpolation, trigonometry matrix calculation, low-latency render loops.' },
  ];

  const milestones = [
    {
      year: '2026 - PRESENT',
      title: 'Fullstack Web Developer',
      company: 'Codingcamp Powered by DBS Foundation',
      desc: {
        en: 'Advanced JavaScript, backend server architectures with Node.js & Express, relational modeling using PostgreSQL, clean code, and the capstone project Rekapin.',
        id: 'JavaScript tingkat lanjut, arsitektur server backend Node.js & Express, permodelan relasional dengan PostgreSQL, kode bersih, dan proyek capstone Rekapin.'
      }
    },
    {
      year: '2025 - PRESENT',
      title: 'General Secretary',
      company: 'BSO Dimensi Web',
      desc: {
        en: 'Coordinated overall organization governance, acted as primary liaison for divisions, and structured systematic documentation archiving.',
        id: 'Mengoordinasikan tata kelola organisasi, bertindak sebagai penghubung divisi eksternal & internal, serta menstruktur pengarsipan dokumen.'
      }
    },
    {
      year: '2024 - PRESENT',
      title: 'S1 Computer Science (Informatics)',
      company: 'Islamic State University (UIN) SGD Bandung',
      desc: {
        en: 'Undergraduate student of Informatics Engineering maintaining a high GPA of 3.91.',
        id: 'Mahasiswa program studi S1 Teknik Informatika aktif yang mempertahankan IPK tinggi sebesar 3,91.'
      }
    },
    {
      year: '2024 - 2025',
      title: 'Member of Kastrad',
      company: 'HIMATIF UIN SGD Bandung',
      desc: {
        en: 'Provided academic advocacy and assistance to students alongside discussion forums on active engineering issues.',
        id: 'Memberikan layanan advokasi akademis dan bantuan kepada mahasiswa serta memfasilitasi forum diskusi masalah informatika.'
      }
    }
  ];

  const handleDossierDownload = () => {
    setDownloadProgress('compiling');
    registerUserEvent('DOWNLOAD_DOSSIER', 'resume_compilation');

    // Immersive tactile simulation for assembling professional resume
    setTimeout(() => {
      setDownloadProgress('success');
      const dossierContent = `
=========================================
CURRICULUM VITAE // ADITYA RAHMAN SYACH
=========================================
ROLE: BACKEND ENGINEER
EMAIL: rahmansyachaditya@gmail.com
ADDRESS: Jalan Merkuri Selatan XVIII No.14
LINKEDIN: linkedin.com/in/aditya-rahman-syach
PORTFOLIO: situssupercanggih.co.id

PROFILE:
I'm an undergraduate Informatics student with a passion for backend development.
Driven by a deep curiosity and a passion for clean code, I specialize in building
scalable server-side logic and robust database architectures using Node.js,
Express.js, and PostgreSQL.

EDUCATIONS:
- S1 Computer Science, Islamic State University SGD Bandung | 2024 - Present
  GPA: 3.91

EXPERIENCE:
- General Secretary // BSO Dimensi Web (2025 - Present)
  * Coordinate overall administration and governance of the organization.
  * Serve as primary liaison for internal communication between divisions.
  * Compile, archive, and distribute official organizational documents.

- Member of Kastrad // HIMATIF UIN SGD Bandung (2024 - 2025)
  * Provided advocacy and assistance to Computer Science students.
  * Facilitated discussion forums for association members and Informatics students.

CERTIFICATIONS & EDUCATION PROGRAMS:
- Fullstack Web Developer // Codingcamp Powered by DBS Foundation (Feb 2026 - Present)
  * JavaScript Basics & Advanced: OOP and async workflows.
  * Backend Development: Scalable architectures with Node.js & Express.
  * API & Data Management: RESTful API and database design with PostgreSQL.
  * Capstone Project (Rekapin): Real-world accounting and carbon emission tracking backend.

=========================================
STATUS: VERIFIED SECURE HANDSHAKE // OK
=========================================
      `;
      const blob = new Blob([dossierContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ADITYA_RAHMAN_RESUME.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 2200);
  };

  return (
    <section
      id="about"
      className="py-24 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Editorial Typography & Blueprint */}
        <div id="about-details-col" className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] text-gray-500 dark:text-gray-400 block">
              [ 01 // OVERVIEW ]
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-none">
              {t.about.title}
            </h2>
            <p className="font-mono text-xs text-gray-600 dark:text-neutral-400 italic">
              {t.about.subtitle}
            </p>
          </div>

          <div className="space-y-6 font-sans text-sm text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          {/* Dossier Download Simulator */}
          <div id="dossier-download-simulator" className="pt-4">
            {downloadProgress === 'idle' && (
              <button
                id="compile-resume-btn"
                onClick={handleDossierDownload}
                className="px-5 py-3 border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black font-mono text-xs tracking-widest transition-all duration-300 focus:outline-none flex items-center space-x-3"
              >
                <Terminal className="w-4 h-4" />
                <span>{t.about.cvBtn.toUpperCase()}</span>
              </button>
            )}

            {downloadProgress === 'compiling' && (
              <div className="border border-yellow-500/50 p-4 font-mono text-xs text-yellow-600 dark:text-yellow-400 space-y-2 max-w-md animate-pulse">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 animate-spin" />
                  <span className="font-bold">ASSEMBLING SYSTEM DOSSIER...</span>
                </div>
                <div className="w-full bg-yellow-500/10 h-1.5 overflow-hidden">
                  <div className="bg-yellow-500 h-full w-2/3 animate-progress-bar" />
                </div>
                <p className="text-[10px] text-yellow-600/70 dark:text-yellow-400/70">
                  READING CHRONOLOGY // SEALING ENCRYPTED BLOB METADATA
                </p>
              </div>
            )}

            {downloadProgress === 'success' && (
              <div className="border border-[#14b8a6] p-4 font-mono text-xs text-[#14b8a6] space-y-2 max-w-md">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold">DOSSIER BUFFER DEPLOYED</span>
                </div>
                <p className="text-[11px] leading-snug">
                  SYSTEM_DOSSIER_CORE.txt has been transmitted successfully. Check your browser downloads directory.
                </p>
                <button
                  id="recompile-cv-btn"
                  onClick={() => setDownloadProgress('idle')}
                  className="text-black dark:text-white underline text-[10px] block font-bold transition-all"
                >
                  RE-RUN PROTOCOL
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Chronology Timeline (Educations & Experience) */}
        <div id="about-chronology" className="lg:col-span-6 space-y-12">
          {/* Chronology Matrices */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs tracking-[0.2em] text-gray-500 dark:text-neutral-400 uppercase">
              // {t.about.experience.toUpperCase()}
            </h3>

            <div className="space-y-6 relative border-l border-black/10 dark:border-white/10 pl-6 ml-1">
              {milestones.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline point bead */}
                  <span className="absolute -left-[30px] top-1.5 w-2 h-2 bg-white dark:bg-black border-2 border-black dark:border-white transition-all group-hover:scale-150" />
                  
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] tracking-wider text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                    <h4 className="font-sans font-bold text-sm tracking-tight text-black dark:text-white uppercase leading-none">
                      {item.title}
                    </h4>
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      {item.company}
                    </p>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                      {item.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Decoupled Interactive Technical Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-16 border-t border-black/10 dark:border-white/10">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#14b8a6] uppercase font-bold block">
                [ 02 // TECHNICAL MATRIX ]
              </span>
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-[#14b8a6] animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tight uppercase leading-none">
                  {t.about.techStack}
                </h3>
              </div>
            </div>
            <p className="font-mono text-[11px] text-gray-400 max-w-sm leading-relaxed">
              * Dedicated technology frameworks and core language nodes deployed across architectural layers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              const isSelected = selectedSkill === skill.name;
              return (
                <button
                  key={skill.name}
                  id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => {
                    setSelectedSkill(isSelected ? null : skill.name);
                    registerUserEvent('CLICK_SKILL_MATRIX', skill.name);
                  }}
                  className={`p-5 border text-left transition-all duration-300 group focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? 'bg-black border-black text-white dark:bg-white dark:border-white dark:text-black shadow-lg scale-[1.01]'
                      : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-neutral-50/50 dark:bg-neutral-900/15 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30'
                  }`}
                >
                  <div className="flex items-center pointer-events-none mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded border transition-colors duration-300 ${
                        isSelected 
                          ? 'bg-neutral-900 border-neutral-800 dark:bg-neutral-100 dark:border-neutral-200 text-white dark:text-black' 
                          : 'bg-white border-neutral-200 dark:bg-zinc-900 dark:border-neutral-800 text-neutral-500 group-hover:text-black dark:group-hover:text-white'
                      }`}>
                        <Icon className="w-5 h-5 shrink-0" />
                      </div>
                      <span className="font-sans font-extrabold text-sm tracking-tight">{skill.name}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-[2px] overflow-hidden pointer-events-none">
                    <div
                      className={`h-full transition-all duration-500 ${isSelected ? 'bg-white dark:bg-black' : 'bg-[#14b8a6]'}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Expandable compile directives */}
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-[11px] leading-relaxed mt-4 pt-3 border-t border-white/20 dark:border-black/20 font-sans opacity-95 text-gray-300 dark:text-gray-700"
                    >
                      {skill.desc}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
