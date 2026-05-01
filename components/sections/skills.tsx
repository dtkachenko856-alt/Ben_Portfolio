'use client'

import { useEffect, useRef, useState } from 'react'
import { Smartphone, Brain, Cloud, Wrench } from 'lucide-react'
import { skillsData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

const iconMap: { [key: string]: React.ElementType } = {
  Smartphone,
  Brain,
  Cloud,
  Wrench,
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
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
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-600/5 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">{skillsData.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{skillsData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {skillsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 border',
                  activeCategory === index
                    ? 'bg-gradient-to-r from-sky-500 to-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 border-transparent'
                    : 'bg-white text-slate-600 hover:text-sky-500 hover:border-sky-200 border-slate-200'
                )}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div
          className={cn(
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.categories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 group border border-slate-100"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${300 + index * 100}ms`,
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-slate-500">Proficiency</span>
                  <span className="text-xs font-medium text-sky-500">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Badges */}
        <div
          className={cn(
            'mt-16 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h3 className="text-center text-xl font-semibold text-slate-900 mb-6">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.categories.flatMap(cat => cat.skills).map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-500 transition-colors cursor-default border border-transparent hover:border-sky-200"
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
