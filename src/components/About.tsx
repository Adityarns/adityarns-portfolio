import { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldAlert,
  Terminal,
  Code2,
  Cpu,
  Database,
  Blocks,
  Sparkles,
  Atom,
  Layers,
  Server,
  Briefcase,
  GraduationCap,
  Megaphone,
} from "lucide-react";
import { Language } from "../types";
import { translations } from "../data";

interface AboutProps {
  currentLang: Language;
  registerUserEvent: (actionName: string, meta?: string) => void;
  scrollToSection: (id: string) => void;
}

// Custom Helper component to handle local image with Unsplash fallback gracefully
const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      onError={handleError}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};

export default function About({
  currentLang,
  registerUserEvent,
  scrollToSection,
}: AboutProps) {
  const t = translations[currentLang];
  const [downloadProgress, setDownloadProgress] = useState<
    "idle" | "compiling" | "success"
  >("idle");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "TypeScript / React",
      category: "frontend",
      level: 95,
      icon: Atom,
      desc: "Advanced state scheduling, custom compiler pipelines, component trees and responsive web paradigms.",
    },
    {
      name: "Tailwind CSS / Layouts",
      category: "design",
      level: 98,
      icon: Layers,
      desc: "Stark monochrome layout optimization, custom typography hierarchies, extreme variable fluid styling.",
    },
    {
      name: "Node.js / Express",
      category: "backend",
      level: 88,
      icon: Server,
      desc: "Secure rest routing, file-system buffers, lazy sdk loaders, and persistent memory caching.",
    },
    {
      name: "Vector Canvas Math",
      category: "ai",
      level: 90,
      icon: Cpu,
      desc: "Mathematical interpolation, trigonometry matrix calculation, low-latency render loops.",
    },
  ];

  const milestones = [
    {
      year: "2026 - PRESENT",
      title: "Fullstack Web Developer",
      company: "Codingcamp Powered by DBS Foundation",
      side: "right",
      desc: {
        en: "Advanced JavaScript, backend server architectures with Node.js & Express, relational modeling using PostgreSQL, clean code, and the capstone project Rekapin.",
        id: "JavaScript tingkat lanjut, arsitektur server backend Node.js & Express, permodelan relasional dengan PostgreSQL, kode bersih, dan proyek capstone Rekapin.",
      },
      icon: Code2,
      iconColor: "text-[#14b8a6]",
      iconBg: "bg-[#14b8a6]/10 border-[#14b8a6]/20",
      localImg: "/src/assets/images/DBS.jpeg",
      fallbackImg:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    },
    {
      year: "2025 - PRESENT",
      title: "General Secretary",
      company: "BSO Dimensi Web",
      side: "left",
      desc: {
        en: "Oversee administrative efficiency and organizational governance, managing documentation, coordination between divisions, and ensuring smooth operational workflows.",
        id: "Mengelola efisiensi administrasi dan tata kelola organisasi, mengarsipkan dokumen, mengoordinasikan antar divisi, dan memastikan kelancaran alur kerja operasional.",
      },
      icon: "/src/assets/experience/bsoLogo.png",
      iconColor: "text-[#14b8a6]",
      iconBg: "bg-[#14b8a6]/10 border-[#14b8a6]/20",
      localImg: "/src/assets/experience/bso.jpeg",
      fallbackImg:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
      year: "2025 - 2026",
      title: "Member",
      company: "KASTRAD HIMATIF",
      side: "right",
      desc: {
        en: "Focused on student advocacy, strategically communicating student perspectives to department authorities to foster a better academic environment.",
        id: "Fokus pada advokasi mahasiswa, secara strategis mengomunikasikan perspektif mahasiswa ke birokrasi jurusan untuk menciptakan lingkungan akademis yang lebih baik.",
      },
      icon: "/src/assets/experience/HimatifLogo.png",
      iconColor: "text-rose-500 dark:text-rose-400",
      iconBg: "bg-rose-500/10 border-rose-500/20",
      localImg: "/src/assets/experience/himatif.jpeg",
      fallbackImg:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const handleDossierDownload = () => {
    setDownloadProgress("compiling");
    registerUserEvent("DOWNLOAD_DOSSIER", "resume_compilation");

    // Immersive tactile simulation for assembling professional resume
    setTimeout(() => {
      setDownloadProgress("success");
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
I'm an undergraduate Computer Science student with a passion for backend development.
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
  * Facilitated discussion forums for association members and Computer Science students.

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
      const blob = new Blob([dossierContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ADITYA_RAHMAN_RESUME.txt";
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
        <div
          id="about-details-col"
          className="lg:col-span-6 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-4">
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
            {downloadProgress === "idle" && (
              <button
                id="compile-resume-btn"
                onClick={handleDossierDownload}
                className="px-5 py-3 border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black font-mono text-xs tracking-widest transition-all duration-300 focus:outline-none flex items-center space-x-3"
              >
                <Terminal className="w-4 h-4" />
                <span>{t.about.cvBtn.toUpperCase()}</span>
              </button>
            )}

            {downloadProgress === "compiling" && (
              <div className="border border-yellow-500/50 p-4 font-mono text-xs text-yellow-600 dark:text-yellow-400 space-y-2 max-w-md animate-pulse">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 animate-spin" />
                  <span className="font-bold">
                    ASSEMBLING SYSTEM DOSSIER...
                  </span>
                </div>
                <div className="w-full bg-yellow-500/10 h-1.5 overflow-hidden">
                  <div className="bg-yellow-500 h-full w-2/3 animate-progress-bar" />
                </div>
                <p className="text-[10px] text-yellow-600/70 dark:text-yellow-400/70">
                  READING CHRONOLOGY // SEALING ENCRYPTED BLOB METADATA
                </p>
              </div>
            )}

            {downloadProgress === "success" && (
              <div className="border border-gradient p-4 font-mono text-xs text-[#14b8a6] border-[#14b8a6] space-y-2 max-w-md">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold">DOSSIER BUFFER DEPLOYED</span>
                </div>
                <p className="text-[11px] leading-snug">
                  SYSTEM_DOSSIER_CORE.txt has been transmitted successfully.
                  Check your browser downloads directory.
                </p>
                <button
                  id="recompile-cv-btn"
                  onClick={() => setDownloadProgress("idle")}
                  className="text-black dark:text-white underline text-[10px] block font-bold transition-all"
                >
                  RE-RUN PROTOCOL
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Specifications / System Specs details */}
        <div
          id="about-system-specs"
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="border border-black/10 dark:border-white/5 rounded-2xl p-6 md:p-8 bg-neutral-50/50 dark:bg-zinc-950/20 backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
              <span className="font-mono text-[10px] text-[#14b8a6] font-bold uppercase tracking-widest">
                Aditya's card
              </span>
              <span className="font-mono text-[10px] text-[#14b8a6] font-bold">
                STATUS: STANDBY
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  IDENTIFIER
                </p>
                <p className="font-sans font-black text-sm text-black dark:text-white leading-tight">
                  Aditya Rahman Syach
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  SPECIALIZATION
                </p>
                <p className="font-sans font-black text-sm text-[#14b8a6] leading-tight uppercase">
                  Backend Architect
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  ACADEMIC LEVEL
                </p>
                <p className="font-sans font-black text-sm text-black dark:text-white leading-tight uppercase">
                  Computer Science
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  INSTITUTION
                </p>
                <p className="font-sans font-black text-sm text-black dark:text-white leading-tight uppercase">
                  UIN SGD Bandung
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  SYSTEM METRIC (GPA)
                </p>
                <p className="font-sans font-black text-sm text-black dark:text-white leading-tight">
                  3.91 / 4.00
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 uppercase leading-none mb-1">
                  PRIMARY focus
                </p>
                <p className="font-sans font-black text-sm text-black dark:text-white leading-tight uppercase">
                  Node.js & DevOps
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center space-x-3 text-[10px] font-mono text-gray-400">
              <Cpu className="w-4 h-4 text-[#14b8a6] animate-pulse" />
              <span>
                Dossier indexing active under secure compiler G-SYS-83
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Alternating Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-16 border-t border-black/10 dark:border-white/10">
        <div className="space-y-1.5 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-[#14b8a6]" />
              <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tight uppercase leading-none pb-1 border-b-2 border-black dark:border-white inline-block">
                {t.about.experience}
              </h3>
            </div>
          </div>
        </div>

        {/* Timeline body container */}
        <div className="relative mt-16">
          {/* Central timeline line - only visible on md+ screen */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#14b8a6]/10 via-[#14b8a6]/40 to-[#14b8a6]/10 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((item, index) => {
              const isLeft = item.side === "left";

              // Cek apakah item.icon berupa string path gambar atau komponen Lucide
              const isImageIcon = typeof item.icon === "string";
              const IconComponent = !isImageIcon ? (item.icon as any) : null;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                >
                  {/* Glowing central timeline node bead on md+ only */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-[#14b8a6] shadow-[0_0_10px_rgba(20,184,166,0.6)] z-20 hidden md:block transition-transform duration-300 hover:scale-125" />

                  {/* Left Column Box */}
                  <div
                    className={`w-full md:w-[46%] ${isLeft ? "order-1" : "order-2 md:order-1"}`}
                  >
                    {isLeft ? (
                      /* Card Content */
                      <div className="group bg-neutral-950 dark:bg-zinc-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-white/5 hover:border-[#14b8a6]/30 transition-all duration-300 relative">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor} shrink-0`}
                          >
                            {isImageIcon ? (
                              <img
                                src={item.icon as string}
                                alt={item.company}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              IconComponent && (
                                <IconComponent className="w-10 h-10 animate-pulse" />
                              )
                            )}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-sans font-black text-base text-white tracking-tight leading-tight uppercase">
                              {item.title}
                            </h4>
                            <p className="font-sans font-bold text-xs text-[#14b8a6] uppercase tracking-wide">
                              {item.company}
                            </p>
                            <p className="font-mono text-[10px] text-gray-400">
                              {item.year}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
                          {item.desc[currentLang]}
                        </p>
                      </div>
                    ) : (
                      /* Image Box */
                      <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900 group aspect-[4/3] md:aspect-[3/2]">
                        <ImageWithFallback
                          src={item.localImg}
                          fallbackSrc={item.fallbackImg}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column Box */}
                  <div
                    className={`w-full md:w-[46%] ${isLeft ? "order-2" : "order-1 md:order-2"}`}
                  >
                    {isLeft ? (
                      /* Image Box */
                      <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900 group aspect-[4/3] md:aspect-[3/2]">
                        <ImageWithFallback
                          src={item.localImg}
                          fallbackSrc={item.fallbackImg}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale transition-all duration-705 group-hover:grayscale-0 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      /* Card Content */
                      <div className="group bg-neutral-950 dark:bg-zinc-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-white/5 hover:border-[#14b8a6]/30 transition-all duration-300 relative">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor} shrink-0`}
                          >
                            {isImageIcon ? (
                              <img
                                src={item.icon as string}
                                alt={item.company}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              IconComponent && (
                                <IconComponent className="w-10 h-10 animate-pulse" />
                              )
                            )}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-sans font-black text-base text-white tracking-tight leading-tight uppercase">
                              {item.title}
                            </h4>
                            <p className="font-sans font-bold text-xs text-[#14b8a6] uppercase tracking-wide">
                              {item.company}
                            </p>
                            <p className="font-mono text-[10px] text-gray-400">
                              {item.year}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
                          {item.desc[currentLang]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decoupled Interactive Technical Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-16 border-t border-black/10 dark:border-white/10">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-[#14b8a6] animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tight uppercase leading-none">
                  {t.about.techStack}
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              const isSelected = selectedSkill === skill.name;
              return (
                <button
                  key={skill.name}
                  id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  onClick={() => {
                    setSelectedSkill(isSelected ? null : skill.name);
                    registerUserEvent("CLICK_SKILL_MATRIX", skill.name);
                  }}
                  className={`p-5 border text-left transition-all duration-300 group focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black shadow-lg scale-[1.01]"
                      : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-neutral-50/50 dark:bg-neutral-900/15 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30"
                  }`}
                >
                  <div className="flex items-center pointer-events-none mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded border transition-colors duration-300 ${
                          isSelected
                            ? "bg-neutral-900 border-neutral-800 dark:bg-neutral-100 dark:border-neutral-200 text-white dark:text-black"
                            : "bg-white border-neutral-200 dark:bg-zinc-900 dark:border-neutral-800 text-neutral-500 group-hover:text-black dark:group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                      </div>
                      <span className="font-sans font-extrabold text-sm tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-[2px] overflow-hidden pointer-events-none">
                    <div
                      className={`h-full transition-all duration-500 ${isSelected ? "bg-white dark:bg-black" : "bg-[#14b8a6]"}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Expandable compile directives */}
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
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
