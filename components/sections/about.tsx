'use client'

import { useEffect, useRef, useState } from 'react'
import { Smartphone, Brain, Rocket, Users, Coffee, Code, Bug, Trophy } from 'lucide-react'
import { aboutData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const iconMap: { [key: string]: React.ElementType } = {
  Smartphone,
  Brain,
  Rocket,
  Users,
  Coffee,
  Code,
  Bug,
  Trophy,
}

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">{aboutData.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{aboutData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div
            className={cn(
              'transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <div className="prose max-w-none">
              {aboutData.description.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {aboutData.funFacts.map((fact, index) => {
                const Icon = iconMap[fact.icon]
                return (
                  <div
                    key={fact.label}
                    className={cn(
                      'bg-white rounded-2xl p-4 text-center card-shadow transition-all duration-500 hover:card-shadow-hover border border-slate-100',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-sky-500" />
                    <div className="text-2xl font-bold text-slate-900">{fact.value}</div>
                    <div className="text-xs text-slate-500">{fact.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {aboutData.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon]
              return (
                <div
                  key={highlight.title}
                  className={cn(
                    'bg-white rounded-2xl p-6 card-shadow transition-all duration-500 hover:card-shadow-hover border border-slate-100 group',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
