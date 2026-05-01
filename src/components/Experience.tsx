import { motion } from 'framer-motion'
import { experienceData } from '../data/mockData'

export default function Experience() {
  return (
    <section id="experience" className="py-10 relative  border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            EXPERIENCE <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-2 top-2 bottom-2 w-px bg-cyan-500/30" />
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-cyan-500 border-2 border-slate-900" />

                {/* Card */}
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
