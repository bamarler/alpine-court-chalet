import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface GradientRevealTextProps {
  texts: readonly string[];
  interval?: number;
  className?: string;
}

export default function GradientRevealText({
  texts,
  interval = 3500,
  className = "",
}: GradientRevealTextProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex] ?? "";

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Invisible text for layout */}
          <span className="invisible">{currentText}</span>

          {/* Gradient mask text - reveals from left */}
          <motion.span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, white var(--reveal-pos), transparent var(--reveal-pos))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            initial={{ "--reveal-pos": "0%" } as Record<string, string>}
            animate={{ "--reveal-pos": "100%" } as Record<string, string>}
            exit={{ "--reveal-pos": "0%" } as Record<string, string>}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {currentText}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
