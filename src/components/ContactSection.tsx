import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Instagram, 
  ArrowUpRight, 
  Phone, 
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#020617] text-slate-100 overflow-hidden">
      
      {/* Top curved morph transition from previous light section */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 overflow-hidden pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-[#F1F5F9] fill-current"
        >
          <path d="M0,0 C300,90 700,10 1200,85 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* GIANT BLUE GRADIENT MORPH BLOB IN BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-[#2563EB]/25 via-[#3B82F6]/20 to-[#60A5FA]/15 blur-[160px] rounded-[50%_50%_30%_70%/60%_40%_60%_40%] animate-morph-slow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-black tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET’S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6"
          >
            Have an Opportunity? <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
              Let’s Work Together.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl mx-auto mb-10"
          >
            Saya siap belajar, beradaptasi, dan memberikan kontribusi terbaik dalam setiap tanggung jawab yang diberikan.
          </motion.p>

          {/* CONTACT BUTTONS (Large morph pills) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16"
          >
            {/* Primary button: WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-btn-whatsapp"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 group"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)',
              }}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Secondary button: Email */}
            <a
              href={PERSONAL_INFO.emailUrl}
              id="contact-btn-email"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-slate-200 hover:text-white bg-[#0B1120]/80 backdrop-blur-xl border border-white/15 hover:border-blue-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* CONTACT GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          id="contact-glass-card"
          className="max-w-4xl mx-auto p-8 sm:p-10 lg:p-12 rounded-[36px] bg-[#0B1120]/80 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] shadow-blue-500/5 relative overflow-hidden"
        >
          {/* Subtle glow highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Identity Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                Informasi Kontak Langsung
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-blue-400 mb-4">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Clickable Contact Directory */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-600/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.whatsapp}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" />
              </a>

              {/* Email */}
              <a
                href={PERSONAL_INFO.emailUrl}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-600/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-400/50 hover:bg-pink-600/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">Instagram</div>
                    <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      {PERSONAL_INFO.instagram}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-300 transition-colors" />
              </a>

              {/* Threads */}
              <a
                href={PERSONAL_INFO.threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-400/50 hover:bg-sky-600/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold">
                    @
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">Threads</div>
                    <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {PERSONAL_INFO.threads}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 transition-colors" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
