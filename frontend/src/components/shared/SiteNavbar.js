import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '../../data/navigation';
import { org } from '../../data/organization';
import PrimaryButton from './PrimaryButton';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold focus-visible:ring-offset-2';

/**
 * Shared site navigation. On the homepage it sits transparent over the
 * locked hero (white text, wordmark suppressed so it never doubles the
 * hero's own inline "OnePermit" logo) and becomes solid once the user
 * scrolls past it. On every other page it renders solid from the start —
 * there's no hero underneath to coexist with there.
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'glass-strong shadow-[0_2px_20px_rgba(18,42,78,0.08)]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link
          to="/"
          className={`font-sora font-bold text-lg tracking-tight ${FOCUS_RING} rounded-md ${
            transparent ? 'text-white' : 'text-uui-navy'
          } ${showWordmark ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
        >
          {org.shortName}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm font-semibold ${FOCUS_RING} rounded-md transition-colors ${
                transparent ? 'text-white/90 hover:text-white' : 'text-uui-slate hover:text-uui-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <PrimaryButton to="/#donate" variant="gold" className="!px-6 !py-2.5 !text-sm">
            Donate
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md ${FOCUS_RING} ${transparent ? 'text-white' : 'text-uui-navy'}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden glass-strong border-t border-uui-navy/10 px-6 py-6 flex flex-col gap-4">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold text-uui-navy ${FOCUS_RING} rounded-md py-1`}
            >
              {item.label}
            </Link>
          ))}
          <PrimaryButton to="/#donate" variant="gold" onClick={() => setMobileOpen(false)} className="w-full">
            Donate
          </PrimaryButton>
        </div>
      )}
    </header>
  );
};

export default SiteNavbar;
