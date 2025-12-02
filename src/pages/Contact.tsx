import SectionHeader from "../components/SectionHeader";
import FAQ from "../components/FAQ";
import { socialLinks } from "../data/socials";

export default function Contact() {
  const faqs = [
    { q: "¿Cuánto tarda un proyecto típico?", a: "Landing: 1–2 semanas. Web corporativa: 2–4. E-commerce/plataforma: 4–8 según alcance." },
    { q: "¿Cómo empiezan?", a: "Con una llamada de exploración y un diagnóstico. Entregamos propuesta con alcance, plazos y KPIs." },
    { q: "¿Trabajan con marcas pequeñas?", a: "Sí. Nuestro enfoque es adaptarnos al estadio de cada cliente y crecer en conjunto." },
  ];

  return (
    <section className="section py-16">
      <SectionHeader
        title="Contacto"
        subtitle="Cuéntanos tu idea. Te respondemos con una propuesta clara y accionable."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <form className="card space-y-4">
          <div>
            <label className="text-sm">Nombre</label>
            <input className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none" placeholder="tucorreo@empresa.com" />
          </div>
          <div>
            <label className="text-sm">Asunto</label>
            <input className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none" placeholder="¿Qué necesitas?" />
          </div>
          <div>
            <label className="text-sm">Mensaje</label>
            <textarea rows={5} className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none" placeholder="Cuéntanos brevemente tu proyecto..." />
          </div>
          <button className="btn btn-primary" type="button">Enviar mensaje</button>
          <p className="subtle text-xs">* Integraremos envío real con Formspree / Resend o un micro-backend.</p>
        </form>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold">También puedes escribirnos</h3>
            <ul className="subtle mt-3 space-y-3">
              <li>
                <a href={socialLinks.email.url} className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
                  <span className="font-bold text-white">Email:</span> {socialLinks.email.email}
                </a>
              </li>
              <li>
                <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
                  <span className="font-bold text-white">WhatsApp:</span> +51 {socialLinks.whatsapp.number}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-white">Ubicación:</span> Arequipa, Perú
              </li>
            </ul>
          </div>
          <FAQ items={faqs} />
        </div>
      </div>
    </section>
  );
}
