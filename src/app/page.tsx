"use client";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Search,
  Filter,
  Bed,
  Bath,
  Square,
  DollarSign,
} from "lucide-react";
import { properties } from "@/lib/properties";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Premium Why Tel Aviv Section
const WhyTelAviv = () => (
  <section className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white section-transition">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg font-medium text-deep-blue mb-6 tracking-widest"
        >
          WHY CHOOSE TEL AVIV
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="section-title text-7xl md:text-8xl font-bold text-soft-black mb-12"
        >
          The City That Never Sleeps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="elegant-text text-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed"
        >
          Where Mediterranean charm meets cosmopolitan energy, creating the
          perfect backdrop for your dream lifestyle.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: "🌊",
            title: "Mediterranean Coastline",
            description:
              "13 kilometers of pristine beaches with crystal-clear waters and golden sands.",
          },
          {
            icon: "🏙️",
            title: "Innovation Hub",
            description:
              "The world's most innovative city, home to thousands of startups and tech companies.",
          },
          {
            icon: "🎭",
            title: "Cultural Melting Pot",
            description:
              "A vibrant arts scene, world-class restaurants, and diverse cultural experiences.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <motion.div
              className="text-6xl mb-6"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-soft-black mb-4 group-hover:text-deep-blue transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-warm-gray leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Premium Team Section
const Team = () => (
  <section
    id="team"
    className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50 section-transition"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg font-medium text-deep-blue mb-6 tracking-widest"
        >
          MEET OUR TEAM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="section-title text-7xl md:text-8xl font-bold text-soft-black mb-12"
        >
          Expert Advisors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="elegant-text text-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed"
        >
          Our team of luxury real estate specialists brings decades of
          experience and deep local knowledge to help you find your perfect
          home.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            name: "Sarah Cohen",
            role: "Senior Real Estate Advisor",
            image:
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description:
              "15+ years of experience in luxury real estate across Tel Aviv's most prestigious neighborhoods.",
          },
          {
            name: "David Rosenberg",
            role: "Investment Specialist",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description:
              "Expert in real estate investment strategies and market analysis for high-net-worth clients.",
          },
          {
            name: "Maya Goldstein",
            role: "Luxury Property Consultant",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description:
              "Specialized in exclusive properties and personalized service for discerning clients.",
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <motion.div
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-deep-blue/20 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-soft-black mb-2 group-hover:text-deep-blue transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-gold font-medium mb-4">{member.role}</p>
            <p className="text-warm-gray leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  const router = useRouter();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [location, setLocation] = useState("all");

  useEffect(() => {
    let filtered = properties;
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (propertyType !== "all") {
      filtered = filtered.filter(property => property.type === propertyType);
    }
    if (priceRange !== "all") {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[$,]/g, ""));
        switch (priceRange) {
          case "under-500k":
            return price < 500000;
          case "500k-1m":
            return price >= 500000 && price < 1000000;
          case "1m-2m":
            return price >= 1000000 && price < 2000000;
          case "over-2m":
            return price >= 2000000;
          default:
            return true;
        }
      });
    }
    if (bedrooms !== "all") {
      const bedCount = parseInt(bedrooms);
      filtered = filtered.filter(property => property.bedrooms === bedCount);
    }
    if (location !== "all") {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    setFilteredProperties(filtered);
  }, [searchTerm, propertyType, priceRange, bedrooms, location]);

  const clearFilters = () => {
    setSearchTerm("");
    setPropertyType("all");
    setPriceRange("all");
    setBedrooms("all");
    setLocation("all");
  };

  return (
    <main className="relative">
      <Header />
      <Hero />
      <section id="properties-section" className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect Home
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exclusive properties in Tel Aviv's most desirable neighborhoods
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="under-500k">Under $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-2m">$1M - $2M</option>
                  <option value="over-2m">Over $2M</option>
                </select>
              </div>
              <div>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Beds</option>
                  <option value="1">1 Bed</option>
                  <option value="2">2 Beds</option>
                  <option value="3">3 Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
              </div>
              <div>
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Clear
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </motion.div>
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => router.push(`/property/${property.id}`)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 px-4 py-2 rounded-full shadow text-lg font-bold text-gray-900">
                      {property.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full shadow text-sm font-medium text-gray-700">
                      {property.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {property.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.bedrooms} beds</span>
                      <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.bathrooms} baths</span>
                      <span className="flex items-center gap-1"><Square className="w-4 h-4" /> {property.area}</span>
                    </div>
                    <button
                      className="w-full mt-2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      onClick={() => router.push(`/property/${property.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20 text-xl">
              No properties found matching your criteria.
            </div>
          )}
        </div>
      </section>
      <WhyTelAviv />
      <Team />

      <footer className="w-full bg-[#f8f8f8] text-[#111] shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-playfair text-2xl font-black">
              TEL AVIV ESTATES
            </h2>
            <p className="max-w-xs leading-relaxed">
              We craft modern, individual luxury living with a wow factor that
              keeps our residents in the spotlight.
            </p>
            <p className="pt-6 text-sm">© Tel Aviv Estates 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Discover
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#properties"
                  className="hover:underline transition-colors duration-200"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#penthouse"
                  className="hover:underline transition-colors duration-200"
                >
                  Penthouses
                </a>
              </li>
              <li>
                <a
                  href="#neighborhoods"
                  className="hover:underline transition-colors duration-200"
                >
                  Neighborhoods
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline transition-colors duration-200"
                >
                  Who we are
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#contact"
                  className="hover:underline transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ta-estates.com"
                  className="hover:underline transition-colors duration-200"
                >
                  Email us
                </a>
              </li>
              <li>
                <a
                  href="tel:+9720000000"
                  className="hover:underline transition-colors duration-200"
                >
                  +972 00-000-0000
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="hover:underline transition-colors duration-200"
                >
                  Schedule a visit
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#imprint"
                  className="hover:underline transition-colors duration-200"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:underline transition-colors duration-200"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:underline transition-colors duration-200"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#accessibility"
                  className="hover:underline transition-colors duration-200"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
                Newsletter
              </h3>
              <p className="mb-4 text-sm">
                Join the TA Estates community and never miss a release.
              </p>
              <form className="flex overflow-hidden rounded-md">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#111]/20 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-[#111] px-6 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest">
                Social media
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors duration-200"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors duration-200"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors duration-200"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
