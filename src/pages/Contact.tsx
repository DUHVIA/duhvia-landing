import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Loader2, Mail, MessageSquare, MapPin } from "lucide-react";
import Magnetic from "../components/Magnetic";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpgbwod");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.succeeded && !showModal) {
    setShowModal(true);
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-black overflow-hidden">
      <div className="md:w-1/2 relative bg-black flex items-center justify-center p-12 overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-primary)] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent)] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 space-y-12 max-w-md">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
              Dinos <br /> <span className="text-[var(--color-primary)]">Hola.</span>
            </h1>
            <p className="text-xl text-white/50">Estamos listos para transformar tu visión en una realidad técnica impecable.</p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email</p>
                <p className="font-medium">hola@duhvia.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">WhatsApp</p>
                <p className="font-medium">+51 987 654 321</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Ubicación</p>
                <p className="font-medium">Arequipa, Perú / Remoto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-[var(--color-surface)] flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Nombre Completo</label>
              <input
                name="name"
                required
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[var(--color-primary)] transition-colors text-xl font-medium"
                placeholder="Juan Pérez"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Email Corporativo</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[var(--color-primary)] transition-colors text-xl font-medium"
                placeholder="juan@empresa.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Mensaje</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[var(--color-primary)] transition-colors text-xl font-medium resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <Magnetic>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full h-20 bg-[var(--color-primary)] text-black font-black uppercase tracking-widest rounded-full flex items-center justify-center gap-3 group overflow-hidden relative mt-12"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {state.submitting ? <Loader2 className="animate-spin" /> : "Enviar Propuesta"}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Magnetic>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[var(--color-surface)] border border-white/10 p-12 rounded-[40px] max-w-md text-center space-y-6"
            >
              <div className="w-20 h-20 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-black italic uppercase">¡Recibido!</h2>
              <p className="text-white/60">Hemos recibido tu mensaje. Un estratega de Duhvia se pondrá en contacto contigo en las próximas 24 horas.</p>
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-secondary w-full"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
