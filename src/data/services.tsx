import { Code2, ShoppingCart, Layers, Video, Wand2, ChartSpline } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets?: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desarrollo Web de Alto Impacto",
    desc: "Sitios ultra rápidos, accesibles y con SEO técnico. Performance, arquitectura limpia y escalabilidad.",
    bullets: ["Landing & corporativos", "Micro-sitios de campaña", "Web apps con autenticación", "Integraciones (APIs, CRM)"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce que Convierte",
    desc: "Tiendas con carrito, pagos seguros y analítica. Catálogo administrable y experiencia de compra impecable.",
    bullets: ["Checkout optimizado", "Integración pasarelas (Culqi/Stripe)", "Catálogo y stock", "Email transaccional"]
  },
  {
    icon: Layers,
    title: "Plataformas & ERP a Medida",
    desc: "Sistemas personalizados: gestión, e-learning, intranets. Modelamos procesos reales y automatizamos tareas.",
    bullets: ["Tableros y permisos", "Workflows y notificaciones", "Reportes y KPIs", "Escalabilidad cloud"]
  },
  {
    icon: Video,
    title: "Contenido TikTok & RRSS",
    desc: "Estrategia, guiones y producción para crecimiento orgánico. Formatos nativos y consistencia visual.",
    bullets: ["Calendario editorial", "Análisis de tendencias", "Edición pro (shorts/reels)", "Brand voice"]
  },
  {
    icon: Wand2,
    title: "Branding & UX/UI",
    desc: "Identidad con propósito + interfaces claras. Diseñamos experiencias memorables GUI/UX.",
    bullets: ["Logo y sistema visual", "Design system", "Prototipos interactivos", "Pruebas de usabilidad"]
  },
  {
    icon: ChartSpline,
    title: "Estrategia & Growth",
    desc: "Ruta de crecimiento: auditoría, métricas, experimentación. Hipótesis, test A/B y aprendizaje continuo.",
    bullets: ["Diagnóstico inicial", "Mapa de oportunidades", "OKRs y KPIs", "Iteración de experimentos"]
  },
];
