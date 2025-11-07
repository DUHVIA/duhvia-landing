import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets?: string[];
}) {
  const Icon = icon;
  return (
    <motion.div
      className="card"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      <div className="mb-4 floater">
        <Icon className="w-9 h-9" style={{ color: "var(--color-accent)" }} />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="subtle mt-2">{desc}</p>
      {bullets?.length ? (
        <ul className="text-sm mt-3 space-y-1 text-white/80 list-disc pl-5">
          {bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      ) : null}
    </motion.div>
  );
}
