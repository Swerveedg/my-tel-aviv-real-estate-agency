"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ open, onOpenChange, children, side = "left", className, ...props }, ref) => {
    return (
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => onOpenChange(false)}
            />
            
            {/* Sheet */}
            <motion.div
              ref={ref}
              initial={{ x: side === "left" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: side === "left" ? "-100%" : "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.3 
              }}
              className={cn(
                "fixed top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 shadow-2xl",
                side === "left" ? "left-0" : "right-0",
                className
              )}
              {...props}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }
)
Sheet.displayName = "Sheet"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right"
  }
>(({ className, children, side = "left", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col h-full", className)}
    {...props}
  >
    {children}
  </div>
))
SheetContent.displayName = "SheetContent"

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-6 border-b border-gray-200", className)}
    {...props}
  />
))
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-xl font-semibold text-gray-900", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "p-2 rounded-lg hover:bg-gray-100 transition-colors",
      className
    )}
    {...props}
  >
    <X className="w-6 h-6" />
  </button>
))
SheetClose.displayName = "SheetClose"

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } 