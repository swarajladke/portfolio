import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const VITE_URL = import.meta.env.VITE_CHAT_API_URL;
const CHAT_API_URL = VITE_URL ? (VITE_URL.endsWith('/') ? VITE_URL.slice(0, -1) : VITE_URL) : 'http://localhost:8000';

const TypingEffect = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 15);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [index, text, onComplete]);

    return <span>{displayedText}</span>;
};

const ResumeChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showPulse, setShowPulse] = useState(true);

    const scrollContainerRef = useRef(null);
    const inputRef = useRef(null);
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

    // Welcome message
    const welcomeMessage = {
        role: 'assistant',
        content: "👋 Hi! I'm Swaraj's AI assistant. Ask me anything about his skills, projects, or professional experience!",
        isTyping: false
    };

    // Fetch suggestions
    useEffect(() => {
        fetch(`${CHAT_API_URL}/api/suggestions`)
            .then(res => res.json())
            .then(data => setSuggestions(data.suggestions || []))
            .catch(() => setSuggestions(["Top skills?", "Experience?", "Projects?"]));
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    // Handle Voice Search (STT)
    const toggleListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        if (isListening) {
            setIsListening(false);
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            sendMessage(transcript);
        };

        recognition.start();
    };

    // Handle Text to Speech (TTS)
    const speak = (text) => {
        if (!synth) return;
        if (isSpeaking) {
            synth.cancel();
            setIsSpeaking(false);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        synth.speak(utterance);
    };

    const sendMessage = useCallback(async (text) => {
        if (!text.trim()) return;

        const userMessage = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${CHAT_API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: messages.slice(-5).map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply, isTyping: true }]);
        } catch (err) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm having a bit of trouble connecting to the AI hub. Please try again or reach out to Swaraj via LinkedIn!"
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(input);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen && messages.length === 0) {
            setMessages([welcomeMessage]);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl overflow-hidden group"
                style={{
                    background: isOpen
                        ? 'linear-gradient(135deg, #1e293b, #0f172a)'
                        : 'linear-gradient(135deg, #00BFFF, #0080FF)'
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                    >
                        <Icon name={isOpen ? 'X' : 'Bot'} size={28} className="text-white" />
                    </motion.div>
                </AnimatePresence>
                {showPulse && !isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-30" />
                )}
            </motion.button>

            {/* Main Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="fixed bottom-24 right-6 z-[99] w-[420px] max-w-[calc(100vw-32px)] flex flex-col glass-morphism rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
                        style={{ height: 'min(680px, calc(100vh - 140px))' }}
                    >
                        {/* Header */}
                        <div className="px-6 py-5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <Icon name="Cpu" size={20} className="text-primary animate-pulse" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#111827]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Neural Agent</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Quantum Ready</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setMessages([welcomeMessage])}
                                className="p-2.5 rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                                title="Refresh Memory"
                            >
                                <Icon name="RotateCcw" size={18} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div
                            ref={scrollContainerRef}
                            className="flex-1 overflow-y-auto px-5 py-6 space-y-5 chat-scrollbar scroll-smooth"
                        >
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2.5`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-1">
                                            <Icon name="Bot" size={14} className="text-primary" />
                                        </div>
                                    )}
                                    <div className={`relative max-w-[80%] px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed shadow-sm
                    ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-br-none shadow-primary/20'
                                            : 'bg-white/5 text-white/90 rounded-bl-none border border-white/10 whitespace-pre-wrap'}`}
                                    >
                                        {msg.role === 'assistant' && msg.isTyping ? (
                                            <TypingEffect
                                                text={msg.content}
                                                onComplete={() => {
                                                    const newMessages = [...messages];
                                                    newMessages[idx].isTyping = false;
                                                    setMessages(newMessages);
                                                }}
                                            />
                                        ) : (
                                            msg.content
                                        )}
                                        {msg.role === 'assistant' && !msg.isTyping && (
                                            <button
                                                onClick={() => speak(msg.content)}
                                                className={`absolute -right-10 bottom-0 p-1.5 rounded-full hover:bg-white/10 transition-all ${isSpeaking ? 'text-primary scale-110' : 'text-white/20'}`}
                                            >
                                                <Icon name={isSpeaking ? 'Volume2' : 'Volume1'} size={14} />
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Icon name="Bot" size={14} className="text-primary" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Overlay */}
                        <div className="p-6 pt-2 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/95 to-transparent">
                            {messages.length <= 1 && suggestions.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {suggestions.map((s, i) => (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            key={i}
                                            onClick={() => sendMessage(s)}
                                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/60 hover:text-primary hover:border-primary/30 transition-all"
                                        >
                                            {s}
                                        </motion.button>
                                    ))}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex items-center gap-3">
                                <div className="relative flex-1 group">
                                    <input
                                        ref={inputRef}
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about Swaraj..."
                                        className="w-full h-12 px-5 bg-white/5 border border-white/10 rounded-2xl text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleListening}
                                        className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all ${isListening ? 'text-primary bg-primary/10 scale-110 shadow-lg shadow-primary/20' : 'text-white/20 hover:text-white/50'}`}
                                    >
                                        <Icon name={isListening ? 'Mic' : 'MicOff'} size={18} />
                                    </button>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={!input.trim() || isLoading}
                                    className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white disabled:opacity-20 shadow-lg shadow-primary/20"
                                >
                                    <Icon name="Send" size={20} />
                                </motion.button>
                            </form>
                            <div className="mt-4 flex items-center justify-center gap-4 opacity-20 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Neural Bridge by Swaraj</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        .glass-morphism {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .chat-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 191, 255, 0.3);
        }
      `}} />
        </>
    );
};

export default ResumeChatWidget;
