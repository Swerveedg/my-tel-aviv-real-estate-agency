'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Button } from './button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50); // Reduced threshold for earlier background appearance
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

  // Smooth scroll handler with offset for fixed navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const yOffset = -80; // Adjust for navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-8 py-4
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
      <div className="text-2xl font-semibold tracking-[0.12em] font-[var(--font-inter)] text-gray-100 select-none">
        Tel Aviv Estates
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <a
          href="#properties"
          onClick={e => handleNavClick(e, 'properties-section')}
          className="font-[var(--font-inter)] text-base font-medium tracking-[0.08em] text-gray-200 transition-colors duration-200 hover:text-white"
        >
          Properties
        </a>
        <a
          href="#about"
          onClick={e => handleNavClick(e, 'about')}
          className="font-[var(--font-inter)] text-base font-medium tracking-[0.08em] text-gray-200 transition-colors duration-200 hover:text-white"
        >
          About
        </a>
        <a
          href="#team"
          onClick={e => handleNavClick(e, 'team')}
          className="font-[var(--font-inter)] text-base font-medium tracking-[0.08em] text-gray-200 transition-colors duration-200 hover:text-white"
        >
          Team
        </a>
      </nav>

      {/* CTA Button */}
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

      {/* Mobile menu (icon) */}
      <button className="md:hidden text-gray-100 bg-white/10 rounded-lg p-2 backdrop-blur-sm shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <style jsx>{`
        @supports (backdrop-filter: blur(16px)) or (-webkit-backdrop-filter: blur(16px)) {
          header {
            border-bottom: ${scrolled ? '1px solid rgba(255,255,255,.08)' : 'none'};
          }
        }
      `}</style>
    </header>
  );
}
