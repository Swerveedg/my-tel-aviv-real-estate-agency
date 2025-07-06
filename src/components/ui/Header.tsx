'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { SideDrawer } from './side-drawer';
import { LangSwitcher } from './lang-switcher';
import { Button } from './button';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useLockBodyScroll(drawerOpen);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('properties-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setScrolled(rect.top <= 0);
      }
      const currentY = window.scrollY;
      if (currentY > 80 && currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // run on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Header Bar */}
      <header className={`fixed top-0 left-0 w-full h-16 z-50 border-b border-white/20 transition-all duration-500 ease-in-out will-change-transform ${scrolled ? 'bg-black' : 'bg-gradient-to-r from-luxury-dark/95 to-luxury-gray/95'} ${hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center justify-between h-full px-4 sm:px-8">
          
          {/* Left Group */}
          <div className="flex items-center gap-3">
            {/* Menu Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-200 border ${scrolled ? 'bg-black border-black' : 'bg-white border-gray-300'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80`}
            >
              <Menu className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-black'}`} />
            </motion.button>
            
            {/* Menu Label */}
            <span className="text-xs uppercase tracking-[0.15em] font-mono text-white/80 hidden sm:block">
              MENU
            </span>
            
            {/* Ghost Spacer */}
            <div className="w-4" />
          </div>

          {/* Center Group */}
          <div className="absolute left-1/2 -translate-x-1/2 items-center gap-6 md:flex hidden">
            {/* Since Text */}
            <span className="text-[10px] tracking-wide uppercase font-mono text-white/80 hidden sm:block">
              SINCE
            </span>
            {/* Logo Square */}
            <div className="w-13 h-13 border border-white/30 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* 1970 Text */}
            <span className="text-[10px] tracking-wide uppercase font-mono text-white/80 hidden sm:block">
              1970
            </span>
          </div>

          {/* Right Group */}
          <div className="items-center gap-6 ml-auto md:flex hidden">
            {/* Language Switcher */}
            <LangSwitcher />
            {/* Contact Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleContactClick}
                aria-label="Get in touch"
                className={`w-[140px] h-11 rounded-2xl font-semibold text-sm tracking-[0.08em] shadow-lg hover:shadow-xl transition-all duration-200 border-0 flex items-center justify-center gap-2 ${scrolled ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50 focus:ring-2 focus:ring-white/50'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80`}
              >
                GET IN TOUCH
                <ArrowRight className={`w-4 h-4 ${scrolled ? 'text-white' : 'text-black'}`} />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      <SideDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  );
}
