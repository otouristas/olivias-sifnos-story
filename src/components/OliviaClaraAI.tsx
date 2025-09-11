import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Minimize2, X, Bot, User, Loader2, Sparkles, Heart, Star, MapPin, Calendar, Phone, Mail } from 'lucide-react';
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

export function OliviaClaraAI({ className = '' }: ChatbotProps): JSX.Element {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [messages, setMessages] = useState<ReadonlyArray<Message>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showQuickActions, setShowQuickActions] = useState<boolean>(true);
  const [conversationCount, setConversationCount] = useState<number>(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Enhanced welcome messages with personality
  const WELCOME_MESSAGES = [
    t('ai.welcome'),
    "Welcome to Villa Olivia Clara! I'm your AI assistant with insider knowledge of our luxury villa and the beautiful island of Sifnos. What would you like to discover? 🏖️",
    "Hi there! I'm Olivia Clara AI, your virtual concierge. I've helped hundreds of guests plan perfect Sifnos vacations. Let me share our secrets with you! 💫",
    "Kalimera! I'm Olivia Clara AI, your personal guide to Villa Olivia Clara and Sifnos. I know all the best beaches, restaurants, and hidden gems. What shall we explore? 🌊"
  ];

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Initialize with greeting when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const randomWelcome = WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: randomWelcome,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Hide quick actions after first interaction
  useEffect(() => {
    if (messages.length > 1) {
      setShowQuickActions(false);
    }
  }, [messages.length]);

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
    setConversationCount(prev => prev + 1);

    // Enhanced AI thinking time with personality
    const thinkingTime = 800 + Math.random() * 1500; // 0.8-2.3 seconds
    
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Function to render markdown links in AI responses
  const renderMessageContent = (content: string): JSX.Element => {
    // Split content by markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = content.split(linkRegex);
    
    return (
      <>
        {parts.map((part, index) => {
          if (index % 3 === 0) {
            // Regular text
            return <span key={index}>{part}</span>;
          } else if (index % 3 === 1) {
            // Link text
            const url = parts[index + 1];
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-villa-olive hover:text-villa-olive-dark underline font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
              >
                {part}
              </a>
            );
          }
          return null;
        })}
      </>
    );
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          data-ai-trigger
          className="h-16 w-16 rounded-full bg-gradient-to-br from-villa-olive to-villa-olive/80 hover:from-villa-olive/90 hover:to-villa-olive/70 shadow-xl hover:shadow-2xl transition-all duration-300 group p-0 overflow-hidden relative"
          size="icon"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={favicon} 
              alt="Olivia Clara AI" 
              className="w-10 h-10 rounded-full bg-white/10 p-1 group-hover:scale-110 transition-transform filter brightness-0 invert"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        </Button>
        
        {/* Enhanced Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gradient-to-r from-villa-olive to-villa-olive/90 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
          <div className="flex items-center gap-2">
            <Sparkles size={16} />
            <span className="font-medium">Chat with Olivia Clara AI</span>
          </div>
          <div className="text-xs text-white/80 mt-1">Your personal villa concierge</div>
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
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  Olivia Clara AI
                  <Sparkles size={14} className="text-yellow-300" />
                </CardTitle>
                <p className="text-xs text-white/80">Your Personal Villa Concierge</p>
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
                      {message.type === 'ai' ? renderMessageContent(message.content) : message.content}
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
                      <div className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-villa-olive" />
                        <span className="text-sm text-gray-600">{t('ai.thinking')}</span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-villa-olive rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-villa-olive rounded-full animate-bounce delay-100"></div>
                          <div className="w-1 h-1 bg-villa-olive rounded-full animate-bounce delay-200"></div>
                        </div>
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
                  placeholder={t('ai.placeholder')}
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
              {showQuickActions && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {QUICK_ACTIONS.slice(0, 4).map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-villa-olive bg-villa-olive-light/50 border border-villa-olive/20 rounded-full cursor-pointer hover:bg-villa-olive-light hover:border-villa-olive/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-villa-olive/20 hover:scale-105"
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
              )}
              
              {/* Contact Quick Actions */}
              {conversationCount > 2 && (
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => setInputValue("How do I contact Elena for booking?")}
                  >
                    <Phone size={12} className="mr-1" />
                    Call Elena
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => setInputValue("What's Elena's email for booking?")}
                  >
                    <Mail size={12} className="mr-1" />
                    Email
                  </Button>
                </div>
              )}
              
              {/* Enhanced Footer */}
              <div className="flex justify-center items-center mt-3 pt-2 border-t border-villa-stone/20">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>Powered by</span>
                  <img 
                    src="https://hotelssifnos.com/uploads/touristas-ai-logo.svg" 
                    alt="Touristas AI" 
                    className="h-4 w-auto"
                  />
                  <span className="font-medium text-villa-olive">Touristas AI</span>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default OliviaClaraAI;
