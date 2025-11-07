export default function PricingCard({
  tier,
  price,
  period = "proyecto",
  features,
  cta = "Solicitar propuesta",
  highlight = false,
}: {
  tier: string;
  price: string;
  period?: string;
  features: string[];
  cta?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card h-full flex flex-col ${
        highlight ? "outline outline-2 outline-[var(--color-primary)]" : ""
      }`}
    >
      <div className="mb-4">
        <div className="badge">{tier}</div>
      </div>

      <div className="mb-4">
        <div className="text-3xl font-extrabold">{price}</div>
        <div className="subtle text-sm">por {period}</div>
      </div>

      <ul className="space-y-2 text-sm flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-accent"></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className="btn btn-primary mt-6">{cta}</button>
    </div>
  );
}
