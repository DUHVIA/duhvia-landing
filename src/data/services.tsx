import { Code2, ShoppingCart, Layers, Video, Wand2, ChartSpline } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import webDevImg from '../assets/services/web-dev-cor.png';
import comEleImg from '../assets/services/com-ele.png';
import gesMedImg from '../assets/services/ges-med.png';
import canDigImg from '../assets/services/can-dig.png';
import uiUxImg from '../assets/services/ui-ux.png';
import consTecImg from '../assets/services/cons-tec.png';

export type Service = {
  icon: LucideIcon;
  src: string;
  title: string;
  desc: string;
  bullets?: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    src: webDevImg,
    title: "Desarrollo Web Corporativo",
    desc: "Construcción de portales y aplicaciones web bajo estándares de seguridad y rendimiento. Arquitectura limpia orientada al mantenimiento.",
    bullets: ["Webs corporativas y Landings", "Desarrollo de Aplicaciones Web (SPA)", "Integración de APIs y CRM"]
  },
  {
    icon: ShoppingCart,
    title: "Soluciones de Comercio Electrónico",
    src: comEleImg,
    desc: "Implementación de canales de venta online seguros y funcionales. Gestión de pasarelas de pago y sincronización de inventarios.",
    bullets: ["Pasarelas de pago (Culqi/Stripe)", "Gestión de catálogo y stock", "Seguridad transaccional"]
  },
  {
    icon: Layers,
    src: gesMedImg,
    title: "Sistemas de Gestión a Medida",
    desc: "Digitalización de procesos operativos. Desar rollamos herramientas para la gestión de recursos, personal y flujos de trabajo específicos.",
    bullets: ["Automatización de procesos", "Control de roles y accesos", "Reportes y visualización de datos"]
  },
  {
    icon: Video, // Podrías cambiarlo por 'Share2' o 'MessageSquare' si 'Video' te parece muy informal
    src: canDigImg,
    title: "Gestión de Canales Digitales",
    desc: "Estrategia de comunicación digital alineada a la identidad de la marca. Producción de contenido audiovisual y gestión de comunidad.",
    bullets: ["Planificación de contenidos", "Producción audiovisual", "Gestión de comunidad y métricas"]
  },
  {
    icon: Wand2, // Sugerencia: Cambiar por 'PenTool' o 'Layout' para verse más técnico
    src: uiUxImg,
    title: "Diseño de Producto Digital (UI/UX)",
    desc: "Diseño de interfaces centrado en la usabilidad y la consistencia visual. Creación de sistemas de diseño para asegurar escalabilidad.",
    bullets: ["Prototipado interactivo", "Sistemas de diseño (Design Systems)", "Auditoría de usabilidad"]
  },
  {
    icon: ChartSpline,
    src: consTecImg,
    title: "Consultoría Tecnológica",
    desc: "Análisis y diagnóstico para la transformación digital. Identificamos cuellos de botella y proponemos la tecnología adecuada para resolverlos.",
    bullets: ["Diagnóstico de infraestructura", "Planificación de transformación digital", "Definición de KPIs técnicos"]
  }
];