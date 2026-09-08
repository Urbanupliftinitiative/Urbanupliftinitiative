import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * react-router's <Link> does not auto-scroll to a URL hash on same-page
 * navigation (it only does on a full page load). Every anchor CTA across
 * the site (nav "Donate", footer links, in-page "Get Involved" buttons)
 * relies on hash targets like /#donate resolving to a real scroll — this
 * makes that work consistently instead of silently doing nothing.
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace('#', '');
    // Wait a tick so the target route/section has mounted before scrolling.
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
