export function SectionHeading({ title, subtitle, className = '', centered = false }: { title: string; subtitle?: string; className?: string, centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? 'mx-auto text-center flex flex-col items-center' : 'max-w-3xl'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
      <div className={`h-1 w-20 bg-blue-600 mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
