import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailPoint {
  id: number
  x: number
  y: number
  timestamp: number
}

export default function MouseTrail() {
  const idRef = useRef(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    // Add new trail point
    setTrail((prev) => {
      const newPoint: TrailPoint = {
        id: ++idRef.current,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }
      // Keep only last 8 points for trail
      return [...prev.slice(-7), newPoint]
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.filter((point) => Date.now() - point.timestamp < 400))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Custom Cursor - Small only */}
      <motion.div
        className="fixed w-4 h-4 rounded-full border-2 border-cyan-400 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'tween',
          duration: 0.08,
          ease: 'linear',
        }}
      >
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
      </motion.div>

      {/* Shooting Star Trail */}
      <AnimatePresence>
        {trail.map((point, index) => {
          const opacity = (index + 1) / trail.length * 0.6
          const scale = (index + 1) / trail.length * 0.8 + 0.2
          const isHead = index === trail.length - 1

          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isHead ? 1 : opacity * 0.4, scale: isHead ? 1.2 : scale }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed pointer-events-none z-[9997]"
              style={{
                left: point.x,
                top: point.y,
              }}
            >
              {/* Star shape */}
              {isHead ? (
                // Main star (head)
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  {/* 4-point star */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                      fill="url(#starGradient)"
                    />
                    <defs>
                      <linearGradient id="starGradient" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#22d3ee" />
                        <stop offset="1" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow effect */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400/30 rounded-full blur-md" />
                </div>
              ) : (
                // Trail particles
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500"
                  style={{
                    width: `${4 + index}px`,
                    height: `${4 + index}px`,
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Tail line connecting points */}
      {trail.length > 1 && (
        <svg
          className="fixed inset-0 pointer-events-none z-[9996]"
          style={{ width: '100vw', height: '100vh' }}
        >
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d={`M ${trail.map((p) => `${p.x},${p.y}`).join(' L ')}`}
            fill="none"
            stroke="url(#trailGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.5))',
            }}
          />
        </svg>
      )}
    </>
  )
}
