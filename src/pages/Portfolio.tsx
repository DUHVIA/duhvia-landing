import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

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
      className="section py-16"
    >
      <SectionHeader
        title="Portafolio"
        subtitle="Diseño bento de alta precisión. Cada bloque cuenta una historia de ingeniería."
      />

      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {types.map(t => (
          <button 
            key={t}
            onClick={() => setFilter(t)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
              filter === t 
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
              className={`${
                p.featured 
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
