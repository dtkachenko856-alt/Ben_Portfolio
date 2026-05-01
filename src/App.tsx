import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import StarBackground from './components/StarBackground'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import HumanVerification from './components/HumanVerification'
import { verificationData } from './data/mockData'

function App() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null)

  // Check verification status on component mount
  useEffect(() => {
    const checkVerification = () => {
      const isVerifiedStored = localStorage.getItem('humanVerified')
      const verificationTime = localStorage.getItem('verificationTime')
      const storedKey = localStorage.getItem('verificationKey')
      const todayKey = verificationData.getDailyKey()
      
      if (isVerifiedStored === 'true' && verificationTime && storedKey === todayKey) {
        const timeDiff = Date.now() - parseInt(verificationTime)
        // Verification expires after 24 hours
        if (timeDiff < 24 * 60 * 60 * 1000) {
          setIsVerified(true)
        } else {
          // Verification expired, clear it
          localStorage.removeItem('humanVerified')
          localStorage.removeItem('verificationTime')
          localStorage.removeItem('verificationKey')
          setIsVerified(false)
        }
      } else if (storedKey !== todayKey) {
        // Key doesn't match today (new day), clear old verification
        localStorage.removeItem('humanVerified')
        localStorage.removeItem('verificationTime')
        localStorage.removeItem('verificationKey')
        setIsVerified(false)
      } else {
        setIsVerified(false)
      }
    }

    checkVerification()
  }, [])

  // Handle URL hash navigation on page load/reload
  useEffect(() => {
    const hash = window.location.hash
    if (hash && isVerified) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [isVerified])

  // Show loading state while checking verification
  if (isVerified === null) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Checking verification...</p>
        </div>
      </div>
    )
  }

  // Show verification page if not verified
  if (!isVerified) {
    return <HumanVerification />
  }

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
          <Education />
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
