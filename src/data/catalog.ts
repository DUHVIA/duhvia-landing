export interface CatalogFeature {
    name: string;
    detail: string;
}

export interface CatalogItem {
    id: string;
    title: string;
    description: string;
    category: 'development' | 'marketing';
    features: CatalogFeature[];
    whatsappMessage: string;
    pricing: {
        initial: number;
        discountPercent: number;
        rangeStart: number;
        rangeEnd: number;
        average: number;
    };
}

export const catalogItems: CatalogItem[] = [
    {
        id: "landing-express",
        title: "Landing Page Express",
        description: "La solución más rápida y efectiva para tener presencia profesional y captar clientes.",
        category: "development",
        features: [
            { name: "Diseño UX/UI Moderno", detail: "1 vista optimizada para celulares y conversión." },
            { name: "Captura de Leads", detail: "Formulario de contacto conectado directo a tu correo." },
            { name: "Velocidad", detail: "Carga ultrarrápida y optimización básica para Google (SEO)." },
            { name: "Llave en Mano", detail: "Incluye despliegue y configuración en tu dominio." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, vi su web y me interesa el servicio de *Landing Page Express* 🚀.

Quiero captar clientes rápido con una web profesional.
👤 *Mi Nombre:* 
🏢 *Mi Negocio:* 

¿Podrían indicarme los pasos para empezar?`,
        pricing: {
            initial: 1000,
            discountPercent: 35,
            rangeStart: 618,
            rangeEnd: 715,
            average: 650,
        },
    },
    {
        id: "web-corporativa",
        title: "Web Corporativa Pro",
        description: "Tu oficina digital abierta las 24 horas. Ideal para mostrar servicios y generar confianza.",
        category: "development",
        features: [
            { name: "Estructura Completa", detail: "Hasta 5 secciones (Inicio, Nosotros, Servicios, Contacto, etc.)." },
            { name: "Autoadministrable", detail: "Gestor de contenido (CMS) para que edites textos fácilmente." },
            { name: "Multidispositivo", detail: "Se adapta perfectamente a móviles, tablets y escritorio." },
            { name: "Escalable", detail: "Diseñada para crecer contigo en el futuro." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, quiero digitalizar mi empresa con el plan *Web Corporativa Pro* 💼.

Necesito transmitir confianza y tener presencia digital.
👤 *Mi Nombre:* 
📅 *Me gustaría agendar una breve reunión.*`,
        pricing: {
            initial: 1470,
            discountPercent: 35,
            rangeStart: 903,
            rangeEnd: 1045,
            average: 950,
        },
    },
    {
        id: "tienda-online",
        title: "Tienda Online (Start)",
        description: "Empieza a vender por internet con una plataforma propia y segura.",
        category: "development",
        features: [
            { name: "Pasarelas de Pago", detail: "Conexión lista con Culqi, Niubiz o MercadoPago." },
            { name: "Catálogo Inicial", detail: "Carga y configuración de tus primeros productos." },
            { name: "Gestión de Pedidos", detail: "Panel administrativo para controlar ventas y stock." },
            { name: "Sin Comisiones", detail: "No cobramos comisión por venta (solo la pasarela)." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, estoy listo para vender por internet. Me interesa la *Tienda Online (Start)* 🛍️.

Quiero aceptar pagos con tarjeta y gestionar mis pedidos.
📦 *Rubro de mi tienda:* 
¿Cuál es el tiempo de entrega?`,
        pricing: {
            initial: 1700,
            discountPercent: 35,
            rangeStart: 1045,
            rangeEnd: 1210,
            average: 1100,
        },
    },
    {
        id: "branding",
        title: "Branding Identidad",
        description: "Deja de usar plantillas y construye una marca que tus clientes recuerden.",
        category: "marketing",
        features: [
            { name: "Logotipo Profesional", detail: "3 propuestas creativas basadas en tu rubro." },
            { name: "Paleta de Colores", detail: "Selección estratégica de colores para tu marca." },
            { name: "Manual de Uso", detail: "Guía básica de tipografías y aplicaciones correctas." },
            { name: "Archivos Editables", detail: "Entrega de vectores listos para imprenta y web." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, necesito mejorar la imagen de mi negocio. Me interesa el servicio de *Branding Identidad* 🎨.

Busco un logo profesional y dejar de usar plantillas.
👤 *Mi Nombre:* 
¡Quedo atento a su respuesta!`,
        pricing: {
            initial: 850,
            discountPercent: 35,
            rangeStart: 523,
            rangeEnd: 605,
            average: 550,
        },
    },
    {
        id: "gestion-redes",
        title: "Gestión Redes (1 Mes)",
        description: "Mantén tus redes activas y profesionales sin esclavizarte creando contenido.",
        category: "marketing",
        features: [
            { name: "12 Publicaciones", detail: "Diseño gráfico profesional y redacción de textos (copy)." },
            { name: "Estrategia", detail: "Planificación de contenidos relevantes para tu audiencia." },
            { name: "Gestión de Comunidad", detail: "Respondemos comentarios y mensajes básicos." },
            { name: "Sin Amarres", detail: "Servicio por un mes puntual, sin contrato forzoso." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, necesito ayuda con mis redes sociales. Me interesa el plan de *Gestión de Redes (1 Mes)* 📱.

Quiero que mi marca se vea activa y profesional.
📸 *Mi Instagram/Facebook es:* 
¿Qué necesitamos para arrancar?`,
        pricing: {
            initial: 1340,
            discountPercent: 35,
            rangeStart: 855,
            rangeEnd: 990,
            average: 900,
        },
    },
    {
        id: "meta-ads",
        title: "Campaña Meta Ads",
        description: "Lleva tu mensaje a las personas correctas en Facebook e Instagram.",
        category: "marketing",
        features: [
            { name: "Segmentación Precisa", detail: "Definimos tu público ideal por edad, zona e intereses." },
            { name: "Configuración Técnica", detail: "Instalación de Píxeles y configuración de cuenta." },
            { name: "Objetivos Claros", detail: "Enfocados en Tráfico, Mensajes o Leads." },
            { name: "Reporte Final", detail: "Te explicamos los resultados al terminar." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, quiero conseguir más clientes. Me interesa la *Campaña de Meta Ads* 🎯.

Necesito llegar a mi público objetivo en Facebook/Instagram.
💰 *Mi objetivo es:* (Ventas / Mensajes / Tráfico)`,
        pricing: {
            initial: 850,
            discountPercent: 35,
            rangeStart: 523,
            rangeEnd: 605,
            average: 550,
        },
    },
    {
        id: "chatbot",
        title: "Chatbot de Atención",
        description: "Automatiza tu WhatsApp para no perder clientes fuera de horario.",
        category: "development",
        features: [
            { name: "Respuestas Rápidas", detail: "Configuración de menú de bienvenida y opciones." },
            { name: "Árbol de Decisión", detail: "Guiamos al cliente hacia la respuesta que busca." },
            { name: "Disponibilidad 24/7", detail: "Tu negocio sigue respondiendo mientras duermes." },
            { name: "Conexión Directa", detail: "Opción para derivar a un humano si es necesario." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, quiero automatizar mi WhatsApp. Me interesa el *Chatbot de Atención* 🤖.

Pierdo clientes por no responder rápido fuera de horario.
👤 *Mi Nombre:* 
¿Cómo funciona la configuración?`,
        pricing: {
            initial: 1080,
            discountPercent: 35,
            rangeStart: 665,
            rangeEnd: 770,
            average: 700,
        },
    },
    {
        id: "automatizacion",
        title: "Automatización de Flujo",
        description: "Conecta tus herramientas para dejar de hacer tareas manuales y repetitivas.",
        category: "development",
        features: [
            { name: "Integración", detail: "Conectamos 2 apps (ej: Facebook Leads a Google Sheets)." },
            { name: "Ahorro de Tiempo", detail: "Elimina el copiar y pegar datos manualmente." },
            { name: "Alertas", detail: "Recibe notificaciones automáticas cuando algo importante sucede." },
            { name: "Eficiencia", detail: "Tu negocio funciona más rápido y con menos errores." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👋, quiero ahorrar tiempo en mi negocio. Me interesa el servicio de *Automatización de Flujo* ⚡.

Tengo tareas manuales que quiero conectar (Zapier/Make).
🔄 *Proceso a automatizar:* `,
        pricing: {
            initial: 850,
            discountPercent: 35,
            rangeStart: 523,
            rangeEnd: 605,
            average: 550,
        },
    },
    {
        id: "sistema-medida",
        title: "Sistema a Medida (Módulo Base)",
        description: "Software personalizado para gestionar los procesos únicos de tu empresa.",
        category: "development",
        features: [
            { name: "100% Personalizado", detail: "Diseñado desde cero para tu flujo de trabajo real, sin plantillas." },
            { name: "Funcionalidad Completa", detail: "Incluye Base de Datos, Usuarios (Login) y 3 módulos de gestión." },
            { name: "Propiedad del Código", detail: "El sistema es tuyo, sin pagos mensuales por licencias de uso." },
            { name: "Escalable", detail: "Construido modularmente para agregar más funciones cuando crezcas." },
        ],
        whatsappMessage: `Hola *DUHVIA* 👨‍💻, busco una solución personalizada. Me interesa el *Sistema a Medida (Módulo Base)*.

Tengo un flujo de trabajo específico que el software comercial no resuelve.
🏭 *Mi Rubro:* 
🔧 *Breve detalle:*`,
        pricing: {
            initial: 2300,
            discountPercent: 35,
            rangeStart: 1425,
            rangeEnd: 1650,
            average: 1500,
        },
    },
];
