import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface SearchLoadingProps {
    onComplete: () => void;
}

export function SearchLoading({ onComplete }: SearchLoadingProps) {
    const [progress, setProgress] = useState(0);

    const messages = [
        "AI curating something special...",
        "Analyzing your style resonance...",
        "Synthesizing the sacred archive...",
        "Predicting your next identity...",
        "Filtering the niche for you..."
    ];
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 300);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(messageInterval);
                    setTimeout(onComplete, 200);
                    return 100;
                }
                // Very fast progress for search
                const increment = Math.random() * 40 + 10;
                return prev + increment;
            });
        }, 100);

        return () => {
            clearInterval(progressInterval);
            clearInterval(messageInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12"
        >
            <motion.div
                animate={{
                    scale: [0.98, 1.02, 0.98],
                    opacity: [0.9, 1, 0.9]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl md:text-6xl font-branding leopard-permanent tracking-[0.1em] sacred-glow"
            >
                AI SEARCH
            </motion.div>

            <div className="flex flex-col items-center gap-6">
                <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="h-full bg-[#C8A84B]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={messageIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-white/40"
                    >
                        {messages[messageIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
