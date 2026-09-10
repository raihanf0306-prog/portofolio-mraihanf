import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { QUICK_STATS } from '../data/portfolioData';
import { Clock, CalendarCheck, TrendingUp, Award } from 'lucide-react';

const icons = [Clock, CalendarCheck, TrendingUp, Award];

export const QuickStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    coordinator: 0,
    followers: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      setAnimatedNumbers({
        years: Math.min(5, Math.round(5 * progress)),
        coordinator: Math.min(1, Math.round(1 * progress)),
        followers: Math.min(9, Math.round(9 * progress)),
      });

      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative -mt-6 sm:-mt-8 mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="quick-stats-panel"
          className="relative bg-[#0B1120]/75 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-blue-500/5 overflow-hidden"
          style={{
            borderRadius: '30px',
            backdropFilter: 'blur(24px)',
          }}
        >
          {/* Subtle background glow highlights */}
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-36 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-3 lg:pt-0 lg:px-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none mb-1.5 flex items-baseline">
                <span>{isInView ? animatedNumbers.years : 0}</span>
                <span className="text-sm sm:text-base font-semibold text-slate-300 ml-1.5">Years</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                Professional Experience
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Di lingkungan pendidikan & administrasi
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-3 lg:pt-0 lg:px-4">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none mb-1.5 flex items-baseline">
                <span>{isInView ? animatedNumbers.coordinator : 0}</span>
                <span className="text-sm sm:text-base font-semibold text-slate-300 ml-2">Year</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                Activity Coordinator
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Mengoordinasikan agenda siswa kelas 1–6
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0 lg:px-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-3 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none mb-1.5 flex items-baseline">
                <span>{isInView ? animatedNumbers.followers : 0}</span>
                <span className="text-sky-400">K+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                Organic Followers
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Pertumbuhan murni di Threads (~3 bulan)
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0 lg:px-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-none mb-1.5 flex items-baseline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                  BNSP
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-300 ml-1.5 uppercase">Certified</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                Content Creator
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                LSP Teknologi Digital Indonesia
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
