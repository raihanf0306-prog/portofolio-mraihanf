import React from 'react';

export const MorphBackground: React.FC<{ variant?: 'dark' | 'light' | 'deep' }> = ({ variant = 'dark' }) => {
  if (variant === 'light') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        {/* Soft light mesh */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />
        {/* Subtle morphing blob */}
        <div 
          className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-gradient-to-br from-blue-300/20 via-sky-200/20 to-transparent blur-2xl animate-morph-slow hidden md:block"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Large blue glowing orb top-left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[140px] animate-pulse-glow" />
      
      {/* Small purple-blue glowing orb top-right */}
      <div className="absolute top-20 right-[-100px] w-[380px] h-[380px] bg-[#60A5FA]/15 rounded-full blur-[120px]" />
      
      {/* Center-bottom soft glow */}
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#1D4ED8]/10 rounded-full blur-[160px]" />

      {/* Morphing abstract organic shapes */}
      <div 
        className="absolute top-1/4 left-10 w-[320px] h-[320px] bg-gradient-to-tr from-blue-600/10 to-transparent blur-2xl animate-morph-slow hidden md:block"
      />
      <div 
        className="absolute bottom-1/4 right-20 w-[360px] h-[360px] bg-gradient-to-bl from-sky-500/10 to-transparent blur-2xl animate-morph-slow-reverse hidden md:block"
      />
    </div>
  );
};
