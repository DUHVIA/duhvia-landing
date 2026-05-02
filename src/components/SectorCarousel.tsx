import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sectors } from "../data/sectors";

export default function SectorCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1); 
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2); 
            } else {
                setItemsPerPage(3); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, sectors.length - itemsPerPage);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused, maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) return 0;
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) return maxIndex;
            return prev - 1;
        });
    };


    return (
        <div
            className="relative w-full max-w-6xl mx-auto px-4 group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden py-8"> 
                <motion.div
                    className="flex"
                    initial={false}
                    animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {sectors.map((item, i) => (
                        <motion.div 
                            key={i}
                            className="relative flex-shrink-0 px-3"
                            style={{ width: `${100 / itemsPerPage}%` }}

                            initial={{ opacity: 0, y: 50 }}     
                            whileInView={{ opacity: 1, y: 0 }}  
                            viewport={{ once: true, margin: "-50px" }} 
                            transition={{
                                duration: 0.5,
                                delay: i * 0.3, 
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <div className="h-full group relative p-8 rounded-3xl bg-[var(--color-surface)]/40 backdrop-blur-md border border-white/5 hover:border-[var(--color-accent)]/30 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-[var(--color-surface)] border border-white/10 shadow-lg group-hover:scale-110 group-hover:bg-[var(--color-accent)]/10 transition-all duration-300 w-fit">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

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

            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => ( 
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx 
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
