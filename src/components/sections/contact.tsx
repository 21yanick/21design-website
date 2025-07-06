'use client'

import { motion } from 'motion/react'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Lass uns <span className="gradient-text">zusammenarbeiten</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Hast du ein Projekt im Kopf? Schreib mir eine Nachricht.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-bitcoin glow-hover group"
                onClick={() => window.location.href = 'mailto:hello@21design.ch'}
              >
                <Mail className="w-5 h-5 mr-2" />
                hello@21design.ch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}