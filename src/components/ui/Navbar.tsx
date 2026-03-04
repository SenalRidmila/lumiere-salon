"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State එක

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Review', href: '/#review' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Artisans', href: '/#artisans' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Mobile menu එක open වෙලා තියෙද්දී පිටිපස්සේ පේජ් එක scroll වෙන එක නවත්තන්න
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-salon-bg border-b border-salon-mutedGold/20 py-4 shadow-md' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
          
          <Link
            href="/"
            className="text-3xl font-serif tracking-widest text-salon-text z-50"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            LUMIÈRE
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-salon-charcoal">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '');
              const isActive = activeSection === sectionId;

              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative group transition-colors duration-300 hover:text-salon-mutedGold ${
                    isActive ? 'text-salon-mutedGold' : ''
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-[1px] bg-salon-mutedGold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              )
            })}
          </div>

          {/* Desktop Book Now Button */}
          <Link 
            href="/booking"
            className={`hidden md:block px-8 py-3 text-xs uppercase tracking-widest transition-all duration-500 font-medium ${
              isScrolled 
                ? 'bg-salon-text text-salon-bg hover:bg-salon-mutedGold hover:text-salon-text' 
                : 'border border-salon-text text-salon-text hover:bg-salon-text hover:text-salon-bg'
            }`}
          >
            Book Now
          </Link>

          {/* Mobile Hamburger Button (Visible only on Mobile) */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger lines with smooth animation to "X" */}
            <span className={`block w-6 h-[1px] bg-salon-text transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-salon-text transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-salon-text transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>

        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-salon-bg z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 w-full px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-salon-text hover:text-salon-mutedGold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-12 h-[1px] bg-salon-mutedGold/30 my-4"></div>

          <Link 
            href="/booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-4 border border-salon-text text-salon-text text-sm uppercase tracking-[0.2em] font-medium hover:bg-salon-text hover:text-salon-bg transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}