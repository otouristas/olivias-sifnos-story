import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Minimize2, X, Bot, User, Loader2 } from 'lucide-react';
import { generateAIResponse, QUICK_ACTIONS } from '@/data/ai-knowledge-base';
import favicon from '/favicon.webp';

interface Message {
  readonly id: string;
  readonly type: 'user' | 'ai';
  readonly content: string;
  readonly timestamp: Date;
}

interface ChatbotProps {
  readonly className?: string;
}

// Welcome messages for first interaction
const WELCOME_MESSAGES = [
  "Hello! I'm Olivia Clara AI, your personal villa assistant. How can I help you plan your perfect stay in Sifnos?",
  "Welcome to Villa Olivia Clara! I'm here to answer any questions about our luxury villa in Sifnos. What would you like to know?",
  "Hi there! I'm Olivia Clara AI. I'd be delighted to help you discover everything about our beautiful villa in Sifnos, Greece."
];

export function OliviaClaraAI({ className = '' }: ChatbotProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [messages, setMessages] = useState<ReadonlyArray<Message>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Initialize with greeting when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: WELCOME_MESSAGES[0],
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-villa-olive hover:bg-villa-olive/90 shadow-lg hover:shadow-xl transition-all duration-300 group p-0 overflow-hidden"
          size="icon"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={favicon} 
              alt="Olivia Clara AI" 
              className="w-8 h-8 rounded-full bg-white/10 p-1 group-hover:scale-110 transition-transform filter brightness-0 invert"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Button>
        
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with Olivia Clara AI
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <Card className={`w-80 sm:w-96 shadow-2xl border-villa-stone transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        <CardHeader className="p-4 bg-gradient-to-r from-villa-olive to-villa-olive/90 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={favicon} 
                  alt="Olivia Clara AI" 
                  className="w-8 h-8 rounded-full bg-white p-1"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Olivia Clara AI</CardTitle>
                <p className="text-xs text-white/80">Villa Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <Minimize2 size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-villa-olive-light flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-villa-olive" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-villa-olive text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-villa-olive flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-villa-olive-light flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-villa-olive" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                      <div className="flex items-center gap-1">
                        <Loader2 size={16} className="animate-spin text-villa-olive" />
                        <span className="text-sm text-gray-600">Olivia Clara AI is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-villa-stone">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Villa Olivia Clara..."
                  className="flex-1 border-villa-stone focus:border-villa-olive"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  variant="villa"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <Send size={16} />
                </Button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {QUICK_ACTIONS.slice(0, 3).map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-villa-olive bg-villa-olive-light/50 border border-villa-olive/20 rounded-full cursor-pointer hover:bg-villa-olive-light hover:border-villa-olive/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-villa-olive/20"
                    onClick={() => {
                      setInputValue(action.query);
                      // Auto-focus the input after setting the value
                      setTimeout(() => {
                        const input = document.querySelector('input[placeholder*="Ask me about"]') as HTMLInputElement;
                        if (input) input.focus();
                      }, 50);
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
              
              {/* Powered by */}
              <div className="flex justify-center mt-3 pt-2 border-t border-villa-stone/20">
                <p className="text-xs text-gray-400">
                  Powered by <span className="font-medium text-villa-olive">Touristas AI</span>
                </p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default OliviaClaraAI;
