'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, FileText, Eye, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo, heroData, experienceData, educationData, skillsData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export function Resume() {
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
      id="resume"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/10 to-sky-400/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">Download or View</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <div
            className={cn(
              'bg-white rounded-3xl p-8 mb-8 card-shadow transition-all duration-700 delay-100 border border-slate-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Resume Icon */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-400/20 border border-sky-200/50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-16 h-16 text-sky-500" />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {personalInfo.name} - Resume
                </h3>
                <p className="text-slate-600 mb-4">
                  Android & AI Developer with 7+ years of experience. 
                  Updated April 2024. PDF format, 2 pages.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  {[
                    `${experienceData.experiences.length}+ Positions`,
                    `${educationData.certifications.length} Certifications`,
                    `${skillsData.categories.length} Skill Categories`,
                    'Open to Work'
                  ].map((stat) => (
                    <div key={stat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-sky-500" />
                      {stat}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button size="lg" variant="gradient" className="gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View Online
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div
            className={cn(
              'grid sm:grid-cols-3 gap-4 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="bg-white rounded-xl p-6 text-center card-shadow border border-slate-100">
              <div className="text-3xl font-bold text-gradient mb-1">7+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center card-shadow border border-slate-100">
              <div className="text-3xl font-bold text-gradient mb-1">50+</div>
              <div className="text-sm text-slate-500">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center card-shadow border border-slate-100">
              <div className="text-3xl font-bold text-gradient mb-1">5M+</div>
              <div className="text-sm text-slate-500">App Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
