import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { footerColumns } from '../../data/navigation';
import { org, socialLinks } from '../../data/organization';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md';

// Icon for each supported platform in `socialLinks`. Add a key here if a
// new platform is ever added to that data.
const SOCIAL_ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube };

// Matches COMPONENT_CATALOG.md §16: near-black background, compact grouped
// navigation and contact, concise lower nav. The "one large conversion
// statement + coral pill" this pattern also calls for is handled by
// FinalCTASection immediately above, per PAGE_PATTERNS.md's own sequence
// (conversion panel, then compact dark footer) — repeating it here would
// just be the same headline twice.
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
    <footer className="bg-ed-dark text-white/80">
      <div className="max-w-ed-container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Org block */}
          <div className="lg:col-span-2">
            <p className="font-extrabold text-lg text-white mb-2 tracking-tight">{org.legalName}</p>
            <p className="text-[13px] text-white/50 mb-6 max-w-xs">{org.tagline}</p>
            <div className="space-y-2 text-[13px] text-white/60">
              <a href={`mailto:${org.email}`} className={`flex items-center gap-2 hover:text-white transition-colors ${FOCUS_RING}`}>
                <Mail size={15} /> {org.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} /> {org.city}, {org.state}
              </p>
              {org.phone && (
                <a href={`tel:${org.phone}`} className={`flex items-center gap-2 hover:text-white transition-colors ${FOCUS_RING}`}>
                  <Phone size={15} /> {org.phone}
                </a>
              )}
            </div>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map(({ platform, url }) => {
                  const Icon = SOCIAL_ICONS[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={platform}
                      className={`w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center hover:bg-white/[0.12] transition-colors ${FOCUS_RING}`}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-bold text-white text-[11px] uppercase tracking-[0.16em] mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={`text-[13px] text-white/60 hover:text-white transition-colors ${FOCUS_RING}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="font-bold text-white text-[11px] uppercase tracking-[0.16em] mb-4">Stay Connected</p>
            <p className="text-[13px] text-white/50 mb-4">Updates from our programs and ways you can help.</p>
            {submitted ? (
              <p className="text-[13px] text-ed-accent font-semibold">Thanks — we'll be in touch.</p>
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
                  className={`min-h-[44px] bg-white/[0.06] border border-white/15 rounded-full px-4 text-[14px] text-white placeholder:text-white/35 ${FOCUS_RING}`}
                />
                <button
                  type="submit"
                  className={`min-h-[44px] bg-ed-accent text-white rounded-full px-4 text-[13px] font-bold hover:opacity-90 transition-opacity ${FOCUS_RING}`}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {org.legalName}. All rights reserved.
            {org.ein && <span> &middot; EIN {org.ein}</span>}
          </p>
          <p>Made with care in {org.city}, {org.state}.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
