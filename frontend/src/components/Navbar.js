import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productsContent = [
    { name: 'Overview', path: '/products' },
    { name: 'Platform', path: '/products#platform' },
    { name: 'Access Control', path: '/products#access-control' },
    { name: 'Residential Doors', path: '/products#residential' },
    { name: 'Smart Home', path: '/products#smart-home' }
  ];

  const companyContent = [
    { name: 'About Us', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'In the Press', path: '#' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
          </Link>

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
                  {productsContent.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
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
                  {companyContent.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/partners" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Partners
            </Link>

            <a href="#support" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Support
            </a>

            <a href="#login" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Manager Login
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <a href="#shop" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Shop
            </a>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm font-medium transition-all"
            >
              Book a demo →
            </Button>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link to="/products" className="block text-gray-900 font-medium py-2">Products</Link>
            <a href="#articles" className="block text-gray-900 font-medium py-2">Articles</a>
            <Link to="/partners" className="block text-gray-900 font-medium py-2">Partners</Link>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-2 mt-4"
            >
              Book a demo →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
