import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
