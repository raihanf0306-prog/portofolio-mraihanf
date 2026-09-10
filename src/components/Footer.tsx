import React from 'react';
import { ArrowUp, Instagram, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#020617] border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-black text-white tracking-tight flex items-baseline">
            <span>MRF</span>
            <span className="text-[#3B82F6] ml-0.5">.</span>
          </div>
          <div className="text-sm font-semibold text-slate-200 mt-1">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            Admin Assistant • Administrative Support • Social Media
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-slate-300 transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Threads */}
          <a
            href={PERSONAL_INFO.threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads Profile"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 font-bold transition-all text-sm"
          >
            @
          </a>

          {/* Email */}
          <a
            href={PERSONAL_INFO.emailUrl}
            aria-label="Send Email"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-slate-300 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* WhatsApp */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600/20 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-300 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/40 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-sm group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Crafted with Modern Morphism UI.
      </div>
    </footer>
  );
};
