import { motion } from 'motion/react';

/**
 * Shared Interactive Text Component for word-by-word effects
 */
export const InteractiveText = ({
    text,
    className = "",
    wordClassName = "",
    hoverEffect = "gold", // "leopard" or "gold"
    permanentEffect = false, // If true, apply the effect permanently (for leopard)
    delay = 0,
    centered = true
}: {
    text: string,
    className?: string,
    wordClassName?: string,
    hoverEffect?: "leopard" | "gold",
    permanentEffect?: boolean,
    delay?: number,
    centered?: boolean
}) => {
    const words = text.split(' ');

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className={`flex flex-wrap ${centered ? 'justify-center' : 'justify-start'} ${className}`}
        >
            {words.map((word, i) => {
                // Robust detection: SSacred anywhere (case-insensitive) OR "count" in the philosophy context
                const lowerWord = word.toLowerCase().replace(/[^a-z]/g, '');
                const isLeopardText = lowerWord === "ssacred" || (lowerWord === "count" && text.toLowerCase().includes("make them"));
                const shouldBePermanent = permanentEffect || isLeopardText;

                return (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: {
                                    duration: 0.4,
                                    delay: delay + (i * 0.03),
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }
                        }}
                        whileHover={{
                            scale: 1.15,
                            color: hoverEffect === "gold" ? "#C8A84B" : undefined,
                            transition: { duration: 0.2 }
                        }}
                        className={`mr-[0.25em] inline-block cursor-default transition-all duration-300 ${shouldBePermanent ? "leopard-permanent" :
                            (hoverEffect === "leopard" ? "hover-leopard" : "")
                            } ${wordClassName}`}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};
