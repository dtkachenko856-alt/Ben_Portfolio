import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Download, Terminal, Zap } from 'lucide-react'
import { heroData } from '../data/mockData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0" />
      
      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] animate-pulse delay-1000" />

      {/* Floating Circles */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 border border-cyan-500/50 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400/50 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium">
              Welcome to my world
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-cyan-400">David</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl lg:text-3xl text-cyan-300 font-semibold mb-6"
          >
            Software Developer 👋
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed"
          >
            I craft exceptional digital experiences through clean code and creative solutions. 
            From web apps to mobile and games, I bring ideas to life.
          </motion.p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-2 border-cyan-500 pl-4 mb-8"
          >
            <p className="text-gray-300 italic text-sm md:text-base">
              "I believe in what I can learn to do, not just in what I can already do."
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-12"
          >
            <motion.div 
              className="glass-effect px-4 py-3 rounded-lg flex items-center gap-3"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Terminal size={18} className="text-cyan-400" />
              <div>
                <span className="text-cyan-400 font-bold text-lg">5+</span>
                <span className="text-gray-400 text-sm ml-2">Years Experience</span>
              </div>
            </motion.div>
            <motion.div 
              className="glass-effect px-4 py-3 rounded-lg flex items-center gap-3"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Zap size={18} className="text-cyan-400" />
              <div>
                <span className="text-cyan-400 font-bold text-lg">10+</span>
                <span className="text-gray-400 text-sm ml-2">Projects Completed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={heroData.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <Download size={16} />
            <span className="text-sm font-medium">Download CV</span>
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
