import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageCircle, Send, X, Sparkles, User, Loader2,
    MapPin, Calendar, Phone, Mail, Star, Waves,
    Home, Bed, Sun, Eye, Trash2
} from 'lucide-react';
import { generateAIResponse, QUICK_ACTIONS, FOLLOW_UP_ACTIONS } from '@/data/ai-knowledge-base';

interface Message {
    readonly id: string;
    readonly type: 'user' | 'ai';
    readonly content: string;
    readonly timestamp: Date;
    readonly isTyping?: boolean;
    readonly followUpAction?: 'booking' | 'contact' | 'explore';
}

interface ChatbotProps {
    readonly className?: string;
}

// Icon mapping
const IconMap: Record<string, React.ElementType> = {
    Home, Waves, Bed, Sun, Calendar, Phone, Mail, Eye, MapPin, Star,
};

// Typing effect hook
function useTypingEffect(text: string, speed: number = 12, enabled: boolean = true) {
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

// Parse markdown
function parseMarkdown(content: string): React.ReactNode[] {
    const elements: React.ReactNode[] = [];
    const regex = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(content)) !== null) {
        if (match.index > lastIndex) {
            elements.push(<span key={key++}>{content.slice(lastIndex, match.index)}</span>);
        }
        if (match[2]) {
            elements.push(<strong key={key++} className="font-semibold text-villa-olive">{match[2]}</strong>);
        } else if (match[3] && match[4]) {
            elements.push(
                <a key={key++} href={match[4]} target="_blank" rel="noopener noreferrer"
                    className="text-aegean hover:underline font-medium">{match[3]}</a>
            );
        }
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
        elements.push(<span key={key++}>{content.slice(lastIndex)}</span>);
    }
    return elements.length > 0 ? elements : [content];
}

// Follow-up button
function FollowUpButton({ action }: { action: 'booking' | 'contact' | 'explore' }) {
    const actionData = FOLLOW_UP_ACTIONS[action];
    const Icon = IconMap[actionData.icon] || Star;

    if (actionData.external) {
        return (
            <a href={actionData.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-villa-olive text-white rounded-xl text-sm font-medium hover:bg-villa-olive/90 transition-all hover:scale-105 shadow-sm">
                <Icon size={16} />{actionData.label}
            </a>
        );
    }
    return (
        <Link to={actionData.url}
            className="inline-flex items-center gap-2 px-4 py-2 bg-villa-olive text-white rounded-xl text-sm font-medium hover:bg-villa-olive/90 transition-all hover:scale-105 shadow-sm">
            <Icon size={16} />{actionData.label}
        </Link>
    );
}

// Message bubble
function MessageBubble({ message, isLatest }: { message: Message; isLatest: boolean }) {
    const isAI = message.type === 'ai';
    const shouldAnimate = isAI && isLatest && !message.isTyping;
    const { displayedText, isComplete } = useTypingEffect(message.content, 8, shouldAnimate);

    const renderContent = (content: string) => {
        return content.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {i > 0 && <br />}
                {parseMarkdown(line)}
            </React.Fragment>
        ));
    };

    return (
        <div className={`flex gap-3 animate-fade-in ${isAI ? 'justify-start' : 'justify-end'}`}>
            {isAI && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-villa-olive flex items-center justify-center shadow-lg overflow-hidden">
                    <img src="/favicon.webp" alt="Olivia Clara AI" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </div>
            )}

            <div className="max-w-[85%] sm:max-w-[80%] space-y-2">
                <div className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl text-sm leading-relaxed ${isAI
                        ? 'bg-villa-olive-light/60 text-foreground rounded-tl-sm border border-villa-stone'
                        : 'bg-villa-olive text-white rounded-tr-sm shadow-lg'
                    }`}>
                    {message.isTyping ? (
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-villa-olive rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-villa-olive rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-villa-olive rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span className="text-muted-foreground text-xs">Thinking...</span>
                        </div>
                    ) : (
                        <>
                            {renderContent(shouldAnimate ? displayedText : message.content)}
                            {shouldAnimate && !isComplete && (
                                <span className="inline-block w-0.5 h-4 bg-villa-olive ml-0.5 animate-pulse" />
                            )}
                        </>
                    )}
                </div>

                {isAI && !message.isTyping && message.followUpAction && isComplete && (
                    <div className="pl-1 animate-fade-in">
                        <FollowUpButton action={message.followUpAction} />
                    </div>
                )}
            </div>

            {!isAI && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-aegean flex items-center justify-center shadow-lg">
                    <User size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                </div>
            )}
        </div>
    );
}

// Quick action chip
function QuickActionChip({ label, icon, onClick }: { label: string; icon: string; onClick: () => void }) {
    const Icon = IconMap[icon] || Star;
    return (
        <button onClick={onClick}
            className="group flex items-center gap-2 px-3 py-2 bg-villa-olive-light/50 hover:bg-villa-olive-light border border-villa-stone hover:border-villa-olive/30 rounded-xl text-xs text-foreground hover:text-villa-olive transition-all">
            <Icon size={14} className="text-villa-olive" />
            <span>{label}</span>
        </button>
    );
}

export function OliviaClaraAIPremium({ className = '' }: ChatbotProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickActions, setShowQuickActions] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const WELCOME_MESSAGE = `Kalimera! ☀️ I'm **Olivia Clara AI**, your personal villa concierge.

I can help you with everything about Villa Olivia Clara — from our stunning pool and bedrooms to booking your stay.

What would you like to know?`;

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Initialize welcome
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                setMessages([{
                    id: Date.now().toString(),
                    type: 'ai',
                    content: WELCOME_MESSAGE,
                    timestamp: new Date(),
                }]);
            }, 300);
        }
    }, [isOpen]);

    // Focus input
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSendMessage = useCallback(async (messageText?: string) => {
        const text = messageText || inputValue.trim();
        if (!text || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: text,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setShowQuickActions(false);

        const typingId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, {
            id: typingId, type: 'ai', content: '', timestamp: new Date(), isTyping: true,
        }]);

        const thinkingTime = 500 + Math.random() * 700;

        setTimeout(() => {
            const { response, followUpAction } = generateAIResponse(text);
            setMessages(prev => prev.filter(m => m.id !== typingId).concat({
                id: (Date.now() + 2).toString(),
                type: 'ai',
                content: response,
                timestamp: new Date(),
                followUpAction,
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

    const handleClearConversation = () => {
        setMessages([{
            id: Date.now().toString(),
            type: 'ai',
            content: WELCOME_MESSAGE,
            timestamp: new Date(),
        }]);
        setShowQuickActions(true);
    };

    // Floating button (closed)
    if (!isOpen) {
        return (
            <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${className}`}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-14 h-14 sm:w-16 sm:h-16 bg-villa-olive/20 rounded-full animate-ping" />
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-villa-olive shadow-2xl shadow-villa-olive/40 hover:shadow-villa-olive/60 transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative flex items-center justify-center">
                        <img src="/favicon.webp" alt="Olivia Clara AI" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                        <Sparkles size={10} className="absolute -top-1 -right-1 text-villa-gold animate-pulse" />
                    </div>
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-white">
                        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    </div>
                </button>

                <div className={`hidden sm:block absolute bottom-full right-0 mb-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white text-foreground px-4 py-3 rounded-xl shadow-elegant border border-villa-stone whitespace-nowrap">
                        <div className="flex items-center gap-2 mb-1">
                            <img src="/favicon.webp" alt="" className="w-4 h-4" />
                            <span className="font-semibold text-villa-olive">Olivia Clara AI</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Ask about Villa Olivia Clara</p>
                        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-villa-stone" />
                    </div>
                </div>
            </div>
        );
    }

    // Chat window - MOBILE FULL SCREEN, Desktop floating
    return (
        <div className={`fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 ${className}`}>
            <div className="w-full h-full sm:w-[380px] sm:h-[600px] sm:rounded-3xl overflow-hidden shadow-2xl sm:shadow-villa-olive/20 sm:animate-scale-in">
                <div className="relative w-full h-full bg-background sm:border sm:border-villa-stone flex flex-col">

                    {/* Header */}
                    <div className="flex-shrink-0 px-4 py-3 sm:px-5 sm:py-4 bg-villa-olive text-white safe-area-top">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-lg overflow-hidden">
                                        <img src="/favicon.webp" alt="Olivia Clara AI" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-villa-olive" />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                                        Olivia Clara
                                        <span className="px-1.5 py-0.5 bg-white/20 rounded text-[10px] font-medium">AI</span>
                                    </h3>
                                    <p className="text-xs text-white/80 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                        Villa Concierge
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Clear conversation */}
                                <button
                                    onClick={handleClearConversation}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                                    title="Clear conversation"
                                >
                                    <Trash2 size={16} />
                                </button>

                                {/* Close button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef}
                        className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 space-y-4 bg-sand-light">
                        {messages.map((message, index) => (
                            <MessageBubble key={message.id} message={message} isLatest={index === messages.length - 1} />
                        ))}

                        {showQuickActions && messages.length === 1 && (
                            <div className="pt-2 animate-fade-in">
                                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                                    <Star size={12} className="text-villa-gold" />
                                    Quick questions
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {QUICK_ACTIONS.slice(0, 4).map((action) => (
                                        <QuickActionChip key={action.id} label={action.label} icon={action.icon}
                                            onClick={() => handleSendMessage(action.query)} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="flex-shrink-0 p-3 sm:p-4 bg-background border-t border-villa-stone safe-area-bottom">
                        <div className="flex gap-2 sm:gap-3">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about Villa Olivia Clara..."
                                disabled={isTyping}
                                className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 bg-sand-light border border-villa-stone rounded-xl text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-villa-olive focus:ring-2 focus:ring-villa-olive/20 transition-all disabled:opacity-50"
                            />

                            <button
                                onClick={() => handleSendMessage()}
                                disabled={!inputValue.trim() || isTyping}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-villa-olive hover:bg-villa-olive/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white shadow-lg transition-all hover:scale-105 disabled:hover:scale-100"
                            >
                                {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            </button>
                        </div>

                        <div className="flex justify-center items-center mt-2 sm:mt-3">
                            <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                                Powered by <span className="text-villa-olive font-medium">Olivia Clara AI</span>
                                <Sparkles size={10} className="text-villa-olive/60" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OliviaClaraAIPremium;
