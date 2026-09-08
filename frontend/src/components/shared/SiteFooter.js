import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { footerColumns } from '../../data/navigation';
import { org } from '../../data/organization';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold focus-visible:ring-offset-2 focus-visible:ring-offset-uui-navy rounded-md';

const SiteFooter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // No backend exists yet — this is an honest local confirmation only,
    // not a real subscription.
    setSubmitted(true);
  };

  return (
    <footer className="bg-uui-navy text-white/90">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Org block */}
          <div className="lg:col-span-2">
            <p className="font-sora font-bold text-xl text-white mb-2">{org.legalName}</p>
            <p className="text-sm text-white/60 mb-6 max-w-xs">{org.tagline}</p>
            <div className="space-y-2 text-sm text-white/70">
              <a href={`mailto:${org.email}`} className={`flex items-center gap-2 hover:text-white transition-colors ${FOCUS_RING}`}>
                <Mail size={16} /> {org.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {org.city}, {org.state}
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-semibold text-white text-sm uppercase tracking-wide mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={`text-sm text-white/70 hover:text-white transition-colors ${FOCUS_RING}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide mb-4">Stay Connected</p>
            <p className="text-sm text-white/60 mb-4">Updates from our programs and ways you can help.</p>
            {submitted ? (
              <p className="text-sm text-uui-sky font-medium">Thanks — we'll be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 ${FOCUS_RING}`}
                />
                <button
                  type="submit"
                  className={`bg-uui-gold text-uui-charcoal rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-[#B8892F] transition-colors ${FOCUS_RING}`}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {org.legalName}. All rights reserved.</p>
          <p>Made with care in {org.city}, {org.state}.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
