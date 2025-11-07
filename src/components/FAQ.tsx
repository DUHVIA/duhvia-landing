import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, idx) => (
        <div key={idx} className="card">
          <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === idx ? null : idx)}>
            <span className="font-medium">{f.q}</span>
            <span className="text-xl">{open === idx ? "–" : "+"}</span>
          </button>
          {open === idx && <p className="subtle mt-3">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
