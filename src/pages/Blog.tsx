import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Search, Mail, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Magnetic from "../components/Magnetic";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const isDefaultView = searchQuery === "" && activeCategory === "Todos";
  const featuredPost = blogPosts[0]; 
  const gridPosts = isDefaultView ? blogPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section relative z-10">
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <div className="badge bg-[var(--color-surface)] border-[var(--color-accent)]/30 text-[var(--color-accent)] font-mono text-[10px] uppercase tracking-[0.2em] mb-6 px-4 py-2 inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                sys.stdout.write("DUHVIA LOGS")
              </div>
              <h1 className="text-5xl md:text-7xl font-mono font-black mb-6 tracking-tighter flex flex-wrap gap-x-[0.3em]">
                {[
                  { text: "Señal", colorClass: "text-[var(--color-primary)] drop-shadow-[0_0_15px_rgba(109,85,255,0.4)]" },
                  { text: "entre", colorClass: "text-white/80" },
                  { text: "el", colorClass: "text-white/80" },
                  { text: "ruido", colorClass: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-accent)] drop-shadow-[0_0_20px_rgba(26,230,200,0.5)]" }
                ].map((wordObj, wIndex, arr) => {
                  const prevChars = arr.slice(0, wIndex).reduce((acc, curr) => acc + curr.text.length + 1, 0);
                  
                  return (
                    <span key={wIndex} className={`inline-flex ${wordObj.colorClass}`}>
                      {wordObj.text.split("").map((char, cIndex) => (
                        <motion.span 
                          key={cIndex} 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.01, delay: 0.2 + ((prevChars + cIndex) * 0.04) }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  )
                })}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ opacity: { repeat: Infinity, duration: 0.8, ease: "linear" }, delay: 0.2 + (20 * 0.04) }}
                  className="text-[var(--color-accent)] inline-block drop-shadow-[0_0_10px_var(--color-accent)] -ml-2"
                >
                  _
                </motion.span>
              </h1>
              <p className="text-xl text-[var(--color-steel)] font-medium max-w-3xl leading-relaxed">
                No publicamos tutoriales básicos ni humo de marketing. Compartimos el playbook exacto que usamos para escalar bases de datos, refactorizar monolitos y asegurar infraestructura.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-steel)]/30 rounded-xl px-4 py-3 w-64 hover:border-[var(--color-primary)]/50 transition-colors focus-within:border-[var(--color-primary)]">
                <Search size={18} className="text-[var(--color-subtle)]" />
                <input 
                  type="text" 
                  placeholder="Buscar insights..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full text-[var(--color-text)] placeholder:text-[var(--color-subtle)]" 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-[var(--color-text)] text-[var(--color-bg)] border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "bg-[var(--color-surface)] text-[var(--color-subtle)] border-[var(--color-steel)]/20 hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.header>

        <AnimatePresence mode="wait">
          {isDefaultView && (
            <motion.div 
              key="featured"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to={`/blog/${featuredPost.slug}`}
                onClick={() => window.scrollTo(0,0)}
                className="card p-0 group block relative overflow-hidden border-[var(--color-steel)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-[0_0_50px_rgba(109,85,255,0.1)] transition-all duration-500 mb-20 grid grid-cols-1 lg:grid-cols-2"
                data-cursor="LEER"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/20 to-transparent z-10 hidden lg:block" />
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="badge text-[var(--color-primary-soft)] border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-4 py-1">
                      <Cpu size={12} /> {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs subtle font-medium uppercase tracking-widest">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="h2 mb-6 leading-tight group-hover:text-[var(--color-primary-soft)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="subtle text-lg leading-relaxed mb-10 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--color-steel)]/20">
                    <span className="text-sm font-bold subtle">{featuredPost.date}</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-steel)]/20 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] transition-all duration-300 shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-32">
          {!isDefaultView && (
            <h3 className="h2 mb-8">Resultados ({filteredPosts.length})</h3>
          )}
          {isDefaultView && gridPosts.length > 0 && (
            <h3 className="h2 mb-8">Últimos artículos</h3>
          )}
          
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center subtle">
              <p className="text-xl">No se encontraron artículos que coincidan con tu búsqueda.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("Todos");}}
                className="mt-4 text-[var(--color-accent)] font-bold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, i) => (
                <motion.div 
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={`/blog/${post.slug}`}
                    onClick={() => window.scrollTo(0,0)}
                    className="card p-0 group flex flex-col h-full overflow-hidden hover:border-[var(--color-steel)]/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500"
                    data-cursor="LEER"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="badge bg-[var(--color-surface)]/90 backdrop-blur-md text-[var(--color-text)] border-[var(--color-steel)]/30 shadow-xl">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-4 leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="subtle text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-[var(--color-steel)]/20 mt-auto">
                        <span className="flex items-center gap-1 text-xs subtle font-medium uppercase tracking-widest">
                          <Clock size={12} /> {post.readTime}
                        </span>
                        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider flex items-center gap-1 group-hover:gap-3 transition-all">
                          Leer <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-10 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)] flex flex-col justify-center shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>
            <h3 className="h2 mb-4">Ingeniería en tu inbox.</h3>
            <p className="subtle mb-8 max-w-sm">
              Únete a +2,000 líderes tecnológicos que reciben nuestros insights mensuales sobre arquitectura de software.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input type="email" placeholder="tu@empresa.com" className="w-full sm:flex-1 bg-[var(--color-surface-2)] border border-[var(--color-steel)]/30 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
              <button className="w-full sm:w-auto btn btn-secondary hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors border-none py-3">
                Suscribir
              </button>
            </div>
          </div>

          <div className="card p-10 bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0,transparent_60%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <h3 className="h2 mb-4 relative z-10">¿Tu sistema actual no escala?</h3>
            <p className="subtle mb-8 max-w-sm relative z-10 text-[var(--color-text)]/70">
              Deja de emparchar código legado. Hablemos sobre cómo diseñar una arquitectura resiliente para tu próximo gran hito.
            </p>
            <Magnetic>
              <Link 
                to="/contacto"
                onClick={() => window.scrollTo(0,0)}
                className="btn btn-primary relative z-10 w-max shadow-[0_0_30px_rgba(109,85,255,0.4)]"
              >
                Agendar Diagnóstico <ArrowUpRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>

      </div>
    </div>
  );
}
