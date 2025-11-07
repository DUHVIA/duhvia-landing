export default function LogosMarquee() {
  const logos = ["Acme", "Andes", "Nova", "Menta", "Qhapaq", "Andino", "Vulcano"];
  return (
    <div className="my-10">
      <div className="marquee">
        <div className="marquee__inner">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="badge border-steel"
              style={{ minWidth: 130, justifyContent: "center" }}
              aria-label={`Logo ${l}`}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center subtle mt-4 text-sm">Marcas y equipos que inspiran nuestros estándares</p>
    </div>
  );
}
