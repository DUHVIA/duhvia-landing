export default function ImageShowcase({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl group">
      {src ? (
        // Imagen real
        <img
          src={src}
          alt={alt}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        // Placeholder si no hay imagen
        <div className="w-full h-56 bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-accent)]/25 flex items-center justify-center">
          <span className="subtle">Imagen del servicio</span>
        </div>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors"></div>
    </div>
  );
}
