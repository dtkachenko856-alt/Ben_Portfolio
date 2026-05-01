import { motion } from 'framer-motion'
import { Code2, Smartphone, Gamepad2, Database } from 'lucide-react'
import { aboutData } from '../data/mockData'

const iconMap = { Code2, Smartphone, Gamepad2, Database }

export default function About() {
  return (
    <section id="about" className="py-10 relative  border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            ABOUT ME <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and turning complex problems into elegant code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer"
                >
                  <span className="text-xl sm:text-2xl font-bold text-cyan-400">{stat.value}</span>
                  <span className="text-gray-400 ml-2 text-sm sm:text-base">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-1 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={aboutData.avatar}
                  alt={aboutData.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl group-hover:bg-cyan-500/50 transition-all" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-600/30 rounded-full blur-2xl group-hover:bg-cyan-600/50 transition-all" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1, type: 'spring', stiffness: 260 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.97 }}
                className="glass-effect p-4 sm:p-6 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-3 sm:mb-4" />
                </motion.div>
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
