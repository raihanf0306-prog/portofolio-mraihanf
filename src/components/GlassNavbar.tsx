import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GlassNavbarProps {
  onContactClick?: () => void;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Digital', href: '#digital' },
    { label: 'Certification', href: '#certification' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active spy
      const sections = ['contact', 'skills', 'certification', 'digital', 'experience', 'about', 'home'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
        <nav
          id="main-floating-navbar"
          className={`w-full max-w-[1100px] pointer-events-auto transition-all duration-300 rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0B1120]/80 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] shadow-blue-500/5'
              : 'bg-[#0B1120]/60 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
          }`}
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {/* Logo */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex items-baseline text-xl md:text-2xl font-black tracking-tight text-white transition-transform hover:scale-105"
          >
            <span>MRF</span>
            <span className="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors ml-0.5">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-500/15 border border-blue-400/30 rounded-full -z-10 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button "Let's Talk" */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-cta-talk"
              onClick={onContactClick}
              className="relative group overflow-hidden px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] active:translate-y-0 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)',
              }}
            >
              {/* Subtle light sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="bg-[#0B1120]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] shadow-blue-500/10">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-2xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-blue-600/20 text-white border border-blue-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-blue-400" />}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
