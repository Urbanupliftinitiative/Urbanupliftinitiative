import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Platform Overview', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Pricing', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    support: [
      { name: 'Contact Sales', href: '#' },
      { name: 'Request Demo', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support Portal', href: '#' },
      { name: 'Status', href: '#' }
    ]
  };

  const social = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="w-full px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                <div className="w-2 h-2 bg-pink-600 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                  <div className="w-2 h-2 bg-pink-600 rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-light text-gray-900">OnePermit</span>
            </div>
            <p className="text-base font-light text-gray-600 mb-6 leading-relaxed">
              Transforming IVF and surrogacy care through intelligent monitoring and seamless collaboration.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-light text-gray-600">San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:founders@onepermit.com" className="text-sm font-light text-gray-600 hover:text-purple-600 transition-colors">
                  founders@onepermit.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:1-800-663-7376" className="text-sm font-light text-gray-600 hover:text-purple-600 transition-colors">
                  1-800-ONE-PERM
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-50 hover:border-purple-200 transition-all"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base font-light text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base font-light text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base font-light text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base font-light text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-light text-gray-500">
              © {new Date().getFullYear()} OnePermit. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm font-light text-gray-500 hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-light text-gray-500 hover:text-purple-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm font-light text-gray-500 hover:text-purple-600 transition-colors">
                HIPAA Compliance
              </a>
              <a href="#" className="text-sm font-light text-gray-500 hover:text-purple-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
