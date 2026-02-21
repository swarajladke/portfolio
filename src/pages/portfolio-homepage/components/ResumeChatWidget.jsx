import React, { useState, useRef, useEffect, useCallback } from 'react';
import Icon from '../../../components/AppIcon';

const VITE_URL = import.meta.env.VITE_CHAT_API_URL;
const CHAT_API_URL = VITE_URL ? (VITE_URL.endsWith('/') ? VITE_URL.slice(0, -1) : VITE_URL) : 'http://localhost:8000';

const ResumeChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showPulse, setShowPulse] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const scrollContainerRef = useRef(null);

    // Welcome message
    const welcomeMessage = {
        role: 'assistant',
        content:
            "👋 Hi! I'm Swaraj's AI assistant. Ask me anything about his skills, projects, certifications, or experience. I'll answer based on his professional resume!",
    };

    // Fetch suggestions on mount
    useEffect(() => {
        fetch(`${CHAT_API_URL}/api/suggestions`)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setSuggestions(data.suggestions || []);
            })
            .catch((err) => {
                console.error('🤖 Resume AI: Failed to load suggestions:', err.message);
                setSuggestions([
                    "What are Swaraj's top skills?",
                    'Tell me about his projects',
                    'What certifications does he have?',
                ]);
            });
    }, []);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, isLoading]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
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

            setMessages((prev) => [...prev, userMessage]);
            setIsLoading(true);

            const history = [...messages, userMessage]
                .filter((m) => m.role !== 'system')
                .map((m) => ({ role: m.role, content: m.content }));

            fetch(`${CHAT_API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: history.slice(0, -1) }),
            })
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                    return res.json();
                })
                .then((data) => {
                    setMessages((prev) => [
                        ...prev,
                        { role: 'assistant', content: data.reply },
                    ]);
                })
                .catch((err) => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            role: 'assistant',
                            content:
                                `Sorry, I'm having trouble connecting to the AI. (Error: ${err.message}). Please reach out to Swaraj at swarajladke20@gmail.com`,
                        },
                    ]);
                })
                .finally(() => setIsLoading(false));

            setInput('');
        },
        [messages]
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

    const renderContent = (text) => {
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, i) => {
            let processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
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
            processed = processed.replace(
                /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
            );
            return (
                <span
                    key={i}
                    className="block leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: processed }}
                />
            );
        });
    };

    return (
        <>
            {/* Custom Styles for Scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .chat-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .chat-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0, 191, 255, 0.2);
                    border-radius: 10px;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 191, 255, 0.4);
                }
                @keyframes slideInUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .message-anim {
                    animation: slideInUp 0.3s ease-out forwards;
                }
                .glass-card {
                    background: rgba(13, 16, 37, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
            ` }} />

            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:shadow-[0_0_50px_rgba(0,191,255,0.5)] group overflow-hidden"
                style={{
                    background: isOpen
                        ? 'linear-gradient(135deg, #FF3366, #FF6B6B)'
                        : 'linear-gradient(135deg, #00BFFF, #0080FF)',
                }}
            >
                {showPulse && !isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary" />
                )}
                <div className="relative z-10 transition-transform duration-500 group-hover:rotate-12">
                    <Icon
                        name={isOpen ? 'X' : 'MessageCircle'}
                        size={26}
                        className="text-white"
                    />
                </div>
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div
                    className="fixed bottom-24 right-6 z-[99] w-[400px] max-w-[calc(100vw-32px)] flex flex-col animate-scale-in"
                    style={{
                        height: 'min(620px, calc(100vh - 140px))',
                    }}
                >
                    <div className="flex flex-col h-full rounded-3xl overflow-hidden glass-card border border-white/10 shadow-[0_0_80px_rgba(0,191,255,0.15)] ring-1 ring-white/10">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0 bg-white/[0.03]">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-white p-0.5 shadow-lg">
                                        <div className="w-full h-full bg-[#0d1025] rounded-[14px] flex items-center justify-center">
                                            <Icon name="Cpu" size={20} className="text-primary animate-pulse" />
                                        </div>
                                    </div>
                                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-[3px] border-[#0d1025] shadow-lg shadow-emerald-500/20" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-80">AI Core Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={clearChat}
                                    className="w-8 h-8 flex items-center justify-center rounded-xl text-white/40 hover:text-white/90 hover:bg-white/10 transition-all duration-300"
                                    title="Clear Data"
                                >
                                    <Icon name="Trash2" size={16} />
                                </button>
                                <button
                                    onClick={toggleChat}
                                    className="w-8 h-8 flex items-center justify-center rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
                                >
                                    <Icon name="Minus" size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area - Scrolling Fixed */}
                        <div
                            ref={scrollContainerRef}
                            className="flex-1 overflow-y-auto px-6 py-6 space-y-6 chat-scrollbar pointer-events-auto select-text"
                            style={{
                                scrollBehavior: 'smooth',
                            }}
                        >
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start gap-3 message-anim ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20 shadow-lg">
                                            <Icon name="Bot" size={14} className="text-primary" />
                                        </div>
                                    )}
                                    <div
                                        className={`group relative max-w-[85%] px-5 py-3.5 text-sm leading-relaxed transition-all duration-300 ${msg.role === 'user'
                                                ? 'bg-gradient-to-br from-primary/30 to-accent/20 text-white rounded-[22px] rounded-tr-none border border-primary/30 ml-auto shadow-[0_5px_15px_rgba(0,191,255,0.1)]'
                                                : 'bg-white/5 text-white/90 rounded-[22px] rounded-tl-none border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)]'
                                            }`}
                                    >
                                        {renderContent(msg.content)}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex items-start gap-3 message-anim">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                        <Icon name="Bot" size={14} className="text-primary" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 px-5 py-4 rounded-[22px] rounded-tl-none flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom Bar: Suggestions + Input */}
                        <div className="p-6 pt-0 space-y-4 bg-gradient-to-t from-[#0d1025] to-transparent">
                            {messages.length <= 1 && suggestions.length > 0 && (
                                <div className="flex flex-wrap gap-2 animate-fade-in pointer-events-auto">
                                    {suggestions.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSuggestionClick(s)}
                                            disabled={isLoading}
                                            className="text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 active:scale-95 transition-all duration-200 disabled:opacity-50"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="relative flex items-center gap-2 pointer-events-auto"
                            >
                                <div className="flex-1 relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Command center..."
                                        disabled={isLoading}
                                        className="relative w-full h-12 bg-[#080a1a] text-sm text-white placeholder-white/20 rounded-2xl px-5 outline-none border border-white/10 transition-all duration-300 focus:border-primary/50 disabled:opacity-50"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 disabled:opacity-20 flex-shrink-0 group relative overflow-hidden"
                                    style={{
                                        background: input.trim()
                                            ? 'linear-gradient(135deg, #00BFFF, #0080FF)'
                                            : 'rgba(255,255,255,0.05)',
                                    }}
                                >
                                    <Icon
                                        name="SendHorizonal"
                                        size={20}
                                        className={`text-white transition-transform duration-300 ${input.trim() ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`}
                                    />
                                </button>
                            </form>
                            <p className="text-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium">
                                Secured Neural Bridge Powered by Groq
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResumeChatWidget;
