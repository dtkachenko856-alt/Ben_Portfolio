import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Chatbot } from '@/components/chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
