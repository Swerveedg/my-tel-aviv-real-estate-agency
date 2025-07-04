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
      src="/telaviv-skyview.mp4"
      poster="/poster.svg"
      className="flex items-center justify-center min-h-screen px-4"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      
      {/* Content Center */}
      <div className="relative z-20 mx-auto text-center max-w-3xl font-[var(--font-inter)]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.5, 1.35] }}
          className="font-extrabold text-gray-100 text-[clamp(48px,6.5vw,120px)] leading-snug tracking-[-0.02em] drop-shadow-md hero-zoom"
          style={{ mixBlendMode: 'overlay', textShadow: '0 2px 6px rgba(0,0,0,.25)' }}
        >
          Where the City Meets the Sea
        </motion.h1>
        <div className="mt-6 max-w-[40ch] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.17, 0.67, 0.5, 1.35] }}
            className="text-[clamp(1rem,2vw,1.4rem)] font-light text-gray-100"
          >
            Exclusive residences overlooking the Mediterranean, designed for those who live without compromise.
          </motion.p>
        </div>
        <motion.button
          type="button"
          onClick={handleDiscoverClick}
          className="inline-flex items-center justify-center gap-2 mt-10 px-10 py-4 rounded-full text-lg font-bold text-white bg-black shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black font-[var(--font-inter)]"
          whileHover={{
            boxShadow: "0 0 30px 4px rgba(246,215,139,.6)",
            y: -2
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Discover Properties
          <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24">
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
      `}</style>
    </VideoBackground>
  );
} 