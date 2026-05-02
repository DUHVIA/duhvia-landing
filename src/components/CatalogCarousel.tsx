import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CatalogItem } from "../data/catalog";
import CatalogCard from "./CatalogCard";

export default function CatalogCarousel({ items }: { items: CatalogItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1); 
            } else if (window.innerWidth < 1280) {
                setItemsPerPage(2); 
            } else {
                setItemsPerPage(3); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, items.length - itemsPerPage);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 6000); 

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
            className="relative w-full max-w-7xl mx-auto px-4 group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden py-8 -mx-4 px-4"> 
                <motion.div
                    className="flex"
                    initial={false}
                    animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="relative flex-shrink-0 px-3"
                            style={{ width: `${100 / itemsPerPage}%` }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <CatalogCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 p-3 rounded-full bg-[var(--color-surface)] border border-white/10 text-white/70 hover:text-white hover:bg-[var(--color-accent)] transition-all shadow-lg backdrop-blur-sm"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 p-3 rounded-full bg-[var(--color-surface)] border border-white/10 text-white/70 hover:text-white hover:bg-[var(--color-accent)] transition-all shadow-lg backdrop-blur-sm"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-2">
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
