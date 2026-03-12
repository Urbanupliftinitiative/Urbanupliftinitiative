import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productsLinks = [
    'Access Control',
    'Smart Home',
    'Building Intelligence',
    'Hardware Overview'
  ];

  const companyLinks = [
    'About Us',
    'Careers',
    'News',
    'Contact'
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  {productsLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#articles" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Articles
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('company')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  {companyLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#partners" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Partners
            </a>

            <a href="#support" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Support
            </a>

            <a href="#login" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Manager Login
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <a href="#shop" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Shop
            </a>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm font-medium transition-all">
              Book a demo →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#products" className="block text-gray-900 font-medium py-2">Products</a>
            <a href="#articles" className="block text-gray-900 font-medium py-2">Articles</a>
            <a href="#company" className="block text-gray-900 font-medium py-2">Company</a>
            <a href="#partners" className="block text-gray-900 font-medium py-2">Partners</a>
            <a href="#support" className="block text-gray-900 font-medium py-2">Support</a>
            <a href="#login" className="block text-gray-900 font-medium py-2">Manager Login</a>
            <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-2 mt-4">
              Book a demo →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
