import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NeuralHero } from '@/components/sections/neural-hero'
import { NeuralProjects } from '@/components/sections/neural-projects'
import { NeuralAbout } from '@/components/sections/neural-about'
import { NeuralContact } from '@/components/sections/neural-contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <NeuralHero />
      <div id="projects">
        <NeuralProjects />
      </div>
      <div id="about">
        <NeuralAbout />
      </div>
      <div id="contact">
        <NeuralContact />
      </div>
      <Footer />
    </div>
  )
}