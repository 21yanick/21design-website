'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Code, Users, Award, Coffee, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    label: "Clean Code",
    description: "Wartbar & skalierbar"
  },
  {
    icon: Zap,
    label: "Performance",
    description: "Blazing fast"
  },
  {
    icon: Heart,
    label: "Passion",
    description: "Liebe zum Detail"
  },
  {
    icon: Users,
    label: "Zusammenarbeit",
    description: "Transparent & agil"
  }
]

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Über uns
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Passionate</span> über Technologie
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Bei <span className="font-semibold text-primary">21design.ch</span> entwickeln 
                  wir digitale Lösungen, die nicht nur funktionieren, sondern begeistern.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Mit über 5 Jahren Erfahrung in der Webentwicklung setzen wir auf bewährte 
                  Technologien und moderne Best Practices. Unser Fokus liegt auf 
                  <span className="text-foreground font-medium"> Clean Code</span>, 
                  <span className="text-foreground font-medium"> Performance</span> und 
                  <span className="text-foreground font-medium"> User Experience</span>.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Jedes Projekt ist einzigartig - deshalb arbeiten wir eng mit unseren 
                  Kunden zusammen, um maßgeschneiderte Lösungen zu entwickeln, die 
                  perfekt zu ihren Bedürfnissen passen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-bitcoin glow-hover group">
                  Lassen Sie uns sprechen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="glow-border">
                  <Coffee className="w-4 h-4 mr-2" />
                  Kostenloses Erstgespräch
                </Button>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glow-hover transition-all duration-300 text-center p-6">
                    <CardContent className="p-0 space-y-3">
                      <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-sm">{highlight.label}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {highlight.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Erfolgreiche Projekte</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support & Wartung</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="glow-border bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <blockquote className="text-lg font-medium leading-relaxed">
                  "Unser Ziel ist es, digitale Erlebnisse zu schaffen, die nicht nur 
                  technisch exzellent sind, sondern auch echten Mehrwert für Menschen 
                  und Unternehmen bieten."
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-4 block">
                  — Das 21design.ch Team
                </cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}