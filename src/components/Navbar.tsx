import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navbarData } from '../data/mockData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-12 md:h-14">
          <motion.a
            href="#home"
            className="text-lg md:text-xl font-bold text-cyan-400"
            whileHover={{ scale: 1.05 }}
          >
            DJ
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navbarData.navigation.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                whileHover={{ y: -2.2 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Let's Talk Button */}
            <motion.a
              href="#contact"
              className="flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-xs md:text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">Let's Talk</span>
              <span className="sm:hidden">Talk</span>
            </motion.a>
          </div>

          <button
            className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-4 space-y-4">
              {navbarData.navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-2 min-h-[44px] flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    setTimeout(() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 300)
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-cyan-400 font-medium py-2 px-2 min-h-[44px] flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  setTimeout(() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }, 300)
                }}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
