'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Moderne Shopping-Plattform mit Next.js und Stripe Integration",
    category: "Next.js",
    icon: Code,
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Cross-Platform Mobile App für Fitness-Tracking",
    category: "Flutter",
    icon: Smartphone,
    technologies: ["Flutter", "Firebase", "Dart", "Provider"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Responsive WordPress-Website mit Online-Reservierung",
    category: "WordPress",
    icon: Globe,
    technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "Analytics Dashboard mit Real-time Updates",
    category: "Next.js",
    icon: Code,
    technologies: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 5,
    title: "Travel Planning App",
    description: "Mobile App für Reiseplanung mit Offline-Support",
    category: "Flutter",
    icon: Smartphone,
    technologies: ["Flutter", "SQLite", "Google Maps", "Bloc"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Corporate Website",
    description: "Mehrsprachige Unternehmens-Website mit CMS",
    category: "WordPress",
    icon: Globe,
    technologies: ["WordPress", "WPML", "ACF", "Responsive"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-background">
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
            Portfolio
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ausgewählte <span className="gradient-text">Projekte</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein Einblick in unsere Arbeit - von modernen Web-Apps bis hin zu 
            mobilen Anwendungen und maßgeschneiderten CMS-Lösungen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="glow-hover transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/40" />
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary hover:bg-primary/10 p-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary hover:bg-primary/10 p-2"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                      >
                        Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
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
              Lassen Sie uns Ihr Projekt verwirklichen
            </h3>
            
            <p className="text-muted-foreground">
              Jedes Projekt ist einzigartig. Wir entwickeln maßgeschneiderte Lösungen, 
              die perfekt zu Ihren Anforderungen passen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bitcoin glow-hover">
                Projekt besprechen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="glow-border">
                <Github className="w-5 h-5 mr-2" />
                Alle Projekte ansehen
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}