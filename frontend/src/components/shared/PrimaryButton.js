import React from 'react';
import { Link } from 'react-router-dom';

// Matches MY-DESIGN-SYSTEM/components/COMPONENT_CATALOG.md §1 Buttons:
// coral fill + white label for primary, hairline-border neutral fill for
// secondary, white pill on dark surfaces for inverse.
const VARIANTS = {
  primary: 'bg-ed-accent text-white border border-ed-accent shadow-ed-glow hover:-translate-y-px',
  secondary: 'bg-ed-surfaceRaised text-ed-ink border border-ed-border hover:bg-white',
  outline: 'bg-transparent text-ed-ink border border-ed-ink hover:bg-ed-ink hover:text-white',
  inverse: 'bg-white text-ed-ink border border-white hover:bg-ed-surfaceRaised',
};

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 min-h-[44px] md:min-h-[48px] text-[15px] font-bold transition-all duration-150 active:scale-[0.97]';

/**
 * Shared CTA button used across every page. Renders a react-router <Link>
 * when `to` is provided, otherwise a real <button>.
 */
const PrimaryButton = ({ to, href, onClick, variant = 'primary', className = '', children, ...rest }) => {
  const classes = `${BASE} ${VARIANTS[variant] || VARIANTS.primary} ${FOCUS_RING} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default PrimaryButton;
