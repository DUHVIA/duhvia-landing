import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, BarChart3, ArrowRight } from "lucide-react";
import { useState } from "react";
import Magnetic from "../components/Magnetic";
import AnimatedCounter from "../components/AnimatedCounter";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  
  const [isExiting, setIsExiting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (!project) return <div className="py-20 text-center">Proyecto no encontrado.</div>;

  const handleLaunch = () => {
    setIsExiting(true);
    setTimeout(() => {
      window.open(project.caseStudy.externalLink, "_blank");
      setIsExiting(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white min-h-screen"
    >
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-primary)] z-[100] origin-left" style={{ scaleX }} />

      {isExiting && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          className="fixed inset-0 z-[100] bg-[var(--color-primary)] flex items-center justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-black">Explorando en vivo...</h2>
        </motion.div>
      )}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          src={project.thumbnail}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <Magnetic>
            <Link to="/portafolio" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors uppercase text-[10px] tracking-[0.3em] font-bold">
              <ArrowLeft size={14} /> Volver
            </Link>
          </Magnetic>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[10vw] font-black italic uppercase tracking-tighter leading-[0.8] mb-8"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-4">
            {project.tech.map((t, i) => (
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                key={t} 
                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-12 gap-20">
          <div className="md:col-span-7 space-y-32">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--color-primary)] mb-8 flex items-center gap-4">
                <ShieldCheck size={16} /> 01. El Desafío
              </h2>
              <p className="text-3xl md:text-4xl font-medium leading-tight text-white/90 italic">
                "{project.caseStudy.challenge}"
              </p>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--color-primary)] mb-8 flex items-center gap-4">
                <Zap size={16} /> 02. La Ingeniería
              </h2>
              <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
                {project.caseStudy.solution}
              </p>
            </section>

            <section className="grid grid-cols-2 gap-8">
               <div className="p-10 rounded-[40px] bg-white/5 border border-white/10">
                 <h3 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Mejora de Eficiencia</h3>
                 <div className="text-6xl font-black italic text-[var(--color-primary)]">
                    +<AnimatedCounter from={0} to={45} suffix="%" />
                 </div>
               </div>
               <div className="p-10 rounded-[40px] bg-white/5 border border-white/10">
                 <h3 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Satisfacción</h3>
                 <div className="text-6xl font-black italic text-[var(--color-primary)]">
                    <AnimatedCounter from={0} to={99} suffix="%" />
                 </div>
               </div>
            </section>
          </div>

          <aside className="md:col-span-5">
            <div className="sticky top-32 p-12 rounded-[50px] bg-[var(--color-surface)] border border-white/5 space-y-10">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Industria</h3>
                <p className="text-2xl font-black uppercase italic">{project.type}</p>
              </div>
              
              <p className="text-white/40 leading-relaxed">
                {project.caseStudy.description}
              </p>

              <Magnetic>
                <button
                  onClick={handleLaunch}
                  className="w-full h-20 rounded-full bg-[var(--color-primary)] text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Lanzar Demo <ExternalLink size={20} />
                  </span>
                  <motion.div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </Magnetic>
            </div>
          </aside>
        </div>
      </div>

      <section className="border-t border-white/5 pt-32 pb-60 px-6 text-center">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-12 font-black">Siguiente Caso</h3>
        <Link to={`/portafolio/${nextProject.slug}`} className="group inline-block">
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            className="text-[10vw] font-black italic uppercase tracking-tighter leading-none group-hover:text-[var(--color-primary)] transition-colors"
          >
            {nextProject.title}
          </motion.h2>
          <div className="flex justify-center mt-12">
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
               <ArrowRight size={32} />
            </div>
          </div>
        </Link>
      </section>
    </motion.div>
  );
}
