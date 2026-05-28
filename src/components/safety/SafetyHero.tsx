export default function SafetyHero() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060f1e]">

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-ocean opacity-30 blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-brand-mountain opacity-25 blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold px-4 py-2 rounded-full mb-8 border border-white/15 backdrop-blur-sm uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          Updated May 2026
        </div>

        <h1 className="font-display font-bold text-white leading-tight mb-4">
          <span className="block text-4xl sm:text-5xl lg:text-6xl">Is Cape Town Safe?</span>
          <span
            className="block text-2xl sm:text-3xl font-semibold mt-2"
            style={{
              background: 'linear-gradient(135deg, #F4A261 0%, #FFD166 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            A Traveller&apos;s Honest Guide
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
          We answer the question every visitor asks — honestly, with context, and with the practical advice you need to visit with confidence.
        </p>
      </div>
    </section>
  )
}
