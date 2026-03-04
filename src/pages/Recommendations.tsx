import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Sparkles,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Plus,
    Edit2,
    RefreshCw,
    Layers,
    Maximize2,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Futuristic Product Interface
const RecommendedItem: React.FC<{ item: any; delay: number }> = ({ item, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group aspect-[3/4] overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-2xl"
        >
            <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-[2000ms]"
                animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? 'blur(2px) grayscale(0.5)' : 'blur(0px) grayscale(0)' }}
            />

            {/* Glassmorphism Detail Overlay */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/20 to-transparent backdrop-blur-[2px]"
                    >
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
                            <h3 className="font-branding text-xl text-white mb-1 uppercase tracking-wider">{item.name}</h3>
                            <p className="font-mono text-[9px] text-[#C8A84B] mb-4 tracking-[0.2em]">{item.brand}</p>

                            <div className="flex gap-2">
                                <button className="flex-grow bg-white text-black py-2 rounded-lg font-sans text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#C8A84B] transition-colors">
                                    <Plus size={12} /> ADD TO WARDROBE
                                </button>
                                <button className="w-10 h-10 bg-white/10 text-white flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors">
                                    <Maximize2 size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Fit Score */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#C8A84B]/30 px-3 py-1 rounded-full">
                <span className="font-mono text-[8px] font-black text-[#C8A84B] tracking-[0.1em]">FIT MATCH: {item.match}%</span>
            </div>
        </motion.div>
    );
};

export default function Recommendations() {
    const [selectedLook, setSelectedLook] = useState(0);

    const looks = [
        {
            title: "CARGO UTILITY CORE",
            description: "A calculated blend of tactical pieces and oversized streetwear for the urban rebel.",
            model: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
            items: [
                { name: "Brutalist Raw Jacket", brand: "RAWCRAFT", img: "/products/jacket_brutalist_raw.png", match: 98 },
                { name: "Cargo Drifter Pants", brand: "GRIDLOCK", img: "/products/pants_cargo_drifter.png", match: 94 },
                { name: "Tactical Canvas Tote", brand: "RAWCRAFT", img: "/products/bag_tactical_canvas_tote.png", match: 96 }
            ]
        },
        {
            title: "OVERSIZED STREET EDIT",
            description: "Heavy structures meeting boxy silhouettes. A monolithic approach to Gen Z dressing.",
            model: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
            items: [
                { name: "Chaos Knit Sweater", brand: "VENOM INK", img: "/products/sweater_chaos_knit.png", match: 92 },
                { name: "Acid Wash Hoodie", brand: "RAWCRAFT", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800&auto=format&fit=crop", match: 89 },
                { name: "Layered Bead Necklace", brand: "MOTH & SILK", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop", match: 97 }
            ]
        }
    ];

    return (
        <div className="bg-[#050505] min-h-screen pt-32 pb-40 px-6 overflow-hidden">
            {/* Back Navigation */}
            <div className="max-w-[1400px] mx-auto mb-12">
                <Link to="/wardrobes" className="inline-flex items-center gap-3 text-white/40 hover:text-[#C8A84B] transition-colors group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C8A84B]/40">
                        <ChevronLeft size={18} />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-black tracking-widest">BACK TO WARDROBES</span>
                </Link>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Visual Section: The "Model" View */}
                <div className="relative aspect-[3/4] lg:aspect-square group">
                    {/* Futuristic Scanning UI Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#C8A84B]/40" />
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#C8A84B]/40" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#C8A84B]/40" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C8A84B]/40" />

                        {/* Scanning Line Animation */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A84B] to-transparent shadow-[0_0_20px_#C8A84B]"
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLook}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full rounded-2xl overflow-hidden grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000 border border-white/10"
                        >
                            <img src={looks[selectedLook].model} alt="Look model" className="w-full h-full object-cover" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons for Looks */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                        <button
                            onClick={() => setSelectedLook((prev) => (prev === 0 ? looks.length - 1 : prev - 1))}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-[#C8A84B] hover:text-black transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setSelectedLook((prev) => (prev === looks.length - 1 ? 0 : prev + 1))}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-[#C8A84B] hover:text-black transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Content Section: AI Interpretation */}
                <div className="flex flex-col gap-12">
                    <header>
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles size={16} className="text-[#C8A84B]" />
                            <span className="font-mono text-[10px] font-black text-[#C8A84B] tracking-[0.4em] uppercase">AI SYNTHESIS COMPLETE</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={selectedLook}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-7xl font-branding text-white mb-6 uppercase leading-none"
                            >
                                {looks[selectedLook].title}
                            </motion.h1>
                        </AnimatePresence>
                        <p className="font-sans text-white/40 text-sm max-w-lg leading-relaxed tracking-wide">
                            {looks[selectedLook].description}
                        </p>
                    </header>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {looks[selectedLook].items.map((item, idx) => (
                            <RecommendedItem key={idx} item={item} delay={0.2 + idx * 0.1} />
                        ))}
                    </div>

                    <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-6">
                        <button className="flex-grow bg-[#C8A84B] hover:bg-white text-black py-5 rounded-2xl font-sans text-xs font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 active:scale-95 group shadow-[0_0_40px_-10px_#C8A84B]">
                            GENERATE ALL <CheckCircle2 size={18} />
                        </button>
                        <button className="flex-grow border border-white/10 hover:border-[#C8A84B] text-white py-5 rounded-2xl font-sans text-xs font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 hover:bg-white/5 group">
                            CUSTOM DESIGN <Edit2 size={18} className="text-[#C8A84B]" />
                        </button>
                    </div>

                    <div className="flex items-center gap-6 opacity-20">
                        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-white">
                            <RefreshCw size={12} className="animate-spin text-[#C8A84B]" /> OPTIMIZING ARCHIVE
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-white">
                            <Layers size={12} className="text-[#C8A84B]" /> VIRTUAL ASSETS LOADED
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
