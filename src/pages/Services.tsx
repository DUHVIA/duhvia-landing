import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";
import ImageShowcase from "../components/ImageShowcase";
import { services } from "../data/services";
import { Link } from "react-router-dom";

/** Mapa de imágenes (colócalas en /public/services/) */
const serviceImages: Record<string, string> = {
  "Desarrollo Web de Alto Impacto": "/services/web-dev.png",
  "E-commerce que Convierte": "/services/ecommerce.png",
  "Plataformas & ERP a Medida": "/services/platform.png",
  "Contenido TikTok & RRSS": "/services/tiktok.png",
  "Branding & UX/UI": "/services/branding.png",
  "Estrategia & Growth": "/services/growth.png",
};

export default function Services() {
  return (
    <section className="section py-12 md:py-16 space-y-16">
      {/* ===== HERO SERVICIOS ===== */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="badge mb-4">Soluciones DUHVIA</div>
          <h1 className="h1 leading-tight">
            Servicios pensados para <span className="text-accent">acelerar</span> tu presencia digital con{" "}
            <span className="text-primary">resultado real</span>.
          </h1>
          <p className="subtle mt-4 text-lg">
            Combinamos tecnología, diseño y estrategia para construir sitios ultra rápidos, e-commerce que convierten,
            plataformas a medida y contenido nativo para redes. Todo con un proceso claro y enfocado en valor.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#combos" className="btn btn-primary">Ver combos</a>
            <Link to="/contacto" className="btn btn-secondary">Cuéntanos tu idea</Link>
          </div>
        </motion.div>

        {/* Collage / héroe visual */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ImageShowcase src={serviceImages["Desarrollo Web de Alto Impacto"]} alt="Desarrollo Web" />
          <ImageShowcase src={serviceImages["E-commerce que Convierte"]} alt="E-commerce" />
          <ImageShowcase src={serviceImages["Contenido TikTok & RRSS"]} alt="Contenido TikTok" />
          <ImageShowcase src={serviceImages["Branding & UX/UI"]} alt="Branding UX/UI" />
        </motion.div>
      </div>

      {/* ===== GRID DE SERVICIOS (con imagen + card) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Todo lo que necesitas en un solo lugar"
          subtitle="Tecnología, diseño y creatividad bajo un mismo estándar de calidad."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ImageShowcase src={s.src} alt={s.title} />
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== TIMELINE / PROCESO ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          title="Nuestro proceso"
          subtitle="Transparente, iterativo y orientado a métricas."
        />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Exploración", d: "Entendemos objetivos y contexto. Diagnóstico + mapa de oportunidades." },
            { n: "02", t: "Propuesta", d: "Alcance, plazos, stack y KPIs. Alineamos expectativas antes de construir." },
            { n: "03", t: "Construcción", d: "Diseño + desarrollo iterativo. Demos semanales y feedback continuo." },
            { n: "04", t: "Lanzamiento & Growth", d: "Despliegue, medición, hipótesis y experimentos de mejora." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="badge">{step.n}</div>
              <h4 className="mt-3 font-semibold">{step.t}</h4>
              <p className="subtle mt-1">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== COMPARATIVA RÁPIDA ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Comparativa rápida"
          subtitle="Elige el enfoque ideal según tu objetivo."
        />

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-surface)]/30 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-white/50">Objetivo</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-white/50">Recomendado</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-white/50">Por qué</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="group hover:bg-white/[0.03] transition-colors duration-300">
                  <td className="p-6 font-medium text-lg text-white/90">Validar idea / captar leads</td>
                  <td className="p-6 font-bold text-[var(--color-accent)]">Landing + Branding esencial</td>
                  <td className="p-6 text-[var(--color-subtle)] leading-relaxed">Rápido de lanzar, claro, con formularios y analítica.</td>
                </tr>
                <tr className="group hover:bg-white/[0.03] transition-colors duration-300">
                  <td className="p-6 font-medium text-lg text-white/90">Vender productos</td>
                  <td className="p-6 font-bold text-[var(--color-accent)]">E-commerce Pro</td>
                  <td className="p-6 text-[var(--color-subtle)] leading-relaxed">Checkout optimizado, pagos, catálogo y automatizaciones.</td>
                </tr>
                <tr className="group hover:bg-white/[0.03] transition-colors duration-300">
                  <td className="p-6 font-medium text-lg text-white/90">Optimizar operación interna</td>
                  <td className="p-6 font-bold text-[var(--color-accent)]">Plataforma a medida / ERP</td>
                  <td className="p-6 text-[var(--color-subtle)] leading-relaxed">Modela tus procesos y reportes, con roles y permisos.</td>
                </tr>
                <tr className="group hover:bg-white/[0.03] transition-colors duration-300">
                  <td className="p-6 font-medium text-lg text-white/90">Crecimiento orgánico</td>
                  <td className="p-6 font-bold text-[var(--color-accent)]">TikTok Growth</td>
                  <td className="p-6 text-[var(--color-subtle)] leading-relaxed">Guiones, edición, calendario y consistencia visual.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* ===== COMBOS / PRICING ===== */}
      <div id="combos">
        <SectionHeader
          title="Combos pensados para empezar bien"
          subtitle="Opciones claras para diferentes etapas de tu marca."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PricingCard
              tier="Launch Básico"
              price="S/ Consultar"
              features={[
                "Landing 1–2 secciones",
                "Branding esencial",
                "3 piezas para RRSS",
                "Formularios + analítica",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PricingCard
              tier="E-commerce Pro"
              price="S/ Consultar"
              highlight
              features={[
                "Tienda con carrito y pagos",
                "Catálogo + stock",
                "Email transaccional",
                "Automatizaciones básicas",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PricingCard
              tier="Plataforma a Medida"
              price="S/ Por alcance"
              features={[
                "Módulos según proceso",
                "Roles y permisos",
                "Reportes y KPIs",
                "Integraciones con APIs",
              ]}
            />
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contacto" className="btn btn-primary">Quiero una propuesta</Link>
        </motion.div>
      </div>

      {/* ===== GALERÍA / SHOWCASE ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          title="Showcase visual"
          subtitle="Algunos contextos donde nuestras soluciones brillan."
        />
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ImageShowcase src={serviceImages["E-commerce que Convierte"]} alt="Tienda online" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ImageShowcase src={serviceImages["Plataformas & ERP a Medida"]} alt="Plataforma a medida" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ImageShowcase src={serviceImages["Desarrollo Web de Alto Impacto"]} alt="Web corporativa" />
          </motion.div>
        </div>
      </motion.div>

      {/* ===== CTA FINAL ===== */}
      <motion.div
        className="card text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="h2">¿Listo para construir algo increíble?</h3>
        <p className="subtle mt-3">
          Escríbenos y cuéntanos tu idea. Te respondemos con una ruta clara de ejecución y resultados.
        </p>
        <Link to="/contacto" className="btn btn-primary mt-6">Hablemos hoy</Link>
      </motion.div>
    </section>
  );
}
