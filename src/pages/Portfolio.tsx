import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Activity } from "lucide-react";

const types = ["Todos", ...Array.from(new Set(projects.map(p => p.type)))];

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");

  const list = useMemo(
    () => filter === "Todos" ? projects : projects.filter(p => p.type === filter),
    [filter]
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="mb-20 mt-12 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge mb-8 border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary-soft)] gap-2 flex items-center w-fit"
        >
          <Activity size={14} className="animate-pulse" /> TRACK RECORD
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
          {["Arquitectura", "validada", "en"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-white"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 + (3 * 0.15), ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-[var(--color-accent)] drop-shadow-[0_0_15px_rgba(26,230,200,0.3)]"
          >
            producción
          </motion.span>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 + (4 * 0.15), type: "spring", stiffness: 300, damping: 15 }}
            className="inline-block text-[var(--color-accent)] -ml-2"
          >
            .
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="subtle text-xl md:text-2xl max-w-3xl leading-relaxed"
        >
          Auditorías superadas, deuda técnica eliminada y millones de transacciones procesadas sin un solo segundo de downtime.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden mb-24 flex items-center"
      >
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        <div className="marquee w-full hover:[&_.marquee__inner]:[animation-play-state:paused]">
          {Array.from({ length: 20 }).map((_, blockIdx) => (
            <div 
              key={blockIdx} 
              className="marquee__inner shrink-0" 
              style={{ animationDuration: "40s", gap: "1rem", paddingRight: "1rem" }} 
              aria-hidden={blockIdx !== 0}
            >
              {projects.map((p, i) => (
                <div key={`set${blockIdx}-${i}`} className="w-72 h-44 shrink-0 rounded-2xl overflow-hidden relative group border border-white/10 bg-white/5">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  <div className="absolute bottom-4 left-5 z-20 flex items-center gap-2 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      {p.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${filter === t
              ? "bg-white border-white text-black"
              : "bg-white/5 border-white/10 hover:border-white/40 text-white/40 hover:text-white"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`${p.featured
                ? "md:col-span-4 md:row-span-2"
                : "md:col-span-2 md:row-span-1"
                }`}
            >
              <ProjectCard
                slug={p.slug}
                title={p.title}
                type={p.type}
                tech={p.tech}
                summary={p.summary}
                thumbnail={p.thumbnail}
                isBento={true}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
