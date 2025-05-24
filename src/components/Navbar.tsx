"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Haji Khusus', href: '#haji-khusus' },
  { name: 'Paket Umroh', href: '#paket-umroh' },
  { name: 'Jadwal', href: '#jadwal' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)))
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      let currentActive = '';
      sections.forEach((section, index) => {
        if (section) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentActive = navLinks[index].href;
          }
        }
      });
      setActiveSection(currentActive);

      // Update navbar background
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#beranda" className="flex items-center group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/Logo/logo-cinghaji.jpg"
                  alt="Cing Haji Travel Logo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-100'
              }`}>
                Cing Haji Travel
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
                  } ${
                    activeSection === link.href 
                      ? isScrolled ? 'text-blue-600' : 'text-blue-100'
                      : ''
                  }`}
                  scroll={true}
                >
                  <span className="relative">
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                      activeSection === link.href ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white hover:text-blue-100 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-7 w-7 transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-7 w-7 transition-transform duration-300 ease-in-out rotate-90`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className={`px-2 pt-2 pb-4 space-y-1 sm:px-3 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900/95 backdrop-blur-md'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white hover:text-blue-100 hover:bg-white/10'
              } ${
                activeSection === link.href 
                  ? isScrolled ? 'text-blue-600 bg-gray-100' : 'text-blue-100 bg-white/10'
                  : ''
              }`}
              scroll={true}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 