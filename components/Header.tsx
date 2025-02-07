'use client';
import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-card backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">

            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 transform hover:scale-105">
              AutoElite
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/" className="nav-link group">
              <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">Home</span>
            </Link>
            <Link href="/cars" className="nav-link group">
              <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">Explore Cars</span>
            </Link>
            <Link href="/deals" className="nav-link group">
              <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">Special Deals</span>
            </Link>
            <Link href="/about" className="nav-link group">
              <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">About Us</span>
            </Link>
            <Link href="/contact" className="nav-link group">
              <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">Contact</span>
            </Link>
            <Link href="/booking">
            <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Book Test Drive
            </button>
            </Link>

            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitch />
            <button 

              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-1 hover:rotate-180"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (

          <div className="md:hidden absolute left-0 right-0 bg-card border-b border-gray-200 px-4 py-4 mt-2 shadow-lg transition-all duration-300 ease-in-out animate-slideDown">
            <div className="flex flex-col space-y-3">





              <Link href="/cars" className="mobile-nav-link transform transition-transform duration-300 hover:scale-105" onClick={() => setIsMenuOpen(false)}>Explore Cars</Link>
              <Link href="/deals" className="mobile-nav-link transform transition-transform duration-300 hover:scale-105" onClick={() => setIsMenuOpen(false)}>Special Deals</Link>
              <Link href="/about" className="mobile-nav-link transform transition-transform duration-300 hover:scale-105" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/contact" className="mobile-nav-link transform transition-transform duration-300 hover:scale-105" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">
                Book Test Drive
              </button>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-blue-600 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300;
        }
        .mobile-nav-link {
          @apply text-gray-700 hover:text-blue-600 transition-colors font-medium block w-full text-center py-2 rounded-lg hover:bg-blue-50;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
