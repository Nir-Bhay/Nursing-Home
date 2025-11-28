import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
        // Slight delay to allow navigation then scroll? 
        // Usually handled by a hash link effect, but simpler to just go home for now.
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' }, // Assuming sections exist or will be mapped
    { name: 'Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Book Appointment', href: '/book-appointment' },
    { name: 'Contact', href: '#contact' }, // mapped to footer usually
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-subtle' : 'bg-white'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <div onClick={() => navigate('/')} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl font-bold">+</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-secondary text-xl leading-none">Dr. Nibhay</h1>
              <p className="text-primary text-xs font-medium">Nursing Home</p>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] font-medium text-secondary hover:text-primary transition-colors relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            
            <div className="flex items-center gap-2 bg-emergency/10 px-3 py-1 rounded-full animate-pulse">
              <span className="text-emergency text-sm font-bold">🚨 24/7 Emergency</span>
            </div>

            <Link 
              to="/book-appointment" 
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-heading font-bold text-lg text-secondary">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-secondary">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-secondary"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="p-4 border-t bg-surface">
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary py-3 rounded-lg font-medium">
                    <Phone className="w-4 h-4" /> Call
                  </button>
                  <Link to="/book-appointment" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium">
                    <Calendar className="w-4 h-4" /> Book
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
