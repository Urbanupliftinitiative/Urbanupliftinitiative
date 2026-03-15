import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How it Works', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#testimonials' },
];

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-testid="landing-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="navbar-logo" className={`font-bold text-2xl tracking-tight font-sora transition-colors duration-300 ${scrolled ? 'text-op-navy' : 'text-op-navy'}`}>
            OnePermit
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-300 font-medium text-[15px] ${scrolled ? 'text-op-slate hover:text-op-navy' : 'text-op-navy/70 hover:text-op-navy'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href="#login" data-testid="nav-login" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-op-slate hover:text-op-navy' : 'text-op-navy/70 hover:text-op-navy'}`}>
              Log in
            </a>
            <a
              href="#start"
              data-testid="nav-get-started"
              className="bg-op-navy text-white rounded-full px-7 py-2.5 font-semibold text-[15px] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className={`lg:hidden p-2 transition-colors text-op-navy`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden glass-strong border-t border-white/30 px-6 py-6 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block text-op-navy font-medium py-3 px-4 rounded-xl hover:bg-white/50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a href="#login" className="block text-op-slate font-medium py-3 px-4">Log in</a>
            <a href="#start" className="block bg-op-navy text-white rounded-full py-3 px-7 font-semibold text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
