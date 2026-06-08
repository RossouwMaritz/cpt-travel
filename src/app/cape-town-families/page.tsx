import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AffiliateSlot from '@/components/safety/AffiliateSlot'
import FaqSection from '@/components/ui/FaqSection'
import { viatorUrl } from '@/lib/viator'
import { faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Is Cape Town Safe for Families? Cape Town with Kids (2026 Guide)',
  description: 'Is Cape Town safe for families? Honest guide to visiting Cape Town with children — safe areas, best family activities, practical tips, and what to expect.',
  path: '/cape-town-families',
})

const faqs = [
  {
    question: 'Is Cape Town safe for families with children?',
    answer: 'Yes, Cape Town is an excellent and safe destination for families with children. The tourist corridor — V&A Waterfront, Sea Point, Camps Bay, and Constantia — is very safe and extremely child-friendly. The city offers a remarkable range of family experiences including African penguins, an award-winning aquarium, Table Mountain, and some of the most beautiful beaches in the world.',
  },
  {
    question: 'What are the best family-friendly areas to stay in Cape Town?',
    answer: 'The V&A Waterfront is the top choice for families — the Two Oceans Aquarium is on site, private security operates around the clock, and restaurants all have children\'s menus. Sea Point is excellent for families with young children thanks to its safe tidal pools and long flat promenade. Simon\'s Town puts you close to the Boulders Beach penguin colony.',
  },
  {
    question: 'What are the best things to do in Cape Town with kids?',
    answer: 'The top family activities in Cape Town are: Boulders Beach penguin colony (walk alongside African penguins), Two Oceans Aquarium at the V&A Waterfront, Table Mountain cable car, Cape Point and Cape of Good Hope day trip, Kirstenbosch Botanical Gardens, and a Hout Bay seal island boat trip. All are suitable for children of most ages.',
  },
  {
    question: 'What age is Cape Town suitable for with kids?',
    answer: 'Cape Town is suitable for children of all ages. Toddlers and young children enjoy the aquarium, tidal pools, and beaches. Children aged 5 and up love the penguins, cable car, and Cape Point baboons. Teenagers appreciate the range of adventure activities, surfing, and the general buzz of the city.',
  },
]

const areas = [
  {
    name: 'V&A Waterfront',
    emoji: '⚓',
    why: 'The Two Oceans Aquarium is right on site — one of the best in Africa. Private security operates around the clock, restaurants all have children\'s menus, and everything is flat and easy to navigate with a pram or stroller. The harbour is endlessly fascinating for kids.',
    tip: 'Allow at least half a day for the aquarium alone. The predator exhibit and kelp forest are unmissable.',
  },
  {
    name: 'Sea Point',
    emoji: '🌊',
    why: 'The tidal pools along the Sea Point promenade are safe, shallow, and free — perfect for young children. The long flat promenade is great for bikes and scooters. Milton Pool is a public swimming pool right on the Atlantic with incredible views.',
    tip: 'The tidal pools are warmest in late summer (February–April). Go at low tide for the best experience.',
  },
  {
    name: 'Camps Bay',
    emoji: '🏖️',
    why: 'A wide white-sand beach with the Twelve Apostles as a backdrop. The shallow end of the beach is calm enough for young children in summer. Dozens of family-friendly restaurants line the strip. Easy to spend a full day here.',
    tip: 'The Atlantic is cold — bring wetsuits for younger children, or stick to paddling rather than swimming.',
  },
  {
    name: "Simon's Town",
    emoji: '🐧',
    why: 'Home to the Boulders Beach penguin colony — one of the most magical experiences in South Africa. The town itself has a charming Victorian main street, excellent seafood restaurants, and a quieter pace that suits families well.',
    tip: 'Combine Boulders with Cape Point on a full Peninsula day trip. Simon\'s Town also makes a great overnight stop.',
  },
]

const activities = [
  {
    name: 'Boulders Beach Penguins',
    emoji: '🐧',
    why: 'Walk alongside a colony of African penguins on a sheltered beach. One of the few places on earth you can get this close to penguins in the wild.',
    tip: 'Go early morning before tour buses arrive. Don\'t let children touch the penguins — their bites are painful.',
  },
  {
    name: 'Two Oceans Aquarium',
    emoji: '🦈',
    why: 'Sharks, sea turtles, a kelp forest, and an open touch pool for younger children. One of the best aquariums in Africa, right at the V&A Waterfront.',
    tip: 'Allow 2–3 hours. Check feeding times online before you visit — the shark feed is spectacular.',
  },
  {
    name: 'Table Mountain Cable Car',
    emoji: '⛰️',
    why: 'The rotating cable car gives 360° views on the way up. The summit is flat, safe, and utterly spectacular. Kids are mesmerised by the height and the views across the city.',
    tip: 'Book tickets online to skip the queue. Go early — cloud cover rolls in by midday most days.',
  },
  {
    name: 'Cape Point Day Trip',
    emoji: '🌊',
    why: 'Dramatic cliffs, baboons, the iconic lighthouse, and the feeling of being at the edge of the world. A full Peninsula road trip combining Cape Point with the penguins is the classic Cape Town family day out.',
    tip: 'Baboons are large and will approach vehicles and people for food. Never feed them and keep children close.',
  },
  {
    name: 'Kirstenbosch Gardens',
    emoji: '🌿',
    why: 'Enormous gardens set on the slopes of Table Mountain with open lawns perfect for picnics. The Boomslang canopy walkway through the treetops is a highlight for children and adults alike.',
    tip: 'Summer sunset concerts on Sunday evenings are magical for older kids. Bring a blanket and food.',
  },
  {
    name: 'Seal Island Boat Trip',
    emoji: '⛵',
    why: 'A short boat trip from Hout Bay harbour to Duiker Island to see hundreds of Cape fur seals basking on the rocks. Thrilling for children — seals are curious and come close to the boat.',
    tip: 'The trip is about 30 minutes and suitable for all ages. Can be choppy — skip if anyone gets seasick easily.',
  },
]

const tips = [
  { heading: 'Sun protection is non-negotiable', body: 'UV intensity in Cape Town is extreme year-round, not just in summer. High-factor sunscreen, hats, and rash vests for beach days are essential for children.' },
  { heading: 'Car seats', body: 'Bring your own or arrange with your car hire company well in advance. Supply is limited. Uber does not provide car seats — you\'ll need to bring your own if using Uber with young children.' },
  { heading: 'Keep kids close in busy spots', body: 'Phone snatching targets distracted parents at markets and tourist attractions. Keep children\'s bags zipped and phones out of small hands in crowded areas.' },
  { heading: 'Baboons are not friendly', body: 'The baboons at Cape Point and along the Cape Peninsula are wild, large, and aggressive around food. Never let children approach them or hold food near them.' },
  { heading: 'Swimming: Atlantic vs False Bay', body: 'The Atlantic (Camps Bay, Clifton) is cold with strong currents. False Bay (Simon\'s Town, Fish Hoek) is significantly warmer and calmer — better for young swimmers.' },
  { heading: 'Pram and stroller accessibility', body: 'The V&A Waterfront and Kirstenbosch are both fully pram-accessible. Cape Point involves some walking on uneven terrain — a carrier is easier than a pram for young children.' },
  { heading: 'Book in advance', body: 'Table Mountain cable car, Boulders Beach, and Robben Island all sell out — often weeks ahead in peak season. Book online before you arrive.' },
  { heading: 'Eating with kids', body: 'Cape Town is extremely family-friendly when it comes to dining. Almost all restaurants in the tourist corridor have children\'s menus and high chairs. The V&A Waterfront has the most options in one place.' },
]

export default function CapeTownFamiliesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <PageHero
        label="Cape Town"
        title="Cape Town with Families"
        subtitle="Penguins, cable cars, whale watching, world-class beaches. Cape Town is one of the best family destinations in Africa — here's how to do it right."
        gradient="linear-gradient(135deg, #0a1628 0%, #F4A261 100%)"
      />

      <SectionWrapper>
        {/* Honest answer */}
        <AnimateIn direction="up">
          <div className="rounded-2xl bg-brand-mist border border-brand-ocean/20 p-6 sm:p-8 my-8">
            <p className="text-xs font-semibold text-brand-ocean/60 uppercase tracking-wider mb-3">The honest answer</p>
            <p className="text-lg font-medium text-brand-slate leading-relaxed">
              <strong>Yes — Cape Town is an excellent family destination.</strong> The tourist corridor is safe, the city is extremely child-friendly, and the range of experiences available — penguins, a world-class aquarium, Table Mountain, wildlife, beaches — makes it one of the best family trips in Africa. With a little planning, it works brilliantly for children of all ages.
            </p>
          </div>
        </AnimateIn>

        {/* Best areas */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-2">Best Areas for Families</h2>
          <p className="text-gray-500 mb-6">Where to base yourself depends on the ages of your children and what you want to prioritise.</p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {areas.map((a, i) => (
            <AnimateIn key={a.name} direction="up" delay={i * 60}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{a.emoji}</span>
                  <h3 className="font-display text-lg font-bold text-brand-slate">{a.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{a.why}</p>
                <div className="bg-brand-mist rounded-xl px-4 py-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">Tip: </span>
                  <span className="text-sm text-gray-600">{a.tip}</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Activities */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-2">Top Family Activities</h2>
          <p className="text-gray-500 mb-6">These are the experiences children remember for years.</p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {activities.map((a, i) => (
            <AnimateIn key={a.name} direction="up" delay={i * 50}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{a.emoji}</span>
                  <h3 className="font-display font-semibold text-brand-slate">{a.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{a.why}</p>
                <p className="text-xs text-brand-ocean font-medium">→ {a.tip}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn direction="up">
          <div className="mb-10 mt-4">
            <Button href="/attractions" variant="secondary">See All Attractions →</Button>
          </div>
        </AnimateIn>

        <AffiliateSlot
          slotId="family-tours"
          variant="tour"
          title="Book Family-Friendly Cape Town Tours"
          description="Skip the queues and let a guide handle the logistics — perfect for families with young children."
          ctaText="Browse Family Tours on Viator"
          ctaHref={viatorUrl('Cape Town family tour kids', 'families-tours')}
          enabled={true}
        />

        {/* Family safety tips */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-6 mt-4">Family Safety Tips</h2>
          <div className="space-y-3 mb-10">
            {tips.map((t, i) => (
              <div key={t.heading} className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-ocean text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-brand-slate text-sm">{t.heading}</p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{t.body}</p>
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
              Cape Town with kids is genuinely one of the great family holiday destinations. The combination of wildlife, natural wonder, beaches, and a safe, welcoming tourist infrastructure is hard to match anywhere in the world at this price point.
            </p>
            <p className="text-white/80 leading-relaxed">
              Plan around the activities, base yourself in the right area, and book the big-ticket experiences in advance. Your children will be talking about the penguins and Table Mountain for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button href="/attractions" variant="primary">Explore Attractions</Button>
              <Button href="/safety" variant="secondary">Full Safety Guide</Button>
            </div>
          </div>
        </AnimateIn>
      </SectionWrapper>
    </>
  )
}
