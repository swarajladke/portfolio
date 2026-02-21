import React, { useState, useRef, useEffect, useCallback } from 'react';
import Icon from '../../../components/AppIcon';

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8000';

const ResumeChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showPulse, setShowPulse] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Welcome message
    const welcomeMessage = {
        role: 'assistant',
        content:
            "👋 Hi! I'm Swaraj's AI assistant. Ask me anything about his skills, projects, certifications, or experience. I'll answer based on his professional resume!",
    };

    // Fetch suggestions on mount
    useEffect(() => {
        fetch(`${CHAT_API_URL}/api/suggestions`)
            .then((res) => res.json())
            .then((data) => setSuggestions(data.suggestions || []))
            .catch(() =>
                setSuggestions([
                    "What are Swaraj's top skills?",
                    'Tell me about his projects',
                    'What certifications does he have?',
                ])
            );
    }, []);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setShowPulse(false);
        }
    }, [isOpen]);

    // Stop flashing after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowPulse(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    const sendMessage = useCallback(
        async (text) => {
            const userMessage = { role: 'user', content: text };

            setMessages((prev) => {
                const updated = [...prev, userMessage];
                // Send to API
                setIsLoading(true);

                const history = updated
                    .filter((m) => m.role !== 'system')
                    .map((m) => ({ role: m.role, content: m.content }));

                fetch(`${CHAT_API_URL}/api/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text, history: history.slice(0, -1) }),
                })
                    .then((res) => {
                        if (!res.ok) throw new Error('API error');
                        return res.json();
                    })
                    .then((data) => {
                        setMessages((prev) => [
                            ...prev,
                            { role: 'assistant', content: data.reply },
                        ]);
                    })
                    .catch(() => {
                        setMessages((prev) => [
                            ...prev,
                            {
                                role: 'assistant',
                                content:
                                    "Sorry, I'm having trouble connecting right now. Please try again or reach out to Swaraj directly at swarajladke20@gmail.com",
                            },
                        ]);
                    })
                    .finally(() => setIsLoading(false));

                return updated;
            });

            setInput('');
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        sendMessage(input.trim());
    };

    const handleSuggestionClick = (suggestion) => {
        sendMessage(suggestion);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen && messages.length === 0) {
            setMessages([welcomeMessage]);
        }
    };

    const clearChat = () => {
        setMessages([welcomeMessage]);
    };

    // Simple markdown-like rendering
    const renderContent = (text) => {
        if (!text) return null;
        // Split by newlines first
        const lines = text.split('\n');
        return lines.map((line, i) => {
            // Bold
            let processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            // Bullet points
            if (processed.startsWith('- ') || processed.startsWith('• ')) {
                processed = `<span class="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span><span>${processed.slice(2)}</span>`;
                return (
                    <div
                        key={i}
                        className="flex items-start ml-2 my-0.5"
                        dangerouslySetInnerHTML={{ __html: processed }}
                    />
                );
            }
            // Links
            processed = processed.replace(
                /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
            );
            return (
                <span
                    key={i}
                    dangerouslySetInnerHTML={{ __html: processed + (i < lines.length - 1 ? '<br/>' : '') }}
                />
            );
        });
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
                style={{
                    background: isOpen
                        ? 'linear-gradient(135deg, #FF3366, #FF6B6B)'
                        : 'linear-gradient(135deg, #00BFFF, #0080FF)',
                    boxShadow: isOpen
                        ? '0 0 25px rgba(255, 51, 102, 0.4), 0 4px 15px rgba(0,0,0,0.3)'
                        : '0 0 25px rgba(0, 191, 255, 0.4), 0 4px 15px rgba(0,0,0,0.3)',
                }}
                aria-label={isOpen ? 'Close chat' : 'Chat with AI'}
            >
                {showPulse && !isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary" />
                )}
                <Icon
                    name={isOpen ? 'X' : 'MessageCircle'}
                    size={24}
                    className="text-white transition-transform duration-300 group-hover:scale-110"
                />
            </button>

            {/* Tooltip */}
            {!isOpen && (
                <div className="fixed bottom-[88px] right-6 z-[60] hidden md:block animate-fade-in pointer-events-none">
                    <div className="bg-[#111827] border border-primary/30 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                        💬 Chat with my resume AI
                        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-[#111827] border-r border-b border-primary/30 transform rotate-45" />
                    </div>
                </div>
            )}

            {/* Chat Panel */}
            {isOpen && (
                <div
                    className="fixed bottom-24 right-6 z-[55] w-[380px] max-w-[calc(100vw-32px)] flex flex-col animate-scale-in"
                    style={{
                        height: 'min(560px, calc(100vh - 140px))',
                    }}
                >
                    <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,191,255,0.1),0_20px_60px_rgba(0,0,0,0.5)]"
                        style={{ background: 'linear-gradient(180deg, #0d1025 0%, #080810 100%)' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, rgba(0,191,255,0.08), rgba(0,128,255,0.05))' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                                        SL
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#00FF88] rounded-full border-2 border-[#0d1025]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white leading-tight">Resume AI</h3>
                                    <p className="text-[10px] text-primary/80 font-medium">Powered by Gemini</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={clearChat}
                                    className="p-1.5 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-200"
                                    title="Clear chat"
                                >
                                    <Icon name="RotateCcw" size={14} />
                                </button>
                                <button
                                    onClick={toggleChat}
                                    className="p-1.5 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-200"
                                    title="Minimize"
                                >
                                    <Icon name="Minus" size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div
                            className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(0,191,255,0.2) transparent',
                            }}
                        >
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0 border border-primary/20">
                                            <Icon name="Bot" size={14} className="text-primary" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-gradient-to-br from-primary/25 to-accent/20 text-white rounded-2xl rounded-br-md border border-primary/20'
                                            : 'bg-white/[0.04] text-white/90 rounded-2xl rounded-bl-md border border-white/[0.06]'
                                            }`}
                                    >
                                        {renderContent(msg.content)}
                                    </div>
                                </div>
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0 border border-primary/20">
                                        <Icon name="Bot" size={14} className="text-primary" />
                                    </div>
                                    <div className="bg-white/[0.04] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-md">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions (show only when few messages) */}
                        {messages.length <= 1 && suggestions.length > 0 && (
                            <div className="px-4 pb-3 flex-shrink-0">
                                <div className="flex flex-wrap gap-1.5">
                                    {suggestions.slice(0, 4).map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSuggestionClick(s)}
                                            disabled={isLoading}
                                            className="text-[11px] px-3 py-1.5 rounded-full bg-primary/[0.08] text-primary/80 border border-primary/15 hover:bg-primary/15 hover:text-primary hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form
                            onSubmit={handleSubmit}
                            className="px-4 pb-4 pt-2 border-t border-white/[0.06] flex-shrink-0"
                        >
                            <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl border border-white/[0.08] px-3 py-2 focus-within:border-primary/30 focus-within:shadow-[0_0_15px_rgba(0,191,255,0.08)] transition-all duration-300">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about Swaraj's resume..."
                                    disabled={isLoading}
                                    className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                                    style={{
                                        background: input.trim()
                                            ? 'linear-gradient(135deg, #00BFFF, #0080FF)'
                                            : 'transparent',
                                        boxShadow: input.trim()
                                            ? '0 0 12px rgba(0,191,255,0.3)'
                                            : 'none',
                                    }}
                                >
                                    <Icon name="Send" size={14} className="text-white" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResumeChatWidget;
