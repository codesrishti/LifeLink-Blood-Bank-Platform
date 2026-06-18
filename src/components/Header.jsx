import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Donors', path: '/find-donors' },
    { name: 'Request Blood', path: '/request-blood' },
    { name: 'Camps', path: '/camps' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-surface-container' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-on-surface flex items-center">
                Life<span className="text-primary">Link</span>
              </span>
              <span className="block text-[10px] text-secondary tracking-widest font-semibold uppercase -mt-1">
                Vitality System
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative group
                  ${isActive 
                    ? 'text-primary' 
                    : 'text-secondary hover:text-on-surface hover:bg-surface-container-low'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary-container shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-base mr-2">volunteer_activism</span>
              Donate Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-low transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          {/* Content */}
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-surface-container shadow-xl px-4 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200
                    ${isActive 
                      ? 'text-primary bg-primary-container/10' 
                      : 'text-secondary hover:text-on-surface hover:bg-surface-container-low'
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-surface-container-low">
                <Link
                  to="/donate"
                  className="flex items-center justify-center w-full px-6 py-3 rounded-xl text-base font-bold text-white bg-primary hover:bg-primary-container shadow-lg shadow-primary/10 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-lg mr-2">volunteer_activism</span>
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
