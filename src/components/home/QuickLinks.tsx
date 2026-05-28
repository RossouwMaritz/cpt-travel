import Card from '@/components/ui/Card'
import AnimateIn from '@/components/ui/AnimateIn'

const sections = [
  {
    title: 'Is It Safe?',
    description: 'Our comprehensive safety guide covers every neighborhood, practical tips, and the honest verdict on visiting Cape Town.',
    href: '/safety',
    accent: 'from-brand-ocean to-brand-sky',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Neighborhoods',
    description: 'From the V&A Waterfront to Camps Bay and Bo-Kaap — discover where to stay, eat, and explore.',
    href: '/neighborhoods',
    accent: 'from-brand-mountain to-brand-sky',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Attractions',
    description: 'Table Mountain, Cape Point, wine farms, penguin colonies — the best of what Cape Town has to offer.',
    href: '/attractions',
    accent: 'from-brand-sand to-[#FFD166]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Travel Tips',
    description: 'Practical advice on getting around, best times to visit, local customs, and making the most of your trip.',
    href: '/travel-tips',
    accent: 'from-[#7B2FBE] to-brand-sky',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
]

export default function QuickLinks() {
  return (
    <section id="explore" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,119,182,0.07),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <AnimateIn direction="up" className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ocean/60 mb-3">Your Guide</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-slate mb-4">
            Plan Your Cape Town Trip
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Everything you need to visit one of the world&apos;s most beautiful cities — with confidence.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sections.map((section, i) => (
            <AnimateIn key={section.href} direction="up" delay={i * 100}>
              <Card {...section} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
