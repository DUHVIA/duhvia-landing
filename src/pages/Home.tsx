import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import LogosMarquee from "../components/LogosMarquee";
import StatsStrip from "../components/StatsStrip";
import TestimonialSlider from "../components/TestimonialSlider";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative gradient-hero border-b border-white/5 overflow-hidden">
        <div className="glow glow--primary" />
        <div className="glow glow--secondary" />
        <div className="section py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="max-w-3xl"
          >
            <span className="badge mb-4">Arequipa, Perú • Latinoamérica</span>
            <h1 className="h1 leading-tight">
              DUHVIA: <span className="text-accent">innovación digital</span> que convierte ideas en <span className="text-primary">experiencias</span>.
            </h1>
            <p className="subtle mt-6 text-lg">
              Creamos sitios web ultra rápidos, plataformas a medida y contenido TikTok que conecta con audiencias reales.
              Tecnología + Diseño + Estrategia = Resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn btn-primary">¡Quiero iniciar mi proyecto!</Link>
              <Link to="/portafolio" className="btn btn-secondary">Ver portafolio</Link>
            </div>
          </motion.div>

          <div className="mt-16">
            <LogosMarquee />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section py-16">
        <SectionHeader
          title="Soluciones que impulsan tu marca"
          subtitle="Tecnología, diseño y creatividad en un solo lugar."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} />
          ))}
        </div>
        <StatsStrip />
      </section>

      {/* PROCESO */}
      <section className="section py-16">
        <SectionHeader title="Nuestro proceso" subtitle="Simple, ágil y enfocado en valor." />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Exploración", d: "Diagnóstico, objetivos y mapa de oportunidades." },
            { n: "02", t: "Propuesta", d: "Alcance claro, plazos y KPIs de éxito." },
            { n: "03", t: "Construcción", d: "Diseño + desarrollo iterativo, demos semanales." },
            { n: "04", t: "Despliegue & Growth", d: "Lanzamiento, métricas y experimentos de mejora." },
          ].map(step => (
            <div key={step.n} className="card">
              <div className="badge">{step.n}</div>
              <h4 className="mt-3 font-semibold">{step.t}</h4>
              <p className="subtle mt-1">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="section py-16">
        <SectionHeader
          title="Proyectos destacados"
          subtitle="Una muestra del impacto que podemos crear juntos."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} title={p.title} type={p.type} tech={p.tech} summary={p.summary} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/portafolio" className="btn btn-primary">Ver todo el portafolio</Link>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section py-16">
        <SectionHeader title="Clientes y comunidad" subtitle="Historias reales, resultados reales." />
        <TestimonialSlider items={testimonials} />
      </section>

      {/* CTA FINAL */}
      <section className="section py-20">
        <div className="card text-center relative overflow-hidden">
          <div className="glow glow--primary" style={{ top: -80, left: '50%' }} />
          <h3 className="h2">¿Listo para llevar tu marca al siguiente nivel?</h3>
          <p className="subtle mt-3">
            Cuéntanos tu idea y te proponemos una solución clara, creativa y medible.
          </p>
          <Link to="/contacto" className="btn btn-primary mt-6">Hablemos hoy</Link>
        </div>
      </section>
    </>
  );
}
