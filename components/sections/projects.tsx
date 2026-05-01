'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Star, Download } from 'lucide-react'
import { projectsData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">{projectsData.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Selected Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'group bg-white rounded-3xl overflow-hidden card-shadow transition-all duration-500 hover:card-shadow-hover border border-slate-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-50">{project.id === 1 ? '👁️' : project.id === 2 ? '🏥' : project.id === 3 ? '💰' : project.id === 4 ? '💪' : project.id === 5 ? '🗣️' : '🛒'}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/10 transition-colors duration-300" />
                
                {/* Stats */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    <Download className="w-3 h-3 mr-1" />
                    {project.stats.downloads}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="gradient" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    {project.stats.rating}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-sky-500 font-medium mb-2 uppercase tracking-wide">
                  {project.category}
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <Button
                    size="sm"
                    variant="gradient"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
