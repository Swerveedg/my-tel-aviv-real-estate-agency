'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoOption {
  id: string;
  name: string;
  url: string;
  poster?: string;
  description: string;
}

const videoOptions: VideoOption[] = [
  {
    id: 'cloudinary-upload',
    name: 'Uploaded Video',
    url: 'https://res.cloudinary.com/dfuocwiqv/video/upload/v1751734031/d0vph6zvgjtivero8bxv.mp4',
    poster: '/poster.svg',
    description: 'Your uploaded video from Cloudinary'
  },
  {
    id: 'original',
    name: 'Original Video',
    url: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761',
    poster: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Original Tel Aviv skyline video'
  },
  {
    id: 'local',
    name: 'Local Video',
    url: '/telaviv-skyview.mp4',
    poster: '/poster.svg',
    description: 'Local video file'
  }
];

interface VideoManagerProps {
  onVideoChange: (video: VideoOption) => void;
  currentVideo?: VideoOption;
}

export default function VideoManager({ onVideoChange, currentVideo }: VideoManagerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoSelect = (video: VideoOption) => {
    onVideoChange(video);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentVideo ? `Current: ${currentVideo.name}` : 'Select Video'}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 left-0 z-50 bg-white rounded-lg shadow-xl border border-gray-200 min-w-80"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Background Video</h3>
            <div className="space-y-3">
              {videoOptions.map((video) => (
                <motion.div
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  className="p-3 rounded-lg border border-gray-200 hover:border-black cursor-pointer transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{video.name}</h4>
                      <p className="text-sm text-gray-600">{video.description}</p>
                    </div>
                    {currentVideo?.id === video.id && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 