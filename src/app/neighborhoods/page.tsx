import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Cape Town Neighborhoods — Where to Stay and Explore',
  description: 'A guide to Cape Town\'s best neighborhoods — V&A Waterfront, Camps Bay, Sea Point, Bo-Kaap, Woodstock, and more. Find out where to stay, eat, and explore.',
  path: '/neighborhoods',
})

const neighborhoods = [
  {
    name: 'V&A Waterfront',
    tag: 'Tourist hub',
    tagColor: 'bg-blue-100 text-blue-800',
    safety: 5,
    vibe: 'Cape Town\'s iconic working harbour turned world-class destination. Think upmarket shopping, restaurants with mountain views, and the departure point for Robben Island.',
    bestFor: 'First-timers, families, dining, shopping',
    highlights: ['Two Oceans Aquarium', 'Robben Island ferry', 'Nobel Square', 'Zeitz MOCAA museum', 'Sunset cocktails on the harbour'],
    stay: 'The best base if budget isn\'t a concern. Hotels here are top-tier.',
  },
  {
    name: 'Sea Point',
    tag: 'Local favourite',
    tagColor: 'bg-green-100 text-green-800',
    safety: 4,
    vibe: 'A vibrant, cosmopolitan suburb along the Atlantic. The promenade stretches for kilometres — locals jog, swim in the tidal pools, and eat at dozens of excellent restaurants.',
    bestFor: 'Couples, solo travellers, restaurant lovers',
    highlights: ['Sea Point Promenade', 'Tidal pools (free swimming)', 'Regent Road restaurants', 'Milton Pool', 'Sunday farmers\' market'],
    stay: 'Great value compared to Camps Bay. Excellent Airbnb options with ocean views.',
  },
  {
    name: 'Camps Bay',
    tag: 'Glamorous',
    tagColor: 'bg-amber-100 text-amber-800',
    safety: 5,
    vibe: 'The glamorous Atlantic beach suburb. White sandy beach backed by the Twelve Apostles mountain range, lined with buzzing restaurants and bars. Pure Cape Town postcard.',
    bestFor: 'Beach lovers, sundowner seekers, special occasions',
    highlights: ['Camps Bay Beach', 'Bakoven tidal pools', 'The Strip (restaurants)', 'Chapman\'s Peak day trip', 'Sunset from the beach'],
    stay: 'Premium pricing but worth it in summer. Book well in advance for December/January.',
  },
  {
    name: 'City Bowl & CBD',
    tag: 'Historic centre',
    tagColor: 'bg-slate-100 text-slate-800',
    safety: 3,
    vibe: 'The commercial heart of Cape Town, flanked by Devil\'s Peak, Lion\'s Head, and Signal Hill. Home to museums, galleries, Long Street nightlife, and the Bo-Kaap on its slopes.',
    bestFor: 'Culture, history, nightlife, budget options',
    highlights: ['Long Street', 'Bo-Kaap (walks)', 'Castle of Good Hope', 'Company\'s Garden', 'Kloof Street restaurants'],
    stay: 'Lots of options at various price points. Use Uber at night rather than walking.',
  },
  {
    name: 'Green Point & De Waterkant',
    tag: 'Trendy village',
    tagColor: 'bg-teal-100 text-teal-800',
    safety: 4,
    vibe: 'De Waterkant is Cape Town\'s colourful, cobblestoned "village" — compact, walkable, full of boutique shops and restaurants. Green Point extends to Cape Town Stadium and the urban park.',
    bestFor: 'Boutique shopping, café culture, lively evenings',
    highlights: ['De Waterkant village streets', 'Cape Town Stadium area', 'Green Point Urban Park', 'Somerset Road restaurants', 'Weekend market'],
    stay: 'Great central location. Close to the V&A and City Bowl on foot.',
  },
  {
    name: 'Bo-Kaap',
    tag: 'Cultural gem',
    tagColor: 'bg-rose-100 text-rose-800',
    safety: 3,
    vibe: 'One of Cape Town\'s most photogenic neighbourhoods — steep cobblestone streets lined with brightly painted houses. Home to the Cape Malay community for over 200 years.',
    bestFor: 'Photography, culture, Cape Malay cuisine',
    highlights: ['Iconic painted houses', 'Bo-Kaap Museum', 'Cape Malay cooking classes', 'Wale Street mosque', 'Stunning Signal Hill views'],
    stay: 'Not the best area to stay in; better visited on a day trip from Sea Point or the V&A.',
  },
  {
    name: 'Woodstock',
    tag: 'Creative quarter',
    tagColor: 'bg-orange-100 text-orange-800',
    safety: 3,
    vibe: 'Cape Town\'s rapidly gentrifying creative district. Street art, design studios, craft breweries, and the Old Biscuit Mill market share space with older industrial buildings.',
    bestFor: 'Art, food markets, craft beer, design',
    highlights: ['The Old Biscuit Mill (Saturdays)', 'Street art murals', 'Neighbourgoods Market', 'Craft breweries', 'Independent coffee shops'],
    stay: 'Fine for the adventurous. Take Uber at night. Best visited from a base elsewhere.',
  },
  {
    name: 'Constantia',
    tag: 'Wine valley',
    tagColor: 'bg-purple-100 text-purple-800',
    safety: 5,
    vibe: 'Cape Town\'s prestigious southern suburb, nestled in the Constantia Valley. Home to some of South Africa\'s oldest wine estates, lush gardens, and excellent restaurants among the vines.',
    bestFor: 'Wine tasting, families, fine dining, relaxation',
    highlights: ['Groot Constantia wine estate', 'Steenberg Vineyards', 'Buitenverwachting', 'Kirstenbosch (nearby)', 'Constantia Village shopping'],
    stay: 'Ideal for those who prefer quiet and green over beach and buzz. Self-catering options are excellent.',
  },
  {
    name: 'Simon\'s Town & False Bay',
    tag: 'Coastal escape',
    tagColor: 'bg-cyan-100 text-cyan-800',
    safety: 4,
    vibe: 'A historic naval town on the False Bay coast, 40 minutes from the city. Charming Victorian architecture, whale watching in season, and home to the famous Boulders penguin colony.',
    bestFor: 'Wildlife, day trips, whale watching, history',
    highlights: ['Boulders Beach penguins', 'Whale watching (July–Nov)', 'Simon\'s Town Museum', 'Cape Point day trip', 'Jubilee Square seafood restaurants'],
    stay: 'Great for a night or two as part of a Cape Peninsula road trip.',
  },
]

function SafetyDots({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < rating ? 'bg-brand-ocean' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        label="Cape Town"
        title="Neighborhoods Guide"
        subtitle="Where to stay, what to expect, and what not to miss in every corner of the city."
        gradient="linear-gradient(135deg, #2D6A4F 0%, #0077B6 100%)"
      />

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateIn direction="up">
          <p className="text-lg text-gray-600 leading-relaxed">
            Cape Town is a city of distinct neighbourhoods, each with its own character, price point, and appeal. Whether you want to be steps from the beach, in the heart of the creative scene, or surrounded by wine estates — there&apos;s a corner of this city that fits. Here&apos;s an honest breakdown of where to go and why.
          </p>
        </AnimateIn>
      </div>

      {/* Neighborhood cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        {neighborhoods.map((n, i) => (
          <AnimateIn key={n.name} direction="up" delay={i * 60} threshold={0.06}>
            <article className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-display text-2xl font-bold text-brand-slate">{n.name}</h2>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${n.tagColor}`}>{n.tag}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Safety</span>
                      <SafetyDots rating={n.safety} />
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">{n.vibe}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-brand-mist rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-ocean mb-2">Best for</p>
                    <p className="text-sm text-gray-700">{n.bestFor}</p>
                  </div>
                  <div className="bg-brand-mist rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-ocean mb-2">Where to stay</p>
                    <p className="text-sm text-gray-700">{n.stay}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Highlights</p>
                  <ul className="flex flex-wrap gap-2">
                    {n.highlights.map((h) => (
                      <li key={h} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-brand-mist py-12 px-4 text-center">
        <AnimateIn direction="up">
          <p className="text-gray-500 mb-4">Not sure which area is safe for tourists?</p>
          <Button href="/safety#neighborhoods" variant="primary">See Full Safety Ratings →</Button>
        </AnimateIn>
      </div>
    </>
  )
}
