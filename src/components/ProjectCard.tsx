import { motion } from "framer-motion";

export default function ProjectCard({
  title, type, image, tech, summary,
}: {
  title: string; type: string; image?: string; tech: string[]; summary?: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card group overflow-hidden">
      <div className="relative aspect-video rounded-xl bg-white/5 mb-4 overflow-hidden">
        {/* Reemplaza por <img src={image} .../> si tienes assets */}
        <div className="absolute inset-0 flex items-center justify-center subtle">Vista previa</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-xs px-2 py-1 rounded bg-white/10">{type}</span>
      </div>
      {summary && <p className="subtle text-sm mt-2">{summary}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
