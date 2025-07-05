'use client';
import { properties } from "@/lib/properties";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import VideoManager from '../../../components/ui/VideoManager'

export default function PropertyDetailPage() {
  const { propertyId } = useParams();
  const router = useRouter();
  const property = properties.find((p) => p.id === Number(propertyId));
  if (!property) return notFound();

  // Gallery state
  const [mainImg, setMainImg] = useState(property.gallery?.[0] || property.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Animation direction: -1 for left, 1 for right
  const [direction, setDirection] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);

  // Property navigation
  const propertyIndex = properties.findIndex((p) => p.id === property.id);
  const prevProperty = properties[(propertyIndex - 1 + properties.length) % properties.length];
  const nextProperty = properties[(propertyIndex + 1) % properties.length];

  function handleNavigate(targetId: number, dir: number) {
    setDirection(dir);
    setPageVisible(false);
    setTimeout(() => {
      router.push(`/property/${targetId}`);
    }, 350);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {pageVisible && (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, x: direction === 1 ? 120 : direction === -1 ? -120 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -120 : direction === -1 ? 120 : 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#fef6e4] to-[#fffaf0] px-4 py-16"
        >
          <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/60 mt-24 md:mt-32 lg:mt-40">
            {/* Image Gallery with Navigation */}
            <div className="relative w-full">
              {/* Left Button */}
              <motion.button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-gold/90 text-deep-blue hover:text-white rounded-full shadow-lg p-2 transition-colors duration-300"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(prevProperty.id, -1)}
                aria-label="Previous property"
                style={{ outline: 'none' }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </motion.button>
              {/* Right Button */}
              <motion.button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-gold/90 text-deep-blue hover:text-white rounded-full shadow-lg p-2 transition-colors duration-300"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(nextProperty.id, 1)}
                aria-label="Next property"
                style={{ outline: 'none' }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </motion.button>
              <motion.img
                src={mainImg}
                alt={property.title}
                className="w-full h-80 md:h-96 object-cover cursor-pointer transition-all duration-300 rounded-t-3xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setLightboxOpen(true)}
              />
              {/* Thumbnails */}
              <div className="flex gap-3 justify-center mt-3 mb-2">
                {property.gallery?.map((img, idx) => (
                  <motion.img
                    key={img}
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className={`h-16 w-24 object-cover rounded-lg border-2 cursor-pointer transition-all duration-200 ${mainImg === img ? 'border-gold shadow-lg' : 'border-gray-200'}`}
                    whileHover={{ scale: 1.06 }}
                    onClick={() => setMainImg(img)}
                  />
                ))}
              </div>
            </div>
            {/* Lightbox */}
            <AnimatePresence>
              {lightboxOpen && (
                <motion.div
                  key="lightbox"
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setLightboxOpen(false)}
                >
                  <motion.img
                    src={mainImg}
                    alt="Large property image"
                    className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    onClick={e => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="p-10">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-soft-black mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {property.title}
              </motion.h1>
              <motion.p
                className="text-xl text-gold font-medium mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {property.subtitle}
              </motion.p>

              {/* Property Highlights Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-deep-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                  Property Highlights
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {property.highlights && property.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-lg text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-deep-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z"/></svg>
                  Description
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">{property.description}</p>
              </div>

              {/* Google Maps Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-deep-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                  Location
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                  ></iframe>
                </div>
              </div>

              {/* Contact/Interest Form Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-deep-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  Interested? Contact Us
                </h2>
                <ContactForm />
              </div>

              {/* Video Management Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-deep-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v8H4V5z"/></svg>
                  Video Management
                </h2>
                <div className="space-y-6">
                  <VideoManager 
                    onVideoChange={(video) => {
                      console.log('Selected video:', video);
                      alert(`Video changed to: ${video.name}\nURL: ${video.url}`);
                    }}
                    currentVideo={{
                      id: 'cloudinary-upload',
                      name: 'Uploaded Video',
                      url: 'https://res.cloudinary.com/dfuocwiqv/video/upload/v1751734031/d0vph6zvgjtivero8bxv.mp4',
                      description: 'Your uploaded video from Cloudinary'
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-base text-warm-gray mb-8">
                <span className="font-medium">{property.bedrooms} beds</span>
                <span className="font-medium">{property.bathrooms} baths</span>
                <span className="font-medium">{property.area}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {property.features.map((feature, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-deep-blue/10 to-gold/10 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
              <Link href="/" className="inline-block mt-4">
                <motion.button
                  className="btn-primary btn-elegant px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back to Properties
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-6 py-5 text-center shadow"
        >
          Thank you for your interest! We'll be in touch soon.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="space-y-5"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <label className="block text-lg font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:outline-none text-lg shadow-sm"
              placeholder="Your Name"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:outline-none text-lg shadow-sm"
              placeholder="you@email.com"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-lg font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:outline-none text-lg shadow-sm resize-none"
              placeholder="Tell us what you love about this property..."
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full btn-primary btn-elegant py-3 text-lg font-medium rounded-full shadow-lg mt-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
