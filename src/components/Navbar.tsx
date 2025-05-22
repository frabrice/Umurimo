import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = (path: string) =>
    `relative px-3 py-2 transition-all duration-200 ${
      location.pathname === path
        ? 'text-primary font-medium'
        : isScrolled
        ? 'text-gray-800 hover:text-primary'
        : 'text-gray-800 hover:text-primary'
    }`;

  const mobileLinkClasses = (path: string) =>
    `block px-4 py-3 text-lg ${
      location.pathname === path ? 'text-primary font-medium' : 'text-gray-800'
    }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Logo />
              <span className="ml-2 text-xl font-semibold text-gray-900">Umurimo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={linkClasses('/')}>
              Job Posts
            </Link>
            <Link to="/how-it-works" className={linkClasses('/how-it-works')}>
              How It Works
            </Link>
            <Link to="/blog" className={linkClasses('/blog')}>
              The Blog Spot
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col">
            <Link to="/" className={mobileLinkClasses('/')} onClick={closeMenu}>
              Job Posts
            </Link>
            <Link to="/how-it-works" className={mobileLinkClasses('/how-it-works')} onClick={closeMenu}>
              How It Works
            </Link>
            <Link to="/blog" className={mobileLinkClasses('/blog')} onClick={closeMenu}>
              The Blog Spot
            </Link>
            <div className="flex flex-col px-4 py-3 space-y-2">
              <Link
                to="/contact"
                className="px-5 py-2 text-center bg-primary text-white rounded-md hover:bg-primary-dark transition-all"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;