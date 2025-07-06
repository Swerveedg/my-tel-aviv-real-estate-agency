"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from './sheet'
import { LangSwitcher } from './lang-switcher'
import { Button } from './button'

interface SideDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navItems = [
  { href: '#properties', label: 'Properties' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function SideDrawer({ open, onOpenChange }: SideDrawerProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    onOpenChange(false)
    const section = document.getElementById(targetId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange} side="left">
      <SheetContent className="bg-white/95 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetClose onClick={() => onOpenChange(false)} />
        </SheetHeader>

        <div className="flex-1 px-6 py-8 flex flex-col justify-between">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={e => handleNavClick(e, item.href.replace('#', ''))}
                    className="group flex items-center justify-between text-lg font-medium text-gray-900 hover:text-deep-blue transition-colors duration-200 py-3 border-b border-gray-100"
                  >
                    <span>{item.label}</span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mb-6">
            <LangSwitcher />
          </div>

          {/* Mobile CTA Button */}
          <Button
            className="w-full px-6 py-4 rounded-2xl bg-black text-white font-semibold text-base tracking-[0.08em] shadow-lg transition-all duration-200 hover:bg-[#F6D78B] hover:text-[#0A1B2A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F6D78B] font-[var(--font-inter)] border-0"
            onClick={() => {
              onOpenChange(false)
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                const yOffset = -80
                const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
          >
            <span className="flex items-center justify-center gap-2">
              GET IN TOUCH
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
} 