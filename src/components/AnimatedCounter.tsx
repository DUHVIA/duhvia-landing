import { useEffect, useRef } from "react";
import { animate, useInView, motion } from "framer-motion";

export default function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, suffix]);

  return <motion.span ref={nodeRef} className="tabular-nums" />;
}
