'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, ArrowRight, Code, Globe, Database, Smartphone } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Zeitgut Luzern",
    description: "Kreativagentur Website mit individuellem WordPress Theme und optimierter Performance",
    category: "WordPress",
    icon: Globe,
    technologies: ["WordPress", "Custom Theme", "PHP", "Performance Optimization"],
    metrics: {
      load: "< 2s",
      score: "95/100",
      mobile: "✓"
    },
    liveUrl: "https://zeitgut-luzern.ch",
    status: "Live",
    featured: true,
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    id: 2,
    title: "Fidutax",
    description: "Professionelle Steuerberatung mit modernem Design und SEO-Optimierung",
    category: "WordPress", 
    icon: Globe,
    technologies: ["WordPress", "Custom Development", "SEO", "Contact Forms"],
    metrics: {
      load: "< 1.8s",
      score: "98/100",
      mobile: "✓"
    },
    liveUrl: "https://fidutax.ch",
    status: "Live",
    featured: true,
    color: "from-green-500/10 to-green-600/5"
  },
  {
    id: 3,
    title: "POS & Buchhaltung",
    description: "Full-Stack Kassensystem mit Echtzeit-Synchronisation und Buchhaltungsintegration",
    category: "Next.js",
    icon: Database,
    technologies: ["Next.js", "Supabase", "TypeScript", "Real-time"],
    metrics: {
      uptime: "99.9%",
      users: "500+",
      speed: "< 100ms"
    },
    liveUrl: null,
    status: "Development",
    featured: true,
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    id: 4,
    title: "Mobile App Suite",
    description: "Cross-platform Flutter Anwendung für iOS und Android",
    category: "Flutter",
    icon: Smartphone,
    technologies: ["Flutter", "Dart", "Firebase", "Native Features"],
    metrics: {
      platforms: "iOS + Android",
      rating: "4.8★",
      downloads: "1K+"
    },
    liveUrl: null,
    status: "Beta",
    featured: false,
    color: "from-cyan-500/10 to-cyan-600/5"
  }
]

export function Projects() {
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-theme text-sm font-medium mb-6">
            <Code className="w-4 h-4 text-accent" />
            <span className="text-primary">Arbeiten</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-primary">
            Ausgewählte <span className="font-bold text-accent">Projekte</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Von individuellen WordPress Lösungen bis zu komplexen Full-Stack Anwendungen.
          </p>
        </motion.div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Project 1 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <ProjectCard project={projects[0]} size="large" />
          </motion.div>

          {/* Featured Project 2 - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <ProjectCard project={projects[1]} size="medium" />
          </motion.div>

          {/* Featured Project 3 - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <ProjectCard project={projects[2]} size="medium" />
          </motion.div>

          {/* Small Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <ProjectCard project={projects[3]} size="small" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project, size }: { project: typeof projects[0], size: 'large' | 'medium' | 'small' }) {
  const heightClass = {
    large: 'min-h-[400px]',
    medium: 'min-h-[320px]',
    small: 'min-h-[280px]'
  }[size]

  return (
    <Card className={`${heightClass} group hover:scale-[1.02] transition-all duration-300 border-theme glow cursor-pointer overflow-hidden bg-background/60 backdrop-blur-sm`}>
      {/* Project Visual */}
      <div className={`relative ${size === 'large' ? 'h-48' : size === 'medium' ? 'h-36' : 'h-32'} overflow-hidden bg-gradient-to-br ${project.color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <project.icon className={`${size === 'large' ? 'w-20 h-20' : 'w-16 h-16'} text-accent opacity-40`} />
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant={project.status === 'Live' ? 'default' : 'secondary'}
            className={project.status === 'Live' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-black'}
          >
            {project.status}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="border-theme bg-background/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
        
        {/* Hover Overlay */}
        {project.liveUrl && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.liveUrl!, '_blank')
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ansehen
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title & Description */}
          <div>
            <h3 className={`${size === 'large' ? 'text-2xl' : 'text-xl'} font-semibold group-hover:text-accent transition-colors text-primary`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-2 text-xs">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="flex items-center gap-1 px-2 py-1 bg-background/80 rounded border-theme">
                <span className="text-accent font-medium">{key}:</span>
                <span className="text-primary">{value}</span>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          {size !== 'small' && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, size === 'large' ? 4 : 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs bg-background/60 border-theme">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Action */}
          {project.liveUrl && (
            <div className="flex justify-end pt-2">
              <Button
                size="sm"
                className="btn-tertiary group/btn"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl!, '_blank')
                }}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Site
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}