import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

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
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
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
      className="fixed top-0 left-0 w-4 h-4 bg-[var(--color-primary)] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: hoverState.text ? 4 : hoverState.active ? 1.8 : 1,
        opacity: hoverState.active ? 1 : 0.6,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <AnimatePresence>
        {hoverState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-[3px] font-bold text-black uppercase tracking-widest"
          >
            {hoverState.text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

