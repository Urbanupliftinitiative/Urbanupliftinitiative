import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Product: ['Features', 'How it Works', 'Pricing', 'Integrations'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Resources: ['Help Center', 'Partners', 'Contact', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const FooterSection = () => (
  <footer data-testid="footer-section" className="bg-op-navy text-white py-16 md:py-20 px-6">
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 mb-14 md:mb-16">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1 mb-4 md:mb-0">
          <Link to="/" className="font-bold text-2xl tracking-tight font-sora">
            OnePermit
          </Link>
          <p className="text-white/40 text-sm mt-4 leading-relaxed max-w-xs">
            The joyful care platform for IVF and surrogacy journeys.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <p className="font-semibold text-white/70 mb-4 text-xs uppercase tracking-widest">
              {category}
            </p>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-white/35 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider + Bottom */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/25 text-xs sm:text-sm">
          &copy; 2026 OnePermit. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
            <a key={social} href="#" className="text-white/25 hover:text-white text-xs sm:text-sm transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
