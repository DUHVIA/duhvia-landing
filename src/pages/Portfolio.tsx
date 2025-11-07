import { useMemo, useState } from "react";
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
    <section className="section py-16">
      <SectionHeader
        title="Portafolio"
        subtitle="Casos reales y demos que muestran nuestro estándar de calidad."
      />

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {types.map(t => (
          <button key={t}
            className={`badge ${filter === t ? "bg-white/20" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.title} title={p.title} type={p.type} tech={p.tech} summary={p.summary} />
        ))}
      </div>
    </section>
  );
}
