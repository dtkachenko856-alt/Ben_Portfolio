import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export default function StarBackground() {
  // Generate random stars - enhanced
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + (i % 3),
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
    }))
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
      
      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}


      {/* Enhanced floating stars */}
      {[...Array(5)].map((_, i) => {
        const randomX = 10 + Math.random() * 80;
        const randomDelay = Math.random() * 3;
        
        return (
          <motion.div
            key={`floating-${i}`}
            className="absolute w-1 h-1 rounded-full bg-cyan-300/60"
            style={{
              left: `${randomX}%`,
              bottom: -20,
            }}
            animate={{
              y: [0, -300, 0],
              opacity: [0, 0.8, 0],
              x: [0, Math.sin(i) * 30, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          />
        )
      })}

      {/* Enhanced nebula effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 3,
          ease: "easeInOut",
        }}
      />
      
      {/* Shooting stars */}
      {[...Array(2)].map((_, i) => {
        const randomX = 70 + Math.random() * 25;
        const randomY = 10 + Math.random() * 40;
        const randomDelay = Math.random() * 6;
        
        return (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              x: [0, -200, -400],
              y: [0, 100, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: randomDelay + 2,
              ease: "easeOut",
            }}
          />
        )
      })}
    </div>
  )
}
