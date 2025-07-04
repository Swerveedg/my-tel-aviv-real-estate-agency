'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      
      // Set cursor text based on element type
      if (target.tagName === 'BUTTON') {
        setCursorText(target.textContent || 'Click');
      } else if (target.classList.contains('card-hover')) {
        setCursorText('Explore');
      } else if (target.tagName === 'A') {
        setCursorText('Visit');
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .card-hover, .btn-primary, .glass');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Premium Main Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.4,
        }}
        style={{
          background: isHovering 
            ? 'var(--gradient-primary)' 
            : 'var(--gradient-gold)',
          boxShadow: isHovering 
            ? '0 0 30px rgba(30, 58, 138, 0.8)' 
            : '0 0 20px rgba(212, 175, 55, 0.5)',
        }}
      />
      
      {/* Premium Cursor Trail */}
      <motion.div
        className="absolute w-3 h-3 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.3 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.2,
        }}
        style={{
          background: 'var(--gradient-elegant)',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
        }}
      />
      
      {/* Premium Cursor Ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full pointer-events-none z-[9997] border-2"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.1,
        }}
        style={{
          borderColor: 'var(--gold)',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
        }}
      />
      
      {/* Premium Cursor Text */}
      {isHovering && cursorText && (
        <motion.div
          className="absolute pointer-events-none z-[9999] text-white text-sm font-bold glass px-4 py-2 rounded-full backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          style={{
            left: mousePosition.x + 25,
            top: mousePosition.y - 15,
            background: 'rgba(30, 58, 138, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          {cursorText}
        </motion.div>
      )}

      {/* Premium Cursor Particles */}
      {isHovering && (
        <>
          <motion.div
            className="absolute w-1 h-1 rounded-full pointer-events-none z-[9996]"
            animate={{
              x: mousePosition.x + Math.random() * 20 - 10,
              y: mousePosition.y + Math.random() * 20 - 10,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              background: 'var(--gold)',
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)',
            }}
          />
          <motion.div
            className="absolute w-1 h-1 rounded-full pointer-events-none z-[9996]"
            animate={{
              x: mousePosition.x + Math.random() * 20 - 10,
              y: mousePosition.y + Math.random() * 20 - 10,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.3,
            }}
            style={{
              background: 'var(--deep-blue)',
              boxShadow: '0 0 10px rgba(30, 58, 138, 0.8)',
            }}
          />
        </>
      )}
    </>
  );
} 