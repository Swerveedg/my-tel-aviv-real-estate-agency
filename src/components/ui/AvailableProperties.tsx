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
    className="w-full h-24 text-white"
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
        className="relative py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 section-transition"
      >
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg font-medium text-deep-blue mb-6 tracking-widest"
            >
              DISCOVER YOUR DREAM HOME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-title text-7xl md:text-8xl font-bold text-soft-black mb-12"
            >
              Find Your Perfect Home
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="elegant-text text-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed"
            >
              Each property tells a unique story of luxury, comfort, and the
              vibrant spirit of Tel Aviv.
              <br />
              <span className="font-medium text-soft-black">
                Find your perfect match in the city that never sleeps.
              </span>
            </motion.p>
          </motion.div>

          {/* Premium Properties Masonry Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="columns-1 sm:columns-2 lg:columns-3 gap-y-12 gap-x-8"
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={cardVariants}
                custom={index}
                className="group card-hover bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/50 relative inline-block w-full mb-8 cursor-pointer"
                onMouseEnter={() => setSelectedProperty(property.id)}
                onMouseLeave={() => setSelectedProperty(null)}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleImageClick(property.image)}
              >
                {/* Premium Image Container */}
                <div className="relative h-96 overflow-hidden">
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
                    className="absolute top-6 right-6 glass px-6 py-3 rounded-full shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl font-bold text-soft-black">
                      {property.price}
                    </span>
                  </motion.div>

                  {/* Premium Location Badge */}
                  <motion.div
                    className="absolute top-6 left-6 glass px-4 py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-sm font-medium text-soft-black">
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
                <div className="p-10">
                  <motion.h3
                    className="text-2xl font-bold text-soft-black mb-3 group-hover:text-deep-blue transition-colors duration-500 leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {property.title}
                  </motion.h3>

                  <motion.p
                    className="text-gold font-medium mb-6 italic"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {property.subtitle}
                  </motion.p>

                  {/* Premium Property Details */}
                  <div className="flex justify-between text-sm text-warm-gray mb-8">
                    <motion.span
                      className="flex items-center font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-deep-blue"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {property.bedrooms} beds
                    </motion.span>
                    <motion.span
                      className="flex items-center font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-deep-blue"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {property.bathrooms} baths
                    </motion.span>
                    <motion.span
                      className="flex items-center font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-deep-blue"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {property.area}
                    </motion.span>
                  </div>

                  {/* Premium Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {property.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-deep-blue/10 to-gold/10 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Premium CTA Button */}
                  <motion.button
                    className="w-full btn-primary btn-elegant py-4 text-lg font-medium group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/property/${property.id}`)}
                  >
                    <span className="relative z-10">View Details</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-deep-blue to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </motion.button>
                </div>

                {/* Premium Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-deep-blue/20 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-24"
          >
            <motion.button
              className="btn-primary btn-elegant px-16 py-6 text-2xl font-medium shadow-2xl group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/properties')}
            >
              <span className="relative z-10">Explore All Properties</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-deep-blue to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.button>
          </motion.div>

          {lightboxOpen && lightboxImg && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="max-width-7xl mx-auto">
                <div className="relative w-full h-full">
                  <img
                    src={lightboxImg}
                    alt="Property Preview"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Premium Floating Elements */}
        <div className="absolute inset-0 bg-blobs pointer-events-none">
          <div className="bg-blob bg-blob-yellow" />
          <div className="bg-blob bg-blob-orange" />
          <div className="bg-blob bg-blob-peach" />
          <div className="bg-blob bg-blob-blue" />
        </div>
      </section>
    </>
  );
}
