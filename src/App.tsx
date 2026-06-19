import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, ShieldCheck, X } from 'lucide-react';

import { Language, PushNotificationItem } from './types';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentLang, setLang] = useState<Language>('id'); // Default to Indonesian
  const [darkMode, setDarkMode] = useState(true); // Default to gorgeous high-end Dark Mode
  const [activeSection, setActiveSection] = useState('hero');
  
  // Real-time visitor logs tracker fed into Dynamic Telemetry Analytics panel
  const [userEvents, setUserEvents] = useState<{ time: string; action: string; meta?: string }[]>([]);
  
  // Side drawer visibility togglers
  const [showTelemetry, setShowTelemetry] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Notifications state
  const [isNotificationsSubscribed, setIsNotificationsSubscribed] = useState(false);
  const [notificationHistory, setNotificationHistory] = useState<PushNotificationItem[]>([]);
  
  // In-app alert popup overlay
  const [activePopupNotification, setActivePopupNotification] = useState<PushNotificationItem | null>(null);

  // Dynamic user event registrant
  const registerUserEvent = (action: string, meta?: string) => {
    const time = new Date().toLocaleTimeString();
    setUserEvents((prev) => [...prev, { time, action, meta }]);
  };

  // Theme Management Integration
  useEffect(() => {
    const rootClass = document.documentElement.classList;
    if (darkMode) {
      rootClass.add('dark');
    } else {
      rootClass.remove('dark');
    }
  }, [darkMode]);

  // Initial handshakes on mount setup
  useEffect(() => {
    // Initial events bootstrap
    registerUserEvent('VISIT_NODE_CONNECT', 'IP_VISITOR_CORE_ROUTED');
    registerUserEvent('ACTIVE_THEME', darkMode ? 'DARK' : 'LIGHT');
    registerUserEvent('DEEP_LINK_BOOT', currentLang.toUpperCase());

    // Watch scroll ranges to dynamically highlighted Active Navigation section links
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    registerUserEvent('TOGGLE_THEME', !darkMode ? 'DARK' : 'LIGHT');
  };

  const handleLangChange = (lang: Language) => {
    setLang(lang);
    registerUserEvent('CHANGE_LANGUAGE', lang.toUpperCase());
  };

  // Scroll smoothly scroll actions
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      registerUserEvent('NAVIGATE_COORDINATES', id.toUpperCase());
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Push notifications triggers emulator
  const handleContentPushSimulation = () => {
    const titles = {
      en: [
        'NEW ALGORITHM PROJECT RELEASED',
        'SYSTEM CORE V0.99 UPDATE DEPLOYED',
        'DESIGN LOGS ENTRY ADDED'
      ],
      id: [
        'PROYEK ALGORITMA BARU DIRILIS',
        'UPDATE SYSTEM CORE v0.99 DEPLOYED',
        'LOG DESAIN BARU TELAH DITAMBAHKAN'
      ]
    };

    const corpses = {
      en: [
        'Mono-Cosmic Neural weights matrices are now fully inspector-ready.',
        'Low latency canvas rendering speeds boosted across all mobile sectors.',
        'Read about void-philosophy mono-design concepts on Core Log archive.'
      ],
      id: [
        'Matriks saraf Mono-Kosmis kini sepenuhnya siap dianalisis di panel inspeksi.',
        'Efisiensi kecepatan render kanvas meningkat di semua sektor perangkat seluler.',
        'Simak konsep filosofi desain monokrom di arsip catatan utama pengembang.'
      ]
    };

    const randomIndex = Math.floor(Math.random() * titles.en.length);
    const categoryRandom: ('content' | 'project' | 'status')[] = ['project', 'status', 'content'];

    const simulatedAlert: PushNotificationItem = {
      id: `ALRT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      title: {
        en: titles.en[randomIndex],
        id: titles.id[randomIndex]
      },
      body: {
        en: corpses.en[randomIndex],
        id: corpses.id[randomIndex]
      },
      category: categoryRandom[randomIndex],
      timestamp: new Date().toLocaleTimeString(),
      isRead: false
    };

    setNotificationHistory((prev) => [simulatedAlert, ...prev]);
    setActivePopupNotification(simulatedAlert);
    registerUserEvent('EMIT_MOCK_PUSH_PAYLOAD', simulatedAlert.id);

    // Audio sound effect feedback simulation (pleasant high-frequency synth chirp)
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // Pitch wave A5
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35); // Smooth release
        
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch (e) {
        // Audio interface blocked/unavailable
      }
    }

    // Trigger standard native Chrome/Safari notification alerts too if permissions loaded
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(simulatedAlert.title[currentLang], {
        body: simulatedAlert.body[currentLang],
      });
    }

    // Auto dismiss high-contrast holographic popup after 7 seconds
    setTimeout(() => {
      setActivePopupNotification((current) => {
        if (current?.id === simulatedAlert.id) {
          return null;
        }
        return current;
      });
    }, 7000);
  };

  const markNotificationAsRead = (id: string) => {
    setNotificationHistory((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif))
    );
    registerUserEvent('MARK_READ_ALERT', id);
  };

  const clearNotificationsHistory = () => {
    setNotificationHistory([]);
    registerUserEvent('PURGE_NOTIFICATIONS');
  };

  const trackingUnreadCount = notificationHistory.filter((n) => !n.isRead).length;

  return (
    <div id="app-root-coordinates" className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* High-end interactive cursor coords for desktop */}
      <CustomCursor />

      {/* Main system header */}
      <Header
        currentLang={currentLang}
        setLang={handleLangChange}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        unreadNotifications={trackingUnreadCount}
        toggleTelemetry={() => {
          setShowTelemetry(!showTelemetry);
          registerUserEvent('TOGGLE_TELEMETRY_PANEL', !showTelemetry ? 'OPEN' : 'CLOSE');
        }}
        showTelemetry={showTelemetry}
        toggleNotifications={() => {
          setShowNotifications(!showNotifications);
          registerUserEvent('TOGGLE_ALERTS_PANEL', !showNotifications ? 'OPEN' : 'CLOSE');
        }}
        showNotifications={showNotifications}
      />

      {/* Primary visual sections blocks layout */}
      <main className="flex-grow">
        <Hero
          currentLang={currentLang}
          scrollToSection={scrollToSection}
          registerUserEvent={registerUserEvent}
        />
        <About
          currentLang={currentLang}
          registerUserEvent={registerUserEvent}
          scrollToSection={scrollToSection}
        />
        <Projects
          currentLang={currentLang}
          registerUserEvent={registerUserEvent}
        />
        <Contact
          currentLang={currentLang}
          registerUserEvent={registerUserEvent}
        />
      </main>

      {/* Core Social-Integrated footer */}
      <Footer currentLang={currentLang} />

    </div>
  );
}
