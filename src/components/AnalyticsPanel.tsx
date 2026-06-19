import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, TrendingUp, Users, RefreshCw, X, Play, Shield, Globe2, Layers, Cpu } from 'lucide-react';
import { Language, AnalyticsStats } from '../types';
import { translations, mockVisitorCountries } from '../data';

interface AnalyticsPanelProps {
  currentLang: Language;
  userEvents: { time: string; action: string; meta?: string }[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsPanel({
  currentLang,
  userEvents,
  activeSection,
  isOpen,
  onClose,
}: AnalyticsPanelProps) {
  const t = translations[currentLang];
  const [activeConcurrent, setActiveConcurrent] = useState(3);
  const [stats, setStats] = useState<AnalyticsStats>({
    viewsCount: 147,
    uniqueClicks: 32,
    bounceRate: 14.8,
    durationAvg: 112,
    pagePerformance: [
      { path: 'home', count: 54, name: { en: 'Home', id: 'Beranda' } },
      { path: 'about', count: 38, name: { en: 'About Dossier', id: 'Biografi' } },
      { path: 'projects', count: 29, name: { en: 'Selected Works', id: 'Artifak Proyek' } },
      { path: 'blog', count: 18, name: { en: 'Dev Journal', id: 'Log Artikel' } },
      { path: 'contact', count: 8, name: { en: 'Handshake Terminal', id: 'Kontak Handshake' } },
    ],
    visitorOrigins: mockVisitorCountries,
    liveStatus: 'ACTIVE',
  });

  const logsEndRef = useRef<HTMLDivElement | null>(null);

  // Auto Scroll logs list container to bottom
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [userEvents]);

  // Dynamic ticking simulating real-time concurrent active visualizers shifting as they explore
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConcurrent((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next < 2 ? 2 : next > 8 ? 7 : next;
      });

      // Shifting stats slightly for dynamic rendering
      setStats((prev) => ({
        ...prev,
        viewsCount: prev.viewsCount + (Math.random() > 0.7 ? 1 : 0),
        durationAvg: prev.durationAvg + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Update dynamic page views metrics as user switches active viewport coordinates
  useEffect(() => {
    setStats((prev) => {
      const performance = prev.pagePerformance.map((page) => {
        if (page.path === activeSection) {
          return { ...page, count: page.count + 1 };
        }
        return page;
      });

      return {
        ...prev,
        viewsCount: prev.viewsCount + 1,
        pagePerformance: performance,
      };
    });
  }, [activeSection]);

  if (!isOpen) return null;

  return (
    <div
      id="analytics-overlay-portal"
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex justify-end"
    >
      {/* Slide-out Sidebar Panel Container */}
      <div
        id="analytics-panel-container"
        className="w-full max-w-xl bg-white dark:bg-zinc-950 border-l border-black/10 dark:border-white/10 h-full overflow-y-auto flex flex-col justify-between"
      >
        {/* Panel Header */}
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Database className="w-5 h-5 text-black dark:text-neutral-300 animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase font-bold text-black dark:text-white">
              {t.analytics.title}
            </span>
          </div>

          <button
            id="close-analytics-btn"
            onClick={onClose}
            className="p-1.5 border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all bg-transparent focus:outline-none"
            title="Terminate Telemetry Portal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-8 flex-grow">
          {/* Tracking ID and standby status banner */}
          <div className="flex items-center justify-between border border-black/15 dark:border-white/10 p-4 bg-gray-50 dark:bg-zinc-900 font-mono text-[10px]">
            <div className="space-y-1">
              <p className="text-gray-400 uppercase">// {t.analytics.trackingId}</p>
              <p className="text-black dark:text-white font-bold uppercase">G-MONO-8378XF2</p>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-green-500 font-bold uppercase">{t.analytics.trackingActive}</span>
            </div>
          </div>

          {/* Concurrent Dynamics Counters */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Concurrent Active visualizers */}
            <div className="border border-black/10 dark:border-white/10 p-4 font-mono text-black dark:text-white">
              <div className="flex items-center justify-between text-gray-400 text-[10px] uppercase pb-2">
                <span>{t.analytics.realTime}</span>
                <Users className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <h4 className="text-5xl font-sans font-black tracking-tight leading-none">
                0{activeConcurrent}
              </h4>
              <p className="text-[9px] text-gray-400 uppercase pt-2">// {t.analytics.activeUsers}</p>
            </div>

            {/* Total Page views / cumulative tracking counts */}
            <div className="border border-black/10 dark:border-white/10 p-4 font-mono text-black dark:text-white">
              <div className="flex items-center justify-between text-gray-400 text-[10px] uppercase pb-2">
                <span>{t.analytics.uniqueVisitors}</span>
                <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <h4 className="text-5xl font-sans font-black tracking-tight leading-none">
                {stats.viewsCount}
              </h4>
              <p className="text-[9px] text-gray-400 uppercase pt-2">// TOTAL_CLICKS_TRACKED</p>
            </div>

            {/* Signal reflection / Bounce Rates */}
            <div className="border border-black/10 dark:border-white/10 p-4 font-mono text-black dark:text-white">
              <span className="text-gray-400 text-[10px] uppercase block pb-3">{t.analytics.bounceRate}</span>
              <h4 className="text-2xl font-sans font-black tracking-tight leading-none">
                {stats.bounceRate}%
              </h4>
              <p className="text-[9px] text-gray-400 uppercase pt-2">// SECTORS_SIGNAL_REFLECT</p>
            </div>

            {/* Avg Session timings */}
            <div className="border border-black/10 dark:border-white/10 p-4 font-mono text-black dark:text-white">
              <span className="text-gray-400 text-[10px] uppercase block pb-3">{t.analytics.avgTime}</span>
              <h4 className="text-2xl font-sans font-black tracking-tight leading-none">
                {stats.durationAvg}s
              </h4>
              <p className="text-[9px] text-gray-400 uppercase pt-2">// RETENTION_COEFFICIENT</p>
            </div>

          </div>

          {/* Page views relative ratios bar charts */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5" />
              <span>// {t.analytics.pageViews}</span>
            </h4>
            <div className="space-y-3 font-mono text-[10px]">
              {stats.pagePerformance.map((page) => {
                const max = Math.max(...stats.pagePerformance.map((p) => p.count));
                const widthRatio = `${(page.count / max) * 100}%`;
                const isSelected = page.path === activeSection;

                return (
                  <div key={page.path} className="space-y-1">
                    <div className="flex justify-between items-center text-gray-500">
                      <span className={`${isSelected ? 'text-black dark:text-white font-bold' : ''}`}>
                        [{page.path.toUpperCase()}] {page.name[currentLang]}
                      </span>
                      <span className="font-bold">{page.count} views</span>
                    </div>
                    {/* SVG ratio line bar container */}
                    <div className="w-full bg-gray-100 dark:bg-zinc-900 h-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${isSelected ? 'bg-black dark:bg-white border-r border-black dark:border-white' : 'bg-gray-400'}`}
                        style={{ width: widthRatio }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Geographical Origin Mapping */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase flex items-center space-x-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>// {t.analytics.origins}</span>
            </h4>
            <div className="divide-y divide-black/5 dark:divide-white/5 font-mono text-[10px]">
              {stats.visitorOrigins.map((origin) => {
                return (
                  <div key={origin.country} className="py-2.5 flex items-center justify-between text-gray-500">
                    <span className="flex items-center space-x-2">
                      <span>{origin.flag}</span>
                      <span>{origin.country.toUpperCase()}</span>
                    </span>
                    <span className="text-black dark:text-white font-bold">{origin.ratio}%</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Panel Footer: Stream Log Feed */}
        <div className="p-6 border-t border-black/10 dark:border-white/10 bg-gray-50 dark:bg-zinc-950/80 font-mono text-[10px]">
          <h4 className="text-gray-400 uppercase pb-3 flex items-center space-x-2">
            <Cpu className="w-3.5 h-3.5 animate-spin text-gray-500" />
            <span>{t.analytics.terminalLogs}</span>
          </h4>
          
          <div className="h-32 overflow-y-auto custom-scrollbar flex flex-col space-y-1.5 scroll-smooth pr-1">
            {userEvents.map((evt, idx) => (
              <div key={idx} className="flex space-x-2 items-start leading-relaxed text-gray-500">
                <span className="text-gray-400">[{evt.time}]</span>
                <span className="text-green-600 dark:text-green-500">{evt.action.toUpperCase()}</span>
                {evt.meta && <span className="text-black dark:text-white font-bold">[{evt.meta}]</span>}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        </div>

      </div>
    </div>
  );
}
