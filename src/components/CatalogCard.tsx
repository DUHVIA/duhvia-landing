import type { CatalogItem } from "../data/catalog";
import { Check } from "lucide-react";

export default function CatalogCard({ item }: { item: CatalogItem }) {
    return (
        <div className="card h-full flex flex-col relative group hover:border-[var(--color-accent)]/50 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300">
            {/* Badge de Descuento */}
            <div className="absolute -top-3 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 border border-[var(--color-surface)]">
                -{item.pricing.discountPercent}% OFF
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                </h3>
                <p className="subtle text-sm mt-2 leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* Features */}
            <div className="flex-1 mb-6">
                <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                            <div className="mt-1 min-w-[16px]">
                                <Check size={16} className="text-[var(--color-accent)]" />
                            </div>
                            <div>
                                <span className="font-semibold text-white/90">{feature.name}:</span>{" "}
                                <span className="subtle">{feature.detail}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pricing Block */}
            <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-white/50 uppercase tracking-wider">Precio Regular</span>
                    <span className="text-sm text-white/40 line-through">S/. {item.pricing.initial}</span>
                </div>

                <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-[var(--color-accent)] font-bold mb-0.5">Precio Promedio Final</span>
                        <div className="text-3xl font-extrabold text-white">
                            S/. {item.pricing.average}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-white/50 mb-1">Rango estimado</div>
                        <div className="text-sm font-medium text-white/80 bg-white/5 px-2 py-1 rounded">
                            S/. {item.pricing.rangeStart} - {item.pricing.rangeEnd}
                        </div>
                    </div>
                </div>

                <a href={`https://wa.me/51903099055?text=${encodeURIComponent(item.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center">
                    Solicitar este servicio
                </a>
            </div>
        </div>
    );
}
