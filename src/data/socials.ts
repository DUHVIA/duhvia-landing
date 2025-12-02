import { Facebook, Instagram, Mail, Phone, MessageCircle } from "lucide-react";

// Icon mapping for dynamic usage if needed, or just direct export
// Note: Lucide doesn't have a TikTok icon by default in older versions, 
// if it's missing we might need a custom SVG or a different icon. 
// For now, I'll assume we might need a custom component for TikTok if Lucide doesn't have it,
// or use a generic 'Video' icon as fallback, but I'll try to find a way to represent it.
// Actually, let's check if we can use a custom SVG for TikTok in the components.

export const socialLinks = {
  tiktok: {
    name: "TikTok",
    handle: "@duhvia.agencia",
    url: "https://www.tiktok.com/@duhvia.agencia",
    // Custom SVG path for TikTok since it might not be in standard Lucide set
    iconPath: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z", 
  },
  facebook: {
    name: "Facebook",
    handle: "DUHVIA",
    url: "https://www.facebook.com/profile.php?id=61583145663176",
    Icon: Facebook,
  },
  instagram: {
    name: "Instagram",
    handle: "@duhvia.agencia",
    url: "https://www.instagram.com/duhvia.agencia/",
    Icon: Instagram,
  },
  whatsapp: {
    name: "WhatsApp",
    number: "903099055",
    // Pre-filled message: "Hola DUHVIA, me gustaría más información."
    url: "https://wa.me/51903099055?text=Hola%20DUHVIA%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20%E2%9C%A8",
    Icon: MessageCircle, // Or Phone
  },
  email: {
    name: "Email",
    email: "duhvia.agencia@gmail.com",
    // Pre-filled message
    url: "mailto:duhvia.agencia@gmail.com?subject=Informaci%C3%B3n%20sobre%20servicios%20DUHVIA&body=Hola%20equipo%20de%20DUHVIA%2C%0A%0AEstoy%20interesado%20en%20sus%20servicios%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%0A%0AGracias.",
    Icon: Mail,
  },
};
