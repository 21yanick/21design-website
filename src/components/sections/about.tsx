'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useTilt } from '@/hooks/use-tilt'
import { 
  User, 
  Coffee, 
  Mountain, 
  Rocket, 
  CheckCircle,
  MapPin
} from 'lucide-react'

const skills = [
  { name: 'Next.js', level: 95, category: 'Frontend' },
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Flutter', level: 80, category: 'Mobile' },
  { name: 'WordPress', level: 90, category: 'CMS' },
  { name: 'UI/UX Design', level: 75, category: 'Design' },
  { name: 'Performance', level: 88, category: 'Optimization' }
]



export function About() {
  // 3D Tilt effects for the 4 main cards - optimized for smooth first transition
  const personalCardTilt = useTilt({ 
    maxTilt: 8, 
    scale: 1.02, 
    speed: 400, 
    warmupDuration: 120 
  })
  const skillsCardTilt = useTilt({ 
    maxTilt: 8, 
    scale: 1.02, 
    speed: 400, 
    warmupDuration: 120 
  })
  const innovationCardTilt = useTilt({ 
    maxTilt: 10, 
    scale: 1.03, 
    speed: 350, 
    warmupDuration: 100 
  })
  const reliabilityCardTilt = useTilt({ 
    maxTilt: 10, 
    scale: 1.03, 
    speed: 350, 
    warmupDuration: 100 
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-theme text-sm font-medium mb-6">
            <User className="w-4 h-4 text-accent" />
            <span className="text-primary">Über mich</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-primary">
            Hallo, ich bin <span className="font-bold text-accent">Satoshi</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer aus der Schweiz mit einer Mission: 
            <span className="font-medium text-primary"> Digitale Lösungen schaffen, die Menschen begeistern.</span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Personal Context */}
            <Card 
              ref={personalCardTilt.ref}
              onMouseMove={personalCardTilt.onMouseMove}
              onMouseEnter={personalCardTilt.onMouseEnter}
              onMouseLeave={personalCardTilt.onMouseLeave}
              className="bg-background/60 backdrop-blur-sm border-theme glow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-theme flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Schweiz, Vollzeit verfügbar</h3>
                    <p className="text-sm text-muted-foreground">Remote & vor Ort</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Was als Neugier für Webentwicklung begann, ist heute meine Leidenschaft. 
                    Ich liebe es, <strong className="text-primary">komplexe Probleme in elegante, benutzerfreundliche Lösungen</strong> zu verwandeln.
                  </p>
                  
                  <p>
                    Mein Fokus liegt auf <strong className="text-primary">modernen Technologien</strong> wie 
                    Next.js, React und TypeScript, aber ich nutze auch bewährte Lösungen wie WordPress, 
                    wenn sie der optimale Weg zum Ziel sind.
                  </p>
                  
                  <p className="flex items-center gap-2">
                    Abseits des Codes findest du mich in den 
                    <Mountain className="w-4 h-4 text-accent inline" /> Bergen 
                    oder bei einer guten Tasse 
                    <Coffee className="w-4 h-4 text-accent inline" /> Kaffee.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary" className="bg-background/80 border-theme text-primary">
                    Clean Code Advocate
                  </Badge>
                  <Badge variant="secondary" className="bg-background/80 border-theme text-primary">
                    Performance Optimizer
                  </Badge>
                  <Badge variant="secondary" className="bg-background/80 border-theme text-primary">
                    Swiss Quality
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Values Grid - Individual Cards with 3D Tilt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Innovation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <Card 
                  ref={innovationCardTilt.ref}
                  onMouseMove={innovationCardTilt.onMouseMove}
                  onMouseEnter={innovationCardTilt.onMouseEnter}
                  onMouseLeave={innovationCardTilt.onMouseLeave}
                  className="h-full bg-background/40 backdrop-blur-sm border-theme hover:glow transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-theme flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Innovation</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Moderne Technologien mit bewährten Lösungen kombinieren</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Zuverlässigkeit Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  ref={reliabilityCardTilt.ref}
                  onMouseMove={reliabilityCardTilt.onMouseMove}
                  onMouseEnter={reliabilityCardTilt.onMouseEnter}
                  onMouseLeave={reliabilityCardTilt.onMouseLeave}
                  className="h-full bg-background/40 backdrop-blur-sm border-theme hover:glow transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-theme flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Zuverlässigkeit</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Termine einhalten, Versprechen erfüllen, langfristig denken</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Skills & Expertise */}
            <Card 
              ref={skillsCardTilt.ref}
              onMouseMove={skillsCardTilt.onMouseMove}
              onMouseEnter={skillsCardTilt.onMouseEnter}
              onMouseLeave={skillsCardTilt.onMouseLeave}
              className="bg-background/60 backdrop-blur-sm border-theme glow cursor-pointer"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">Skills & Expertise</h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-primary">{skill.name}</span>
                          <Badge variant="outline" className="text-xs border-theme">
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-sm text-accent font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background/80 rounded-full h-2 border-theme">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full glow"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>

      </div>
    </section>
  )
}