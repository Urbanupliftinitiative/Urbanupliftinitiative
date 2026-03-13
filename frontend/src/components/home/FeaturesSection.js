import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: "Patient-Centered Care",
    description: "Our platform combines intuitive design with powerful functionality. We create solutions that integrate seamlessly with existing clinical workflows and empower patients throughout their fertility journey.",
    bgClass: "bg-gradient-to-br from-[#ede4ed] via-[#ddd0dd] to-[#c4b4c4]",
    images: [
      { src: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?w=400&h=400&fit=crop", alt: "Wellness Tracking" },
      { src: "https://images.unsplash.com/photo-1645685491865-42a4fbbc9912?w=400&h=400&fit=crop", alt: "Vitals Monitor" },
      { src: "https://images.unsplash.com/photo-1709823157693-c63157807cc3?w=400&h=400&fit=crop", alt: "Family Support" },
      { src: "https://images.unsplash.com/photo-1659353888242-e7c29b331c61?w=400&h=400&fit=crop", alt: "Care Plans" },
    ],
  },
  {
    title: "Unified Care Platform",
    description: "OnePermit makes fertility care simple, connecting patients, surrogates, clinics, and agencies. Our intelligent system tracks medications, monitors vitals, and automates workflows\u2014helping teams reduce risk and scale efficiency.",
    bgClass: "bg-gradient-to-br from-[#dce8f0] via-[#ccd8e4] to-[#afc0ce]",
    images: [
      { src: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?w=400&h=400&fit=crop", alt: "Multi-Role Access" },
      { src: "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?w=400&h=400&fit=crop", alt: "Real-Time Sync" },
      { src: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?w=400&h=400&fit=crop", alt: "Smart Workflows" },
      { src: "https://images.unsplash.com/photo-1744686910398-426ab2a0ce8d?w=400&h=400&fit=crop", alt: "Patient Connect" },
    ],
  },
  {
    title: "Enterprise-Grade Security",
    description: "Safeguard patient data at every touchpoint with HIPAA-compliant encryption, role-based access controls, and comprehensive audit logging\u2014because trust is the foundation of fertility care.",
    bgClass: "bg-gradient-to-br from-[#b8b3a4] via-[#9a9589] to-[#7a756a]",
    images: [
      { src: "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?w=400&h=400&fit=crop", alt: "Encryption" },
      { src: "https://images.unsplash.com/photo-1722235623200-59966a71af50?w=400&h=400&fit=crop", alt: "HIPAA Compliant" },
      { src: "https://images.unsplash.com/photo-1768839722988-91767bb82b10?w=400&h=400&fit=crop", alt: "Audit Logging" },
      { src: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?w=400&h=400&fit=crop", alt: "RBAC" },
    ],
  },
  {
    title: "Built for Clinics & Agencies",
    description: "Empower fertility clinics and surrogacy agencies with centralized dashboards, real-time case tracking, and automated compliance reporting\u2014so your team can focus on outcomes, not paperwork.",
    bgClass: "bg-gradient-to-br from-[#e8d5e8] via-[#d8c5d8] to-[#b8a5b8]",
    images: [
      { src: "https://images.unsplash.com/photo-1698306642516-9841228dcff3?w=400&h=400&fit=crop", alt: "Clinic Dashboard" },
      { src: "https://images.unsplash.com/photo-1666886573212-2de95596d509?w=400&h=400&fit=crop", alt: "Case Analytics" },
      { src: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?w=400&h=400&fit=crop", alt: "Compliance Reports" },
      { src: "https://images.unsplash.com/photo-1626204717650-96d57481eeb3?w=400&h=400&fit=crop", alt: "Workflow Automation" },
    ],
  },
];

/* ──────────── Image Grid (door.com style 2x2) ──────────── */
const ImageGrid = ({ images, compact = false }) => (
  <div className={`grid grid-cols-2 ${compact ? 'gap-2' : 'gap-3 lg:gap-4'} w-full max-w-lg`}>
    {images.map((img, i) => (
      <div
        key={i}
        className={`bg-white rounded-2xl ${compact ? 'rounded-xl' : 'lg:rounded-3xl'} overflow-hidden shadow-md aspect-square`}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

/* ──────────── Card Content (shared) ──────────── */
const CardContent = ({ feature, compact = false }) => {
  const navigate = useNavigate();

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${compact ? 'p-6' : 'p-10 lg:p-16 xl:p-20'} items-center h-full`}>
      {/* Left - Text */}
      <div className="flex flex-col justify-between h-full py-4">
        <div className="space-y-5 lg:space-y-8">
          <h2
            data-testid={`feature-title-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${compact ? 'text-2xl' : 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'} font-extralight leading-tight text-gray-900`}
          >
            {feature.title}
          </h2>
          <p className={`${compact ? 'text-sm' : 'text-base lg:text-lg xl:text-xl'} font-light leading-relaxed text-gray-700`}>
            {feature.description}
          </p>
        </div>
        <div className="mt-8">
          <Button
            data-testid={`feature-cta-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => navigate('/talk-to-sales')}
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-5 lg:px-10 lg:py-6 text-sm lg:text-base font-medium transition-all"
          >
            Explore OnePermit
          </Button>
        </div>
      </div>

      {/* Right - 2x2 Image Grid */}
      <div className="flex items-center justify-center">
        <ImageGrid images={feature.images} compact={compact} />
      </div>
    </div>
  );
};

/* ──────────── Desktop: Scroll-driven stacking cards ──────────── */
const DesktopStickyCards = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / totalScroll));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const numCards = features.length;
  const segmentSize = 1 / numCards;

  return (
    <div
      ref={containerRef}
      className="hidden md:block relative"
      style={{ height: `${(numCards + 1) * 100}vh` }}
      data-testid="features-desktop"
    >
      <div
        className="sticky mx-6 lg:mx-10"
        style={{ top: '1.5rem', height: 'calc(100vh - 3rem)' }}
      >
        <div className="relative w-full h-full">
          {features.map((feature, idx) => {
            let translateY = 0;
            if (idx > 0) {
              const transitionStart = (idx - 1) * segmentSize + segmentSize * 0.5;
              const transitionEnd = idx * segmentSize + segmentSize * 0.3;
              if (progress < transitionStart) {
                translateY = 100;
              } else if (progress >= transitionEnd) {
                translateY = 0;
              } else {
                translateY = 100 * (1 - (progress - transitionStart) / (transitionEnd - transitionStart));
              }
            }

            return (
              <div
                key={idx}
                className={`absolute inset-0 rounded-[2rem] overflow-hidden ${feature.bgClass}`}
                style={{
                  zIndex: idx + 1,
                  transform: `translateY(${translateY}%)`,
                  willChange: 'transform',
                }}
              >
                <div className="flex flex-col justify-center h-full">
                  <CardContent feature={feature} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ──────────── Mobile: Slideshow ──────────── */
const MobileSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const autoplayRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent((idx + features.length) % features.length);
  }, []);

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
              className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'}`}
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

/* ──────────── Main Export ──────────── */
const FeaturesSection = () => (
  <section data-testid="features-section">
    <DesktopStickyCards />
    <MobileSlideshow />
  </section>
);

export default FeaturesSection;
