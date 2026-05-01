import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { githubUsername } from '../data/mockData'

const socialLinks = [
  { icon: Github, href: `https://github.com/${githubUsername}`, label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yassine-dev', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yassine@example.com', label: 'Email' },
]

export default function SocialSidebar() {
  // Calculate semicircle positions (centered around chat button at bottom-right)
  // Chat button is at bottom-[50px] right-[50px] with w-14 h-14 (56px)
  // Center is at 50 + 28 = 78px from edges
  const getMobilePosition = (index: number, total: number) => {
    const radius = 70 // Distance from chat button center
    const startAngle = 170 // Start angle in degrees
    const endAngle = 210 // End angle in degrees
    const angleStep = (endAngle - startAngle) / (total -1)
    const angle = (startAngle + index * angleStep) * (Math.PI / 90)
    
    // Calculate offset from chat button center (arc to upper-left)
    const x = 1 *Math.cos(angle) * radius // Negative = left from center
    const y = -Math.sin(angle) * radius // Negative = up from center
    
    return { x, y }
  }

  return (
    <>
      {/* Desktop: Vertical sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
            className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile: Semicircle around chat button */}
      <div className="lg:hidden fixed bottom-[50px] right-[50px] z-40 pointer-events-none">
        {socialLinks.map((social, index) => {
          const { x, y } = getMobilePosition(index, socialLinks.length)
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              className="absolute w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 pointer-events-auto"
              style={{
                right: 16 + x, // 28px = half of w-14 (56px) for center alignment
                bottom: 15 + y,
              }}
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          )
        })}
      </div>
    </>
  )
}
