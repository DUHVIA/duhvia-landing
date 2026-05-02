import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Server, ShieldCheck, Database, ArrowRight, Code2, Cpu, BarChart3, Layers, Globe, ArrowUpRight, Plus, Minus, CheckCircle2, Search, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Magnetic from "../components/Magnetic";

const pipeline = [
  {
    step: "01",
    title: "Discovery & Auditoría Técnica",
    description: "No escribimos código sin entender el negocio. Analizamos tu infraestructura actual, mapeamos cuellos de botella operativos y definimos KPIs técnicos claros (latencia, carga concurrente).",
    businessValue: "Evita retrabajos costosos. Garantiza que la solución tecnológica resuelva problemas reales de la operación, no solo síntomas.",
    icon: Search,
  },
  {
    step: "02",
    title: "Arquitectura & Diseño de Sistemas",
    description: "Modelamos la base de datos (ERD), diseñamos la topología Cloud en AWS y establecemos contratos de API. Diseñamos para soportar hipercrecimiento (10x) usando patrones de microservicios o monolitos modulares según el contexto.",
    businessValue: "Elimina la deuda técnica desde el día cero. Un sistema bien diseñado nunca colapsará bajo picos de ventas o transacciones masivas.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Desarrollo Nativo & DevSecOps",
    description: "Construimos el núcleo del sistema mediante Sprints iterativos. Implementamos integración continua (CI/CD) y protocolos Zero Trust. Cada módulo incluye pruebas unitarias automatizadas para garantizar resiliencia.",
    businessValue: "Entregas predecibles y seguras. El código no se rompe al integrar nuevas funcionalidades, protegiendo la información crítica de la empresa.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing de Estrés & QA",
    description: "Sometemos la plataforma a simulaciones de carga extremas y análisis de vulnerabilidades (SAST/DAST). Validamos la experiencia de usuario (UX) garantizando fricción cero en flujos críticos.",
    businessValue: "Cero fallos en producción. Tus usuarios y empleados adoptarán la plataforma inmediatamente porque simplemente funciona rápido y sin errores.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Despliegue & Integración (Go-Live)",
    description: "Migramos bases de datos legacy sin pérdida de información (Zero-Downtime Deployment). Sincronizamos el nuevo ecosistema con tus herramientas actuales (ERP, pasarelas de pago, CRMs).",
    businessValue: "Transición operativa transparente. Tu negocio no se detiene ni un segundo mientras actualizamos todo el núcleo tecnológico.",
    icon: Server,
  },
  {
    step: "06",
    title: "Monitoreo, Escalabilidad & SLA",
    description: "El lanzamiento es solo el inicio. Implementamos telemetría avanzada para detectar anomalías antes que tus usuarios. Escalamos la infraestructura automáticamente según la demanda.",
    businessValue: "Tranquilidad absoluta. Uptime del 99.9% garantizado, permitiéndote enfocarte en hacer crecer la empresa mientras nosotros blindamos la tecnología.",
    icon: Activity,
  }
];

const techStackRow1 = ["Kotlin", "Python", "React", "PostgreSQL", "TypeScript", "Node.js", "Docker", "AWS", "Redis", "ElasticSearch"];
const techStackRow2 = ["Django", "Figma", "GraphQL", "Kubernetes", "Next.js", "MongoDB", "Terraform", "Swift", "Tailwind", "Kafka"];

const faqs = [
  {
    q: "¿Asumen el rescate de sistemas legacy ineficientes?",
    a: "Sí. Realizamos una auditoría arquitectónica profunda. Si el monolito actual es un riesgo, ejecutamos el Patrón Strangler: reemplazamos módulos críticos progresivamente sin detener la operación de tu empresa."
  },
  {
    q: "¿Quién retiene la propiedad intelectual (IP) y el código fuente?",
    a: "Tu empresa, siempre. Al finalizar las fases de desarrollo, el 100% del código fuente, repositorios, y la Infraestructura como Código (IaC) se transfiere a tus credenciales. No utilizamos licencias oscuras de retención."
  },
  {
    q: "¿Qué sucede después del lanzamiento a producción?",
    a: "Pasamos a la fase de SLA (Service Level Agreement). Implementamos monitoreo 24/7, parches de seguridad automatizados y optimización de base de datos para asegurar el 99.9% de uptime garantizado."
  }
];

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-steel)]/20 py-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-xl font-bold transition-colors pr-8 ${isOpen ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)] group-hover:text-[var(--color-primary-soft)]'}`}>{q}</span>
        <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[var(--color-accent)] text-[var(--color-bg)] rotate-180' : 'bg-[var(--color-surface)] border border-[var(--color-steel)]/20 text-[var(--color-text)] group-hover:bg-[var(--color-text)] group-hover:text-[var(--color-bg)]'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-6 pb-2 subtle text-lg leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const leadership = [
  {
    role: "Arquitectura & Backend",
    focus: "Sistemas Distribuidos",
    desc: "Garantizamos que la base técnica no se quiebre bajo presión comercial."
  },
  {
    role: "Producto & UX Strategy",
    focus: "Lógica Operativa",
    desc: "Traducimos operaciones complejas en interfaces de adopción inmediata."
  },
  {
    role: "Cloud & DevSecOps",
    focus: "Infraestructura",
    desc: "Despliegues automatizados, monitoreo 24/7 y seguridad de grado bancario."
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-32 pb-20 overflow-hidden relative selection:bg-[var(--color-primary)] selection:text-[var(--color-text)]">

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0,transparent_60%)] rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-1/3 -translate-y-1/3"
      />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,var(--color-accent)_0,transparent_50%)] rounded-full blur-[150px] pointer-events-none opacity-20 -translate-x-1/2 translate-y-1/2" />

      <section className="section relative z-10 mb-32 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="badge bg-[var(--color-surface)]/50 backdrop-blur-md mb-10 px-5 py-2.5 shadow-[0_0_30px_rgba(255,255,255,0.05)] border-[var(--color-steel)]/20 uppercase tracking-[0.2em]"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
            </div>
            <span className="text-[var(--color-primary)] font-black text-[10px]">NUESTRO ADN</span>
          </motion.div>

          <div className="mb-8 flex flex-col gap-2">
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.9]"
              >
                <span className="text-white">Ingeniería</span> <span className="text-white/90">sin</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.9]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                  margen de error.
                </span>
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl subtle leading-relaxed max-w-4xl font-medium"
          >
            Somos un escuadrón técnico de élite. No tercerizamos, no usamos plantillas y no experimentamos con tu presupuesto. Construimos software para empresas que simplemente no pueden fallar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <Magnetic>
              <Link to="/contacto" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(109,85,255,0.2)]">
                Agendar Diagnóstico Técnico <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      <section className="section relative z-20 mb-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] p-[1px] overflow-hidden bg-gradient-to-b from-[var(--color-steel)]/40 to-transparent"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 blur-xl"></div>
          <div className="relative bg-[var(--color-surface)]/80 backdrop-blur-2xl rounded-[40px] py-16 px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

            <div className="flex flex-col gap-4 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-2/3 md:after:w-px md:after:bg-gradient-to-b md:after:from-transparent md:after:via-[var(--color-steel)]/30 md:after:to-transparent">
              <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-text)] to-[var(--color-subtle)]">
                <AnimatedCounter from={0} to={99} suffix=".9%" />
              </span>
              <span className="text-[var(--color-primary-soft)] font-bold text-xl uppercase tracking-widest">Uptime Cloud</span>
              <p className="text-sm subtle leading-relaxed pr-8">Monitorización 24/7. Infraestructura distribuida diseñada para mitigar fallos catastróficos instantáneamente.</p>
            </div>

            <div className="flex flex-col gap-4 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-2/3 md:after:w-px md:after:bg-gradient-to-b md:after:from-transparent md:after:via-[var(--color-steel)]/30 md:after:to-transparent pl-0 md:pl-8">
              <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-text)] to-[var(--color-subtle)]">
                <AnimatedCounter from={0} to={40} suffix="+" />
              </span>
              <span className="text-[var(--color-text)] font-bold text-xl uppercase tracking-widest">Sistemas B2B</span>
              <p className="text-sm subtle leading-relaxed pr-8">ERPs, CRMs customizados y plataformas de logística con integración a hardware externo.</p>
            </div>

            <div className="flex flex-col gap-4 pl-0 md:pl-8">
              <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)]">
                <AnimatedCounter from={0} to={100} suffix="%" />
              </span>
              <span className="text-[var(--color-accent)] font-bold text-xl uppercase tracking-widest">Código Nativo</span>
              <p className="text-sm subtle leading-relaxed">Sin dependencias tóxicas. Código limpio, testeado y preparado para auditorías internacionales.</p>
            </div>

          </div>
        </motion.div>
      </section>

      <section className="section mb-40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm">El Status Quo</span>
              </div>
              <h2 className="h1 mb-8 leading-[1.1]">El software comercial detiene a los líderes.</h2>
              <div className="space-y-6 subtle text-lg leading-relaxed mb-10">
                <p>
                  Las empresas que lideran sus sectores no usan el mismo software que su competencia. Los ERPs de caja negra imponen restricciones operativas, creando procesos humanos manuales para compensar las deficiencias del sistema.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">Nosotros hackeamos esa barrera.</strong> En DUHVIA, auditar tu proceso de negocio es el paso 1. Luego construimos una plataforma a medida que no solo se adapta a ti, sino que automatiza, acelera y proyecta tu capacidad de ejecución.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative h-full">
            <motion.div
              style={{ y: yParallax }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border border-[var(--color-steel)]/20 bg-[var(--color-surface)] p-8 lg:p-12 shadow-[0_0_100px_rgba(109,85,255,0.1)] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]"></div>

              <div className="relative z-10 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[var(--color-surface-2)]/50 border border-[var(--color-steel)]/30 p-6 rounded-2xl flex items-start gap-4 backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text)] font-bold mb-1">ERPs Comerciales</h4>
                    <p className="subtle text-sm">Estructura rígida. Licencias costosas por usuario. Límite de escalabilidad.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-surface)] border border-[var(--color-primary)]/40 p-6 rounded-2xl flex items-start gap-4 backdrop-blur-md shadow-[0_0_30px_rgba(109,85,255,0.2)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(109,85,255,0.5)]">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[var(--color-text)] font-bold">DUHVIA Custom Core</h4>
                      <span className="badge border-none !bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] px-2 py-0.5">SOLUCIÓN</span>
                    </div>
                    <p className="text-[var(--color-text)]/80 text-sm">Arquitectura de microservicios. Propiedad absoluta. Crecimiento ilimitado.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="section mb-40">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-[12px] uppercase tracking-[0.5em] text-[var(--color-primary-soft)] font-black mb-6">Pipeline de Ejecución</h2>
          <h3 className="h1 mb-6">Ingeniería sin improvisación.</h3>
          <p className="text-xl subtle">Un estándar de trabajo inflexible de 6 fases. Desde la concepción arquitectónica hasta el monitoreo de infraestructura en producción.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[28px] md:left-[44px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-steel)]/30 to-transparent" />
          
          <div className="flex flex-col gap-12">
            {pipeline.map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="relative pl-20 md:pl-32 group"
              >
                <div className="absolute left-[8px] md:left-[24px] top-2 w-10 h-10 md:w-10 md:h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-steel)]/30 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-text)] group-hover:border-[var(--color-primary)] transition-all duration-500 shadow-[0_0_0_10px_var(--color-bg)] z-10">
                  <item.icon size={18} />
                </div>
                
                <div className="card hover:border-[var(--color-steel)]/50 transition-all duration-300">
                  <div className="flex flex-wrap items-end gap-4 mb-6 border-b border-[var(--color-steel)]/10 pb-6">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-steel)]/40 to-transparent leading-none">
                      {item.step}
                    </span>
                    <h4 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary-soft)] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest subtle font-bold mb-3">Qué hacemos</p>
                      <p className="subtle leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className="bg-[var(--color-surface-2)]/30 border border-[var(--color-steel)]/10 p-5 rounded-xl">
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold mb-3 flex items-center gap-2">
                        <Activity size={12} /> Impacto en el Negocio
                      </p>
                      <p className="text-[var(--color-text)]/90 text-sm leading-relaxed font-medium">{item.businessValue}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-y border-[var(--color-steel)]/20 bg-[var(--color-surface)]/30 relative overflow-hidden flex flex-col gap-8 mb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0,transparent_70%)] opacity-[0.03] pointer-events-none"></div>

        <div className="text-center mb-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-subtle)] font-black">Powered by Enterprise Technology</h2>
        </div>

        <div className="marquee w-full hover:[&_.marquee__inner]:[animation-play-state:paused]">
          {Array.from({ length: 20 }).map((_, blockIdx) => (
            <div key={`block1-${blockIdx}`} className="marquee__inner shrink-0" aria-hidden={blockIdx !== 0}>
              {techStackRow1.map((tech, i) => (
                <div key={`r1-${blockIdx}-${i}`} className="badge text-xl font-bold subtle px-8 py-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] hover:scale-110 transition-all cursor-default">
                  <CheckCircle2 size={18} className="opacity-50" /> {tech}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="marquee w-full hover:[&_.marquee__inner]:[animation-play-state:paused]" style={{ direction: "rtl" }}>
          {Array.from({ length: 20 }).map((_, blockIdx) => (
            <div key={`block2-${blockIdx}`} className="marquee__inner shrink-0" aria-hidden={blockIdx !== 0} style={{ animationDirection: "reverse" }}>
              {techStackRow2.map((tech, i) => (
                <div key={`r2-${blockIdx}-${i}`} className="badge text-xl font-bold subtle px-8 py-4 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent)] hover:scale-110 transition-all cursor-default" style={{ direction: "ltr" }}>
                  <CheckCircle2 size={18} className="opacity-50" /> {tech}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-[12px] uppercase tracking-[0.5em] text-[var(--color-accent)] font-black mb-6">Core Team</h2>
            <h3 className="h1 mb-8">No delegamos el cerebro de tu proyecto.</h3>
            <p className="text-xl subtle leading-relaxed mb-10">
              Nuestros líderes no son gerentes de cuenta; son ingenieros activos. Supervisan personalmente la arquitectura, seguridad y calidad del código de cada despliegue que realizamos.
            </p>
            <Link to="/portafolio" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 text-[var(--color-text)] font-bold pb-2 border-b-2 border-[var(--color-primary)] hover:gap-5 hover:text-[var(--color-primary-soft)] transition-all">
              Conoce nuestro trabajo <ArrowRight size={20} />
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:border-[var(--color-steel)]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h4 className="h2 group-hover:text-[var(--color-accent)] transition-colors">{leader.role}</h4>
                  <span className="badge group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/20 transition-colors">
                    {leader.focus}
                  </span>
                </div>
                <p className="subtle text-lg leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mb-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 mb-12 text-center">F.A.Q. B2B</h2>
          <div className="border-t border-[var(--color-steel)]/20">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center pb-20">
        <div className="card relative py-32 px-8 overflow-hidden group border-[var(--color-primary)]/30 shadow-[0_0_100px_rgba(109,85,255,0.15)]">
          <div className="absolute inset-0 bg-[var(--color-bg)] z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--color-primary)_0,transparent_60%)] opacity-30 group-hover:opacity-60 transition-opacity duration-700 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0 mix-blend-overlay"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-[var(--color-text)]">Tu próxima gran escala empieza aquí.</h2>
            <p className="text-2xl subtle mb-12 leading-relaxed">
              Reserva una auditoría arquitectónica. En 45 minutos analizaremos tu infraestructura actual y trazaremos el roadmap de ingeniería para los próximos 5 años.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Magnetic>
                <Link
                  to="/contacto"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn btn-secondary px-12 py-6 rounded-full text-xl font-black hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
                >
                  Agendar Sesión Técnica <ArrowUpRight size={24} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
