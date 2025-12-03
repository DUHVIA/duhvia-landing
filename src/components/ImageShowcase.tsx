import { useState } from "react";

export default function ImageShowcase({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // Agregamos 'h-56' y 'w-full' al contenedor para mantener el espacio
    <div className="relative w-full h-56 overflow-hidden rounded-2xl group bg-[var(--color-surface-2)]">
      {src ? (
        <>
          {/* Skeleton Loader (visible mientras carga) */}
          {isLoading && (
            <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface-2)] to-[var(--color-surface)]" />
          )}

          {/* Imagen real */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoading(false)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
              }`}
          />
        </>
      ) : (
        // Placeholder si no hay imagen
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-accent)]/25 flex items-center justify-center">
          <span className="subtle">Imagen del servicio</span>
        </div>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors pointer-events-none"></div>
    </div>
  );
}
