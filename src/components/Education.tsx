import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react'
import { educationData } from '../data/mockData'

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            {educationData.title} <span className="text-cyan-400">—</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            My academic background and professional certifications
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12 mb-20">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < educationData.education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-cyan-500/30 to-transparent" />
              )}
              
              <div className="flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center"
                  >
                    <GraduationCap size={24} className="text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect p-6 lg:p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group/edu">
                  {/* Lighting effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover/edu:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover/edu:translate-x-0 group-hover/edu:translate-y-0 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover/edu:translate-x-0 group-hover/edu:translate-y-0 transition-transform duration-700"></div>
                  </div>
                  <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-4 text-cyan-400">
                        <span className="font-medium">{edu.school}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 lg:mt-0 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      {(edu as { gpa?: string }).gpa && (
                        <div className="flex items-center gap-2">
                          <Star size={16} />
                          <span>{(edu as { gpa?: string }).gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 + achIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications - Only show if data exists */}
        {educationData.certifications && educationData.certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {educationData.certifications.map((cert: { name: string; issuer: string; date: string; credentialId: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-xl border border-cyan-500/20 hover:bg-white/10 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden group/cert"
                >
                  {/* Lighting effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                    <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover/cert:translate-x-0 group-hover/cert:translate-y-0 transition-transform duration-600"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 group-hover/cert:translate-x-0 group-hover/cert:translate-y-0 transition-transform duration-600"></div>
                  </div>
                  <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-white mb-1">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
