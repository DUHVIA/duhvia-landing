import { 
  Hotel, 
  ShoppingBag, 
  Rocket, 
  GraduationCap, 
  Stethoscope, 
  Home, 
  Utensils, 
  Truck, 
  HardHat, 
  Scale 
} from 'lucide-react';

export const sectors = [
    // --- LOS 3 ORIGINALES ---
    {
        icon: <Hotel className="text-[var(--color-accent)]" size={32} />,
        title: "Sector Hotelero",
        desc: "Centralizamos la gestión de reservas y automatizamos el contacto con huéspedes, permitiendo que el staff se enfoque en la atención y no en el excel."
    },
    {
        icon: <ShoppingBag className="text-[var(--color-accent)]" size={32} />,
        title: "Retail & E-commerce",
        desc: "Transformamos catálogos físicos en tiendas digitales sincronizadas, diseñadas para recuperar carritos abandonados y facilitar el pago seguro."
    },
    {
        icon: <Rocket className="text-[var(--color-accent)]" size={32} />,
        title: "Startups y MVP",
        desc: "Desarrollamos Productos Mínimos Viables (MVP) escalables para lanzar ideas al mercado rápido, validar hipótesis y atraer inversión."
    },

    // --- NUEVOS SECTORES ---
    {
        icon: <GraduationCap className="text-[var(--color-accent)]" size={32} />,
        title: "Educación (EdTech)",
        desc: "Plataformas de gestión académica y aulas virtuales estables. Facilitamos la matrícula digital y el seguimiento del alumno."
    },
    {
        icon: <Stethoscope className="text-[var(--color-accent)]" size={32} />,
        title: "Salud y Clínicas",
        desc: "Sistemas de agendamiento de citas y digitalización de historias. Seguridad de datos para médicos y facilidad de uso para pacientes."
    },
    {
        icon: <Home className="text-[var(--color-accent)]" size={32} />,
        title: "Inmobiliaria",
        desc: "Portales de propiedades con filtros avanzados y mapas. CRM integrado para gestionar prospectos y acelerar el cierre de ventas."
    },
    {
        icon: <Utensils className="text-[var(--color-accent)]" size={32} />,
        title: "Restaurantes (HORECA)",
        desc: "Menús digitales, sistemas de comandas a cocina (KDS) y gestión de delivery propio para reducir comisiones de terceros."
    },
    {
        icon: <Truck className="text-[var(--color-accent)]" size={32} />,
        title: "Logística y Transporte",
        desc: "Paneles de control para seguimiento de flotas en tiempo real y sistemas de gestión de inventarios para almacenes."
    },
    {
        icon: <HardHat className="text-[var(--color-accent)]" size={32} />,
        title: "Construcción e Industria",
        desc: "Intranets corporativas para el control de personal en obra, reportes de seguridad diarios y gestión de proveedores."
    },
    {
        icon: <Scale className="text-[var(--color-accent)]" size={32} />,
        title: "Legal y Consultoría",
        desc: "Gestión documental segura y portales de clientes. Automatización de contratos y seguimiento de expedientes en la nube."
    }
];