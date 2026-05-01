'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroData, personalInfo } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-50/50 to-white"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-600/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo / Visual Side */}
            <div
              className={cn(
                'order-2 lg:order-1 transition-all duration-1000',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="relative flex justify-center lg:justify-start">
                {/* Profile Photo Container */}
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden card-shadow bg-gradient-to-br from-sky-50 to-sky-100/50 p-2">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      {/* Placeholder for profile photo */}
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white text-4xl font-bold">
                          AC
                        </div>
                        <p className="text-slate-500 text-sm">Android & AI Developer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 card-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white">
                        <span className="text-xl">✦</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">7+</p>
                        <p className="text-xs text-slate-500">Years Experience</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
              className={cn(
                'order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              {/* Greeting */}
              <p className="text-lg text-sky-500 font-medium mb-4">
                {heroData.greeting}
              </p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Crafting
                <span className="text-gradient"> Intelligent </span>
                Mobile Experiences
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {heroData.description}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mb-8">
                {heroData.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  variant="gradient"
                  className="gap-2"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => scrollToSection('#projects')}
                >
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {[ 
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={`https://${href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-200 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
