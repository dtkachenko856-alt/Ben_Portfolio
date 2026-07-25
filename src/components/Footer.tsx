import { useState, useEffect } from 'react'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { footerData, githubUsername } from '../data/mockData'

const socialLinks = [
  { icon: Github, href: `https://github.com/${githubUsername}`, label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ben-schnitzer-6098b3418', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:benschnitzer787@gmail.com', label: 'Email' },
]

export default function Footer() {
  const [isContactVisible, setIsContactVisible] = useState(false)

  useEffect(() => {
    const contactSection = document.querySelector('#contact')
    if (!contactSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(contactSection)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by {footerData.name}
          </p>
          
          {/* Social Links - hidden when Contact section is visible */}
          <div className={`flex items-center gap-3 transition-opacity duration-300 ${isContactVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            © {footerData.year} All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
