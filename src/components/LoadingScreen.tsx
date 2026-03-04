import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  const messages = [
    "Curating your universe...",
    "Handpicking rebel brands...",
    "Styling your identity...",
    "The leopard is loading...",
    "Building your wardrobe..."
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        // Faster increments for snappier feel
        const increment = prev < 55 ? 25 : prev < 80 ? 14 : prev < 95 ? 8 : 3;
        return prev + Math.random() * increment;
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center gap-8"
    >
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="text-6xl font-branding leopard-permanent tracking-[0.14em] sacred-glow"
      >
        SSacred
      </motion.div>

      <div className="w-64 h-[2px] bg-[#1C1C1C] relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#5C3D0A] via-[#8B6914] to-[#C8A84B]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.span
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#888880]"
        >
          {messages[messageIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
