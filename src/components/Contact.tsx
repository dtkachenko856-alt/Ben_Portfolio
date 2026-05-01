import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react'
import { contactData, socialLinks } from '../data/mockData'

const iconMap = { Mail, MapPin, Phone, Github, Linkedin }

export default function Contact() {
  return (
    <section id="contact" className="py-10 relative  border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            CONTACT <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400">
                Don't like forms? Send me an email directly. I'm always open to discussing new projects,
                creative ideas or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactData.contactInfo.map((info) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-6 sm:p-8 rounded-2xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-white/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-white/20"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-white/20 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-sm sm:text-base">Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
