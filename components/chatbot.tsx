'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { chatbotData } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial greeting
  useEffect(() => {
    if (isOpen && !hasStarted) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: `${chatbotData.greeting}\n\n${chatbotData.capabilities.map(c => `• ${c}`).join('\n')}`,
          timestamp: new Date(),
        },
      ])
      setHasStarted(true)
    }
  }, [isOpen, hasStarted])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return chatbotData.responses.experience
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('app') || lowerMessage.includes('portfolio')) {
      return chatbotData.responses.projects
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('technology') || lowerMessage.includes('stack')) {
      return chatbotData.responses.technologies
    }
    if (lowerMessage.includes('hire') || lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('job')) {
      return chatbotData.responses.hire
    }
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('download')) {
      return chatbotData.responses.resume
    }
    
    return chatbotData.responses.default
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const responseContent = generateResponse(userMessage.content)
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    // Auto send after a brief delay
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: reply,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMessage])
      
      setTimeout(async () => {
        const responseContent = generateResponse(reply)
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseContent,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      }, 500)
    }, 100)
  }

  const formatMessage = (content: string) => {
    // Convert markdown-style formatting
    return content.split('\n').map((line, i) => {
      // Bold text
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      
      if (line.startsWith('•') || line.startsWith('-')) {
        return (
          <li key={i} className="ml-4 text-sm" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        )
      }
      if (line.match(/^\d+\./)) {
        return (
          <li key={i} className="ml-4 text-sm" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        )
      }
      return (
        <p key={i} className="text-sm" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      )
    })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110',
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-gradient-to-r from-sky-500 to-sky-400 hover:shadow-sky-500/25'
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-400 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{chatbotData.name}</h3>
                <p className="text-xs text-white/70">AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-3',
                  message.role === 'user' ? 'flex-row-reverse' : ''
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                    message.role === 'user'
                      ? 'bg-sky-500'
                      : 'bg-gradient-to-br from-sky-500 to-sky-400'
                  )}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl p-3',
                    message.role === 'user'
                      ? 'bg-sky-500 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-700 rounded-bl-none'
                  )}
                >
                  {formatMessage(message.content)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-3 border-t border-slate-200 bg-slate-50/50">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {chatbotData.quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs whitespace-nowrap hover:bg-sky-50 hover:text-sky-500 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-slate-50/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
              <Button
                size="icon"
                variant="gradient"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
