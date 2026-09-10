import React, { useState } from 'react';
import { MorphBackground } from './components/MorphBackground';
import { CustomCursor } from './components/CustomCursor';
import { IntroAnimation } from './components/IntroAnimation';
import { GlassNavbar } from './components/GlassNavbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DigitalSection } from './components/DigitalSection';
import { CertificationSection } from './components/CertificationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 relative selection:bg-blue-500/30 selection:text-blue-200">
      {/* Intro Animation on first launch */}
      {!introFinished && (
        <IntroAnimation onComplete={() => setIntroFinished(true)} />
      )}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Ambient Morph Background (Dark) */}
      <MorphBackground variant="dark" />

      {/* Floating Glass Pill Navbar */}
      <GlassNavbar />

      {/* Main Portfolio Sections */}
      <main className="relative">
        <Hero />
        <QuickStats />
        <AboutSection />
        <ExperienceSection />
        <DigitalSection />
        <CertificationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Minimal Floating Footer */}
      <Footer />
    </div>
  );
}
