import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send, ArrowUpRight, Sparkles } from "lucide-react";
import { socialLinks } from "../data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias! Te avisaremos de las novedades de DUHVIA ✨");
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a0f12]">
      {/* Brillos decorativos */}
      <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full blur-[120px] opacity-20 bg-[var(--color-primary)]" />
      <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full blur-[120px] opacity-15 bg-[var(--color-accent)]" />

      {/* Fondo elegante con degradado */}
      <div className="relative bg-[linear-gradient(180deg,#0b1013_0%,#0a0e10_50%,#06090b_100%)] border-t border-white/5">
        <div className="section py-14 md:py-16">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* === Columna 1: Marca === */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-duhvia.png"
                  alt="DUHVIA Logo"
                  className="h-10 w-auto drop-shadow-[0_0_14px_rgba(26,230,200,0.45)]"
                  loading="lazy"
                />
                <h4 className="text-2xl font-extrabold tracking-tight">
                  <span className="text-accent">DUH</span>
                  <span className="text-primary">VIA</span>
                </h4>
              </div>
              <p className="subtle mt-4 max-w-md text-[15px] leading-relaxed">
                Creemos en la <span className="text-gradient font-semibold">innovación con propósito</span>.
                En DUHVIA transformamos ideas en plataformas, experiencias y marcas con impacto.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Diseño UX/UI", "Desarrollo Web", "Estrategia Digital", "Contenido Creativo"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-[var(--color-surface)]/40 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* === Columna 2: Navegación === */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div>
                <h5 className="mb-3 font-semibold text-white/90">Explorar</h5>
                <ul className="space-y-2 text-sm">
                  {[
                    { href: "/servicios", label: "Servicios" },
                    { href: "/portafolio", label: "Portafolio" },
                    { href: "/blog", label: "Blog" },
                    { href: "/sobre-nosotros", label: "Nosotros" },
                    { href: "/contacto", label: "Contacto" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-white/70 hover:text-accent transition inline-flex items-center gap-2"
                      >
                        <ArrowUpRight size={14} />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="mb-3 font-semibold text-white/90">Soluciones</h5>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>Web corporativas</li>
                  <li>E-commerce y ERP</li>
                  <li>Marketing y SEO</li>
                  <li>Branding digital</li>
                  <li>Contenido TikTok</li>
                </ul>
              </div>
            </div>

            {/* === Columna 3: Newsletter === */}
            <div>
              <h5 className="mb-3 font-semibold flex items-center gap-2 text-white/90">
                <Sparkles size={18} className="text-[var(--color-accent)]" />
                Mantente al día
              </h5>
              <p className="subtle text-sm">
                Recibe inspiración, lanzamientos y tendencias digitales.
              </p>

              <form onSubmit={onSubscribe} className="mt-4">
                <div className="flex overflow-hidden rounded-xl border border-white/10 bg-[var(--color-surface)]/70 backdrop-blur">
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/50"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-sm bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-[var(--color-bg)] hover:brightness-110 transition flex items-center gap-2"
                  >
                    <Send size={16} />
                    Enviar
                  </button>
                </div>
              </form>

              <div className="mt-6 space-y-2 text-sm">
                <a
                  href={socialLinks.email.url}
                  className="flex items-center gap-2 text-white/85 hover:text-accent transition"
                >
                  <Mail size={16} /> {socialLinks.email.email}
                </a>
                <a
                  href={socialLinks.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-accent transition"
                >
                  <Phone size={16} /> +51 {socialLinks.whatsapp.number}
                </a>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin size={16} /> Arequipa, Perú
                </div>
              </div>

              {/* Redes Sociales Footer */}
              <div className="mt-6 flex gap-3">
                {[socialLinks.tiktok, socialLinks.facebook, socialLinks.instagram].map((social) => {
                  const Icon = (social as any).Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:scale-110"
                      aria-label={social.name}
                    >
                      {"iconPath" in social ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d={(social as any).iconPath} />
                        </svg>
                      ) : (
                        Icon && <Icon size={16} />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Línea sutil y copyright */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {year} DUHVIA. Innovación digital con propósito.</p>
            <div className="flex gap-4">
              <a href="/privacidad" className="hover:text-accent transition">Privacidad</a>
              <a href="/terminos" className="hover:text-accent transition">Términos</a>
              <a href="/cookies" className="hover:text-accent transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
