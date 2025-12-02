export default function LogosMarquee() {
  const logos = ["Kotlin", "Python", "React", "Android", "SQL", "Figma", "Google Analytics", "Django", "TypeScript", "Node.js", "Docker", "AWS"];
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
      <p className="text-center subtle mt-4 text-sm">Stack tecnológico y herramientas que potencian nuestros desarrollos</p>
    </div>
  );
}
