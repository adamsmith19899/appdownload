import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Smartphone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">Capcut Apk</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  <a href="#features" className="nav-link">Features</a>
  <a href="#how-it-works" className="nav-link">How it Works</a>
  <a href="#faqs" className="nav-link">FAQs</a>
  <a href="https://drive.google.com/file/d/1vyIP_LHClmZVXFTRfS5Cs6VghDxFxsPK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-btn">
    <Download className="h-4 w-4 mr-2" />
    Download
  </a>
</div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How it Works</a>
              <a href="#faqs" className="nav-link">FAQs</a>
              <button className="download-btn">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
