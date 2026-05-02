import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title, type, thumbnail, tech, summary, slug, isBento
}: {
  title: string; type: string; thumbnail: string; tech: string[]; summary: string; slug: string; isBento?: boolean;
}) {
  return (
    <Link to={`/portafolio/${slug}`} className="block h-full" data-cursor="VER">
      <motion.div 
        className="relative h-full w-full group overflow-hidden rounded-3xl bg-[var(--color-surface)] border border-white/5"
      >
        <motion.img 
          src={thumbnail} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <span className="text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest">{type}</span>
              <h4 className={`${isBento ? 'text-3xl' : 'text-xl'} font-black italic uppercase tracking-tighter leading-none`}>
                {title}
              </h4>
              {isBento && (
                <p className="text-white/50 text-sm max-w-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {summary}
                </p>
              )}
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={24} />
            </div>
          </div>
          
          <div className="mt-4 flex gap-2 overflow-hidden">
             {tech.map(t => (
               <span key={t} className="text-[9px] uppercase font-bold bg-white/5 backdrop-blur-md px-2 py-1 rounded border border-white/5">
                 {t}
               </span>
             ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
