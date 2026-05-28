import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AffiliateSlot from '@/components/safety/AffiliateSlot'
import { viatorUrl } from '@/lib/viator'

export const metadata: Metadata = buildMetadata({
  title: 'Is Cape Town Safe for Solo Female Travellers? (2026 Guide)',
  description: 'Honest safety advice for solo female travellers in Cape Town — safe areas, transport, nightlife, beaches, and practical tips from someone who knows the city.',
  path: '/solo-female-travel',
})

const bases = [
  {
    name: 'Sea Point',
    emoji: '🌊',
    why: 'The best all-round base for solo women. The promenade is busy day and night with locals and tourists. Regent Road has dozens of restaurants in a compact, walkable strip. It\'s social without being overwhelming, and Uber is always available.',
    vibe: 'Cosmopolitan, local, relaxed',
    safety: 'Very safe on the promenade and main streets. Use Uber for anything more than a few blocks after dark.',
  },
  {
    name: 'V&A Waterfront',
    emoji: '⚓',
    why: 'Maximum security, constant foot traffic, private security everywhere. You\'ll never feel isolated. Ideal for a first trip or if you want total peace of mind. Easy to meet other travellers at the many restaurants and hotels.',
    vibe: 'Touristy, upmarket, very social',
    safety: 'The safest area in Cape Town, any time of day or night.',
  },
  {
    name: 'De Waterkant',
    emoji: '🏘️',
    why: 'A compact, cobblestoned village that feels like a small town inside the city. Everything is walkable within the village itself. Excellent café and restaurant scene on Somerset Road. Easy Uber access back to accommodation.',
    vibe: 'Boutique, intimate, lively evenings',
    safety: 'Very safe within the village. Stick to the main streets at night.',
  },
]

const tips = [
  'Download Uber and Bolt before you arrive — have both apps ready.',
  'Share your live location with someone at home whenever you go out.',
  'Stay in Sea Point, De Waterkant, or the V&A Waterfront for your first visit.',
  'Don\'t walk alone after dark — even in safe areas. Uber is cheap and always available.',
  'Keep your phone in your bag on busy streets. Phone snatching is the most common crime.',
  'Book a guided tour for township visits — never go independently, regardless of confidence.',
  'Trust your instincts. If somewhere feels off, leave. Locals will tell you honestly if a place is fine.',
  'Carry a small crossbody day bag, not a large backpack or handheld purse, when exploring.',
  'Use your accommodation safe for your passport, spare cash, and anything you don\'t need that day.',
  'The Cape Doctor (the strong south-easter summer wind) makes beach days rough — check the forecast.',
  'Meet people at your guesthouse or on group tours — solo doesn\'t have to mean alone.',
  'On Camps Bay beach after dark: sit at a restaurant on the strip, don\'t walk the beachfront alone.',
]

export default function SoloFemaleTravelPage() {
  return (
    <>
      <PageHero
        label="Cape Town"
        title="Solo Female Travel"
        subtitle="Thousands of women travel Cape Town solo every year. Here's the honest, practical guide to doing it safely and confidently."
        gradient="linear-gradient(135deg, #0a1628 0%, #2D6A4F 100%)"
      />

      <SectionWrapper>
        {/* Honest answer */}
        <AnimateIn direction="up">
          <div className="rounded-2xl bg-brand-mist border border-brand-ocean/20 p-6 sm:p-8 my-8">
            <p className="text-xs font-semibold text-brand-ocean/60 uppercase tracking-wider mb-3">The honest answer</p>
            <p className="text-lg font-medium text-brand-slate leading-relaxed">
              <strong>Yes — Cape Town is safe for solo female travellers</strong>, provided you stay in the tourist corridor and apply the same urban awareness you&apos;d use in any major city. It&apos;s not risk-free (nowhere is), but with the right knowledge it&apos;s very manageable. Thousands of women do it every year and have wonderful, incident-free trips.
            </p>
            <p className="mt-3 text-gray-600">
              The risks that exist are mostly opportunistic petty theft and the occasional unwanted attention — not the violent crime that shapes Cape Town&apos;s headline reputation. That violence is concentrated in areas tourists have no reason to visit. In the tourist corridor, the picture is much closer to a European city.
            </p>
          </div>
        </AnimateIn>

        {/* Where to base yourself */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-2">Where to Base Yourself</h2>
          <p className="text-gray-500 mb-6">These three areas consistently get the best feedback from solo female travellers.</p>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-4 mb-10">
          {bases.map((b, i) => (
            <AnimateIn key={b.name} direction="up" delay={i * 60}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{b.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-brand-slate">{b.name}</h3>
                  <span className="text-xs text-gray-400 italic">{b.vibe}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">{b.why}</p>
                <div className="bg-brand-mist rounded-xl px-4 py-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">Safety note: </span>
                  <span className="text-sm text-gray-600">{b.safety}</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn direction="up">
          <div className="mb-10">
            <Button href="/neighborhoods" variant="secondary">Full Neighborhoods Guide →</Button>
          </div>
        </AnimateIn>

        {/* Getting around */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">Getting Around Safely</h2>
        </AnimateIn>
        <AnimateIn direction="up" delay={60}>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-5">
              <p className="font-semibold text-brand-slate mb-1">Uber and Bolt — your default</p>
              <p className="text-gray-600 text-sm leading-relaxed">These are the de-facto standard and non-negotiable for solo travel after dark. Both are widely available, cheap, and trackable. Share your trip with a contact before getting in. Never accept a lift from someone who approaches you.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-5">
              <p className="font-semibold text-brand-slate mb-1">Rental car — great for day trips</p>
              <p className="text-gray-600 text-sm leading-relaxed">Excellent for the Cape Peninsula, Winelands, and West Coast. Lock doors while driving, don&apos;t leave anything visible in a parked car, and avoid driving into unfamiliar areas after dark.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-5">
              <p className="font-semibold text-brand-slate mb-1">Walking — daytime only</p>
              <p className="text-gray-600 text-sm leading-relaxed">Fine during the day in tourist areas. Sea Point promenade, the V&A, De Waterkant, and Camps Bay strip are all comfortable to walk. After dark, use Uber rather than walking even short distances.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-5">
              <p className="font-semibold text-brand-slate mb-1">Share your location</p>
              <p className="text-gray-600 text-sm leading-relaxed">Share live location via WhatsApp or Google Maps with someone at home when going out. It costs nothing and adds significant peace of mind for both of you.</p>
            </div>
          </div>
        </AnimateIn>

        <AffiliateSlot
          slotId="solo-female-tours"
          variant="tour"
          title="Explore Cape Town with a Guided Tour"
          description="Guided tours are one of the best ways to see Cape Town solo — you meet other travellers, stay safe, and get local knowledge you'd never find alone."
          ctaText="Browse Solo-Friendly Tours on Viator"
          ctaHref={viatorUrl('Cape Town guided tour small group', 'solo-female-tours')}
          enabled={true}
        />

        {/* Nightlife */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4 mt-4">Evenings and Nightlife</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cape Town has a vibrant after-dark scene and there&apos;s no reason to stay in every night. The key is knowing which areas work and having your exit sorted before you need it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { area: 'Camps Bay strip', verdict: '✓ Fine', note: 'Busy restaurant and bar scene. Sit on the strip, don\'t walk the beachfront alone after dark.' },
              { area: 'Sea Point promenade', verdict: '✓ Fine', note: 'Busy with people even at night. Stick to the main promenade path.' },
              { area: 'De Waterkant', verdict: '✓ Fine', note: 'Compact and walkable within the village. Very social.' },
              { area: 'V&A Waterfront', verdict: '✓ Fine', note: 'Open late, private security, totally comfortable.' },
              { area: 'Long Street late night', verdict: '⚠ Caution', note: 'Fun earlier in the evening; gets rougher after midnight. Stay alert.' },
              { area: 'City Bowl walking', verdict: '⚠ Caution', note: 'Use Uber rather than walking between venues at night.' },
            ].map((e) => (
              <div key={e.area} className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm text-brand-slate">{e.area}</p>
                  <span className="text-xs font-bold text-gray-500">{e.verdict}</span>
                </div>
                <p className="text-xs text-gray-500">{e.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            The golden rule: book your Uber <em>before</em> you leave a venue, not once you&apos;re standing outside. Go out with people you&apos;ve met at your guesthouse or hostel — it makes evenings much easier and more fun.
          </p>
        </AnimateIn>

        {/* Beach safety */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">Beach Safety</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cape Town&apos;s beaches are some of the best in the world and perfectly safe to enjoy solo — with a few sensible habits.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              'Never leave your bag unattended on the beach — put valuables in your accommodation safe before you go.',
              'Camps Bay, Clifton 4th, and Sea Point tidal pools are all busy and safe during the day.',
              'Avoid secluded beaches alone — save the hidden coves for when you\'re with others.',
              'Don\'t wear expensive jewellery or carry more cash than you need for the day.',
              'The Atlantic is cold year-round — check current and rip tide warnings before swimming.',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-gray-600">
                <span className="text-brand-ocean mt-0.5 flex-shrink-0 font-bold">→</span>
                <span className="text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>

        {/* Practical tips */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-6">12 Practical Tips</h2>
          <div className="space-y-3 mb-10">
            {tips.map((tip, i) => (
              <div key={tip} className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-ocean text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{tip}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Meeting people */}
        <AnimateIn direction="up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">Meeting People</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cape Town is an unusually social city and solo travel here rarely means lonely travel. A few ways to connect:
          </p>
          <ul className="space-y-2 mb-10">
            {[
              'Stay in a guesthouse or boutique hostel — the communal spaces are where connections happen.',
              'Book small-group guided tours — you\'ll reliably meet other solo travellers.',
              'The Old Biscuit Mill on Saturday mornings is one of the most sociable spots in the city.',
              'Kirstenbosch sunset concerts in summer are a shared experience where strangers talk easily.',
              'Cape Town has active solo travel groups on Facebook and Meetup — search before you go.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-ocean mt-0.5 flex-shrink-0">→</span>
                <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>

        {/* Verdict */}
        <AnimateIn direction="up">
          <div className="rounded-2xl bg-gradient-to-br from-brand-slate to-[#2d4a6b] text-white p-6 sm:p-8 mb-8">
            <h2 className="font-display text-2xl font-bold mb-3">The Verdict</h2>
            <p className="text-white/80 leading-relaxed mb-2">
              Cape Town is one of the best cities in Africa for solo female travel. The tourist corridor is genuinely safe, the city is social and welcoming, and the experiences on offer — Table Mountain, the Peninsula, wine country, the beaches — are worth every bit of the planning.
            </p>
            <p className="text-white/80 leading-relaxed">
              Take the precautions above seriously, base yourself in the right area, and you&apos;ll find Cape Town is a city that rewards solo travellers enormously.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button href="/neighborhoods" variant="primary">Choose Your Neighborhood</Button>
              <Button href="/safety" variant="secondary">Full Safety Guide</Button>
            </div>
          </div>
        </AnimateIn>
      </SectionWrapper>
    </>
  )
}
