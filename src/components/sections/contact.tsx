'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/contact/contact-modal'
import { useTilt } from '@/hooks/use-tilt'
import { 
  Mail, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react'

export function Contact() {
  // 3D Tilt effect for the main CTA card - extra impact for conversion
  const ctaCardTilt = useTilt({ 
    maxTilt: 12,     // Stronger tilt for more attention
    scale: 1.04,     // More scale for CTA prominence
    speed: 400,      // Smoother return
    warmupDuration: 180 // Longer warmup for smoother first transition
  })
  return (
    <section className="relative py-32 surface border-t border-theme">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" suppressHydrationWarning />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-theme text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-primary">Kontakt</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-primary">
            Bereit für Ihr <span className="font-bold text-accent">Projekt</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Von der ersten Idee bis zum Live-Launch – lassen Sie uns gemeinsam 
            <span className="font-medium text-primary"> etwas Großartiges erschaffen.</span>
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card 
            ref={ctaCardTilt.ref}
            onMouseMove={ctaCardTilt.onMouseMove}
            onMouseEnter={ctaCardTilt.onMouseEnter}
            onMouseLeave={ctaCardTilt.onMouseLeave}
            className="bg-background/60 backdrop-blur-sm border-theme glow-strong overflow-hidden cursor-pointer"
          >
            <CardContent className="p-12 text-center">
              
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-theme flex items-center justify-center glow">
                <Zap className="w-10 h-10 text-accent" />
              </div>
              
              {/* Content */}
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
                Projekt starten
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Kostenlose Erstberatung • Transparente Kommunikation • Swiss Quality
              </p>

              {/* CTA Button */}
              <ContactModal>
                <Button 
                  size="lg" 
                  className="btn-primary glow-strong text-xl px-12 py-6 group font-medium transition-all duration-300 mb-6"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Jetzt Projekt besprechen
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </ContactModal>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Antwort in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>hello@21design.ch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Kostenlos & unverbindlich</span>
                </div>
              </div>
              
            </CardContent>
          </Card>
        </motion.div>

        {/* Simple Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Bevorzugen Sie E-Mail? Schreiben Sie direkt an{' '}
            <a 
              href="mailto:hello@21design.ch?subject=Projekt anfragen" 
              className="text-accent hover:underline font-medium transition-colors"
            >
              hello@21design.ch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}