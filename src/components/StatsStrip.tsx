export default function StatsStrip() {
  const stats = [
    { k: "Proyectos", v: "24 +" },
    { k: "Sectores", v: "10" },
    { k: "Tiempo promedio de entrega", v: "4 - 6 semanas" },
    { k: "Soporte post-venta", v: "Garantizado" },
  ];
  return (
    <div className="grid md:grid-cols-4 gap-4 mt-10">
      {stats.map(s => (
        <div key={s.k} className="card text-center stat">
          <div className="text-xl font-bold">{s.v}</div>
          <div className="subtle text-sm mt-1">{s.k}</div>
        </div>
      ))}
    </div>
  );
}
