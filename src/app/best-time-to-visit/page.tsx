import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AffiliateSlot from '@/components/safety/AffiliateSlot'
import { viatorUrl } from '@/lib/viator'
import { faqPageSchema } from '@/lib/schema'
import FaqSection from '@/components/ui/FaqSection'

const faqs = [
  {
    question: 'What is the best time to visit Cape Town?',
    answer: 'Autumn (March to May) is the best time to visit Cape Town for most travellers — warm weather, lower prices, fewer crowds, and wine harvest season in the Winelands. Summer (November to February) offers the best beach weather but with peak prices and the largest crowds.',
  },
  {
    question: 'What is Cape Town like in winter?',
    answer: 'Cape Town in winter (June to August) is cool and occasionally wet, but rarely cold by international standards. It is the cheapest and least crowded time to visit. Winter is also whale watching season, with Southern Right whales visible near Hermanus on the False Bay coast, about 90 minutes from Cape Town.',
  },
  {
    question: 'When is peak tourist season in Cape Town?',
    answer: 'Peak tourist season in Cape Town is November to February (southern hemisphere summer). December and January are the busiest and most expensive months. Book accommodation months in advance if visiting over Christmas and New Year.',
  },
  {
    question: 'When is whale watching season near Cape Town?',
    answer: 'Whale watching season near Cape Town runs from June to November, peaking in August and September. Southern Right whales calve in Walker Bay near Hermanus, about 90 minutes from Cape Town. The Hermanus Whale Festival takes place in September.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Best Time to Visit Cape Town (2026 Season Guide)',
  description: 'When is the best time to visit Cape Town? Honest breakdown by season — weather, crowds, prices, whale watching, and what to expect month by month.',
  path: '/best-time-to-visit',
})

const seasons = [
  {
    season: 'Summer',
    months: 'November – February',
    label: 'Peak season',
    emoji: '☀️',
    color: 'border-amber-300 bg-amber-50',
    weather: 'Hot and dry, 25–35°C. Strong south-easter wind (the "Cape Doctor") can pick up in January and February.',
    crowds: 'Very busy, especially December and January. Book everything months in advance.',
    price: 'Highest prices of the year. Accommodation doubles over Christmas and New Year.',
    bestFor: 'Beaches, swimming, outdoor dining, long evenings, the full Cape Town buzz.',
  },
  {
    season: 'Autumn',
    months: 'March – May',
    label: 'Best overall ⭐',
    emoji: '🍂',
    color: 'border-green-300 bg-green-50',
    weather: 'Warm and settled, 18–26°C. The wind drops, the sea calms, golden light all day.',
    crowds: 'Noticeably quieter after February. No queues. Restaurants easier to book.',
    price: 'Good value. Prices drop 20–40% from peak. Excellent deals on accommodation.',
    bestFor: 'Wine country (harvest season), hiking, photography, road trips, whale watching starts.',
  },
  {
    season: 'Winter',
    months: 'June – August',
    label: 'Budget + whales',
    emoji: '🐳',
    color: 'border-blue-300 bg-blue-50',
    weather: 'Cool and wet, 8–18°C. Atlantic storms roll in but rarely last all day. Snow on the Hex River mountains.',
    crowds: 'Quietest time of year. Major attractions have short or no queues.',
    price: 'Lowest prices. Fantastic value for flights and accommodation.',
    bestFor: 'Whale watching (Southern Right whales off Hermanus), hiking, wine, budget travel.',
  },
  {
    season: 'Spring',
    months: 'September – October',
    label: 'Great value',
    emoji: '🌸',
    color: 'border-purple-300 bg-purple-50',
    weather: 'Warming up, 14–23°C. Still some rain early September but clearing by October.',
    crowds: 'Low to moderate. October starts to pick up.',
    price: 'Good value before peak season pricing kicks in.',
    bestFor: 'Wildflowers (West Coast National Park), whale watching tail end, uncrowded beaches, hiking.',
  },
]

const months = [
  { month: 'January', temp: '26°C avg', crowds: 'Very high', highlights: 'Peak beach season, long days, Kirstenbosch concerts' },
  { month: 'February', temp: '26°C avg', crowds: 'Very high', highlights: 'Best beach weather, Cape Town Cycle Tour prep' },
  { month: 'March', temp: '24°C avg', crowds: 'High', highlights: 'Cape Town Cycle Tour, Jazz Festival, wine harvest' },
  { month: 'April', temp: '21°C avg', crowds: 'Moderate', highlights: 'Cape Town Jazz Festival, cooler evenings, vineyard colours' },
  { month: 'May', temp: '18°C avg', crowds: 'Low', highlights: 'Golden autumn light, uncrowded, whale season starts' },
  { month: 'June', temp: '15°C avg', crowds: 'Low', highlights: 'Whale watching (Hermanus), cheapest prices, cosy restaurants' },
  { month: 'July', temp: '14°C avg', crowds: 'Low', highlights: 'Whale peak season, Franschhoek Bastille Festival, lowest prices' },
  { month: 'August', temp: '15°C avg', crowds: 'Low', highlights: 'Whale watching, spring wildflowers beginning' },
  { month: 'September', temp: '17°C avg', crowds: 'Low–Mod', highlights: 'West Coast wildflowers, whale watching, warming up' },
  { month: 'October', temp: '20°C avg', crowds: 'Moderate', highlights: 'Beautiful weather, Kirstenbosch concerts resume' },
  { month: 'November', temp: '23°C avg', crowds: 'Mod–High', highlights: 'Beach season starts, summer vibe returns, Kirstenbosch concerts' },
  { month: 'December', temp: '25°C avg', crowds: 'Very high', highlights: 'Peak summer, Christmas, New Year, holiday atmosphere' },
]

const bestFor = [
  { title: 'Beaches & swimming', answer: 'November – February', detail: 'The Atlantic is at its warmest and the days are longest. Camps Bay and Clifton are at their best.' },
  { title: 'Hiking & outdoors', answer: 'March – May or September – October', detail: 'Cooler temperatures, clear skies, and the wind dies down. Table Mountain trails are at their best.' },
  { title: 'Whale watching', answer: 'July – October', detail: 'Southern Right whales calve in Walker Bay near Hermanus, just 90 minutes from Cape Town.' },
  { title: 'Budget travel', answer: 'June – August', detail: 'Flights and accommodation are at their cheapest. The city is quiet, restaurants are easy to book, and you\'ll have attractions to yourself.' },
]

const events = [
  { month: 'March', event: 'Cape Town Cycle Tour', desc: 'One of the world\'s largest timed cycle races — 109km around the Cape Peninsula.' },
  { month: 'April', event: 'Cape Town International Jazz Festival', desc: 'Africa\'s biggest jazz festival, drawing international and local acts to the CTICC.' },
  { month: 'Nov – Apr', event: 'Kirstenbosch Summer Concerts', desc: 'Sunday evening concerts on the lawns of Kirstenbosch — a Cape Town institution. Bring a picnic.' },
  { month: 'Jul – Oct', event: 'Whale Season (Hermanus)', desc: 'Southern Right whales arrive to calve in Walker Bay. The Hermanus Whale Festival is in September.' },
  { month: 'July', event: 'Franschhoek Bastille Festival', desc: 'A weekend of wine, food, and French-themed festivities in the Franschhoek valley.' },
]

export default function BestTimeToVisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <PageHero
        label="Cape Town"
        title="Best Time to Visit"
        subtitle="Hot summers, gentle autumns, whale-watching winters. There's no wrong time — but the right time depends on what you're after."
        gradient="linear-gradient(135deg, #0a1628 0%, #00B4D8 100%)"
      />

      <SectionWrapper>
        {/* Quick answer */}
        <AnimateIn direction="up">
          <div className="rounded-2xl bg-brand-mist border border-brand-ocean/20 p-6 sm:p-8 my-8">
            <p className="text-xs font-semibold text-brand-ocean/60 uppercase tracking-wider mb-3">The short answer</p>
            <p className="text-lg font-medium text-brand-slate leading-relaxed">
              <strong>Autumn (March–May) is the sweet spot</strong> for most visitors. The summer crowds have gone, the heat is gentler, wine country is at harvest, and prices drop significantly. If you can only go in summer, you&apos;ll still have a wonderful trip — just book everything well in advance.
            </p>
          </div>
        </AnimateIn>

        {/* Season cards */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-6">Season by Season</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {seasons.map((s, i) => (
            <AnimateIn key={s.season} direction="up" delay={i * 60}>
              <div className={`rounded-2xl border-l-4 p-5 h-full ${s.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{s.emoji}</span>
                    <div>
                      <p className="font-display font-bold text-gray-800">{s.season}</p>
                      <p className="text-xs text-gray-500">{s.months}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 text-right">{s.label}</span>
                </div>
                <dl className="space-y-2 text-sm">
                  <div><dt className="font-semibold text-gray-700 inline">Weather: </dt><dd className="inline text-gray-600">{s.weather}</dd></div>
                  <div><dt className="font-semibold text-gray-700 inline">Crowds: </dt><dd className="inline text-gray-600">{s.crowds}</dd></div>
                  <div><dt className="font-semibold text-gray-700 inline">Prices: </dt><dd className="inline text-gray-600">{s.price}</dd></div>
                  <div><dt className="font-semibold text-gray-700 inline">Best for: </dt><dd className="inline text-gray-600">{s.bestFor}</dd></div>
                </dl>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Month-by-month table */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">Month by Month</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-mist border-b border-gray-100">
                  <th className="text-left p-4 font-semibold text-brand-slate">Month</th>
                  <th className="text-left p-4 font-semibold text-brand-slate">Avg temp</th>
                  <th className="text-left p-4 font-semibold text-brand-slate hidden sm:table-cell">Crowds</th>
                  <th className="text-left p-4 font-semibold text-brand-slate">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => (
                  <tr key={m.month} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 font-medium text-brand-slate whitespace-nowrap">{m.month}</td>
                    <td className="p-4 text-gray-600 whitespace-nowrap">{m.temp}</td>
                    <td className="p-4 text-gray-600 hidden sm:table-cell">{m.crowds}</td>
                    <td className="p-4 text-gray-500">{m.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <AffiliateSlot
          slotId="best-time-tours"
          variant="tour"
          title="Browse Cape Town Tours by Season"
          description="Find the best experiences for your travel dates — guided hikes, whale watching, wine tours, and more."
          ctaText="See Tours on Viator"
          ctaHref={viatorUrl('Cape Town tours', 'best-time-page')}
          enabled={true}
        />

        {/* Best for grid */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-6 mt-4">Best Time For...</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {bestFor.map((b, i) => (
            <AnimateIn key={b.title} direction="up" delay={i * 60}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 h-full">
                <p className="font-display font-bold text-brand-slate mb-1">{b.title}</p>
                <p className="text-brand-ocean font-semibold text-sm mb-2">{b.answer}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{b.detail}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Events */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">Key Events</h2>
          <div className="space-y-3 mb-12">
            {events.map((e) => (
              <div key={e.event} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="flex-shrink-0 w-24 text-xs font-bold text-brand-ocean pt-0.5">{e.month}</div>
                <div>
                  <p className="font-semibold text-brand-slate text-sm">{e.event}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <FaqSection faqs={faqs} />

        {/* Verdict */}
        <AnimateIn direction="up">
          <div className="rounded-2xl bg-gradient-to-br from-brand-slate to-[#2d4a6b] text-white p-6 sm:p-8 mb-8">
            <h2 className="font-display text-2xl font-bold mb-3">The Verdict</h2>
            <p className="text-white/80 leading-relaxed mb-2">
              March, April, and May are the months we&apos;d choose for a first visit — warm enough for everything, without the summer madness or prices. October and November are a close second. If your dates are fixed, don&apos;t stress: Cape Town delivers in every season.
            </p>
            <p className="text-white/80 leading-relaxed">
              Whatever time of year you visit, book Table Mountain and Robben Island tickets in advance. These sell out year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button href="/safety" variant="primary">Read the Safety Guide</Button>
              <Button href="/attractions" variant="secondary">Top Attractions</Button>
            </div>
          </div>
        </AnimateIn>
      </SectionWrapper>
    </>
  )
}
