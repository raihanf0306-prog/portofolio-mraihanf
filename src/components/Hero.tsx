import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Briefcase, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  CheckCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const profilePhoto = PERSONAL_INFO.avatarUrl;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* HERO LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Open to work badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              id="hero-open-to-work-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-bold tracking-wider text-white uppercase">
                {PERSONAL_INFO.openToWork}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="text-xs font-medium text-blue-300">
                {PERSONAL_INFO.workPreference}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <h1 
                id="hero-primary-headline"
                className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] mb-3"
              >
                Hi, I’m{' '}
                <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                  Muhammad
                </span>{' '}
                <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
                  Raihan Firdaus
                </span>
                <span className="text-[#3B82F6]">.</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight mt-2 mb-5">
                Administrative Support{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 font-extrabold">
                  with Digital Skills
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal mb-8">
                Saya memiliki pengalaman 5 tahun bekerja di lingkungan pendidikan dengan keahlian dalam administrasi, pelayanan informasi, koordinasi kegiatan, event, serta pengelolaan media sosial.
              </p>
            </motion.div>

            {/* Role Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 mb-9"
              id="hero-role-pills"
            >
              {PERSONAL_INFO.rolesList.map((role) => (
                <div
                  key={role}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-[#0B1120]/70 backdrop-blur-xl border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:border-blue-500/40 hover:text-white transition-all cursor-default flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{role}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#experience"
                id="hero-cta-explore"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-sm font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)',
                }}
              >
                <span>Explore Portfolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-connect"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-sm font-bold text-slate-200 hover:text-white bg-[#0B1120]/80 backdrop-blur-xl border border-white/15 hover:border-blue-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </a>
            </motion.div>
          </div>

          {/* HERO RIGHT COLUMN — PROFILE MORPH CARD */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Abstract blue morph blob behind photo */}
            <div 
              className="absolute w-[360px] h-[440px] sm:w-[420px] sm:h-[500px] bg-gradient-to-tr from-[#2563EB]/40 via-[#3B82F6]/30 to-[#60A5FA]/20 blur-3xl rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-slow pointer-events-none -z-10"
            />

            {/* Main Asymmetric Profile Morph Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              id="hero-profile-morph-card"
              className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] p-3.5 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] shadow-blue-600/10 group transition-transform duration-500 hover:scale-[1.01]"
              style={{
                borderRadius: '36px 80px 36px 80px',
              }}
            >
              {/* Inner Card Container */}
              <div 
                className="w-full h-full relative overflow-hidden bg-[#0B1120]/85 flex flex-col items-center justify-center text-center p-6 border border-white/10"
                style={{
                  borderRadius: '26px 70px 26px 70px',
                }}
              >
                {/* Light reflection gradient beam */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Profile Photo Display */}
                <div className="relative w-full h-full overflow-hidden rounded-[22px_66px_22px_66px]">
                  <img
                    src={profilePhoto}
                    alt="Muhammad Raihan Firdaus"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-[22px_66px_22px_66px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== window.location.origin + '/images/profile.jpg') {
                        target.src = '/images/profile.jpg';
                      } else if (target.src !== window.location.origin + '/images/profile.webp') {
                        target.src = '/images/profile.webp';
                      }
                    }}
                  />
                </div>
              </div>

              {/* FLOATING CARD 1: 5 Years Experience */}
              <div
                className="absolute -top-4 -left-6 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.4)] shadow-blue-500/10 flex items-center gap-3 animate-float-subtle"
                style={{ animationDelay: '0s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white leading-tight whitespace-nowrap">5 Years</div>
                  <div className="text-[11px] font-medium text-slate-300 whitespace-nowrap">Experience</div>
                </div>
              </div>

              {/* FLOATING CARD 2: 9K+ Organic Followers */}
              <div
                className="absolute top-1/2 -right-6 sm:-right-8 px-4 py-2.5 rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.4)] shadow-blue-500/10 flex items-center gap-3 animate-float-subtle"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-sky-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white leading-tight">9K+</div>
                  <div className="text-[11px] font-medium text-slate-300">Organic Followers</div>
                </div>
              </div>

              {/* FLOATING CARD 3: BNSP Certified */}
              <div
                className="absolute -bottom-4 left-4 sm:left-6 px-4 py-2.5 rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.4)] shadow-blue-500/10 flex items-center gap-3 animate-float-subtle"
                style={{ animationDelay: '3s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white leading-tight whitespace-nowrap">BNSP Certified</div>
                  <div className="text-[11px] font-medium text-slate-300 whitespace-nowrap">Content Creator</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="w-full flex flex-col items-center justify-center pt-8 select-none">
        <a
          href="#about"
          id="hero-scroll-indicator"
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-500/40 group-hover:border-blue-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
