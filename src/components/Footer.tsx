export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="bg-gradient-to-t from-[var(--color-surface)] to-transparent">
        <div className="section py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">DUHVIA</h4>
            <p className="subtle mt-2">
              Innovación digital, contenido que inspira y tecnología que impulsa negocios.
            </p>
          </div>
          <div>
            <h5 className="font-medium mb-3">Enlaces</h5>
            <ul className="space-y-2 subtle">
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/portafolio">Portafolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-3">Contacto</h5>
            <p className="subtle">Arequipa, Perú</p>
            <p className="subtle">hola@duhvia.com</p>
            <div className="mt-4 subtle">© {new Date().getFullYear()} DUHVIA. Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
