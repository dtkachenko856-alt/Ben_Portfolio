import { motion } from 'framer-motion'
import { Mail, Download, Terminal, Zap } from 'lucide-react'
import { heroData } from '../data/mockData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0" />
      
      {/* Animated Particles/Dots - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const left = (i * 12.5) % 100;
          const top = (i * 25) % 100;
          const duration = 4 + (i % 3);
          const delay = i * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      {/* Glowing Orbs - Simplified */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-cyan-600/5 rounded-full blur-[40px]" />


      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex items-center justify-center">
        <div className="max-w-3xl text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-cyan-400">Ben Schnitzer</span>
          </motion.h1>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-1 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={heroData.avatar}
                    alt="Ben Schnitzer"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500/30 rounded-full blur-xl" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyan-600/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-cyan-300 font-semibold mb-6"
          >
            AI Engineer & Software Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-base max-w-2xl mb-8 leading-relaxed"
          >
            I craft exceptional digital experiences through clean code and creative solutions.
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-12 justify-center"
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

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-8">
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
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Download Resume</span>
            </motion.a>
            
            <motion.a
              href="mailto:benschnitzer787@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/40 rounded-full text-cyan-300 hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <Mail size={16} />
              <span className="text-sm font-medium">Send Mail</span>
            </motion.a>
          </div>
        </div>
        
      </div>

     
    </section>
  )
}
