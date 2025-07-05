'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source 
            src="https://res.cloudinary.com/dfuocwiqv/video/upload/v1751734031/d0vph6zvgjtivero8bxv.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-section"
        >
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="caption-text text-blue-300 mb-8"
          >
            Your story begins here
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="hero-title text-4xl md:text-6xl lg:text-7xl mb-12 text-white"
          >
            Where Dreams
            <br />
            <span className="text-gradient-warm font-light">
              Come Alive
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="elegant-text text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Every property we offer is more than just a home—it's a gateway to the vibrant lifestyle 
            that makes Tel Aviv one of the most exciting cities in the world.
            <br />
            <span className="body-text text-base text-gray-300 mt-4 block">
              Your new rhythm of life awaits.
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary btn-elegant mt-16 px-12 py-5 text-xl font-medium shadow-2xl group"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </motion.div>

        {/* Floating Stats with better design */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-20 text-center"
        >
          <div className="group">
            <motion.div 
              className="text-3xl font-light text-white group-hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              24/7
            </motion.div>
            <div className="caption-text text-gray-400 mt-2">Support</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="group">
            <motion.div 
              className="text-3xl font-light text-white group-hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              100%
            </motion.div>
            <div className="caption-text text-gray-400 mt-2">Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="group">
            <motion.div 
              className="text-3xl font-light text-white group-hover:text-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              15+
            </motion.div>
            <div className="caption-text text-gray-400 mt-2">Years</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="caption-text mb-3">Continue exploring</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-white/40">
            <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"
      />
    </section>
  );
} 