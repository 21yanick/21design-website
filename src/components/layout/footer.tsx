import { Heart, Code } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="font-bold gradient-text">21design.ch</h3>
            <span className="text-muted-foreground">©</span>
            <span className="text-muted-foreground">{currentYear}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Gemacht mit</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>und</span>
            <Code className="w-4 h-4 text-primary" />
            <span>in der Schweiz</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}