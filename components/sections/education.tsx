'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react'
import { educationData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">{educationData.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{educationData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-sky-500" />
              Education
            </h3>
            
            <div className="space-y-6">
              {educationData.education.map((edu, index) => (
                <div
                  key={index}
                  className={cn(
                    'bg-white rounded-2xl p-6 card-shadow transition-all duration-500 hover:card-shadow-hover border border-slate-100',
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-sky-500 font-medium">{edu.specialization}</p>
                    </div>
                    <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                  </div>

                  <p className="font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-sky-500" />
              Certifications
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {educationData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className={cn(
                    'bg-white rounded-xl p-5 card-shadow transition-all duration-500 hover:card-shadow-hover border border-slate-100 group',
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-400/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sky-500">{cert.date}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {cert.credential.slice(-6)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
