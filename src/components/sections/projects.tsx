'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight, Code, Globe } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Zeitgut Luzern",
    description: "Saubere WordPress Website für Kreativagentur",
    category: "WordPress",
    icon: Globe,
    technologies: ["WordPress", "Individuelles Theme", "PHP", "Responsive Design"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://zeitgut-luzern.ch",
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "Fidutax",
    description: "Professionelle Steuerberatungs-Website",
    category: "WordPress", 
    icon: Globe,
    technologies: ["WordPress", "Individuelle Entwicklung", "PHP", "SEO"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://fidutax.ch",
    githubUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "POS & Buchhaltungssystem",
    description: "Full-Stack Anwendung mit Echtzeit-Features",
    category: "Next.js",
    icon: Code,
    technologies: ["Next.js", "Supabase", "TypeScript", "Echtzeit"],
    image: "/api/placeholder/600/400",
    liveUrl: null,
    githubUrl: null,
    featured: true
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ausgewählte <span className="gradient-text">Projekte</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Aktuelle Projekte, von individuellen WordPress Sites bis zu Full-Stack Anwendungen.
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
                  {project.liveUrl && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        onClick={() => window.open(project.liveUrl!, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Zur Website
                      </Button>
                    </div>
                  )}
                  
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
                    {project.liveUrl && (
                      <div className="flex justify-end pt-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                          onClick={() => window.open(project.liveUrl!, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Besuchen
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}