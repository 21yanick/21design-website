'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Monitor, Smartphone, Globe, Palette } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Next.js Development",
    description: "Moderne React-Anwendungen mit Server-Side Rendering",
    details: [
      "Server Components & App Router",
      "TypeScript & Type Safety",
      "Performance Optimierung",
      "SEO & Accessibility"
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    description: "Cross-Platform Mobile Development",
    details: [
      "iOS & Android aus einer Codebasis",
      "Native Performance",
      "Material Design & Cupertino",
      "State Management (Bloc/Riverpod)"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Native APIs"]
  },
  {
    icon: Globe,
    title: "WordPress",
    description: "Flexible Content Management Systeme",
    details: [
      "Custom Themes & Plugins",
      "Headless WordPress",
      "WooCommerce Integration",
      "Performance & Security"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "REST API"]
  }
]

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            Unsere Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Technologien</span> die begeistern
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir setzen auf bewährte, moderne Technologien und Best Practices 
            für nachhaltige, skalierbare Lösungen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glow-hover transition-all duration-300 h-full group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl text-primary group-hover:glow-text transition-all">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                      Technologien
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Bereit für Ihr nächstes Projekt?
            </h3>
            
            <p className="text-muted-foreground">
              Lassen Sie uns gemeinsam eine maßgeschneiderte Lösung für Ihre Anforderungen entwickeln.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bitcoin glow-hover">
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="glow-border">
                <Palette className="w-5 h-5 mr-2" />
                Portfolio ansehen
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}