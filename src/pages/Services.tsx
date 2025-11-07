import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";
import ImageShowcase from "../components/ImageShowcase";
import { services } from "../data/services";
import { Link } from "react-router-dom";

/** Mapa de imágenes (colócalas en /public/services/) */
const serviceImages: Record<string, string> = {
  "Desarrollo Web de Alto Impacto": "/services/web-dev.jpg",
  "E-commerce que Convierte": "/services/ecommerce.jpg",
  "Plataformas & ERP a Medida": "/services/platform.jpg",
  "Contenido TikTok & RRSS": "/services/tiktok.jpg",
  "Branding & UX/UI": "/services/branding.jpg",
  "Estrategia & Growth": "/services/growth.jpg",
};

export default function Services() {
  return (
    <section className="section py-12 md:py-16 space-y-16">
      {/* ===== HERO SERVICIOS ===== */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
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
        </div>

        {/* Collage / héroe visual */}
        <div className="grid grid-cols-2 gap-4">
          <ImageShowcase src={serviceImages["Desarrollo Web de Alto Impacto"]} alt="Desarrollo Web" />
          <ImageShowcase src={serviceImages["E-commerce que Convierte"]} alt="E-commerce" />
          <ImageShowcase src={serviceImages["Contenido TikTok & RRSS"]} alt="Contenido TikTok" />
          <ImageShowcase src={serviceImages["Branding & UX/UI"]} alt="Branding UX/UI" />
        </div>
      </div>

      {/* ===== GRID DE SERVICIOS (con imagen + card) ===== */}
      <div>
        <SectionHeader
          title="Todo lo que necesitas en un solo lugar"
          subtitle="Tecnología, diseño y creatividad bajo un mismo estándar de calidad."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-4">
              <ImageShowcase src={serviceImages[s.title]} alt={s.title} />
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== TIMELINE / PROCESO ===== */}
      <div>
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
          ].map(step => (
            <div key={step.n} className="card">
              <div className="badge">{step.n}</div>
              <h4 className="mt-3 font-semibold">{step.t}</h4>
              <p className="subtle mt-1">{step.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== COMPARATIVA RÁPIDA ===== */}
      <div>
        <SectionHeader
          title="Comparativa rápida"
          subtitle="Elige el enfoque ideal según tu objetivo."
        />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="th">Objetivo</th>
                <th className="th">Recomendado</th>
                <th className="th">Por qué</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td">Validar idea / captar leads</td>
                <td className="td">Landing + Branding esencial</td>
                <td className="td">Rápido de lanzar, claro, con formularios y analítica.</td>
              </tr>
              <tr>
                <td className="td">Vender productos</td>
                <td className="td">E-commerce Pro</td>
                <td className="td">Checkout optimizado, pagos, catálogo y automatizaciones.</td>
              </tr>
              <tr>
                <td className="td">Optimizar operación interna</td>
                <td className="td">Plataforma a medida / ERP</td>
                <td className="td">Modela tus procesos y reportes, con roles y permisos.</td>
              </tr>
              <tr>
                <td className="td">Crecimiento orgánico</td>
                <td className="td">TikTok Growth</td>
                <td className="td">Guiones, edición, calendario y consistencia visual.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== COMBOS / PRICING ===== */}
      <div id="combos">
        <SectionHeader
          title="Combos pensados para empezar bien"
          subtitle="Opciones claras para diferentes etapas de tu marca."
        />
        <div className="grid md:grid-cols-3 gap-6">
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
        </div>
        <div className="text-center mt-8">
          <Link to="/contacto" className="btn btn-primary">Quiero una propuesta</Link>
        </div>
      </div>

      {/* ===== GALERÍA / SHOWCASE ===== */}
      <div>
        <SectionHeader
          title="Showcase visual"
          subtitle="Algunos contextos donde nuestras soluciones brillan."
        />
        <div className="grid md:grid-cols-3 gap-4">
          <ImageShowcase src={serviceImages["E-commerce que Convierte"]} alt="Tienda online" />
          <ImageShowcase src={serviceImages["Plataformas & ERP a Medida"]} alt="Plataforma a medida" />
          <ImageShowcase src={serviceImages["Desarrollo Web de Alto Impacto"]} alt="Web corporativa" />
        </div>
      </div>

      {/* ===== CTA FINAL ===== */}
      <div className="card text-center">
        <h3 className="h2">¿Listo para construir algo increíble?</h3>
        <p className="subtle mt-3">
          Escríbenos y cuéntanos tu idea. Te respondemos con una ruta clara de ejecución y resultados.
        </p>
        <Link to="/contacto" className="btn btn-primary mt-6">Hablemos hoy</Link>
      </div>
    </section>
  );
}
