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
  // Generate random stars
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
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
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: star.duration * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger glowing stars */}
      {stars.filter((_, i) => i % 10 === 0).map((star) => (
        <motion.div
          key={`glow-${star.id}`}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size * 2,
            height: star.size * 2,
            boxShadow: `0 0 ${star.size * 4}px rgba(34, 211, 238, 0.6)`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration * 1.5,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating stars moving slowly upward */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute w-1 h-1 rounded-full bg-cyan-300"
          style={{
            left: `${10 + i * 20}%`,
            bottom: -10,
          }}
          animate={{
            y: [0, -window.innerHeight - 50, 0],
            opacity: [0, 1, 0],
            x: [0, Math.sin(i) * 50, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        />
      ))}

      {/* Subtle nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
    </div>
  )
}
