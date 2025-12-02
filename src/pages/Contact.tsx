import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Loader2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FAQ from "../components/FAQ";
import { socialLinks } from "../data/socials";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpgbwod");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const faqs = [
    { q: "¿Cuánto tarda un proyecto típico?", a: "Landing: 1–2 semanas. Web corporativa: 2–4. E-commerce/plataforma: 4–8 según alcance." },
    { q: "¿Cómo empiezan?", a: "Con una llamada de exploración y un diagnóstico. Entregamos propuesta con alcance, plazos y KPIs." },
    { q: "¿Trabajan con marcas pequeñas?", a: "Sí. Nuestro enfoque es adaptarnos al estadio de cada cliente y crecer en conjunto." },
  ];

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      if (formRef.current) {
        formRef.current.reset();
      }

      const timer = setTimeout(() => {
        setShowModal(false);
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 4000); // 4 segundos para leer el mensaje

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate]);

  return (
    <section className="section py-16 relative">
      <SectionHeader
        title="Contacto"
        subtitle="Cuéntanos tu idea. Te respondemos con una propuesta clara y accionable."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <form ref={formRef} onSubmit={handleSubmit} className="card space-y-4">
          <div>
            <label htmlFor="name" className="text-sm">Nombre</label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              placeholder="Tu nombre"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              placeholder="tucorreo@empresa.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="subject" className="text-sm">Asunto</label>
            <input
              id="subject"
              name="subject"
              required
              className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              placeholder="¿Qué necesitas?"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              placeholder="Cuéntanos brevemente tu proyecto..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>
          <p className="subtle text-xs text-center">
            Te responderemos en menos de 24 horas hábiles.
          </p>
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

      {/* Modal de Éxito */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md rounded-2xl bg-[var(--color-surface)] border border-white/10 p-8 shadow-2xl text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
                <CheckCircle size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="subtle mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje correctamente y te responderemos muy pronto.
              </p>

              <div className="flex justify-center">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="h-full bg-[var(--color-accent)]"
                  />
                </div>
              </div>
              <p className="text-xs text-white/40 mt-2">Redirigiendo al inicio...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
