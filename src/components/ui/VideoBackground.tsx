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

  // Check if video is supported and should be loaded
  useEffect(() => {
    const video = document.createElement('video');
    const isSupported = !!video.canPlayType;
    setIsVideoSupported(isSupported);
    
    // Only load video if supported and connection is good enough
    if (isSupported) {
      // Check for slow connection
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
          setShouldLoadVideo(false);
        } else {
          setShouldLoadVideo(true);
        }
      } else {
        setShouldLoadVideo(true);
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
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
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
      };
    }
  }, [isVideoSupported, shouldLoadVideo]);

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
          preload="metadata"
          aria-hidden="true"
        />
      )}
      
      {/* Fallback for browsers that don't support video or when video fails to load */}
      {poster && (!isVideoSupported || !shouldLoadVideo || !isVideoLoaded) && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: `url(${poster})`}}
          aria-hidden="true"
        />
      )}
      
      {/* Content */}
      {children}
      
      <style jsx>{`
        /* Ensure video covers the entire container */
        video {
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Responsive video sizing */
        @media (max-width: 768px) {
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        
        /* Performance optimizations */
        video {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          video {
            animation: none;
          }
        }
        
        /* Optimize for mobile devices */
        @media (max-width: 768px) {
          video {
            object-position: center;
          }
        }
      `}</style>
    </div>
  );
} 