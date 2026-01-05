
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Bot, AlertTriangle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AICommandBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: "Greetings. I am the Architect's digital twin. Ask me anything about the portfolio.", timestamp: Date.now() }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!query.trim()) return;

    // Rate Limiting: Max 5 messages per 60 seconds
    const now = Date.now();
    const recentMessages = messages.filter(m => m.role === 'user' && now - m.timestamp < 60000);
    
    if (recentMessages.length >= 5) {
      setRateLimitError(true);
      setTimeout(() => setRateLimitError(false), 5000);
      return;
    }

    const userMsg: ChatMessage = {
      id: now.toString(),
      role: 'user',
      text: query,
      timestamp: now
    };

    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsThinking(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(query, history);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsThinking(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-neutral-900/90 dark:bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-purple-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Neural Assistant</h3>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-gray-400 font-mono">CORE_STABLE</span>
                    </div>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
                  <X size={20} />
               </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-br-none' 
                        : 'bg-white/10 border border-white/10 text-gray-200 rounded-bl-none backdrop-blur-md shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
              )}
            </div>

            {/* Input & Warnings */}
            <div className="p-4 bg-white/5 border-t border-white/10">
                <AnimatePresence>
                  {rateLimitError && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0 }}
                      className="mb-2 p-2 bg-amber-500/20 border border-amber-500/40 rounded-lg flex items-center gap-2 text-amber-500 text-[10px] font-mono"
                    >
                      <AlertTriangle size={12} /> ERR_THROTTLED: Please wait a moment.
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative">
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type a message..."
                      className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors font-sans"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!query.trim() || isThinking}
                        className="absolute right-1 top-1 p-2 bg-white/10 rounded-full text-white hover:bg-accent disabled:opacity-50 disabled:hover:bg-white/10 transition-all"
                    >
                        <Send size={14} />
                    </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative group ${
            isOpen ? 'bg-white text-black' : 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
        }`}
      >
        <div className={`absolute inset-0 rounded-full blur-xl opacity-50 transition-opacity duration-1000 ${isOpen ? 'bg-white' : 'bg-indigo-500 animate-pulse'}`} />
        
        {isOpen ? (
            <X size={28} />
        ) : (
            <>
               <Sparkles size={28} className="relative z-10" />
               <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            </>
        )}
      </motion.button>
    </div>
  );
};
