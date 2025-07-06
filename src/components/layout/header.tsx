'use client'

import { motion } from 'motion/react'
import { ThemeToggle } from './theme-toggle'
import { Code } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-3 h-16 items-center">
        <div></div>
        
        <div className="flex items-center space-x-3 justify-center">
          <motion.div
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code className="w-4 h-4 text-primary" />
          </motion.div>
          <motion.h1 
            className="text-xl font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              21design
            </span>
            <span className="text-primary font-bold">.ch</span>
          </motion.h1>
        </div>
        
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}