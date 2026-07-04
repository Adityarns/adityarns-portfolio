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
import StackIcon, { type IconName } from "tech-stack-icons";

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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills: Array<{
    name: string;
    category: string;
    level: number;
    iconName: IconName;
    desc: string;
  }> = [
    {
      name: "JavaScript",
      category: "language",
      level: 95,
      iconName: "js" as IconName,
      desc: "ES6+, async/await workflows, prototypical inheritance, and advanced DOM manipulation.",
    },
    {
      name: "TypeScript",
      category: "language",
      level: 95,
      iconName: "typescript" as IconName,
      desc: "Static type checking, advanced generics, and seamless integration with React and Node.js.",
    },
    {
      name: "Java",
      category: "language",
      level: 60,
      iconName: "java" as IconName,
      desc: "Object-oriented programming, multithreading, and seamless integration with web technologies.",
    },
    {
      name: "Spring Boot",
      category: "language",
      level: 60,
      iconName: "spring" as IconName,
      desc: "Dependency injection, RESTful API development, and microservices architecture for scalable backend systems.",
    },
    {
      name: "React.js",
      category: "frontend",
      level: 92,
      iconName: "react" as IconName,
      desc: "Advanced state scheduling, custom compiler pipelines, component trees and responsive web paradigms.",
    },
    {
      name: "Node.js",
      category: "backend",
      level: 88,
      iconName: "nodejs" as IconName,
      desc: "Secure rest routing, file-system buffers, lazy sdk loaders, and persistent memory caching.",
    },
    {
      name: "Tailwind CSS",
      category: "design",
      level: 95,
      iconName: "tailwindcss" as IconName,
      desc: "Stark monochrome layout optimization, custom typography hierarchies, extreme variable fluid styling.",
    },
    {
      name: "PostgreSQL",
      category: "database",
      level: 85,
      iconName: "postgresql" as IconName,
      desc: "Advanced query optimization, transaction management, and data modeling for relational databases.",
    },
    {
      name: "MySQL",
      category: "database",
      level: 85,
      iconName: "mysql" as IconName,
      desc: "Advanced query optimization, transaction management, and data modeling for relational databases.",
    },
    {
      name: "Supabase",
      category: "database",
      level: 85,
      iconName: "supabase" as IconName,
      desc: "Real-time database capabilities, authentication, and seamless integration with modern web applications.",
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
                  Backend Development
                </p>
              </div>
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
                      : "border-black/10 dark:border-white/10 hover:border-[#14b8a6] dark:hover:border-[#14b8a6] bg-neutral-50/50 dark:bg-neutral-900/15 hover:bg-[#14b8a6]/5 hover:dark:bg-[#14b8a6]/5"
                  }`}
                >
                  <div className="flex items-center pointer-events-none mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded border transition-colors duration-300 ${
                          isSelected
                            ? "bg-neutral-900 border-neutral-800 dark:bg-neutral-100 dark:border-neutral-200"
                            : "bg-white border-neutral-200 dark:bg-zinc-900 dark:border-neutral-800"
                        }`}
                      >
                        <StackIcon
                          name={skill.iconName}
                          className="w-5 h-5 shrink-0"
                          variant="light"
                        />
                      </div>
                      <span
                        className={`font-sans font-extrabold text-sm tracking-tight transition-colors ${!isSelected && "group-hover:text-[#14b8a6]"}`}
                      >
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
