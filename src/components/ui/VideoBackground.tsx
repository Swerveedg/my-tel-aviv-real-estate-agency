'use client';
import React, { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({ 
  src, 
  poster, 
  className = "", 
  children 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if video is supported and should be loaded
  useEffect(() => {
    const video = document.createElement('video');
    const isSupported = !!video.canPlayType;
    setIsVideoSupported(isSupported);
    
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    
    // Only load video if supported and connection is good enough
    if (isSupported) {
      // Check for slow connection or mobile device
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
          setShouldLoadVideo(false);
        } else if (isMobile && connection && connection.effectiveType === '3g') {
          // On mobile with 3G, be more conservative
          setShouldLoadVideo(false);
        } else {
          setShouldLoadVideo(true);
        }
      } else {
        // If we can't detect connection, be conservative on mobile
        setShouldLoadVideo(!isMobile);
      }
    }
  }, []);

  // Handle video loading and playing
  useEffect(() => {
    const video = videoRef.current;
    if (video && isVideoSupported && shouldLoadVideo) {
      // Set up event listeners
      const handleLoadedData = () => setIsVideoLoaded(true);
      const handleError = () => setIsVideoSupported(false);
      const handleCanPlay = () => {
        // On mobile, pause video after a few seconds to save battery
        if (isMobile) {
          setTimeout(() => {
            if (video) {
              video.pause();
            }
          }, 5000);
        }
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      
      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, but we can't do much about it
          // The video will still show the poster
        });
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [isVideoSupported, shouldLoadVideo, isMobile]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {isVideoSupported && shouldLoadVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? "none" : "metadata"}
          aria-hidden="true"
          style={{
            objectPosition: 'center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
      )}
      
      {/* Content */}
      {children}
      
      <style jsx>{`
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          video {
            filter: brightness(1.05) contrast(1.05);
          }
        }
        
        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          video {
            animation: none;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          video {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          video {
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  );
} 