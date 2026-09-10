import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  Check, 
  Sparkles, 
  FileText, 
  Users, 
  Clock, 
  Camera, 
  Maximize2,
  X,
  ShieldCheck
} from 'lucide-react';
import { EXPERIENCES, GALLERY_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeLightbox, setActiveLightbox] = useState<{ title: string; subtitle: string; img?: string } | null>(null);

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#F1F5F9] text-slate-800 overflow-hidden">
      
      {/* Background light glow orbs */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span>02 / EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Experience That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
              Built My Skills.
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
            Jejak peran profesional di lingkungan pendidikan yang mengasah keahlian administrasi, koordinasi kegiatan, hingga pelayanan informasi publik.
          </p>
        </div>

        {/* VERTICAL MORPH TIMELINE */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-gradient-to-b from-blue-500 via-sky-400 to-blue-600 ml-2 sm:ml-4 space-y-16">
          
          {/* EXPERIENCE 01: ADMIN PPDB */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[59px] top-6 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center text-blue-600 z-10">
              <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>

            {/* Floating Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.07)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {EXPERIENCES[0].role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600">
                    {EXPERIENCES[0].subtitle}
                  </p>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Lingkungan Pendidikan
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {EXPERIENCES[0].description}
              </p>

              {/* Responsibilities list */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Tanggung Jawab Utama:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXPERIENCES[0].responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {EXPERIENCES[0].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Highlight Dokumentasi PPDB */}
              <div className="border-t border-slate-100 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>Cakupan Dokumentasi PPDB:</span>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 tracking-tight">
                        Administrasi & Pengarsipan Berkas PPDB
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Rekapitulasi berkas calon siswa, verifikasi kelengkapan formulir, & pelayanan langsung wali murid.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-700 text-xs font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      100% Terverifikasi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE 02: ADMIN & PANITIA OPEN HOUSE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[59px] top-6 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-4 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] flex items-center justify-center text-sky-600 z-10">
              <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>

            {/* Floating Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.07)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {EXPERIENCES[1].role}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600">
                    {EXPERIENCES[1].subtitle}
                  </p>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Event & Publikasi
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {EXPERIENCES[1].description}
              </p>

              {/* Responsibilities */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Tanggung Jawab Utama:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXPERIENCES[1].responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 text-sky-600">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight besar yang diminta spesifik di prompt */}
              <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white shadow-[0_10px_25px_rgba(37,99,235,0.3)]">
                <div className="text-center font-black tracking-widest text-sm sm:text-lg md:text-xl leading-relaxed">
                  COMMUNICATION × COORDINATION × ADMINISTRATION × TEAMWORK
                </div>
              </div>

              {/* MORPH PHOTO GALLERY (4 Morphing image cards: 2 large + 2 small) */}
              <div className="border-t border-slate-100 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-sky-500" />
                    <span>MORPH PHOTO GALLERY</span>
                  </div>
                  <span className="text-xs text-slate-400">Hover for 3D morph effect</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {GALLERY_ITEMS.map((item) => {
                    const isLarge = item.size === 'large';

                    return (
                      <div
                        key={item.id}
                        className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 p-5 sm:p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)] flex flex-col justify-between ${
                          isLarge ? 'min-h-[190px] sm:min-h-[210px]' : 'min-h-[170px]'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            <Camera className="w-5 h-5" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold tracking-wide">
                            {item.category || 'Dokumentasi'}
                          </span>
                        </div>

                        <div>
                          <div className="text-base font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>

          {/* EXPERIENCE 03: KOORDINATOR KEGIATAN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[59px] top-6 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center text-indigo-600 z-10">
              <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>

            {/* Floating Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_12px_36px_rgba(37,99,235,0.07)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {EXPERIENCES[2].role}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600">
                    Program & Kegiatan Siswa Kelas 1–6
                  </p>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold uppercase tracking-wider">
                  {EXPERIENCES[2].badge}
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {EXPERIENCES[2].description}
              </p>

              {/* Responsibilities */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Tanggung Jawab Utama:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXPERIENCES[2].responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating skills */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Keahlian Terapan:
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {EXPERIENCES[2].skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-2xl bg-indigo-50/80 border border-indigo-200/70 text-indigo-800 text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-[#0B1120] border border-white/20 rounded-3xl p-6 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <h4 className="text-xl font-bold">{activeLightbox.title}</h4>
                <p className="text-sm text-slate-400">{activeLightbox.subtitle}</p>
              </div>

              {activeLightbox.img && (
                <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black">
                  <img
                    src={activeLightbox.img}
                    alt={activeLightbox.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
