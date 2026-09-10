import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Maximize2, 
  ShieldCheck, 
  FileCheck, 
  X, 
  Sparkles,
  QrCode
} from 'lucide-react';
import { CERTIFICATE_INFO } from '../data/portfolioData';

export const CertificationSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'document' | 'data'>('document');
  const certificateImage = CERTIFICATE_INFO.imageUrl;

  return (
    <section id="certification" className="relative py-24 md:py-32 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      
      {/* Top curved morph transition from previous dark section */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 overflow-hidden pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-[#0B1120] fill-current"
        >
          <path d="M0,0 C350,90 750,20 1200,80 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span>04 / CERTIFICATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Certified{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Skills.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal"
          >
            Standar kompetensi resmi nasional yang memvalidasi kemampuan teknis dan strategis di bidang konten serta komunikasi digital.
          </motion.p>
        </div>

        {/* LARGE GLASSMORPHISM CERTIFICATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          id="bnsp-large-glass-card"
          className="relative p-8 sm:p-10 lg:p-12 rounded-[36px] bg-white/85 backdrop-blur-2xl border border-slate-900/[0.08] shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/80 text-emerald-800 text-xs font-black uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{CERTIFICATE_INFO.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                {CERTIFICATE_INFO.field}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                {CERTIFICATE_INFO.description}
              </p>

              {/* Official Credential Meta */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-400 block uppercase tracking-wider text-[10px]">Lembaga Sertifikasi:</span>
                  <span className="font-semibold text-slate-900">{CERTIFICATE_INFO.bodyName}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-400 block uppercase tracking-wider text-[10px]">Reg & Sertifikat:</span>
                  <span className="font-mono text-slate-800 font-semibold">{CERTIFICATE_INFO.regNumber}</span>
                </div>
              </div>

              {/* Kompetensi List */}
              <div className="w-full mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Kompetensi Teruji & Tervalidasi:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CERTIFICATE_INFO.competencies.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Buka Dokumen Sertifikat</span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D FLOATING CERTIFICATE DOCUMENT */}
            <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
              <motion.div
                whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={() => setIsLightboxOpen(true)}
                id="floating-bnsp-doc-card"
                className="relative w-full max-w-[360px] aspect-[1/1.414] bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.18)] border-2 border-amber-200/70 p-6 flex flex-col justify-between cursor-pointer group select-none transition-shadow hover:shadow-[0_30px_60px_rgba(37,99,235,0.22)]"
              >
                {/* Certificate Decorative Border */}
                <div className="absolute inset-2 border border-amber-300/50 rounded-xl pointer-events-none" />
                <div className="absolute inset-3 border border-amber-400/20 rounded-lg pointer-events-none" />

                {certificateImage ? (
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <img
                      src={certificateImage}
                      alt="BNSP Certificate"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== window.location.origin + '/images/certificate.jpg') {
                          target.src = '/images/certificate.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>Klik untuk Zoom</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="text-center pt-2">
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider">
                        13562747
                      </div>
                      <div className="w-10 h-10 mx-auto my-2 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                        BADAN NASIONAL SERTIFIKASI PROFESI
                      </div>
                      <div className="text-xs font-black text-slate-900 tracking-wider uppercase mt-1">
                        SERTIFIKAT KOMPETENSI
                      </div>
                      <div className="text-[9px] font-medium text-slate-400 italic">
                        CERTIFICATE OF COMPETENCE
                      </div>
                      <div className="text-[9px] font-mono text-slate-600 mt-1">
                        {CERTIFICATE_INFO.certNumber}
                      </div>
                    </div>

                    {/* Middle Section */}
                    <div className="my-auto text-center py-2 border-y border-amber-100">
                      <div className="text-[10px] text-slate-400 mb-1">Diberikan kepada:</div>
                      <div className="text-sm font-black text-slate-900 tracking-tight">
                        MUHAMMAD RAIHAN FIRDAUS
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {CERTIFICATE_INFO.regNumber}
                      </div>
                      <div className="mt-2 text-[10px] text-slate-600">
                        Telah kompeten pada bidang:
                      </div>
                      <div className="text-xs font-extrabold text-blue-700">
                        Pemasaran Digital / Digital Marketing
                      </div>
                      <div className="text-[11px] font-bold text-slate-900">
                        Kualifikasi: Pembuat Konten (Content Creator)
                      </div>
                    </div>

                    {/* Footer with Hologram & Signature */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-[8px] text-slate-400">Yogyakarta, 11 April 2026</div>
                        <div className="text-[9px] font-bold text-slate-800">LSP Teknologi Digital</div>
                        <div className="text-[8px] text-slate-500">Gunawan Ramli, M.Kom. (Direktur)</div>
                      </div>

                      {/* Hologram Badge effect */}
                      <div className="w-16 h-8 rounded-md bg-gradient-to-tr from-amber-300 via-amber-100 to-amber-400 border border-amber-400 shadow-inner flex items-center justify-center relative overflow-hidden">
                        <span className="text-[10px] font-black text-amber-900 tracking-widest">BNSP</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Perbesar Sertifikat</span>
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {certificateImage ? (
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={certificateImage}
                    alt="BNSP Certificate Scan"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain rounded-2xl shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== window.location.origin + '/images/certificate.jpg') {
                        target.src = '/images/certificate.jpg';
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="p-8 border-4 border-amber-200 rounded-2xl bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 text-center mb-6">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-4">
                    <span>No. Seri: 13562747</span>
                    <span>BNSP INDONESIA</span>
                  </div>

                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <Award className="w-8 h-8" />
                  </div>

                  <h3 className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                    BADAN NASIONAL SERTIFIKASI PROFESI
                  </h3>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight my-1">
                    SERTIFIKAT KOMPETENSI
                  </h2>
                  <p className="text-xs font-medium text-slate-500 italic mb-2">CERTIFICATE OF COMPETENCE</p>
                  <p className="text-xs font-mono font-bold text-slate-700 mb-6">
                    {CERTIFICATE_INFO.certNumber}
                  </p>

                  <div className="py-4 border-y border-amber-200 max-w-md mx-auto">
                    <div className="text-xs text-slate-500 mb-1">Dengan ini menyatakan bahwa:</div>
                    <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                      MUHAMMAD RAIHAN FIRDAUS
                    </div>
                    <div className="text-xs font-mono text-slate-600 mb-3">
                      {CERTIFICATE_INFO.regNumber}
                    </div>

                    <div className="text-xs text-slate-500">Telah kompeten pada bidang:</div>
                    <div className="text-base font-extrabold text-blue-700">
                      Pemasaran Digital (Digital Marketing)
                    </div>
                    <div className="text-sm font-bold text-slate-800 mt-1">
                      Kualifikasi: Pembuat Konten (Content Creator)
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-left text-xs">
                    <div>
                      <div className="text-slate-500">Yogyakarta, 11 April 2026</div>
                      <div className="font-bold text-slate-900">LSP Teknologi Digital</div>
                      <div className="text-slate-600">Gunawan Ramli, M.Kom. (Direktur)</div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-amber-300 font-black text-amber-950 tracking-widest border border-amber-400 shadow-sm">
                      HOLOGRAM BNSP
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
