'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const iconMap: { [key: string]: React.ElementType } = {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Layers,
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sky-500 font-medium mb-2">{contactData.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{contactData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={cn(
              'transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            {/* Availability Badge */}
            <div className="bg-white rounded-2xl p-6 mb-8 card-shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
                <span className="font-semibold text-slate-900">{contactData.availability}</span>
              </div>
              <p className="text-sm text-slate-500">{contactData.responseTime}</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactData.contactMethods.map((method) => {
                const Icon = iconMap[method.icon]
                return (
                  <a
                    key={method.type}
                    href={method.href}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 card-shadow hover:card-shadow-hover border border-slate-100 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{method.type}</p>
                      <p className="font-medium text-slate-900">{method.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {contactData.socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-200 hover:scale-110 transition-all duration-300"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <div className="bg-white rounded-2xl p-8 card-shadow border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-sky-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-slate-50 border-slate-200 focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-slate-50 border-slate-200 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-slate-50 border-slate-200 focus:border-sky-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-slate-50 border-slate-200 focus:border-sky-500 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
