import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

interface NavbarProps {
  openQuoteForm: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openQuoteForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080e1c]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center z-50 space-x-3">
            {/* Logo placeholder - you can replace this with your actual logo */}
            <div className="w-10 h-10 overflow-hidden">
  <img
    src={logo}
    alt="logo"
    className="w-full h-full object-cover"
  />
</div>
            <span className="text-white text-2xl font-bold">
              <span className="gradient-text">PIX2PIXEL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Home</a>
            <a href="#about" className="text-sm text-white hover:text-[#03e9f4] transition-colors">About</a>
            <a href="#services" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Services</a>
            <a href="#process" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Process</a>
            <a href="#team" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Team</a>
            <a href="#contact" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Contact</a>
            <button 
              onClick={openQuoteForm}
              className="blue-gradient-btn text-white px-4 py-2 text-sm font-medium"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#080e1c]/98 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-6 p-4">
          <a href="#home" className="text-white text-lg" onClick={closeMenu}>Home</a>
          <a href="#about" className="text-white text-lg" onClick={closeMenu}>About</a>
          <a href="#services" className="text-white text-lg" onClick={closeMenu}>Services</a>
          <a href="#process" className="text-white text-lg" onClick={closeMenu}>Process</a>
          <a href="#team" className="text-white text-lg" onClick={closeMenu}>Team</a>
          <a href="#contact" className="text-white text-lg" onClick={closeMenu}>Contact</a>
          <button 
            onClick={() => {
              openQuoteForm();
              closeMenu();
            }}
            className="blue-gradient-btn text-white px-8 py-3 text-lg font-medium mt-4"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;