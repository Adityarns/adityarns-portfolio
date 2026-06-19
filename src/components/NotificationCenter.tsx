import { BellRing, Check, X, Megaphone, CheckSquare, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PushNotificationItem } from '../types';
import { translations } from '../data';

interface NotificationCenterProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  notifications: PushNotificationItem[];
  onNotificationTrigger: () => void;
  isSubscribed: boolean;
  onSubscriptionChange: (subscribed: boolean) => void;
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
}

export default function NotificationCenter({
  currentLang,
  isOpen,
  onClose,
  notifications,
  onNotificationTrigger,
  isSubscribed,
  onSubscriptionChange,
  onMarkAsRead,
  onClearAll,
}: NotificationCenterProps) {
  const t = translations[currentLang];

  const handleSubscriptionToggle = async () => {
    if (!isSubscribed) {
      // Connect to standard browser Notifications API blocks
      if ('Notification' in window) {
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            onSubscriptionChange(true);
            new Notification('SYSTEM_ARCH.IO', {
              body: currentLang === 'en' 
                ? 'System notification matrix has been secured successfully.' 
                : 'Sistem notifikasi berhasil disinkronkan.',
              icon: '/favicon.ico',
            });
          } else {
            onSubscriptionChange(false);
          }
        } catch (e) {
          console.warn('Iframe sandbox constraints blocked Notification permission', e);
          // Fallback to true simulation
          onSubscriptionChange(true);
        }
      } else {
        onSubscriptionChange(true);
      }
    } else {
      onSubscriptionChange(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="notifications-overlay-portal"
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex justify-end"
    >
      {/* Slide-out Sidebar Control Container */}
      <div
        id="notification-panel-container"
        className="w-full max-w-md bg-white dark:bg-zinc-950 border-l border-black/10 dark:border-white/10 h-full overflow-y-auto flex flex-col justify-between"
      >
        {/* Panel Header */}
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <BellRing className="w-5 h-5 text-black dark:text-neutral-300 animate-bounce" />
            <span className="font-mono text-xs tracking-wider uppercase font-bold text-black dark:text-white">
              {t.notifications.title}
            </span>
          </div>

          <button
            id="close-notifications-btn"
            onClick={onClose}
            className="p-1.5 border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all bg-transparent focus:outline-none"
            title="Terminate alerts panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Panel Content Body */}
        <div className="p-6 space-y-8 flex-grow">
          {/* Subscription controls bar */}
          <div className="border border-black/10 dark:border-white/10 p-5 bg-gray-50 dark:bg-zinc-900/50 space-y-4">
            <div className="space-y-1">
              <h4 className="font-mono text-xs text-black dark:text-white font-bold uppercase">
                // SUBSCRIPTION RECEPTORS
              </h4>
              <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {t.notifications.subtitle}
              </p>
            </div>

            <button
              id="sub-receptor-toggle-btn"
              onClick={handleSubscriptionToggle}
              className={`w-full py-3 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                isSubscribed
                  ? 'bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800'
                  : 'border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              {isSubscribed ? (
                <>
                  <Check className="w-4.5 h-4.5 animate-pulse" />
                  <span>{t.notifications.allowed}</span>
                </>
              ) : (
                <span>{t.notifications.allow}</span>
              )}
            </button>
          </div>

          {/* Simulated content trigger push tool */}
          {isSubscribed && (
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                // CONTENT_GENERATOR_EMITTER
              </h4>
              <button
                id="trigger-sim-alert-btn"
                onClick={onNotificationTrigger}
                className="w-full px-4 py-3.5 border border-dashed border-black/20 hover:border-black text-black dark:border-white/10 dark:text-white dark:hover:border-white font-mono text-xs tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 bg-transparent"
              >
                <Megaphone className="w-4 h-4" />
                <span>{t.notifications.triggerBtn.toUpperCase()}</span>
              </button>
            </div>
          )}

          {/* Broadcaster History Archive List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              <span>// {t.notifications.latestTitle}</span>
              {notifications.length > 0 && (
                <button
                  id="clear-all-alerts"
                  onClick={onClearAll}
                  className="hover:text-red-500 font-bold flex items-center space-x-1"
                  title="Purge local notifications logs"
                >
                  <Trash className="w-3.5 h-3.5" />
                  <span>PURGE</span>
                </button>
              )}
            </div>

            <div id="archives-alerts-list" className="space-y-3">
              {notifications.length === 0 ? (
                <div className="border border-dashed border-black/10 dark:border-white/10 p-10 text-center font-mono text-xs text-gray-400">
                  {t.notifications.emptyList}
                </div>
              ) : (
                <AnimatePresence>
                  {notifications.map((alert) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`p-4 border font-mono text-[11px] leading-relaxed relative flex justify-between items-start ${
                        alert.isRead
                          ? 'border-black/5 dark:border-white/5 opacity-60 text-gray-500'
                          : 'border-black dark:border-white text-black dark:text-white bg-gray-50 dark:bg-zinc-900/10'
                      }`}
                    >
                      <div className="space-y-1.5 pr-6">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold uppercase">[{alert.category.toUpperCase()}]</span>
                          <span className="opacity-60 text-[10px]">{alert.timestamp}</span>
                        </div>
                        <h5 className="font-bold underline uppercase text-xs">
                          {alert.title[currentLang]}
                        </h5>
                        <p className="font-sans leading-normal text-xs">{alert.body[currentLang]}</p>
                      </div>

                      {/* Manual read status triggers */}
                      {!alert.isRead && (
                        <button
                          id={`mark-read-${alert.id}`}
                          onClick={() => onMarkAsRead(alert.id)}
                          className="absolute top-4 right-4 p-1 border border-black/15 hover:border-black dark:border-white/10 dark:hover:border-white text-black dark:text-white"
                          title="Mark payload read"
                        >
                          <CheckSquare className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

        {/* Panel Footer */}
        <div className="p-6 border-t border-black/10 dark:border-white/10 font-mono text-[10px] text-gray-400">
          <span>{t.notifications.statusActive}</span>
        </div>

      </div>
    </div>
  );
}
