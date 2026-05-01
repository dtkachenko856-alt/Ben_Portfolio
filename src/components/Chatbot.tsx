import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const botResponses: Record<string, string> = {
  'hello': 'Hi there! 👋 Welcome to my portfolio. How can I help you today?',
  'hi': 'Hello! 👋 I\'m Yassine\'s virtual assistant. Ask me about his skills, projects, or experience!',
  'hey': 'Hey! 👋 What would you like to know about Yassine?',
  'skills': 'Yassine is skilled in React, TypeScript, Node.js, Next.js, Tailwind CSS, and more. Check out the Skills section for details! 💻',
  'experience': 'Yassine has 5+ years of experience as a Software Developer, working with startups and international clients. 🚀',
  'projects': 'Yassine has built many projects including E-commerce stores, Mobile apps, and Web applications. Check the Projects section! 🛠️',
  'contact': 'You can reach Yassine via email at yassine@example.com or through the contact form on this page. 📧',
  'email': 'Yassine\'s email is yassine@example.com. Feel free to reach out! 📧',
  'hire': 'Yassine is available for freelance work and full-time opportunities. Contact him to discuss your project! 💼',
  'resume': 'You can download Yassine\'s resume from the Resume button in the hero section! 📄',
  'about': 'Yassine is a Software Developer based in Morocco, passionate about building digital products that make a difference. 🌍',
  'default': 'I\'m not sure about that. Try asking about skills, experience, projects, or how to contact Yassine! 🤔',
}

const quickReplies = [
  'Tell me about your skills',
  'View your projects',
  'How to contact you?',
  'Are you available for hire?',
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '👋 Hi! I\'m Yassine\'s AI assistant. Ask me anything about his work, skills, or how to get in touch!',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const getBotResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase()
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMsg.includes(keyword)) {
        return response
      }
    }
    
    return botResponses.default
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    setTimeout(() => {
      handleSend()
    }, 100)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[50px] right-[50px] z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 glass-effect rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Yassine's Assistant</h3>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={14} className="text-white/70" />
                <span className="text-white/70 text-xs">AI Powered</span>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-dark-900/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-cyan-500 text-white rounded-br-none'
                        : 'bg-white/10 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 px-3 py-2 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></span>
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-3 py-2 bg-dark-900/30  border-white/5">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="whitespace-nowrap px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-300 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-dark-900/50  border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Send size={16} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
