import SectionHeader from "../components/SectionHeader";

const posts = [
  { title: "Checklist de performance web 2025", tag: "Web", teaser: "Primeros pasos para un sitio veloz y con buen SEO técnico." },
  { title: "Cómo plantear tu calendario de TikTok", tag: "Contenido", teaser: "Frecuencia, formatos, ganchos y medición del impacto." },
  { title: "UX: microinteracciones que suman", tag: "UX/UI", teaser: "Pequeños detalles = gran percepción de calidad." },
];

export default function Blog() {
  return (
    <section className="section py-16">
      <SectionHeader
        title="Blog / Inspiración"
        subtitle="Tendencias, guías y aprendizajes desde el frente digital."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.title} className="card">
            <span className="badge">{p.tag}</span>
            <h3 className="font-semibold mt-3">{p.title}</h3>
            <p className="subtle mt-2">{p.teaser}</p>
            <button className="btn btn-secondary mt-4">Leer pronto</button>
          </article>
        ))}
      </div>
    </section>
  );
}
