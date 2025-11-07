import { useEffect, useState } from "react";

type T = { name: string; role: string; text: string; };

export default function TestimonialSlider({ items }: { items: T[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, [items.length]);

  const t = items[i];
  return (
    <div className="card text-center min-h-[180px]">
      <p className="text-lg">“{t.text}”</p>
      <div className="mt-3 text-sm subtle">— {t.name}, {t.role}</div>
      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, idx) => (
          <span key={idx} className={`w-2.5 h-2.5 rounded-full ${idx===i ? "bg-white/90" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
