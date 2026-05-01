'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks, personalInfo } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href)
      for (const section of sections.reverse()) {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-400 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              AC
            </div>
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-slate-900">Alex</span>
              <span className="text-gradient">Chen</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  activeSection === link.href
                    ? 'text-sky-500 bg-sky-50/50'
                    : 'text-slate-600 hover:text-sky-500 hover:bg-slate-100/50'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              className="gap-2"
              onClick={() => scrollToSection('#resume')}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200/50 bg-white/50 rounded-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                    activeSection === link.href
                      ? 'text-sky-500 bg-sky-50/50'
                      : 'text-slate-600 hover:text-sky-500 hover:bg-slate-100/50'
                  )}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="gradient"
                size="sm"
                className="mt-2 gap-2"
                onClick={() => scrollToSection('#resume')}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
