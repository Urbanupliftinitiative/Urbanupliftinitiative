import React from 'react';
import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-uui-navy text-white hover:bg-uui-blue shadow-[0_10px_30px_rgba(18,42,78,0.25)]',
  gold: 'bg-uui-gold text-uui-charcoal hover:bg-[#B8892F] shadow-[0_10px_30px_rgba(201,154,59,0.3)]',
  outline: 'bg-transparent text-uui-navy border-2 border-uui-navy hover:bg-uui-navy hover:text-white',
  ghost: 'bg-transparent text-uui-navy hover:bg-uui-navy/10',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]';

/**
 * Shared CTA button used across every page. Renders a react-router <Link>
 * when `to` is provided, otherwise a real <button>. Centralizes the one
 * focus-visible ring convention for the whole site.
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
