'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="text-foreground">Ich entwickle</span>
            <br />
            <span className="gradient-text glow-text">moderne Web-</span>
            <br />
            <span className="text-foreground">anwendungen</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Full-Stack Entwicklung mit sauberem Code, 
            modernem Design und Liebe zum Detail.
          </motion.p>
          
          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="glow-border text-lg px-8 py-6 group hover:bg-primary/10 hover:text-primary"
            >
              <Code className="w-5 h-5 mr-2" />
              Projekte ansehen
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm text-muted-foreground">Nach unten scrollen</div>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}