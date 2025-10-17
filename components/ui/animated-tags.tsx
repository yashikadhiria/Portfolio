"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface AnimatedTagProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
  delay?: number
}

export function AnimatedTag({ 
  children, 
  variant = "default", 
  className = "", 
  delay = 0 
}: AnimatedTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge 
        variant={variant} 
        className={`cursor-pointer transition-all duration-300 hover:shadow-md ${className}`}
      >
        {children}
      </Badge>
    </motion.div>
  )
}

interface TagCloudProps {
  tags: string[]
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
  baseDelay?: number
}

export function TagCloud({ 
  tags, 
  variant = "default", 
  className = "",
  baseDelay = 0
}: TagCloudProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <AnimatedTag
          key={tag}
          variant={variant}
          delay={baseDelay + index * 0.1}
        >
          {tag}
        </AnimatedTag>
      ))}
    </div>
  )
}
