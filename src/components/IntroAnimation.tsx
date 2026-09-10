import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fast, crisp animation (approx 900ms)
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 400);
    }, 850);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] select-none"
        >
          {/* Subtle glowing backdrop */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-[100px] animate-pulse-glow" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex items-baseline tracking-tight font-extrabold text-5xl md:text-7xl text-white"
          >
            <span>MRF</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-[#3B82F6] inline-block ml-0.5"
            >
              .
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400 font-medium"
          >
            Morphism Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
