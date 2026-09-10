import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Sparkles, 
  Users, 
  Check, 
  CheckCircle, 
  ArrowRight,
  Radio
} from 'lucide-react';
import { SKILL_CATEGORIES, CURRENTLY_OPEN_ROLES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#F1F5F9] text-slate-800 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span>05 / SKILLS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            What I Bring to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              the Team.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal"
          >
            Kombinasi disiplin administrasi terstruktur, adaptasi alat digital modern, serta kecakapan interpersonal yang solid.
          </motion.p>
        </div>

        {/* 3 LARGE MORPH PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Panel 1: ADMINISTRATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 overflow-hidden group"
          >
            {/* Big semi-transparent background watermark icon */}
            <div className="absolute -bottom-6 -right-6 text-blue-500/[0.07] pointer-events-none group-hover:text-blue-500/[0.12] transition-colors">
              <FileSpreadsheet className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <FileSpreadsheet className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                {SKILL_CATEGORIES[0].title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 mb-6 uppercase tracking-wider">
                Precision & Organization
              </p>

              <div className="space-y-2.5">
                {SKILL_CATEGORIES[0].skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Panel 2: DIGITAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-sky-300 transition-all duration-300 overflow-hidden group"
          >
            {/* Big semi-transparent background watermark icon */}
            <div className="absolute -bottom-6 -right-6 text-sky-500/[0.07] pointer-events-none group-hover:text-sky-500/[0.12] transition-colors">
              <Sparkles className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 mb-6 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                {SKILL_CATEGORIES[1].title}
              </h3>
              <p className="text-xs font-semibold text-sky-600 mb-6 uppercase tracking-wider">
                Tools & Growth Skills
              </p>

              <div className="space-y-2.5">
                {SKILL_CATEGORIES[1].skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-100/80 text-sky-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Panel 3: SOFT SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-indigo-300 transition-all duration-300 overflow-hidden group"
          >
            {/* Big semi-transparent background watermark icon */}
            <div className="absolute -bottom-6 -right-6 text-indigo-500/[0.07] pointer-events-none group-hover:text-indigo-500/[0.12] transition-colors">
              <Users className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                {SKILL_CATEGORIES[2].title}
              </h3>
              <p className="text-xs font-semibold text-indigo-600 mb-6 uppercase tracking-wider">
                Collaboration & Mindset
              </p>

              <div className="space-y-2.5">
                {SKILL_CATEGORIES[2].skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-100/80 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* CURRENTLY OPEN FOR (Horizontal Floating Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="currently-open-for-panel"
          className="relative p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-2xl border border-slate-900/[0.08] shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden"
        >
          {/* Subtle inner blue gradient hint */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-blue-50/60 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span>Active Candidate Status</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Currently Open For
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Saya terbuka untuk kesempatan bekerja dan berkolaborasi dalam lingkungan kerja yang memungkinkan saya menggunakan kemampuan administrasi, komunikasi, koordinasi, dan digital secara bersamaan.
              </p>
            </div>

            {/* Morph pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              {CURRENTLY_OPEN_ROLES.map((role) => (
                <div
                  key={role}
                  className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-slate-900 text-white shadow-[0_4px_16px_rgba(15,23,42,0.15)] hover:bg-blue-600 transition-colors flex items-center gap-2 cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
