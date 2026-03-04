import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Image, Type, Sparkles, X, Plus, Upload, ArrowRight, History, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const placeholders = [
    "ADD IMAGES FOR RECOMMENDATIONS",
    "TEXT DESCRIPTION OF YOUR CLOTHES",
    "UPLOAD FIT TO FIND PERFECT PAIRS",
    "DESCRIBE YOUR STYLE VIBE"
];

function AISearchBar() {
    const [text, setText] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [placeholderText, setPlaceholderText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPersonalized, setIsPersonalized] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentFullText = placeholders[placeholderIndex];
        const typeSpeed = isDeleting ? 30 : 50;

        const timeout = setTimeout(() => {
            if (!isDeleting && placeholderText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && placeholderText === '') {
                setIsDeleting(false);
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
            } else {
                setPlaceholderText(
                    currentFullText.substring(0, placeholderText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [placeholderText, isDeleting, placeholderIndex]);

    const handleFileClick = () => fileInputRef.current?.click();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    const handleSearch = () => {
        if (text.trim() || files.length > 0) {
            navigate('/recommendations');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-16 relative z-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
            >
                {/* Premium Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C8A84B]/20 via-[#8B6914]/40 to-[#C8A84B]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative bg-[#0F0F0F]/90 backdrop-blur-3xl border border-white/10 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-1.5">
                    <div className="flex items-center gap-3 px-4 py-2.5">
                        <div className="flex-shrink-0">
                            <Sparkles size={16} className="text-[#C8A84B] animate-pulse" />
                        </div>

                        <div className="flex-grow relative">
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full bg-transparent border-none outline-none text-[#F5F2ED] font-mono text-[10px] tracking-[0.15em] uppercase placeholder:text-white/20"
                                placeholder={placeholderText}
                            />
                            <AnimatePresence>
                                {!text && !isDeleting && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute left-0 top-0 pointer-events-none w-px h-full bg-[#C8A84B] animate-caret"
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsPersonalized(!isPersonalized)}
                                className={`p-2 rounded-lg transition-all relative group/btn ${isPersonalized ? 'bg-[#C8A84B]/20 text-[#C8A84B]' : 'text-white/20 hover:text-white/40'}`}
                                title="Personalized History"
                            >
                                <History size={16} />
                                {isPersonalized && <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C8A84B] rounded-full animate-ping" />}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-[#C8A84B] text-[7px] font-black tracking-widest uppercase rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity border border-[#C8A84B]/20">Personalization: {isPersonalized ? 'ON' : 'OFF'}</span>
                            </button>

                            <button
                                onClick={handleFileClick}
                                className="p-2 rounded-lg hover:bg-white/5 text-white/20 hover:text-[#C8A84B] transition-all relative group/btn"
                                title="Add Images"
                            >
                                <Plus size={16} />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-[#C8A84B] text-[7px] font-black tracking-widest uppercase rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity border border-[#C8A84B]/20">IMAGE ANALYZER</span>
                            </button>

                            <button
                                onClick={handleSearch}
                                className="bg-[#C8A84B] hover:bg-white text-black px-4 py-2 rounded-lg font-sans text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 active:scale-95 group/search"
                            >
                                ANALYZE <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {/* File Preview Strip */}
                    <AnimatePresence>
                        {files.length > 0 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-white/5 mx-2 mt-1.5 pt-3 pb-3 px-3 overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-3">
                                    {files.map((file, i) => (
                                        <div key={i} className="relative group/thumb">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10">
                                                <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                                            </div>
                                            <button
                                                onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                                                className="absolute -top-1.5 -right-1.5 bg-black text-[#C8A84B] rounded-full p-1 opacity-0 group-hover/thumb:opacity-100 transition-opacity border border-white/10"
                                            >
                                                <X size={8} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={handleFileClick}
                                        className="w-12 h-12 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-white/10 hover:text-[#C8A84B] hover:border-[#C8A84B]/40 transition-all"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Premium Badge */}
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#8B6914] to-[#C8A84B] text-black px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xl skew-x-[-12deg] border border-black/10">
                    <Sparkles size={8} />
                    <span className="font-sans text-[7px] font-black uppercase tracking-tight">PREMIUM LAYER</span>
                </div>
            </motion.div>

            <div className="mt-6 flex justify-center gap-8 text-[#F5F2ED]/10 font-mono text-[7px] uppercase tracking-[0.4em]">
                <div className="flex items-center gap-1.5"><div className="w-1 h-1 bg-[#C8A84B] rounded-full" /> SYNTHESIS</div>
                <div className="flex items-center gap-1.5"><div className="w-1 h-1 bg-[#C8A84B] rounded-full" /> ANALYSIS</div>
                <div className="flex items-center gap-1.5"><div className="w-1 h-1 bg-[#C8A84B] rounded-full" /> PERSONALIZED</div>
            </div>
        </div>
    );
}

export { AISearchBar };
