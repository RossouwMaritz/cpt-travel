import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: 'Cape Town Attractions — Top Things to See and Do',
  description: 'The best things to do in Cape Town — Table Mountain, Cape Point, Boulders Beach penguins, Robben Island, wine farms, Kirstenbosch, and more.',
  path: '/attractions',
})

const categories = ['All', 'Nature', 'History', 'Beaches', 'Wine', 'Wildlife'] as const

const attractions = [
  {
    name: 'Table Mountain',
    category: 'Nature',
    emoji: '⛰️',
    duration: 'Half day',
    price: 'R390–R430 (cable car)',
    mustSee: true,
    description: 'The defining icon of Cape Town — a flat-topped mountain rising 1,086m above the city. Take the rotating cable car to the summit for 360° views across the Cape Peninsula, or hike up one of several trails.',
    tips: [
      'Book cable car tickets online to skip the queue.',
      'Go early morning — clouds roll in by midday in summer.',
      'The Platteklip Gorge hike takes about 2 hours up.',
      'Check the wind forecast — the cable car closes on very windy days.',
    ],
    practical: 'Cable car runs daily weather permitting. Last car down is at 18:00 in winter, later in summer.',
  },
  {
    name: 'Cape Point & Cape of Good Hope',
    category: 'Nature',
    emoji: '🌊',
    duration: 'Full day',
    price: 'R353 park entry',
    mustSee: true,
    description: 'The dramatic southwestern tip of the African continent. Towering cliffs, crashing Atlantic swells, resident baboons, and the iconic lighthouse. Part of the Table Mountain National Park — combine with a Cape Peninsula road trip.',
    tips: [
      'Drive the Chapman\'s Peak route on the way there (toll road).',
      'Don\'t feed or approach the baboons — they are large and aggressive.',
      'The funicular up to the lighthouse saves a steep walk.',
      'Stop at Boulders Beach (penguins) and Hout Bay on the same trip.',
    ],
    practical: 'About 70km from the city centre. Allow a full day. Most people hire a car or join a guided tour.',
  },
  {
    name: 'Boulders Beach Penguins',
    category: 'Wildlife',
    emoji: '🐧',
    duration: '2 hours',
    price: 'R220 entry',
    mustSee: true,
    description: 'A sheltered beach near Simon\'s Town is home to a thriving colony of African penguins — one of the few places on earth you can walk alongside these birds on a beach. Utterly charming.',
    tips: [
      'Go in the morning before tour buses arrive.',
      'Don\'t touch the penguins — their bites are surprisingly painful.',
      'The best penguin-watching is from the boardwalk at Foxy Beach.',
      'Combine with Cape Point on a full Peninsula day.',
    ],
    practical: 'In Simon\'s Town, about 40km from the city. Drive or take the train from Cape Town Station.',
  },
  {
    name: 'Robben Island',
    category: 'History',
    emoji: '🏛️',
    duration: 'Half day',
    price: 'R600 (ferry + tour)',
    mustSee: true,
    description: 'The island where Nelson Mandela spent 18 of his 27 prison years. The tour includes a former political prisoner as guide and a visit to Mandela\'s cell. One of the most moving experiences in South Africa.',
    tips: [
      'Book weeks in advance — it sells out constantly.',
      'The ferry ride takes 30 minutes and can be rough in bad weather.',
      'Allow at least half a day including travel.',
      'The tour guides\' personal accounts are extraordinary — listen closely.',
    ],
    practical: 'Ferries depart from the V&A Waterfront. Book on the official Robben Island website only.',
  },
  {
    name: 'Kirstenbosch Botanical Gardens',
    category: 'Nature',
    emoji: '🌿',
    duration: '3 hours',
    price: 'R220 entry',
    mustSee: false,
    description: 'One of the great botanical gardens of the world, set on the eastern slopes of Table Mountain. The Boomslang canopy walkway weaves through the treetops. Summer sunset concerts on the lawns are a Cape Town institution.',
    tips: [
      'Summer concerts (Nov–Apr) on Sunday evenings are unmissable — bring a picnic.',
      'The canopy walkway is included in admission.',
      'You can hike up from Kirstenbosch directly onto the Table Mountain trails.',
      'The fynbos section is uniquely South African — unlike anything you\'ve seen.',
    ],
    practical: 'In Newlands, about 15 minutes from the city. Open daily from 08:00.',
  },
  {
    name: "Chapman's Peak Drive",
    category: 'Nature',
    emoji: '🛣️',
    duration: '1 hour (drive only)',
    price: 'R65 toll',
    mustSee: false,
    description: "One of the world's most spectacular coastal drives — a narrow road carved into a cliff face above the Atlantic, with views that are genuinely jaw-dropping. Often featured in international car commercials.",
    tips: [
      'Drive it en route to Cape Point for maximum scenery.',
      'Stop at the various viewpoints — don\'t try to photograph while driving.',
      'The road can close after heavy rain — check before you go.',
      'Sunset from the summit viewpoints is spectacular.',
    ],
    practical: 'Between Hout Bay and Noordhoek on the Cape Peninsula. Toll applies in both directions.',
  },
  {
    name: 'Stellenbosch Wine Estates',
    category: 'Wine',
    emoji: '🍷',
    duration: 'Full day',
    price: 'Variable (tasting fees R80–R250 per estate)',
    mustSee: false,
    description: 'South Africa\'s premier wine region, about 50km from Cape Town. Historic Cape Dutch estates, world-class Cabernet Sauvignon and Chenin Blanc, and some of the best food-and-wine pairings you\'ll find anywhere.',
    tips: [
      'Book a driver or use a wine tour operator — don\'t drink and drive.',
      'Must-visit estates: Spier, Delaire Graff, Tokara, Jordan.',
      'Combine with Franschhoek (30 minutes away) for a full day.',
      'Book restaurant lunches at estates well in advance.',
    ],
    practical: 'About 50km east of Cape Town on the N2/R44. Uber is not reliable here — book a driver.',
  },
  {
    name: 'Franschhoek',
    category: 'Wine',
    emoji: '🏰',
    duration: 'Full day',
    price: 'Variable',
    mustSee: false,
    description: 'A charming valley town founded by French Huguenots, now home to some of South Africa\'s finest restaurants and wine estates. The main street, Huguenot Road, is lined with excellent options.',
    tips: [
      'The Franschhoek Wine Tram is a fun way to hop between estates.',
      'Book lunch at The Test Kitchen Pop-Up, La Petite Ferme, or Haute Cabrière well ahead.',
      'The valley is gorgeous in autumn when the vines turn.',
      'Stay overnight to avoid the drive back — the main street has lovely guesthouses.',
    ],
    practical: 'About 80km from Cape Town. 30 minutes from Stellenbosch.',
  },
  {
    name: 'Lion\'s Head',
    category: 'Nature',
    emoji: '🦁',
    duration: '3 hours',
    price: 'Free',
    mustSee: false,
    description: 'The conical peak that sits between Table Mountain and Signal Hill, offering some of the best views in Cape Town — including a unique angle on Table Mountain itself. A challenging but rewarding hike with chains and ladders near the summit.',
    tips: [
      'The full moon hike (monthly) is a Cape Town bucket-list experience — start at sunset.',
      'Start early to avoid crowds and afternoon heat.',
      'The chain section near the top requires some scrambling — not suitable for everyone.',
      'Parking at Signal Hill Road is limited — arrive before 08:00 or take an Uber.',
    ],
    practical: 'Trailhead on Signal Hill Road, off Kloof Nek Road. Free. Allow 2–3 hours return.',
  },
  {
    name: 'Hout Bay',
    category: 'Nature',
    emoji: '⛵',
    duration: '2–3 hours',
    price: 'Free (boat trips extra)',
    mustSee: false,
    description: 'A working fishing harbour set in a dramatic mountain-ringed bay, about 20 minutes from Camps Bay. The harbour market, fresh fish, and seal boat trips make it a great half-day stop on a Peninsula drive.',
    tips: [
      'Take a boat trip out to Duiker Island to see Cape fur seals up close.',
      'The Hout Bay Market (Thursdays and weekends) is excellent for local food.',
      'Fresh snoek from the harbour is a South African classic — try it smoked.',
      'The drive over Suikerbossie hill from Camps Bay has stunning views.',
    ],
    practical: '20 minutes from Camps Bay. Combine with Chapman\'s Peak and Cape Point.',
  },
]

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    Nature:  'bg-green-100 text-green-800',
    History: 'bg-amber-100 text-amber-800',
    Beaches: 'bg-blue-100 text-blue-800',
    Wine:    'bg-purple-100 text-purple-800',
    Wildlife:'bg-orange-100 text-orange-800',
  }
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors[category] ?? 'bg-gray-100 text-gray-600'}`}>
      {category}
    </span>
  )
}

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        label="Cape Town"
        title="Top Attractions"
        subtitle="Table Mountain. Penguins. Wine country. Cape Point. Here's everything worth seeing — and how to do each one right."
        gradient="linear-gradient(135deg, #0a1628 0%, #F4A261 100%)"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateIn direction="up">
          <p className="text-lg text-gray-600 leading-relaxed">
            Cape Town packs an extraordinary amount into a small geographic area. You can hike a World Heritage mountain in the morning, watch penguins at lunch, and taste award-winning wine by the afternoon. Here are the attractions that are genuinely worth your time — with honest advice on how to experience each one properly.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        {attractions.map((a, i) => (
          <AnimateIn key={a.name} direction="up" delay={i * 50} threshold={0.06}>
            <article className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{a.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-display text-xl font-bold text-brand-slate">{a.name}</h2>
                        {a.mustSee && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-ocean text-white">Must-see</span>
                        )}
                        <CategoryBadge category={a.category} />
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                        <span>⏱ {a.duration}</span>
                        <span>💰 {a.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">{a.description}</p>

                {/* Tips */}
                <div className="bg-brand-mist rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-ocean mb-3">Insider tips</p>
                  <ul className="space-y-2">
                    {a.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-brand-ocean mt-0.5 flex-shrink-0">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical info */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">Practical: </span>{a.practical}
                </p>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      <div className="bg-brand-mist py-12 px-4 text-center">
        <AnimateIn direction="up">
          <p className="text-gray-500 mb-4">Planning a safe trip around these attractions?</p>
          <Button href="/safety" variant="primary">Read Our Safety Guide →</Button>
        </AnimateIn>
      </div>
    </>
  )
}
