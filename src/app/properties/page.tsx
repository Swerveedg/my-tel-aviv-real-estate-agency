"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { properties } from "@/lib/properties";
import Header from "@/components/ui/Header";
import { Search, Filter, MapPin, Bed, Bath, Square, DollarSign } from "lucide-react";

export default function PropertiesPage() {
  const router = useRouter();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [location, setLocation] = useState("all");

  // Filter properties based on search and filters
  useEffect(() => {
    let filtered = properties;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Property type filter
    if (propertyType !== "all") {
      filtered = filtered.filter(property => property.type === propertyType);
    }

    // Price range filter
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

    // Bedrooms filter
    if (bedrooms !== "all") {
      const bedCount = parseInt(bedrooms);
      filtered = filtered.filter(property => property.bedrooms === bedCount);
    }

    // Location filter
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-gray-50">
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

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search Input */}
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

              {/* Property Type Filter */}
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

              {/* Price Range Filter */}
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

              {/* Bedrooms Filter */}
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

              {/* Clear Filters Button */}
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

          {/* Results Count */}
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

      {/* Properties Grid */}
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
                  {/* Property Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        property.type === 'buy' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {property.type === 'buy' ? 'For Sale' : 'For Rent'}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                        {property.price}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {property.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {property.location}
                    </p>

                    <p className="text-gray-500 italic mb-4">
                      {property.subtitle}
                    </p>

                    {/* Property Stats */}
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms} beds
                      </span>
                      <span className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.bathrooms} baths
                      </span>
                      <span className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.area}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tel Aviv Estates</h3>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home in Tel Aviv.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">For Sale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Developments</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+972 3-123-4567</li>
                <li>info@telavivestates.com</li>
                <li>Rothschild Blvd 123, Tel Aviv</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tel Aviv Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 