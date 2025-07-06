"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LangSwitcherProps {
  className?: string
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HE', name: 'עברית' },
    { code: 'AR', name: 'العربية' },
  ]

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white hover:underline transition-colors duration-200 uppercase tracking-wider font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
      >
        {currentLang}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 text-sm ${
                  currentLang === lang.code ? 'bg-gray-50 font-medium' : ''
                }`}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 