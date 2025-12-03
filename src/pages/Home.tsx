import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import LogosMarquee from "../components/LogosMarquee";
import StatsStrip from "../components/StatsStrip";
import SectorCarousel from "../components/SectorCarousel";
import { services } from "../data/services";
import { processSteps } from "../data/process";
import { benefits } from "../data/benefits";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { socialLinks } from "../data/socials";

export default function Home() {
  return (
    <>
      {/* ============== HERO (INTACTO) ============== */}
      <section className="relative gradient-hero border-b border-white/5 overflow-hidden">
        <div className="glow glow--primary"></div>
        <div className="glow glow--secondary"></div>
        <div className="glow glow--neutral"></div>

        <div className="section py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="badge mb-4">Arequipa, Perú • Latinoamérica</span>

            <h1 className="hero-title">
              <span className="relative inline-block">
                DUHVIA:
                <span className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-soft)] -z-10 animate-pulse"></span>
              </span>{" "}
              <span className="text-gradient">Soluciones tecnológicas</span> y estrategia digital de alto <span className="text-glow">impacto</span>.
            </h1>

            <p className="subtle mt-6 text-lg leading-relaxed">
              Especialistas en desarrollo de software a medida, plataformas web de alto rendimiento y posicionamiento de marca en canales digitales modernos.
              <span className="block mt-1">
                Ingeniería de software robusta, diseño funcional y estrategia escalable.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn btn-primary">
                Agendar una consultoría
              </Link>
              <Link to="/portafolio" className="btn btn-secondary">
                Ver portafolio
              </Link>
            </div>

            {/* Redes Sociales Hero */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-sm font-medium text-white/60">Síguenos:</span>
              <div className="flex gap-3">
                {[socialLinks.tiktok, socialLinks.facebook, socialLinks.instagram].map((social) => {
                  const Icon = (social as any).Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:scale-110 hover:border-[var(--color-accent)]"
                      aria-label={social.name}
                    >
                      {"iconPath" in social ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-white/80 transition-colors group-hover:text-[var(--color-accent)]"
                        >
                          <path d={(social as any).iconPath} />
                        </svg>
                      ) : (
                        Icon && (
                          <Icon
                            size={20}
                            className="text-white/80 transition-colors group-hover:text-[var(--color-accent)]"
                          />
                        )
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="mt-16">
            <LogosMarquee />
          </div>
        </div>
      </section>

      {/* ============== CONTENIDO GLOBAL (fondo unificado) ============== */}
      <div className="relative overflow-hidden">
        {/* Fondo global dinámico suave */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_20%_20%,rgba(141,127,255,0.12),transparent),radial-gradient(60%_80%_at_80%_30%,rgba(26,230,200,0.12),transparent)]" />
        <div className="absolute inset-0 -z-20 blur-3xl opacity-25 bg-[conic-gradient(from_180deg,var(--color-primary),var(--color-accent),transparent)] animate-[spin_60s_linear_infinite]" />

        {/* ============== SERVICIOS ============== */}
        <section className="section py-20">
          <SectionHeader
            title="Soluciones que impulsan tu marca"
            subtitle="Tecnología, diseño y creatividad en un solo lugar."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  bullets={s.bullets}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <StatsStrip />
          </div>
        </section>

        {/* ============== PROCESO (timeline) ============== */}
        <section className="section py-20 relative">
          <SectionHeader
            title="Nuestro proceso"
            subtitle="Una línea clara hacia resultados excepcionales."
          />
          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)] opacity-40" />
            <div className="grid md:grid-cols-2 gap-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`relative bg-[var(--color-surface)]/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgb(0_0_0/0.3)] ${i % 2 === 0 ? "md:mr-20" : "md:ml-20"
                    }`}
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]" />
                  <div className="text-sm font-bold text-[var(--color-accent)]">
                    Paso {step.n}
                  </div>
                  <h4 className="mt-1 font-semibold text-lg">{step.t}</h4>
                  <p className="subtle mt-2">{step.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== IMPACTO POR SECTOR ============== */}
        <section className="section pb-8 pt-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Impacto por Sector"
              subtitle="Soluciones especializadas que entienden tu negocio."
            />
          </motion.div>

          <div className="mt-12">
            <SectorCarousel />
          </div>
        </section>

        {/* ============== CTA FINAL  ============== */}
        <section className="relative overflow-hidden py-24 -mt-10">
          <div className="section relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Bloque principal */}
              <div className="rounded-3xl p-8 md:p-10 bg-[var(--color-surface)]/65 backdrop-blur border border-white/10 shadow-[0_16px_48px_rgb(0_0_0/0.35)]">
                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  ¿Listo para impresionar a tus clientes{" "}
                  <span className="text-gradient">desde la primera visita</span>?
                </h3>
                <p className="subtle mt-3 text-[15px]">
                  Diseñamos experiencias que combinan velocidad, claridad y marca.
                  Tú enfócate en el negocio —nosotros en convertir visitas en resultados.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                  {benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 rounded-xl p-3 bg-[var(--color-surface-2)]/35 border border-white/10"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                      <span className="opacity-90">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 text-xs opacity-80">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]" />
                  <span>
                    Garantía de satisfacción: iteramos contigo hasta que quede 🔥
                  </span>
                </div>
              </div>

              {/* Bloque lateral */}
              <div className="rounded-3xl p-[1px] relative">
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-[conic-gradient(from_180deg,var(--color-primary),var(--color-accent),transparent)]" />
                <div className="rounded-3xl p-8 md:p-10 bg-[var(--color-surface)]/60 backdrop-blur border border-white/10">
                  <h4 className="text-xl font-bold">¿No sabes por dónde empezar?</h4>
                  <p className="subtle mt-2 text-sm">
                    Te guiamos con una llamada breve. Revisamos objetivos, referencias y te damos una ruta clara con tiempos y estimaciones.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl p-4 bg-[var(--color-surface-2)]/40 border border-white/10 text-sm">
                      <div className="font-medium">Diagnóstico express (30 min)</div>
                      <div className="opacity-80">Zoom/Meet • Sin compromiso</div>
                    </div>
                    <div className="rounded-xl p-4 bg-[var(--color-surface-2)]/40 border border-white/10 text-sm">
                      <div className="font-medium">Propuesta con KPIs</div>
                      <div className="opacity-80">Alcance, tiempos y roadmap</div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link to="/contacto" className="btn btn-primary flex-1 text-center">
                      Agendar llamada
                    </Link>
                    <Link to="/portafolio" className="btn btn-secondary flex-1 text-center">
                      Ver casos y estilos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============== BOTÓN “VOLVER ARRIBA” ============== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-6 z-50 p-3 rounded-full text-[var(--color-bg)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-[0_0_20px_var(--color-accent)] transition hover:scale-110"
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
