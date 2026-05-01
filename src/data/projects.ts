export interface Project {
  slug: string;
  title: string;
  type: string;
  tech: string[];
  summary: string;
  thumbnail: string;
  featured?: boolean;
  caseStudy: {
    heroImage: string;
    description: string;
    challenge: string;
    solution: string;
    results: string;
    externalLink: string;
  };
}

export const projects: Project[] = [
  {
    slug: "duhstore",
    title: "DuhStore",
    type: "E-commerce",
    tech: ["React", "Stripe", "Vite"],
    summary: "Tienda veloz con checkout en 3 pasos y catálogo administrable.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    caseStudy: {
      heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
      description: "DuhStore nació de la necesidad de democratizar el comercio digital para negocios emergentes, priorizando la velocidad de carga y la conversión.",
      challenge: "El cliente perdía el 60% de sus carritos debido a un proceso de pago lento y complejo en su plataforma anterior.",
      solution: "Implementamos un sistema de checkout en un solo paso con Stripe y una arquitectura de hidratación selectiva que redujo el LCP en un 70%.",
      results: "Incremento del 35% en ventas concretadas durante el primer mes y reducción del rebote en dispositivos móviles.",
      externalLink: "https://demo.duhstore.com"
    }
  },
  {
    slug: "novaerp",
    title: "NovaERP",
    type: "ERP a medida",
    tech: ["React", "NestJS", "MongoDB"],
    summary: "Gestión total de inventario y finanzas para PYMES industriales.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    caseStudy: {
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      description: "NovaERP es una solución robusta diseñada para centralizar procesos dispersos en hojas de cálculo hacia una plataforma web segura.",
      challenge: "Incoherencia de datos entre departamentos y pérdida de stock no registrado que costaba miles de dólares anuales.",
      solution: "Desarrollamos un motor de inventario en tiempo real con notificaciones push y reportes automatizados mediante NestJS.",
      results: "Control total del 100% del inventario y ahorro de 15 horas semanales en tareas administrativas manuales.",
      externalLink: "https://demo.novaerp.com"
    }
  },
  {
    slug: "educloud",
    title: "EduCloud",
    type: "EdTech",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    summary: "Plataforma de aprendizaje con analíticas avanzadas para docentes.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
    caseStudy: {
      heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
      description: "EduCloud redefine la interacción entre alumnos y profesores, permitiendo un seguimiento personalizado del progreso académico.",
      challenge: "Baja participación de los alumnos y dificultad de los profesores para identificar brechas de conocimiento en grupos grandes.",
      solution: "Creamos un panel de analíticas predictivas que identifica alumnos en riesgo y automatiza la entrega de material de refuerzo.",
      results: "Mejora del 20% en las calificaciones promedio y feedback positivo del 95% de los docentes usuarios.",
      externalLink: "https://demo.educloud.com"
    }
  }
];
