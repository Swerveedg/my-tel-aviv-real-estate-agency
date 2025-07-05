'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Button } from './button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY > 80 && currentY > lastScrollY.current) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset for fixed navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on navigation
    const section = document.getElementById(targetId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '#properties', label: 'Properties', targetId: 'properties-section' },
    { href: '#about', label: 'About', targetId: 'about' },
    { href: '#team', label: 'Team', targetId: 'team' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-4 sm:px-8 py-4
          ${scrolled ? 'backdrop-blur-md' : ''}
          ${hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
        `}
        style={{
          background: scrolled ? 'rgba(10,27,42,0.8)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,.08)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        {/* Minimalist Word-mark */}
        <div className="text-xl sm:text-2xl font-semibold tracking-[0.12em] font-[var(--font-inter)] text-gray-100 select-none">
          Tel Aviv Estates
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => handleNavClick(e, item.targetId)}
              className="font-[var(--font-inter)] text-base font-medium tracking-[0.08em] text-gray-200 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block ml-6">
          <Button
            className="px-6 py-2 rounded-lg bg-black text-white font-semibold text-base tracking-[0.08em] shadow-md transition-all duration-250 hover:bg-[#F6D78B] hover:text-[#0A1B2A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F6D78B] font-[var(--font-inter)] border-0"
            style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)' }}
          >
            <a href="#contact" className="flex items-center gap-2">
              Contact
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-inherit opacity-80">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-100 bg-white/10 rounded-lg p-2 backdrop-blur-sm shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            className="flex flex-col items-center justify-center w-6 h-6"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-6 h-0.5 bg-current block transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-current block transition-all duration-300 my-1"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-6 h-0.5 bg-current block transition-all duration-300"
            />
          </motion.div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.3 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={e => handleNavClick(e, item.targetId)}
                          className="block text-lg font-medium text-gray-900 hover:text-deep-blue transition-colors duration-200 py-3 border-b border-gray-100"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-200">
                  <Button
                    className="w-full px-6 py-4 rounded-lg bg-deep-blue text-white font-semibold text-base tracking-[0.08em] shadow-md transition-all duration-250 hover:bg-[#F6D78B] hover:text-[#0A1B2A] focus:outline-none focus:ring-2 focus:ring-[#F6D78B] font-[var(--font-inter)] border-0"
                    style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)' }}
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      Contact Us
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-inherit opacity-80">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @supports (backdrop-filter: blur(16px)) or (-webkit-backdrop-filter: blur(16px)) {
          header {
            border-bottom: ${scrolled ? '1px solid rgba(255,255,255,.08)' : 'none'};
          }
        }
      `}</style>
    </>
  );
}
