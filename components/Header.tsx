import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ascension', href: '#ascension' },
    { label: 'Stats', href: '#castor-wiki' },
    { label: 'Gym', href: '#gym-protocol' },
    { label: 'Scent', href: '#fragrance' },
    { label: 'Wiki', href: '#softmaxxing' },
    { label: 'Armory', href: '#catalog' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-gold-400/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white z-50">
          IDO PROTOCOL<span className="text-gold-400"> 2026</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-gold-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="text-gold-400" /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
           {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-6 text-2xl font-serif text-white hover:text-gold-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Header;