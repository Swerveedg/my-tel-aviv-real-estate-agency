'use client';
import React from "react";
import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

export default function Hero() {
  // Smooth scroll handler
  const handleDiscoverClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.getElementById('properties-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <VideoBackground 
      src="https://res.cloudinary.com/dfuocwiqv/video/upload/v1751734031/d0vph6zvgjtivero8bxv.mp4"
      poster="/poster.svg"
      className="flex items-center justify-center min-h-screen px-4 sm:px-6"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      
      {/* Content Center */}
      <div className="relative z-20 mx-auto text-center max-w-4xl font-[var(--font-inter)] px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.5, 1.35] }}
          className="font-extrabold text-gray-100 text-[clamp(2.5rem,8vw,6rem)] leading-tight tracking-[-0.02em] drop-shadow-md hero-zoom"
          style={{ 
            mixBlendMode: 'overlay', 
            textShadow: '0 2px 6px rgba(0,0,0,.25)',
            WebkitTextSizeAdjust: '100%'
          }}
        >
          Where the City Meets the Sea
        </motion.h1>
        <div className="mt-4 sm:mt-6 max-w-[40ch] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.17, 0.67, 0.5, 1.35] }}
            className="text-[clamp(1rem,3vw,1.4rem)] font-light text-gray-100 leading-relaxed"
          >
            Exclusive residences overlooking the Mediterranean, designed for those who live without compromise.
          </motion.p>
        </div>
        <motion.button
          type="button"
          onClick={handleDiscoverClick}
          className="inline-flex items-center justify-center gap-2 mt-8 sm:mt-10 px-8 sm:px-10 py-4 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-black shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black font-[var(--font-inter)] min-h-[48px] min-w-[160px] touch-manipulation"
          whileHover={{
            boxShadow: "0 0 30px 4px rgba(246,215,139,.6)",
            y: -2
          }}
          whileTap={{
            scale: 0.98,
            y: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Discover Properties
          <svg className="h-4 w-4 sm:h-5 sm:w-5 stroke-current" fill="none" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
      
      <style jsx>{`
        .hero-zoom {
          animation: heroZoom 10s ease-in-out infinite alternate;
        }
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hero-zoom {
            animation: none;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hero-zoom {
            animation: none;
          }
        }
      `}</style>
    </VideoBackground>
  );
} 