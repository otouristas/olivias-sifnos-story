import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    MessageCircle, Send, X, Sparkles, Bot, User, Loader2,
    MapPin, Calendar, Phone, Mail, Star, Heart, Waves,
    Sun, Home, Utensils, Ship, ChevronDown
} from 'lucide-react';
import { generateAIResponse, QUICK_ACTIONS } from '@/data/ai-knowledge-base';

interface Message {
    readonly id: string;
    readonly type: 'user' | 'ai';
    readonly content: string;
    readonly timestamp: Date;
    readonly isTyping?: boolean;
}

interface ChatbotProps {
    readonly className?: string;
}

// Animated typing effect hook
function useTypingEffect(text: string, speed: number = 20, enabled: boolean = true) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!enabled) {
            setDisplayedText(text);
            setIsComplete(true);
            return;
        }

        setDisplayedText('');
        setIsComplete(false);
        let index = 0;

        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, enabled]);

    return { displayedText, isComplete };
}

// Message bubble with typing animation
function MessageBubble({ message, isLatest }: { message: Message; isLatest: boolean }) {
    const isAI = message.type === 'ai';
    const shouldAnimate = isAI && isLatest && !message.isTyping;
    const { displayedText, isComplete } = useTypingEffect(message.content, 15, shouldAnimate);

    const renderContent = (content: string) => {
        // Parse markdown links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = content.split(linkRegex);

        return parts.map((part, index) => {
            if (index % 3 === 1) {
                const url = parts[index + 1];
                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-medium transition-colors"
                    >
                        {part}
                    </a>
                );
            }
            if (index % 3 === 0) {
                return <span key={index}>{part}</span>;
            }
            return null;
        });
    };

    return (
        <div
            className={`flex gap-3 animate-in slide-in-from-bottom-2 duration-300 ${isAI ? 'justify-start' : 'justify-end'
                }`}
        >
            {isAI && (
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Bot size={18} className="text-white" />
                </div>
            )}

            <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${isAI
                        ? 'bg-white/10 backdrop-blur-sm text-white/90 rounded-tl-sm border border-white/10'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-tr-sm shadow-lg shadow-amber-500/20'
                    }`}
            >
                {message.isTyping ? (
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-white/60 text-xs">Olivia is thinking...</span>
                    </div>
                ) : (
                    <>
                        {renderContent(shouldAnimate ? displayedText : message.content)}
                        {shouldAnimate && !isComplete && (
                            <span className="inline-block w-0.5 h-4 bg-amber-400 ml-0.5 animate-pulse" />
                        )}
                    </>
                )}
            </div>

            {!isAI && (
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <User size={18} className="text-white" />
                </div>
            )}
        </div>
    );
}

// Quick action chip
function QuickActionChip({ label, icon: Icon, onClick }: { label: string; icon: any; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 rounded-xl text-xs text-white/70 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10"
        >
            <Icon size={14} className="text-amber-400 group-hover:text-amber-300" />
            <span>{label}</span>
        </button>
    );
}

export function OliviaClaraAIPremium({ className = '' }: ChatbotProps): JSX.Element {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickActions, setShowQuickActions] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Welcome messages with personality
    const WELCOME_MESSAGES = [
        "Kalimera! ☀️ I'm Olivia, your personal villa concierge. Whether you're dreaming of sunset views, hidden beaches, or the perfect Greek escape - I'm here to make it happen. What brings you to Sifnos?",
        "Welcome to Villa Olivia Clara! ✨ I'm your AI assistant with insider secrets about our luxury villa and the enchanting island of Sifnos. Ready to plan your perfect getaway?",
        "Yia sas! 🏖️ I'm Olivia, and I've helped hundreds of guests discover the magic of Sifnos. From the best tavernas to secret swimming spots - ask me anything!"
    ];

    // Quick action categories
    const quickActions = [
        { label: 'Villa Features', icon: Home, query: 'Tell me about the villa amenities' },
        { label: 'Best Beaches', icon: Waves, query: 'What are the best beaches near the villa?' },
        { label: 'Local Dining', icon: Utensils, query: 'Recommend local restaurants in Sifnos' },
        { label: 'Boat Tours', icon: Ship, query: 'Tell me about boat tours from Sifnos' },
        { label: 'Book Now', icon: Calendar, query: 'How do I book a stay at the villa?' },
        { label: 'Contact Elena', icon: Phone, query: 'How can I contact Elena for booking?' },
    ];

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Initialize with welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const randomWelcome = WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];
            setTimeout(() => {
                setMessages([{
                    id: Date.now().toString(),
                    type: 'ai',
                    content: randomWelcome,
                    timestamp: new Date()
                }]);
            }, 300);
        }
    }, [isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSendMessage = useCallback(async () => {
        if (!inputValue.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setShowQuickActions(false);

        // Add typing indicator
        const typingId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, {
            id: typingId,
            type: 'ai',
            content: '',
            timestamp: new Date(),
            isTyping: true
        }]);

        // Simulate AI thinking with variable delay
        const thinkingTime = 800 + Math.random() * 1200;

        setTimeout(() => {
            const response = generateAIResponse(userMessage.content);

            setMessages(prev => prev.filter(m => m.id !== typingId).concat({
                id: (Date.now() + 2).toString(),
                type: 'ai',
                content: response,
                timestamp: new Date()
            }));
            setIsTyping(false);
        }, thinkingTime);
    }, [inputValue, isTyping]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleQuickAction = (query: string) => {
        setInputValue(query);
        setTimeout(() => handleSendMessage(), 50);
    };

    // Floating button (when closed)
    if (!isOpen) {
        return (
            <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
                {/* Pulse rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-16 h-16 bg-amber-500/20 rounded-full animate-ping" />
                    <div className="absolute w-20 h-20 bg-amber-500/10 rounded-full animate-pulse" />
                </div>

                {/* Main button */}
                <button
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative group w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Icon */}
                    <div className="relative flex items-center justify-center">
                        <MessageCircle size={26} className="text-white" />
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-200 animate-pulse" />
                    </div>

                    {/* Online indicator */}
                    <div className="absolute top-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-lg">
                        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    </div>
                </button>

                {/* Hover tooltip */}
                <div className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <div className="bg-gray-900/90 backdrop-blur-lg text-white px-4 py-3 rounded-xl shadow-2xl border border-white/10 whitespace-nowrap">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={14} className="text-amber-400" />
                            <span className="font-semibold">Chat with Olivia</span>
                        </div>
                        <p className="text-xs text-white/60">Your personal villa concierge</p>
                        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900/90 border-r border-b border-white/10" />
                    </div>
                </div>
            </div>
        );
    }

    // Chat window (when open)
    return (
        <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
            <div className="w-[380px] h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 animate-in zoom-in-90 slide-in-from-bottom-4 duration-300">
                {/* Glass container */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-xl border border-white/10">

                    {/* Ambient glow effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/10 blur-3xl pointer-events-none" />

                    {/* Header */}
                    <div className="relative px-5 py-4 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                        <img
                                            src="/favicon.webp"
                                            alt="Olivia Clara AI"
                                            className="w-8 h-8 rounded-lg object-contain filter brightness-0 invert"
                                        />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-gray-900" />
                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="text-white font-semibold flex items-center gap-2">
                                        Olivia Clara
                                        <span className="px-1.5 py-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded text-[10px] text-amber-400 font-medium border border-amber-500/20">
                                            AI
                                        </span>
                                    </h3>
                                    <p className="text-xs text-white/50 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                        Online • Your Villa Concierge
                                    </p>
                                </div>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Messages area */}
                    <div
                        ref={scrollRef}
                        className="h-[calc(100%-180px)] overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                    >
                        {messages.map((message, index) => (
                            <MessageBubble
                                key={message.id}
                                message={message}
                                isLatest={index === messages.length - 1}
                            />
                        ))}

                        {/* Quick actions */}
                        {showQuickActions && messages.length === 1 && (
                            <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
                                <p className="text-xs text-white/40 mb-3 flex items-center gap-2">
                                    <Star size={12} className="text-amber-400" />
                                    Quick questions
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.slice(0, 4).map((action) => (
                                        <QuickActionChip
                                            key={action.label}
                                            label={action.label}
                                            icon={action.icon}
                                            onClick={() => handleQuickAction(action.query)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input area */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent pt-8">
                        <div className="flex gap-3">
                            <div className="flex-1 relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about the villa, Sifnos..."
                                    disabled={isTyping}
                                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all disabled:opacity-50"
                                />
                            </div>

                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isTyping}
                                className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:scale-105 disabled:hover:scale-100"
                            >
                                {isTyping ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <Send size={18} />
                                )}
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-center items-center mt-3">
                            <span className="text-[10px] text-white/30 flex items-center gap-1.5">
                                Powered by
                                <span className="text-amber-400/60 font-medium">Touristas AI</span>
                                <Sparkles size={10} className="text-amber-400/40" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OliviaClaraAIPremium;
