import Image from 'next/image'
import Button from '@/components/ui/Button'

const stats = [
  { value: '1.5M+', label: 'Visitors a year' },
  { value: 'Top 10', label: 'Global destination' },
  { value: '300', label: 'Days of sunshine' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Photo ── */}
      <Image
        src="/images/hero.jpg"
        alt="Table Mountain and Cape Town viewed from the Atlantic"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Overlays: darken top for header legibility, heavy at bottom for text ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-brand-slate/20" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
          Updated May 2026 · Honest &amp; up-to-date
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-d1 font-display font-bold text-white leading-[1.05] mb-6">
          <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight">Is Cape Town</span>
          <span
            className="block text-6xl sm:text-7xl lg:text-8xl mt-1"
            style={{
              background: 'linear-gradient(135deg, #F4A261 0%, #FFD166 50%, #F4A261 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Safe?
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="animate-fade-up-d1 flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-sand/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Sub-headline */}
        <p className="animate-fade-up-d2 text-xl sm:text-2xl text-white/80 mb-3 max-w-2xl mx-auto leading-relaxed font-light">
          Honest answers. No spin. Just what you actually need to know before your trip.
        </p>
        <p className="animate-fade-up-d2 text-base text-white/50 mb-10 max-w-lg mx-auto">
          Millions visit safely every year. We&apos;ll show you exactly how — and where.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button href="/safety" variant="primary"
            className="text-base px-8 py-4 rounded-full! bg-brand-sand! text-brand-slate! font-bold! hover:scale-105 hover:shadow-[0_0_40px_rgba(244,162,97,0.4)]! transition-all! duration-300!">
            Read the Safety Guide
          </Button>
          <Button href="#explore" variant="ghost"
            className="text-base px-8 py-4 rounded-full! text-white! border border-white/25! hover:bg-white/10! hover:border-white/40! backdrop-blur-sm! transition-all! duration-300!">
            Explore Cape Town →
          </Button>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up-d3 inline-flex flex-col sm:flex-row items-center bg-white/8 backdrop-blur-md rounded-2xl border border-white/12 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-8 py-4 w-full sm:w-auto ${i < stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}`}
            >
              <span className="text-2xl font-bold text-white font-display">{stat.value}</span>
              <span className="text-xs text-white/50 uppercase tracking-widest mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}
