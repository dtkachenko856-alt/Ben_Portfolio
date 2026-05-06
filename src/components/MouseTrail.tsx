import { useEffect, useState, useCallback} from 'react'
import { motion } from 'framer-motion'


export default function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
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

  return (
    <>
      {/* Simple Custom Cursor */}
      <motion.div
        className="fixed w-3 h-3 rounded-full border border-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'tween',
          duration: 0.1,
          ease: 'linear',
        }}
      />
    </>
  )
}
