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
  const [imageError, setImageError] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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
          } else if (index === 0 && window.scrollY < section.offsetTop) {
             // Handle case where scroll is above the first section
            currentActive = '';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/85 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#beranda" className="flex items-center space-x-2 group font-bold">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                {!imageError ? (
                  <Image
                    src="/images/Logo/logo-cinghaji.jpg"
                    alt="Cing Haji Travel Logo"
                    fill
                    sizes="(max-width: 768px) 48px, 48px"
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    CH
                  </div>
                )}
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
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-gray-700 hover:text-blue-600 transition-colors text-sm uppercase font-medium tracking-wider py-2 ${activeSection === link.href ? 'text-blue-600' : ''}`}>
                  <span className="relative group">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
              <a
                href="https://wa.me/6281298093910"
                className="relative overflow-hidden bg-blue-600 text-white px-8 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                     <polyline points="22,6 12,13 2,6"/>
                   </svg>
                  <span>Kontak</span>
                </span>
                 <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none"
              aria-label="Buka menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'} md:hidden fixed top-20 right-0 bottom-0 w-full bg-white/95 backdrop-blur-lg`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm uppercase font-medium tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
            <a
            href="https://wa.me/6281298093910"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 mx-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Hubungi WA</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
} 