'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { NeuralNetwork } from '@/components/ui/neural-network'
import { ContactModal } from '@/components/contact/contact-modal'
import { ArrowRight, MessageCircle, Eye, MapPin, Clock } from 'lucide-react'

export function NeuralHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentTime = new Date().toLocaleTimeString('de-CH', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'Europe/Zurich'
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-surface">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <NeuralNetwork nodeCount={15} />
      </div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 neural-grid opacity-30" suppressHydrationWarning />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Context Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border neural-border neural-glow text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="neural-text">Verfügbar</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Schweiz</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{currentTime}</span>
            </div>
          </motion.div>
          
          {/* Main Heading with Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[0.9]">
              <motion.span 
                className="neural-text kinetic-text"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                Ich entwickle
              </motion.span>
              <br />
              <motion.span 
                className="text-5xl md:text-7xl lg:text-9xl font-bold neural-accent neural-glow-strong"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                digitale Ökosysteme
              </motion.span>
              <br />
              <motion.span 
                className="neural-text kinetic-text"
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                die funktionieren
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="font-medium neural-text">Full-Stack Development</span> mit modernen Technologien.
              <br />
              Von der Idee bis zur <span className="font-medium neural-text">produktiven Lösung</span>.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Next.js', 'React', 'TypeScript', 'Flutter', 'Node.js', 'WordPress'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="px-3 py-1 bg-background/60 backdrop-blur-sm border neural-border rounded-full neural-text font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ContactModal>
              <Button
                size="lg"
                className="neural-button-primary neural-glow-strong text-lg px-8 py-6 group font-medium transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Projekt besprechen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ContactModal>
            
            <Button
              size="lg"
              className="neural-button-secondary text-lg px-8 py-6 group transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <Eye className="w-5 h-5 mr-2" />
              Arbeiten ansehen
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          {/* Quick Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4"
          >
            {[
              { label: 'Über mich', section: 'about' },
              { label: 'Arbeiten', section: 'projects' },
              { label: 'Kontakt', section: 'contact' }
            ].map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                onClick={() => scrollToSection(link.section)}
                className="hover:neural-accent transition-colors duration-300 hover:underline underline-offset-4"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 neural-border rounded-full flex justify-center backdrop-blur-sm bg-background/20"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 neural-accent bg-current rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}