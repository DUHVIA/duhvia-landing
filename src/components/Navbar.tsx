import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/blog", label: "Blog" },
  { to: "/sobre-nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[var(--color-bg)]/80 border-b border-[var(--color-steel)]/40">
      <nav className="section flex items-center justify-between h-16">
        
        {/* ===== LOGO DUHVIA ===== */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo-duhvia.png"
            alt="DUHVIA Logo"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-lg tracking-wide">
            <span className="text-accent">DUH</span>
            <span className="text-primary">VIA</span>
          </span>
        </Link>

        {/* ===== MENU DESKTOP ===== */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="btn btn-primary shadow-md hover:shadow-lg">
            ¡Hablemos!
          </Link>
        </div>

        {/* ===== MENU MOBILE ===== */}
        <button
          className="md:hidden p-2 text-white/90 hover:text-accent transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ===== MOBILE MENU DROPDOWN ===== */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-steel)]/40 bg-[var(--color-surface)]/95 backdrop-blur-md">
          <div className="section py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-accent text-sm"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-fit"
            >
              ¡Hablemos!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
