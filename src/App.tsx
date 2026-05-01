import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import StarBackground from './components/StarBackground'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  // Handle URL hash navigation on page load/reload
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <StarBackground />
      <Navbar />
      <SocialSidebar />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Hero />
          <About />
          <Experience />
          <GitHub />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
