export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="subtle mt-3">{subtitle}</p>}
    </div>
  );
}
