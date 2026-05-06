import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { projectsData } from '../data/mockData'
import ImageWithFallback from './ImageWithFallback'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projectsData.filter(p => p.featured)
  const others = projectsData.filter(p => !p.featured)
  const visibleOthers = showAll ? others : others.slice(0, 3)

  return (
    <section id="projects" className="py-10 relative border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            PROJECTS <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30 group/card relative overflow-hidden">
                {/* Lighting effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700"></div>
                </div>
                <div className="relative z-10">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      fallbackCategory="portfolio"
                      fallbackIndex={index}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && project.demoUrl !== '#' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-gray-600 cursor-not-allowed opacity-50">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleOthers.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect p-4 sm:p-6 rounded-2xl hover:bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/20 h-full flex flex-col group/card relative overflow-hidden">
                {/* Lighting effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                  <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700"></div>
                </div>
                <div className="relative z-10">
                  <div className="h-32 rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    fallbackCategory="portfolio"
                    fallbackIndex={index}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-gray-600 cursor-not-allowed opacity-50">
                      <ExternalLink size={14} />
                      Demo
                    </span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {others.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 glass-effect rounded-full hover:bg-white/5 transition-all group"
            >
              <span className="text-gray-300 group-hover:text-white">
                {showAll ? 'Show Less' : 'See More Projects'}
              </span>
              {showAll ? (
                <ChevronUp size={20} className="text-gray-400 group-hover:text-white" />
              ) : (
                <ChevronDown size={20} className="text-gray-400 group-hover:text-white" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
