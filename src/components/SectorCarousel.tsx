import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sectors } from "../data/sectors";

export default function SectorCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused, itemsPerPage]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            // Si llegamos al final, volvemos al inicio
            if (prev + itemsPerPage >= sectors.length) {
                return 0;
            }
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) {
                // Ir al final (ajustando para que muestre la última página completa)
                return Math.max(0, sectors.length - itemsPerPage);
            }
            return prev - 1;
        });
    };

    // Calcular el índice máximo para deshabilitar botones si se desea, 
    // o para lógica de loop. En este caso hacemos loop infinito en nextSlide/prevSlide.

    return (
        <div
            className="relative w-full max-w-6xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden py-4">
                <motion.div
                    className="flex gap-6"
                    initial={false}
                    animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ width: `${(sectors.length / itemsPerPage) * 100}%` }}
                >
                    {sectors.map((item, i) => (
                        <div
                            key={i}
                            className="relative flex-shrink-0 px-2"
                            style={{ width: `${100 / sectors.length}%` }}
                        >
                            <div className="h-full group relative p-8 rounded-3xl bg-[var(--color-surface)]/40 backdrop-blur-md border border-white/5 hover:border-[var(--color-accent)]/30 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-[var(--color-surface)] border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="subtle leading-relaxed text-sm flex-grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Botones de Navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 p-3 rounded-full bg-[var(--color-surface)] border border-white/10 text-white/70 hover:text-white hover:bg-[var(--color-accent)] transition-all shadow-lg backdrop-blur-sm"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 p-3 rounded-full bg-[var(--color-surface)] border border-white/10 text-white/70 hover:text-white hover:bg-[var(--color-accent)] transition-all shadow-lg backdrop-blur-sm"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicadores (Dots) */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(sectors.length - itemsPerPage + 1) }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                            ? "w-8 bg-[var(--color-accent)]"
                            : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                        aria-label={`Ir a diapositiva ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
