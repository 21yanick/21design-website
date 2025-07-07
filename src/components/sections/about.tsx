'use client'

import { motion } from 'motion/react'

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Über <span className="gradient-text">21design</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ich bin Entwickler aus der Schweiz und verwirkliche digitale Ideen.
              Ob mobile App, Webanwendung oder interne Software —
              ich finde Lösungen, die wirklich funktionieren.
            </p>
            
            <p className="text-muted-foreground">
              Pragmatisch, direkt und ohne unnötigen Schnickschnack.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}