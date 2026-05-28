import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const highlights = [
  { icon: '🏖️', text: 'Atlantic Seaboard is very safe' },
  { icon: '🚘', text: 'Use Uber, not minibus taxis' },
  { icon: '🗺️', text: 'Township tours: guided only' },
  { icon: '🌙', text: 'Restaurant strips safe at night' },
]

export default function SafetyTeaser() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-slate">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-ocean opacity-20 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-brand-sky opacity-15 blur-[90px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <AnimateIn direction="right" duration={700}>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest border border-white/15">
              Safety Guide
            </div>
            <blockquote className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
              &ldquo;Cape Town is absolutely worth it — you just need to know where to go.&rdquo;
            </blockquote>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Our complete guide covers safe areas, areas to approach carefully, 25 practical tips, transport advice, and an honest verdict — no sugar-coating, no scare-mongering.
            </p>
            <Button
              href="/safety"
              variant="primary"
              className="bg-brand-sand! from-[#F4A261]! to-[#FFD166]! text-brand-slate! hover:shadow-[0_8px_30px_rgba(244,162,97,0.5)]!"
            >
              Read the Full Safety Guide →
            </Button>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <AnimateIn key={h.text} direction="left" delay={i * 100} duration={600}>
                <div className="flex items-start gap-3 bg-white/6 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 h-full">
                  <span className="text-2xl leading-none mt-0.5">{h.icon}</span>
                  <p className="text-white/80 text-sm font-medium leading-snug">{h.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
