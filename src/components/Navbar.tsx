import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getAssetPath } from "../utils/assets";

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
    <>
      {/* ===== NAVBAR LIMPIO SIN EFECTOS NI MARCOS ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(15,21,24,0.8)] backdrop-blur-lg">
        <nav className="section flex items-center justify-between h-16">

          {/* ===== LOGO DUHVIA ===== */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={getAssetPath("/logo-duhvia.png")}
              alt="DUHVIA Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-lg tracking-wide">
              <span className="text-accent">DUH</span>
              <span className="text-primary">VIA</span>
            </span>
          </Link>

          {/* ===== MENU DESKTOP ===== */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition font-medium ${isActive
                    ? "text-white"
                    : "text-white/70 hover:text-accent"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contacto" className="btn btn-primary text-sm">
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

        {/* ===== MENU MOBILE DROPDOWN ===== */}
        {open && (
          <div className="md:hidden bg-[rgba(15,21,24,0.95)] backdrop-blur-md">
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

      {/* ===== ESPACIADOR PARA EVITAR TAPAR CONTENIDO ===== */}
      <div aria-hidden className="h-16" />
    </>
  );
}
