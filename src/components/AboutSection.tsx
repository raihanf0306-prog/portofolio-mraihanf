import React from 'react';
import { motion } from 'motion/react';
import { FolderCheck, MessageCircle, CheckCircle2, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_TRAITS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      
      {/* Top Organic Morph Divider (transition from dark navy to soft white) */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 overflow-hidden pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-[#020617] fill-current"
        >
          <path d="M0,0 C300,90 600,20 1200,80 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Subtle background light blur orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span>01 / ABOUT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Organized Work.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Clear Communication.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            <p>
              Halo! Saya <strong className="text-slate-900 font-semibold">Muhammad Raihan Firdaus</strong>, lulusan <span className="text-blue-700 font-medium">S1 Pendidikan Bahasa Arab dari STIT Hidayatunnajah Bekasi</span> dengan pengalaman 5 tahun bekerja di lingkungan pendidikan.
            </p>
            <p>
              Selain mengajar, saya dipercaya terlibat dalam berbagai kebutuhan administrasi, pelayanan informasi, serta pelaksanaan event sekolah, seperti <span className="text-slate-800 font-medium">PPDB, Open House, dan berbagai program siswa</span>.
            </p>
            <p>
              Saya juga pernah menjadi <span className="text-blue-700 font-semibold">Koordinator Kegiatan selama 1 tahun</span>, yang membentuk kemampuan saya dalam mengatur pekerjaan, berkomunikasi dengan banyak pihak, bekerja dengan timeline, serta berkolaborasi dalam tim.
            </p>
            <p className="pt-2 font-medium text-slate-800 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Terbuka untuk kesempatan:
              </span>
              <span>Admin Assistant, Admin Support, Social Media Admin, maupun posisi Remote/WFH lainnya.</span>
            </p>
          </motion.div>

          {/* Quick meta badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-slate-200"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200 text-xs font-semibold text-slate-700">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>STIT Hidayatunnajah Bekasi (S1 Pendidikan)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200 text-xs font-semibold text-slate-700">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>
        </div>

        {/* ABOUT MORPH CARDS (3 Interactive Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Organized */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            id="about-card-organized"
            className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
              <FolderCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              Organized
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {ABOUT_TRAITS[0].description}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <span>Structure • Files • Timelines</span>
            </div>
          </motion.div>

          {/* Card 2: Communicative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            id="about-card-communicative"
            className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
              Communicative
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {ABOUT_TRAITS[1].description}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-sky-600">
              <span>Coordination • Public Relations • Clarity</span>
            </div>
          </motion.div>

          {/* Card 3: Detail-Oriented */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            id="about-card-detail-oriented"
            className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-indigo-300 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              Detail-Oriented
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {ABOUT_TRAITS[2].description}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-indigo-600">
              <span>Precision • Verification • Integrity</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
