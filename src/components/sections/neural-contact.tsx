'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/contact/contact-modal'
import { 
  Mail, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react'

export function NeuralContact() {
  return (
    <section className="relative py-32 neural-surface border-t neural-border">
      {/* Background */}
      <div className="absolute inset-0 neural-grid opacity-20" suppressHydrationWarning />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border neural-border text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 neural-accent" />
            <span className="neural-text">Kontakt</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 neural-text">
            Bereit für Ihr <span className="font-bold neural-accent">Projekt</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Von der ersten Idee bis zum Live-Launch – lassen Sie uns gemeinsam 
            <span className="font-medium neural-text"> etwas Großartiges erschaffen.</span>
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
          <Card className="bg-background/60 backdrop-blur-sm neural-border neural-glow-strong overflow-hidden">
            <CardContent className="p-12 text-center">
              
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 neural-border flex items-center justify-center neural-glow">
                <Zap className="w-10 h-10 neural-accent" />
              </div>
              
              {/* Content */}
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 neural-text">
                Projekt starten
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Kostenlose Erstberatung • Transparente Kommunikation • Swiss Quality
              </p>

              {/* CTA Button */}
              <ContactModal>
                <Button 
                  size="lg" 
                  className="neural-button-primary neural-glow-strong text-xl px-12 py-6 group font-medium transition-all duration-300 mb-6"
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
                  <Mail className="w-4 h-4 neural-accent" />
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
              className="neural-accent hover:underline font-medium transition-colors"
            >
              hello@21design.ch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}