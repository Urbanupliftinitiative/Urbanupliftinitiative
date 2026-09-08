import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '../../data/navigation';
import { org } from '../../data/organization';
import PrimaryButton from './PrimaryButton';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2';

/**
 * Shared site navigation — 80px header per the design system's nav spec.
 * On the homepage it sits transparent over the locked hero (white text,
 * wordmark suppressed so it never doubles the hero's own inline "OnePermit"
 * logo) and becomes a blurred solid surface once scrolled past it. On every
 * other page it renders solid from the start.
 */
const SiteNavbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    const onScroll = () => setIsScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const transparent = isHome && !isScrolled;
  const showWordmark = !isHome || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        transparent ? 'bg-transparent' : 'glass-strong'
      }`}
    >
      <nav className="max-w-ed-container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className={`font-extrabold text-lg tracking-tight ${FOCUS_RING} rounded-md ${
            transparent ? 'text-white' : 'text-ed-ink'
          } ${showWordmark ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}
        >
          {org.shortName}
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-[14px] font-semibold ${FOCUS_RING} rounded-md transition-colors ${
                transparent ? 'text-white/90 hover:text-white' : 'text-ed-muted hover:text-ed-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <PrimaryButton to="/#donate" variant="primary" className="!px-5 !min-h-[40px] !text-[13px]">
            Donate
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full ${FOCUS_RING} ${transparent ? 'text-white' : 'text-ed-ink'}`}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden glass-strong px-4 py-6 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`text-[15px] font-semibold text-ed-ink ${FOCUS_RING} rounded-md py-3 border-b border-ed-border last:border-0`}
            >
              {item.label}
            </Link>
          ))}
          <PrimaryButton to="/#donate" variant="primary" onClick={() => setMobileOpen(false)} className="w-full mt-4">
            Donate
          </PrimaryButton>
        </div>
      )}
    </header>
  );
};

export default SiteNavbar;
