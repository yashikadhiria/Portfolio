"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverEffectProps {
  children: ReactNode
  className?: string
}

export function HoverEffect({ children, className }: HoverEffectProps) {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
