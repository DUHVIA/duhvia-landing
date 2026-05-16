import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const chaoticParticles = [
  { x: [0, 12, -8, 14, -10, 0], y: [8, -15, 10, -12, -14, 8], duration: 4.2 },
  { x: [-10, 8, 15, -5, 12, -10], y: [-12, 10, -8, 14, -5, -12], duration: 5.1 },
  { x: [14, -12, 5, -15, 8, 14], y: [5, 14, -12, 8, -15, 5], duration: 3.8 },
  { x: [-15, 5, -12, 10, -8, -15], y: [12, -5, 15, -10, 8, 12], duration: 4.6 },
  { x: [8, 15, -10, 5, -12, 8], y: [-15, -8, 12, -5, 14, -15], duration: 5.5 },
  { x: [5, -14, 12, -8, 15, 5], y: [-8, 12, -15, 5, -10, -8], duration: 4.9 },
];

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState({ active: false, text: "" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, [data-cursor], .interactive") as HTMLElement | null;

      if (interactiveEl) {
        const customText = interactiveEl.getAttribute("data-cursor");

        if (customText) {
          setHoverState({ active: true, text: customText });
        } else if (interactiveEl.tagName.toLowerCase() === 'a' || interactiveEl.tagName.toLowerCase() === 'button') {
          setHoverState({ active: true, text: "" });
        } else {
          setHoverState({ active: true, text: "" });
        }
      } else {
        setHoverState({ active: false, text: "" });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{ x: cursorX, y: cursorY }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {chaoticParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px]"
            style={{ 
              backgroundColor: i % 2 === 0 ? "var(--color-primary-soft)" : "var(--color-accent)",
              boxShadow: `0 0 8px ${i % 2 === 0 ? "var(--color-primary-soft)" : "var(--color-accent)"}`
            }}
            animate={{
              x: hoverState.active ? p.x.map(v => v * 1.8) : p.x,
              y: hoverState.active ? p.y.map(v => v * 1.8) : p.y,
              scale: hoverState.active ? 2 : 1,
              opacity: hoverState.active ? 1 : 0.4,
            }}
            transition={{
              x: { duration: p.duration, repeat: Infinity, ease: "easeInOut" },
              y: { duration: p.duration * 1.2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
              opacity: { duration: 0.3 }
            }}
          />
        ))}
      </div>

      {/* Custom Text Tooltip */}
      <AnimatePresence>
        {hoverState.text && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 24 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute px-3 py-1.5 bg-[var(--color-surface)]/80 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[10px] font-bold rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(26,230,200,0.2)] whitespace-nowrap backdrop-blur-md"
          >
            {hoverState.text}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

