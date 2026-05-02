import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data/blogData";
import Magnetic from "../components/Magnetic";

export default function BlogDetail() {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-32 pb-20 relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="section relative z-10 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 subtle hover:text-[var(--color-primary-soft)] transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Volver a Insights
          </Link>
        </motion.div>

        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="badge bg-[var(--color-primary)]/10 text-[var(--color-primary-soft)] border-[var(--color-primary)]/20">
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-xs subtle font-bold uppercase tracking-widest">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2 text-xs subtle font-bold uppercase tracking-widest">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
          
          <h1 className="h1 mb-8 leading-[1.1]">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 pb-8 border-b border-[var(--color-steel)]/20">
            <div className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-steel)]/20 flex items-center justify-center subtle">
              <User size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-text)]">{post.author}</p>
              <p className="text-[10px] uppercase tracking-widest subtle">DUHVIA Team</p>
            </div>
          </div>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-[21/9] md:aspect-[21/9] rounded-[40px] overflow-hidden border border-[var(--color-steel)]/20 mb-16 shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="article-content"
        >
          {post.content}
        </motion.article>

        <div className="mt-20 pt-10 border-t border-[var(--color-steel)]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold subtle uppercase tracking-widest">Compartir Insight:</span>
            <button className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-steel)]/20 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all">IN</button>
            <button className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-steel)]/20 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all">TW</button>
          </div>
          
          <Magnetic>
            <Link 
              to="/contacto"
              onClick={() => window.scrollTo(0,0)}
              className="btn btn-primary rounded-full shadow-[0_0_20px_rgba(109,85,255,0.2)]"
            >
              Consultar Arquitectura <ArrowUpRight size={18} />
            </Link>
          </Magnetic>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="section mt-32 max-w-6xl mx-auto border-t border-[var(--color-steel)]/20 pt-20">
          <h3 className="h2 mb-10">Insights Relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(related => (
              <Link 
                key={related.slug}
                to={`/blog/${related.slug}`}
                onClick={() => window.scrollTo(0,0)}
                className="card p-0 group flex flex-col overflow-hidden hover:border-[var(--color-steel)]/40 transition-all duration-300"
              >
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img src={related.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={related.title} />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-primary-soft)] mb-2 block">{related.category}</span>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{related.title}</h4>
                  <div className="flex items-center justify-between border-t border-[var(--color-steel)]/20 pt-4 mt-auto">
                    <span className="text-xs subtle font-bold uppercase tracking-widest flex items-center gap-1"><Clock size={12}/> {related.readTime}</span>
                    <ArrowUpRight size={16} className="subtle group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
