import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, History, Trash2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface ContactProps {
  currentLang: Language;
  registerUserEvent: (actionName: string, meta?: string) => void;
}

interface LocalSavedPayload {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Contact({ currentLang, registerUserEvent }: ContactProps) {
  const t = translations[currentLang];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'transmitting' | 'success' | 'error'>('idle');
  const [sentPayloads, setSentPayloads] = useState<LocalSavedPayload[]>([]);

  // Load sent payloads history log from localstorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('system_sent_payloads');
      if (stored) {
        setSentPayloads(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('LocalStorage reads unavailable', e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      registerUserEvent('SEND_MESSAGE_FAILURE', 'invalid_email');
      setTimeout(() => setFormStatus('idle'), 4000);
      return;
    }

    setFormStatus('transmitting');
    registerUserEvent('SEND_MESSAGE_ATTEMPT', `${formData.name} <${formData.email}>`);

    // Simulate cryptographic payload transmissions
    setTimeout(() => {
      const newPayload: LocalSavedPayload = {
        id: `TXID-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString(),
      };

      try {
        const currentPayloads = [newPayload, ...sentPayloads];
        setSentPayloads(currentPayloads);
        localStorage.setItem('system_sent_payloads', JSON.stringify(currentPayloads));
      } catch (e) {
        console.warn('LocalStorage save failed', e);
      }

      setFormStatus('success');
      registerUserEvent('SEND_MESSAGE_SUCCESS', newPayload.id);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  const clearPayloadHistory = () => {
    try {
      localStorage.removeItem('system_sent_payloads');
      setSentPayloads([]);
      registerUserEvent('CLEAR_CONTACT_HISTORY');
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Descriptive metadata and details */}
        <div id="contact-details-col" className="lg:col-span-6 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] text-gray-500 dark:text-gray-400 block">
              [ 04 // SECURE_HANDSHAKE ]
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-none">
              {t.contact.title}
            </h2>
            <p className="font-mono text-xs text-gray-600 dark:text-neutral-400 max-w-xl">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="pt-6 space-y-4 font-mono text-[11px] text-gray-500">
            <div className="border border-black/10 dark:border-white/10 p-4 bg-gray-50 dark:bg-zinc-950 flex items-center space-x-3 max-w-md">
              <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <p className="font-bold text-black dark:text-white uppercase">[ SECURITY INDEX ACTIVE ]</p>
                <p className="opacity-75">All handshakes are processed via client local state storage matrices.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400 uppercase text-[9px]">// ADDRESS / ALAMAT</p>
                <p className="text-black dark:text-white font-mono font-bold uppercase text-[12px]">Jalan Merkuri Selatan XVIII No.14, Bandung, West Java, ID</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-[9px]">// EMAIL CORRESPONDENCE</p>
                <a href="mailto:rahmansyachaditya@gmail.com" className="text-black dark:text-white font-mono font-bold text-[12px] hover:underline block">rahmansyachaditya@gmail.com</a>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-[9px]">// LINKEDIN CONNECTIONS</p>
                <a href="https://www.linkedin.com/in/aditya-rahman-syach" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6] font-mono font-bold text-[12px] hover:underline block">linkedin.com/in/aditya-rahman-syach</a>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-[9px]">// PORTFOLIO NODE</p>
                <a href="https://www.situssupercanggih.co.id" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6] font-mono font-bold text-[12px] hover:underline block">situssupercanggih.co.id</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted Form and Handshake History */}
        <div id="contact-form-col" className="lg:col-span-6 space-y-10">
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Input Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={formStatus === 'transmitting'}
                placeholder={t.contact.placeholderName}
                className="w-full bg-transparent p-3.5 border border-black/15 dark:border-white/10 focus:outline-none focus:border-black dark:focus:border-white text-xs font-mono tracking-wide rounded-none disabled:opacity-50"
              />
            </div>

            {/* Input Email address field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                {t.contact.email}
              </label>
              <input
                type="type"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={formStatus === 'transmitting'}
                placeholder={t.contact.placeholderEmail}
                className="w-full bg-transparent p-3.5 border border-black/15 dark:border-white/10 focus:outline-none focus:border-black dark:focus:border-white text-xs font-mono tracking-wide rounded-none disabled:opacity-50"
              />
            </div>

            {/* Message payload text area */}
            <div className="space-y-2">
              <label htmlFor="message" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                disabled={formStatus === 'transmitting'}
                placeholder={t.contact.placeholderMessage}
                className="w-full bg-transparent p-3.5 border border-black/15 dark:border-white/10 focus:outline-none focus:border-black dark:focus:border-white text-xs font-mono tracking-wide rounded-none resize-none disabled:opacity-50"
              />
            </div>

            {/* Simulated Transmission Outputs */}
            <AnimatePresence mode="wait">
              {formStatus === 'transmitting' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border border-dashed border-black/30 dark:border-white/30 p-4 font-mono text-xs text-black dark:text-neutral-300 space-y-1 bg-gray-50/50 dark:bg-zinc-950/20"
                >
                  <p className="font-bold flex items-center space-x-1.5 animate-pulse">
                    <span>TRANSMITTING... // ENCRYPTING CORE BUFFERS</span>
                  </p>
                  <p className="text-[10px] opacity-70">PACKING: {formData.name.toUpperCase().substring(0,8)}... // STACK: ACTIVE</p>
                </motion.div>
              )}

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border border-green-500 text-green-600 dark:text-green-400 font-mono text-xs flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold uppercase">PAYLOAD RECEIVED</h5>
                    <p className="text-[10px] leading-snug">{t.contact.success}</p>
                  </div>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border border-red-500 text-red-600 dark:text-red-400 font-mono text-xs flex items-start space-x-3"
                >
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold uppercase">TRANSMISSION REJECTED</h5>
                    <p className="text-[10px] leading-snug">{t.contact.error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submission triggers */}
            {formStatus === 'idle' && (
              <button
                type="submit"
                id="submit-contact-form-btn"
                className="w-full px-6 py-4 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-zinc-205 font-mono text-xs tracking-widest font-bold flex items-center justify-center space-x-3 transition-all duration-300 shadow-md focus:outline-none"
              >
                <span>{t.contact.send.toUpperCase()}</span>
                <Send className="w-4.5 h-4.5" />
              </button>
            )}
          </form>

          {/* Persistent Handshakes History Queue List */}
          {sentPayloads.length > 0 && (
            <div id="contact-transmission-history" className="space-y-4 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                <span className="flex items-center space-x-1.5 font-bold text-black dark:text-white">
                  <History className="w-3.5 h-3.5 text-gray-500" />
                  <span>[ MONITORED TRANSMISSIONS INDEX ]</span>
                </span>
                <button
                  id="clear-payload-btn"
                  onClick={clearPayloadHistory}
                  className="hover:text-red-500 flex items-center space-x-1 text-gray-400 transition-all font-bold"
                  title="Purge local storage history"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>PURGE</span>
                </button>
              </div>

              {/* Log Queue Cards */}
              <div className="space-y-2 h-32 overflow-y-auto custom-scrollbar pr-2">
                {sentPayloads.map((payload) => (
                  <div
                    key={payload.id}
                    className="p-3 border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-950 font-mono text-[10px] text-gray-500 dark:text-gray-400 flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <p className="font-bold text-black dark:text-white">[ {payload.id} ]</p>
                      <p className="italic text-gray-500">FROM: {payload.name} ({payload.email})</p>
                      <p className="line-clamp-1 leading-snug">PAYLOAD_STRING: &quot;{payload.message}&quot;</p>
                    </div>
                    <span className="opacity-60">{payload.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
