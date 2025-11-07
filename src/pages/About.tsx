import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <section className="section py-16">
      <SectionHeader
        title="Sobre DUHVIA"
        subtitle="Una organización joven con visión, estrategia y ejecución de alto nivel."
      />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card">
          <h3 className="text-xl font-semibold">Nuestra misión</h3>
          <p className="subtle mt-2">
            Impulsar el crecimiento de empresas y emprendedores con tecnología, diseño y contenido
            que conecte con personas reales y genere resultados medibles.
          </p>
          <h3 className="text-xl font-semibold mt-6">Nuestra visión</h3>
          <p className="subtle mt-2">
            Ser referente latinoamericano en innovación digital, experiencia de usuario y comunicación moderna.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Nuestros valores</h3>
          <ul className="subtle list-disc pl-5 mt-2 space-y-2">
            <li>Innovación constante</li>
            <li>Creatividad con propósito</li>
            <li>Calidad y enfoque en resultados</li>
            <li>Colaboración y transparencia</li>
            <li>Pasión por la tecnología</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6">Lo que nos diferencia</h3>
          <ul className="subtle list-disc pl-5 mt-2 space-y-2">
            <li>Performance técnica y SEO desde el día 1</li>
            <li>Proceso ágil con entregas semanales</li>
            <li>Diseño atractivo con microinteracciones útiles</li>
            <li>Contenido nativo para redes que sí conecta</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
