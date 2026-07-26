import { motion } from 'framer-motion'
import { skillsData } from '../data/mockData'

export default function Skills() {
  return (
    <section id="skills" className="py-10 relative bg-gradient-to-b   border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            SKILLS <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-effect p-4 sm:p-6 rounded-2xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: skillIndex * 0.05, type: 'spring', stiffness: 280 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 400, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-xl bg-white/5 transition-all relative overflow-hidden group/skill"
                      whileHover={{ 
                        backgroundColor: 'rgba(6, 182, 212, 0.15)',
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
                        scale: 1.05
                      }}
                    >
                      {/* Lighting effect overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
                        <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-500/30 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 group-hover/skill:translate-x-0 group-hover/skill:translate-y-0 transition-transform duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500/30 rounded-full blur-xl translate-x-1/2 translate-y-1/2 group-hover/skill:translate-x-0 group-hover/skill:translate-y-0 transition-transform duration-500"></div>
                      </div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 relative z-10" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-xs text-gray-400 text-center transition-colors group-hover:text-cyan-400"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
