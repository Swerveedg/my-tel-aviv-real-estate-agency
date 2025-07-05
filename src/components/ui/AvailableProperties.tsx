"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { properties } from "@/lib/properties";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

// Premium SVG Wave Divider
const WaveDivider = () => (
  <svg
    className="w-full h-12 sm:h-24 text-white"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      opacity=".25"
      fill="currentColor"
    />
    <path
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
      opacity=".5"
      fill="currentColor"
    />
    <path
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      fill="currentColor"
    />
  </svg>
);

export default function AvailableProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const router = useRouter();

  const handleImageClick = (img: string) => {
    setLightboxImg(img);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Premium Wave Divider */}
      <div className="relative bg-gradient-to-b from-white to-gray-50">
        <WaveDivider />
      </div>

      <section
        ref={ref}
        id="properties-section"
        className="relative py-16 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 section-transition"
      >
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-24"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg font-medium text-deep-blue mb-4 sm:mb-6 tracking-widest"
            >
              DISCOVER YOUR DREAM HOME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-title text-4xl sm:text-7xl md:text-8xl font-bold text-soft-black mb-8 sm:mb-12"
            >
              Find Your Perfect Home
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="elegant-text text-lg sm:text-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed px-4"
            >
              Each property tells a unique story of luxury, comfort, and the
              vibrant spirit of Tel Aviv.
              <br />
              <span className="font-medium text-soft-black">
                Find your perfect match in the city that never sleeps.
              </span>
            </motion.p>
          </motion.div>

          {/* Premium Properties Grid - Mobile Optimized */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={cardVariants}
                custom={index}
                className="group card-hover bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/50 relative cursor-pointer touch-manipulation"
                onMouseEnter={() => setSelectedProperty(property.id)}
                onMouseLeave={() => setSelectedProperty(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleImageClick(property.image)}
              >
                {/* Premium Image Container */}
                <div className="relative h-64 sm:h-96 overflow-hidden">
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
                    }}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Premium Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/20 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Premium Price Badge */}
                  <motion.div
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 glass px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm sm:text-xl font-bold text-soft-black">
                      {property.price}
                    </span>
                  </motion.div>

                  {/* Premium Location Badge */}
                  <motion.div
                    className="absolute top-4 sm:top-6 left-4 sm:left-6 glass px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-xs sm:text-sm font-medium text-soft-black">
                      {property.location}
                    </span>
                  </motion.div>

                  {/* Premium Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-deep-blue/30 to-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    initial={false}
                  />
                </div>

                {/* Premium Content */}
                <div className="p-6 sm:p-10">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-soft-black mb-2 sm:mb-3 group-hover:text-deep-blue transition-colors duration-500 leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {property.title}
                  </motion.h3>

                  <motion.p
                    className="text-gold font-medium mb-4 sm:mb-6 italic text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {property.subtitle}
                  </motion.p>

                  {/* Mobile-optimized property details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-soft-black">{property.bedrooms} Beds</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-soft-black">{property.bathrooms} Baths</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-soft-black">{property.area}</span>
                    </div>
                  </div>

                  {/* Mobile-optimized CTA button */}
                  <motion.button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-deep-blue text-white font-semibold rounded-lg transition-all duration-300 hover:bg-soft-black focus:outline-none focus:ring-2 focus:ring-deep-blue min-h-[44px] touch-manipulation"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/property/${property.id}`);
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile-optimized lightbox */}
          {lightboxOpen && lightboxImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setLightboxOpen(false)}
            >
              <div className="relative max-w-4xl max-h-[90vh] mx-4">
                <img
                  src={lightboxImg}
                  alt="Property"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
