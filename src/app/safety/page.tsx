import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import SafetyHero from '@/components/safety/SafetyHero'
import SafetySection from '@/components/safety/SafetySection'
import RiskTable from '@/components/safety/RiskTable'
import TipsList from '@/components/safety/TipsList'
import AffiliateSlot from '@/components/safety/AffiliateSlot'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import { viatorUrl } from '@/lib/viator'
import { faqPageSchema } from '@/lib/schema'
import FaqSection from '@/components/ui/FaqSection'

const faqs = [
  {
    question: 'Is Cape Town safe for tourists?',
    answer: 'Yes, Cape Town is safe for tourists who stay in the tourist corridor — V&A Waterfront, City Bowl, Atlantic Seaboard, and Constantia. The vast majority of visitors have wonderful, incident-free trips. Basic urban awareness is all that is required.',
  },
  {
    question: 'Which areas of Cape Town are safe for tourists?',
    answer: 'The safest areas for tourists are the V&A Waterfront, Sea Point, Camps Bay, the City Bowl and De Waterkant, and Constantia. These areas have high foot traffic, private security, and low tourist-targeted crime.',
  },
  {
    question: 'What areas should tourists avoid in Cape Town?',
    answer: 'Tourists should avoid the Cape Flats townships independently. Exercise caution in parts of Woodstock, Salt River, and the CBD late at night. Township visits are safe and worthwhile when done with a reputable guided tour operator.',
  },
  {
    question: 'Is Cape Town safe at night?',
    answer: 'Cape Town is safe at night in the tourist corridor. Camps Bay strip, Sea Point promenade, De Waterkant, and the V&A Waterfront are all active and safe in the evenings. Use Uber rather than walking after dark, and pre-book your ride before leaving a venue.',
  },
  {
    question: 'What is the safest way to get around Cape Town?',
    answer: 'Uber and Bolt are the safest and most practical transport options for tourists in Cape Town. Both apps are widely available in the tourist corridor, prices are low by international standards, and trips are trackable. Never use unlicensed taxis that approach you on the street.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Is Cape Town Safe? An Honest 2026 Traveller\'s Guide',
  description: 'Everything tourists need to know about safety in Cape Town — safe areas, areas to avoid, crime context, 25 practical tips, and the honest verdict.',
  path: '/safety',
})

export default function SafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <SafetyHero />

      <SectionWrapper>
        <SafetySection id="honest-answer" heading="The Honest Answer" highlight>
          <p className="text-lg font-medium text-brand-slate">
            Short answer: <strong>Yes, Cape Town is safe for tourists</strong> — provided you stay in the right areas and exercise the same urban awareness you&apos;d use in any major city.
          </p>
          <p>
            Cape Town welcomes over 1.5 million international tourists every year. The vast majority have wonderful, incident-free trips. The city has some of the most spectacular scenery on the planet — Table Mountain, the Cape Peninsula, world-class beaches, and an extraordinary food and wine scene. None of that changes.
          </p>
          <p>
            What is true is that Cape Town has significant inequality and a serious crime problem in certain areas. Those areas are largely not where tourists go. Understanding the difference is everything.
          </p>
          <p>
            The key rule: <strong>stay in the tourist corridor</strong> (V&A Waterfront, City Bowl, Atlantic Seaboard, Constantia) and you will be as safe as you would be in most European cities. Wander far outside it without a guide, and the risk profile changes significantly.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button href="/solo-female-travel" variant="secondary">Solo Female Travel Guide →</Button>
            <Button href="/cape-town-families" variant="secondary">Cape Town with Families →</Button>
          </div>
        </SafetySection>

        <SafetySection id="crime-context" heading="Understanding Crime in Cape Town">
          <p>
            Cape Town has a reputation that sometimes overshadows the reality for visitors. Here&apos;s the context you need:
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Township crime vs tourist-area crime</h3>
          <p>
            The majority of Cape Town&apos;s violent crime is concentrated in the Cape Flats — a sprawling set of townships formed under apartheid. Gang warfare between rival groups drives most of the murder statistics. This violence is tragic, but it is <strong>not directed at tourists</strong> and occurs in areas tourists have no reason to visit.
          </p>
          <p>
            Tourist-area crime is a different category entirely: it&apos;s largely petty theft, phone snatching, and opportunistic bag grabs. Unpleasant if it happens to you, but it&apos;s the kind of crime you&apos;d encounter in Barcelona, Rome, or London. It&apos;s almost entirely preventable with basic awareness.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Global perspective</h3>
          <p>
            Cape Town&apos;s crime rate is often cited without context. By South African standards, it is safer than Johannesburg. By global standards, it sits in a similar bracket to cities in Latin America, parts of the US, and some Southern European cities — cities millions of tourists visit every year without incident.
          </p>
        </SafetySection>

        <div className="py-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-3">Neighbourhood Safety at a Glance</h2>
          <p className="text-gray-600 mb-2">Here&apos;s an honest breakdown of Cape Town&apos;s main areas:</p>
          <RiskTable />
        </div>

        <AffiliateSlot
          slotId="tour-operator-1"
          variant="tour"
          title="Book a Guided City Tour"
          description="See Cape Town safely with a knowledgeable local guide."
          ctaText="Browse Tours on Viator"
          ctaHref={viatorUrl('Cape Town tours', 'safety-city-tours')}
          enabled={true}
        />

        <SafetySection id="safe-areas" heading="Where Tourists Stay: The Safe Corridor">
          <p>
            The good news: the areas tourists want to be in are the safe areas. Here&apos;s what each looks like on the ground:
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">V&A Waterfront</h3>
          <p>
            Cape Town&apos;s premier tourist destination. It&apos;s essentially a gated precinct — private security, CCTV everywhere, and constant foot traffic. Walk here at any hour with complete confidence. The Table Mountain Aerial Cableway is nearby.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Atlantic Seaboard (Sea Point → Camps Bay)</h3>
          <p>
            This coastal strip is where most tourists and long-term visitors choose to stay. Sea Point has an amazing promenade, great restaurants, and a real community feel. Camps Bay is glamorous, beachside, and buzzing in summer evenings. Both are safe to walk during the day and in early evening when the strip is busy.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">City Bowl and De Waterkant</h3>
          <p>
            The city centre is very safe during business hours and has a growing after-dark restaurant scene on Kloof Street and in De Waterkant. The CBD can feel quieter and less comfortable on weekend nights and in some blocks — use Uber for late-night journeys rather than walking.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Constantia and the Winelands</h3>
          <p>
            The southern suburbs wine valley feels like a different world — well-maintained, quiet, very safe. Wine farm visits here are low-risk. Just arrange transport since Uber can be scarce.
          </p>
        </SafetySection>

        <SafetySection id="areas-to-avoid" heading="Areas to Approach Carefully">
          <p>
            Being honest means telling you about areas that require more caution:
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Woodstock and Salt River</h3>
          <p>
            These creative, gentrifying suburbs are popular with designers and foodies. During the day they&apos;re fine — the Old Biscuit Mill, for example, is excellent on Saturday mornings. After dark, some streets feel desolate and you should have your Uber destination sorted before you leave a venue.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Long Street at night</h3>
          <p>
            Long Street is Cape Town&apos;s famous nightlife strip and it&apos;s fun — but the later it gets, the more pick-pockets are active. Keep your phone in your pocket and your bag closed.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Townships (Langa, Khayelitsha, Cape Flats)</h3>
          <p>
            <strong>Never visit townships independently as a tourist.</strong> Full stop. This is not about prejudice — it&apos;s about navigating a complex social landscape without local knowledge. With a reputable guided tour, a township visit can be one of the most meaningful experiences of your trip. Book one.
          </p>
        </SafetySection>

        <AffiliateSlot
          slotId="local-guide-1"
          variant="local-guide"
          title="Township Tours with Local Guides"
          description="Experience authentic Cape Town with trusted local guides."
          ctaText="Find a Local Guide"
          ctaHref={viatorUrl('Cape Town township tour', 'safety-township')}
          enabled={true}
        />

        <SafetySection id="tips" heading="25 Safety Tips for Cape Town Visitors">
          <p>
            These are practical, field-tested tips — not alarmist warnings. Follow them and you&apos;ll have a smooth trip.
          </p>
          <TipsList />
        </SafetySection>

        <SafetySection id="transport" heading="Getting Around Safely">
          <h3 className="font-display font-semibold text-xl text-brand-slate mb-2">Uber and Bolt</h3>
          <p>
            These are the de-facto standard for tourist transport in Cape Town. Both are widely available in the tourist corridor. Prices are low by international standards. Always use the app — never a random unlicensed taxi that approaches you.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Rental Car</h3>
          <p>
            A car gives you freedom to explore the Peninsula, Winelands, and Cape Point at your own pace. The main risks: parking smash-and-grabs (keep nothing visible in the car) and traffic light (robot) stops in unfamiliar areas. Lock doors while driving. Park in guarded, paid lots.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">MyCiti Bus</h3>
          <p>
            Cape Town&apos;s public bus system is clean, air-conditioned, and reasonably reliable on key tourist routes (including Camps Bay and the V&A). It&apos;s safe to use. Less convenient than Uber but a legitimate option for budget travellers.
          </p>
          <h3 className="font-display font-semibold text-xl text-brand-slate mt-4 mb-2">Minibus Taxis</h3>
          <p>
            The primary transport for local commuters. As a tourist, we&apos;d recommend avoiding them — not because of crime, but because the system is complex to navigate, the driving can be hair-raising, and you&apos;ll stand out as someone who doesn&apos;t know the routes.
          </p>
        </SafetySection>

        <SafetySection id="night-safety" heading="Cape Town After Dark">
          <p>
            Cape Town has a vibrant nightlife and there&apos;s no need to be locked in your hotel room by sundown. Here&apos;s how to enjoy evenings safely:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Camps Bay strip</strong> — busy restaurant and bar scene, well-lit, safe until late in summer.</li>
            <li><strong>Sea Point promenade</strong> — popular with joggers and families even at night; stick to the main path.</li>
            <li><strong>Kloof Street</strong> — great restaurants and bars, generally busy and well-policed in the evening.</li>
            <li><strong>De Waterkant village</strong> — compact and walkable, vibrant café and bar scene.</li>
            <li><strong>V&A Waterfront</strong> — open late, private security, totally safe for evening meals.</li>
          </ul>
          <p className="mt-4">
            The rule for all evenings: arrange your Uber <em>before</em> you leave a venue, not once you&apos;re standing outside. And if you want to see live music or explore the nightlife scene, go with other people — don&apos;t wander unfamiliar streets solo at 2am.
          </p>
        </SafetySection>

        <AffiliateSlot
          slotId="tour-operator-2"
          variant="tour"
          title="Evening Tours and Experiences"
          description="Discover Cape Town's nightlife safely with organised tours."
          ctaText="Browse Evening Experiences"
          ctaHref={viatorUrl('Cape Town evening tour', 'safety-evening')}
          enabled={true}
        />

        <FaqSection faqs={faqs} />

        <SafetySection id="verdict" heading="The Verdict: Should You Visit?" highlight>
          <p className="text-lg font-medium text-brand-slate">
            <strong>Yes. Absolutely, unequivocally yes.</strong>
          </p>
          <p>
            Cape Town is one of the most spectacular cities on earth. Table Mountain rising behind the city bowl. The cold Atlantic crashing into white beaches. World-class restaurants, extraordinary wine, and some of the warmest hospitality you&apos;ll find anywhere. Penguins at Boulders Beach. The drive around Chapman&apos;s Peak. Sunsets from Signal Hill.
          </p>
          <p>
            None of the safety considerations above are reasons to skip this city — they are reasons to visit it intelligently. Every major city in the world has areas you&apos;d avoid and common sense rules to follow. Cape Town&apos;s are just a bit more clearly defined.
          </p>
          <p>
            Come prepared. Stay aware. Stick to the tourist corridor for most of your trip. Book a township tour with a good operator if you want to see the full picture of the city. Use Uber. Keep your phone in your pocket.
          </p>
          <p>
            Do all that, and you&apos;ll have one of the best trips of your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button href="/neighborhoods" variant="primary">
              Explore Neighborhoods
            </Button>
            <Button href="/attractions" variant="secondary">
              Top Attractions
            </Button>
          </div>
        </SafetySection>
      </SectionWrapper>
    </>
  )
}
