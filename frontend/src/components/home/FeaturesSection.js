import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Heart, Shield, Users, Activity, Lock, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: "Patient-Centered Care",
    description: "Our platform combines intuitive design with powerful functionality. We create solutions that integrate seamlessly with existing clinical workflows and empower patients throughout their fertility journey.",
    bgClass: "bg-gradient-to-br from-[#ede4ed] via-[#ddd0dd] to-[#c4b4c4]",
    icons: [
      { Icon: Heart, label: "Wellness Tracking", color: "text-pink-500" },
      { Icon: Activity, label: "Vitals Monitor", color: "text-purple-500" },
      { Icon: Users, label: "Family Support", color: "text-rose-400" },
      { Icon: FileCheck, label: "Care Plans", color: "text-fuchsia-500" },
    ],
  },
  {
    title: "Unified Care Platform",
    description: "OnePermit makes fertility care simple, connecting patients, surrogates, clinics, and agencies. Our intelligent system tracks medications, monitors vitals, and automates workflows\u2014helping teams reduce risk and scale efficiency.",
    bgClass: "bg-gradient-to-br from-[#dce8f0] via-[#ccd8e4] to-[#afc0ce]",
    icons: [
      { Icon: Users, label: "Multi-Role Access", color: "text-blue-500" },
      { Icon: Activity, label: "Real-Time Sync", color: "text-cyan-500" },
      { Icon: FileCheck, label: "Smart Workflows", color: "text-teal-500" },
      { Icon: Heart, label: "Patient Connect", color: "text-sky-500" },
    ],
  },
  {
    title: "Enterprise-Grade Security",
    description: "Safeguard patient data at every touchpoint with HIPAA-compliant encryption, role-based access controls, and comprehensive audit logging\u2014because trust is the foundation of fertility care.",
    bgClass: "bg-gradient-to-br from-[#2d2d2d] via-[#3a3a3a] to-[#1a1a1a]",
    dark: true,
    icons: [
      { Icon: Lock, label: "Encryption", color: "text-emerald-400" },
      { Icon: Shield, label: "HIPAA Compliant", color: "text-green-400" },
      { Icon: FileCheck, label: "Audit Logging", color: "text-lime-400" },
      { Icon: Users, label: "RBAC", color: "text-teal-400" },
    ],
  },
];

/* ──────────────────── Card Content (shared by both layouts) ──────────────────── */
const CardContent = ({ feature, compact = false }) => {
  const navigate = useNavigate();
  const isDark = feature.dark;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${compact ? 'p-6' : 'p-10 lg:p-16 xl:p-20'} items-center h-full`}>
      {/* Left - Text */}
      <div className="space-y-5 lg:space-y-8">
        <h2
          data-testid={`feature-title-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`${compact ? 'text-3xl' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'} font-extralight leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          {feature.title}
        </h2>
        <p className={`${compact ? 'text-base' : 'text-lg lg:text-xl xl:text-2xl'} font-light leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {feature.description}
        </p>
        <Button
          data-testid={`feature-cta-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => navigate('/talk-to-sales')}
          className={`${
            isDark
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          } rounded-full ${compact ? 'px-6 py-4 text-sm' : 'px-10 py-6 lg:py-7 text-base lg:text-lg'} font-medium transition-all`}
        >
          Explore OnePermit
        </Button>
      </div>

      {/* Right - Icon grid */}
      <div className={`${compact ? '' : 'hidden lg:flex'} items-center justify-center`}>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-md">
          {feature.icons.map(({ Icon, label, color }, i) => (
            <div
              key={i}
              className={`${isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} rounded-2xl lg:rounded-3xl p-5 lg:p-8 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              <Icon className={`${compact ? 'w-7 h-7' : 'w-8 h-8 lg:w-12 lg:h-12'} ${color}`} />
              <span className={`${compact ? 'text-xs' : 'text-xs lg:text-sm'} font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────── Desktop: Sticky Overlap ──────────────────── */
const DesktopStickyCards = () => (
  <div className="hidden md:block pt-12" data-testid="features-desktop">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className={`sticky mx-8 lg:mx-12 rounded-[2rem] overflow-hidden ${feature.bgClass}`}
        style={{
          position: 'sticky',
          top: '5rem',
          zIndex: idx + 1,
          height: 'calc(100vh - 6rem)',
          marginBottom: idx < features.length - 1 ? '60vh' : '0',
        }}
      >
        <div className="flex flex-col justify-center h-full">
          <CardContent feature={feature} />
        </div>
      </div>
    ))}
  </div>
);

/* ──────────────────── Mobile: Slideshow ──────────────────── */
const MobileSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const autoplayRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent((idx + features.length) % features.length);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEnd.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetAutoplay();
    }
  };

  return (
    <div className="md:hidden py-8" data-testid="features-mobile-slideshow">
      <div
        className="overflow-hidden mx-4 rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className={`min-w-full ${feature.bgClass} rounded-2xl`}>
              <CardContent feature={feature} compact />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots + arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          data-testid="slideshow-prev"
          onClick={() => { goTo(current - 1); resetAutoplay(); }}
          className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex gap-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              data-testid={`slideshow-dot-${idx}`}
              onClick={() => { goTo(idx); resetAutoplay(); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          data-testid="slideshow-next"
          onClick={() => { goTo(current + 1); resetAutoplay(); }}
          className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

/* ──────────────────── Main Export ──────────────────── */
const FeaturesSection = () => (
  <section data-testid="features-section">
    <DesktopStickyCards />
    <MobileSlideshow />
  </section>
);

export default FeaturesSection;
