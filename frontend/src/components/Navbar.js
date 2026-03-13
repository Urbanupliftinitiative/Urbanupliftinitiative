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
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="w-full px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">OnePermit</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center space-x-1 hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  {productsContent.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#articles" className={`hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Articles
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('company')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center space-x-1 hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  {companyContent.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/partners" className={`hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Partners
            </Link>

            <a href="#support" className={`hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Support
            </a>

            <a href="#login" className={`hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Manager Login
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button className={`p-2 hover:bg-white/20 rounded-full transition-colors ${isScrolled ? '' : 'hover:bg-white/10'}`}>
              <Search className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`} />
            </button>
            <a href="#shop" className={`hover:text-gray-600 transition-colors text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Shop
            </a>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-7 py-3 text-base font-medium transition-all"
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
