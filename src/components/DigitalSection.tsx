import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  Instagram, 
  Share2, 
  BarChart3,
  Flame
} from 'lucide-react';
import { DIGITAL_SKILLS, PERSONAL_INFO } from '../data/portfolioData';

export const DigitalSection: React.FC = () => {
  return (
    <section id="digital" className="relative py-24 md:py-32 bg-[#0B1120] text-slate-100 overflow-hidden">
      
      {/* Top curved morph transition from previous light section */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 overflow-hidden pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-[#F1F5F9] fill-current"
        >
          <path d="M0,0 C400,100 800,20 1200,90 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Subtle blue gradient mesh in background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span>03 / DIGITAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Where Administration{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
              Meets Digital.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal"
          >
            Selain pengalaman administrasi, saya aktif mengembangkan kemampuan dalam bidang Content Creation dan Digital Marketing.
          </motion.p>
        </div>

        {/* DIGITAL ACHIEVEMENT MORPH CARDS (Two large asymmetric cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* CARD 01: 9K+ Organic Followers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative p-8 sm:p-10 rounded-[36px] bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-blue-500/5 group hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-blue-400" />
                <span>Organic Growth</span>
              </span>
              <span className="text-xs font-medium text-slate-400">Platform: Threads</span>
            </div>

            <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-3 mb-3">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                9K<span className="text-blue-400">+</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-200">
                Organic Followers
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed max-w-xl mb-8">
              Mengembangkan akun Threads secara organik hingga lebih dari 9.000 followers dalam waktu sekitar 3 bulan melalui konsistensi strategi konten, engagement audiens, dan storytelling yang relevan.
            </p>

            {/* Decorative mini analytics graph (purely visual SVG trajectory) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                <span className="flex items-center gap-1.5 text-blue-300">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Trajectory Pertumbuhan Akun
                </span>
                <span className="text-emerald-400 font-semibold">100% Organic Trend</span>
              </div>

              <div className="h-28 w-full relative">
                <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <path
                    d="M0,90 Q80,85 140,70 T260,40 T400,10 L400,100 L0,100 Z"
                    fill="url(#curveGradient)"
                  />
                  {/* Smooth curve line */}
                  <path
                    d="M0,90 Q80,85 140,70 T260,40 T400,10"
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Endpoint glow dot */}
                  <circle cx="400" cy="10" r="5" fill="#3B82F6" />
                  <circle cx="400" cy="10" r="9" fill="#60A5FA" opacity="0.4" className="animate-ping" />
                </svg>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                <span>Bulan 1 (Inisiasi)</span>
                <span>Bulan 2 (Akselerasi)</span>
                <span className="text-blue-300 font-semibold">Bulan 3 (9K+ Milestones)</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 02: 2 Digit Omzet via Threads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative p-8 sm:p-10 rounded-[36px] bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-blue-500/5 group hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Monetization & Conversion</span>
                </span>
                <span className="text-xs font-medium text-slate-400">Timeline: ~3 Bulan</span>
              </div>

              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-2">
                2 Digit
              </div>

              <div className="text-xl sm:text-2xl font-bold text-slate-200 mb-4">
                Omzet via Threads
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Menghasilkan omzet 2 digit dalam waktu sekitar 3 bulan melalui Threads dengan membangun kedekatan audiens, penawaran tepat sasaran, dan copywriting persuasif.
              </p>
            </div>

            {/* Decorative upward abstract graph */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-semibold text-emerald-400">Upward Abstract Momentum</span>
                <span>High Engagement</span>
              </div>
              
              {/* Abstract upward visual bars */}
              <div className="flex items-end justify-between gap-2 h-20 pt-2 px-2">
                <div className="w-full bg-blue-600/40 rounded-t-lg h-[25%]" />
                <div className="w-full bg-blue-600/50 rounded-t-lg h-[40%]" />
                <div className="w-full bg-blue-500/70 rounded-t-lg h-[60%]" />
                <div className="w-full bg-sky-400/80 rounded-t-lg h-[80%]" />
                <div className="w-full bg-gradient-to-t from-blue-500 to-emerald-400 rounded-t-lg h-[100%] shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
              </div>
              
              <div className="text-center text-[11px] text-slate-400 mt-2 font-medium">
                Pola konversi bertahap seiring pertumbuhan kepercayaan followers
              </div>
            </div>
          </motion.div>

        </div>

        {/* DIGITAL SKILL CLOUD (Floating Morph Bubbles) */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>DIGITAL SKILL CLOUD</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-start">
            {DIGITAL_SKILLS.map((skill, index) => {
              const isLarge = skill.size === 'lg';
              const isMedium = skill.size === 'md';

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`relative rounded-full cursor-default border transition-all duration-300 flex items-center gap-2 ${
                    isLarge
                      ? 'px-5 sm:px-6 py-3 text-sm sm:text-base font-bold bg-[#111C35]/90 border-blue-400/40 text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
                      : isMedium
                      ? 'px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold bg-[#0F172A]/80 border-white/15 text-slate-200 hover:border-sky-400/40 hover:text-white'
                      : 'px-3.5 sm:px-4 py-2 text-xs font-medium bg-[#0B1120]/70 border-white/10 text-slate-300 hover:border-white/25'
                  }`}
                  style={{
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className={`rounded-full ${isLarge ? 'w-2 h-2 bg-blue-400' : 'w-1.5 h-1.5 bg-sky-400'}`} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SOCIAL CTA ("See My Digital Presence") */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-blue-950/60 via-[#0B1120]/90 to-blue-950/60 border border-white/15 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              See My Digital Presence
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Kunjungi profil media sosial saya untuk melihat karya konten dan interaksi audiens secara nyata.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 w-full md:w-auto">
            {/* Threads Button */}
            <a
              href={PERSONAL_INFO.threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-6 py-3 rounded-2xl bg-black/60 hover:bg-black/90 border border-white/20 hover:border-white/40 text-white text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg group hover:scale-[1.02]"
            >
              {/* Threads Icon */}
              <span className="font-extrabold text-base tracking-tighter">@</span>
              <span>Threads ({PERSONAL_INFO.threads})</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Instagram Button */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-blue-600/30 hover:from-pink-600/50 hover:to-blue-600/50 border border-white/20 text-white text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg group hover:scale-[1.02]"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram ({PERSONAL_INFO.instagram})</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
