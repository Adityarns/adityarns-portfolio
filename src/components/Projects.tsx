import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Compass,
  Github,
  ExternalLink,
  X,
  Cpu,
  Layers,
} from "lucide-react";
import { Language, Project } from "../types";
import { translations, projectsData } from "../data";

interface ProjectsProps {
  currentLang: Language;
  registerUserEvent: (actionName: string, meta?: string) => void;
}

export default function Projects({
  currentLang,
  registerUserEvent,
}: ProjectsProps) {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "mobile" | "ai" | "hardware"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categoriesSet: ("all" | "web" | "mobile" | "ai" | "hardware")[] = [
    "all",
    "web",
    "ai",
    "mobile",
    "hardware",
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    registerUserEvent("VIEW_PROJECT_DETAILS", project.id);
  };

  return (
    <section
      id="projects"
      className="py-24 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-none">
              {t.projects.title}
            </h2>
            <p className="font-mono text-xs text-gray-600 dark:text-neutral-400 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filtering Terminal Menu Tabs */}
          <div className="flex flex-wrap gap-2 border border-black/10 dark:border-white/10 p-1 bg-gray-50 dark:bg-zinc-950 max-w-max">
            {categoriesSet.map((cat) => (
              <button
                key={cat}
                id={`cat-tab-${cat}`}
                onClick={() => {
                  setActiveCategory(cat);
                  registerUserEvent("FILTER_PROJECTS", cat);
                }}
                className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                    : "text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {cat === "all" ? t.projects.all : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Works Responsive Card Grid */}
        <motion.div
          id="projects-bento-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4"
        >
          {filteredProjects.map((project, idx) => {
            const indexLabel = `0${idx + 1}`.slice(-2);
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleCardClick(project)}
                className="group relative border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white bg-neutral-50/50 dark:bg-zinc-950/20 cursor-pointer overflow-hidden transition-all duration-400 flex flex-col justify-between pointer-events-auto shadow-sm hover:shadow-lg rounded-xl"
              >
                {/* Image Section on Top */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-zinc-900">
                  <img
                    src={
                      project.imageUrl ||
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                    }
                    alt={project.title[currentLang]}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle index tag badge overlaid */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/75 backdrop-blur-sm text-[9px] font-mono text-[#14b8a6] uppercase tracking-widest border border-[#14b8a6]/20 rounded-md">
                    {indexLabel}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  {/* Title and Short Explanation */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-lg tracking-tight text-black dark:text-white group-hover:text-[#14b8a6] transition-colors uppercase leading-tight">
                      {project.title[currentLang]}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-450 leading-relaxed line-clamp-3">
                      {project.description[currentLang]}
                    </p>
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-neutral-400 text-[9px] font-mono tracking-wider border border-black/5 dark:border-white/5 uppercase rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-mono opacity-60 flex items-center pr-1 text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Immediate Action Link Buttons */}
                  <div className="flex gap-2.5 pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          registerUserEvent("LAUNCH_CODEBASE", project.id);
                        }}
                        className="flex-1 px-5 py-2.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-mono text-[11px] tracking-widest font-bold flex items-center justify-center space-x-2 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          registerUserEvent("LAUNCH_MODULE_URL", project.id);
                        }}
                        className="flex-1 py-1.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100 font-mono text-[9px] tracking-widest font-bold flex items-center justify-center space-x-1 transition-all hover:shadow-md rounded-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>
                          {currentLang === "id" ? "KUNJUNGI" : "VISIT"}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Inspect Mode Detail Drawer Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="project-detail-portal-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 dark:bg-black/95 backdrop-blur-md overflow-hidden"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 15 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-black border border-black dark:border-white w-full max-w-5xl relative shadow-2xl rounded-none cursor-auto max-h-[95vh] md:max-h-[90vh] flex flex-col"
              >
                {/* Close Drawer Button */}
                <button
                  id="close-drawer-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white text-black dark:text-white transition-all bg-white dark:bg-black focus:outline-none z-20"
                  title="Close Project Portal"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                <div className="p-6 md:p-8 overflow-y-auto w-full h-full flex flex-col space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LEFT COLUMN: Image & Tech Stack */}
                    <div className="flex flex-col space-y-6">
                      {/* Project Image */}
                      <div className="w-full aspect-[4/3] bg-neutral-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 overflow-hidden relative">
                        <img
                          src={
                            selectedProject.imageUrl ||
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                          }
                          alt={selectedProject.title[currentLang]}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {/* Tech specifications index tags row */}
                      <div className="space-y-3">
                        <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase flex items-center space-x-2">
                          <Compass className="w-3.5 h-3.5" />
                          <span>TECH STACK</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white border border-black/15 dark:bg-zinc-950 dark:border-white/10 text-black dark:text-white font-mono text-[10px] tracking-wide uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hyperlink Actions row */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-black/10 dark:border-white/10 mt-auto">
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              registerUserEvent(
                                "LAUNCH_CODEBASE",
                                selectedProject.id,
                              )
                            }
                            className="flex-1  px-5 py-2.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-mono text-[11px] tracking-widest font-bold flex items-center justify-center space-x-2 transition-all"
                          >
                            <Github className="w-4 h-4" />
                            <span>{t.projects.viewCode}</span>
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              registerUserEvent(
                                "LAUNCH_MODULE_URL",
                                selectedProject.id,
                              )
                            }
                            className="flex-1  px-5 py-2.5 border border-black/20 hover:border-black dark:border-white/10 dark:hover:border-white text-black dark:text-white font-mono text-[11px] tracking-widest flex items-center justify-center space-x-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{t.projects.viewLive}</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Info & Actions */}
                    <div className="flex flex-col justify-between space-y-6 h-full">
                      <div className="space-y-6">
                        {/* Core Title Details */}
                        <div className="space-y-3">
                          <h3 className="font-sans font-black text-2xl md:text-3.5xl tracking-tight text-[#14b8a6] uppercase leading-none">
                            {selectedProject.title[currentLang]}
                          </h3>
                          <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {selectedProject.description[currentLang]}
                          </p>
                        </div>

                        {/* Dynamic Highlights / Specifications Bullet Columns */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[10px] tracking-widest text-[#14b8a6] uppercase flex items-center space-x-2">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>{t.projects.highlights.toUpperCase()}</span>
                          </h4>
                          <ul className="flex flex-col gap-2 border border-black/5 dark:border-white/5 p-4 bg-gray-50 dark:bg-zinc-950 font-mono text-xs">
                            {selectedProject.keyHighlights[currentLang].map(
                              (highlight, hidx) => (
                                <li
                                  key={hidx}
                                  className="flex items-start space-x-3 leading-relaxed text-gray-500 dark:text-gray-400"
                                >
                                  <span className="text-black dark:text-white shrink-0">
                                    [{hidx + 1}]
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
