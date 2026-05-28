interface PageHeroProps {
  label?: string
  title: string
  subtitle: string
  gradient?: string
}

export default function PageHero({
  label,
  title,
  subtitle,
  gradient = 'linear-gradient(135deg, #060f1e 0%, #0077B6 100%)',
}: PageHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: gradient }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {label && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">{label}</p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
