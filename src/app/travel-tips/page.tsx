import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import PageHero from '@/components/ui/PageHero'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: 'Cape Town Travel Tips — Practical Advice for Visitors',
  description: 'Everything you need to know before visiting Cape Town — best time to go, getting around, money, weather, language, SIM cards, local customs, and more.',
  path: '/travel-tips',
})

const sections = [
  {
    emoji: '📅',
    heading: 'Best Time to Visit',
    content: (
      <>
        <p>Cape Town has a Mediterranean climate — hot, dry summers and mild, wet winters. There&apos;s genuinely no bad time to visit, but the experience differs significantly by season.</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { season: 'Summer (Nov–Feb)', label: 'Peak season', desc: 'Hot, sunny, and busy. Beach weather at its best. Prices are highest, especially over Christmas/New Year. Book accommodation months ahead.', color: 'border-amber-300 bg-amber-50' },
            { season: 'Autumn (Mar–May)', label: 'Best overall', desc: 'Warm, less crowded, lower prices. The vineyards change colour. Long golden evenings. Our top pick for most visitors.', color: 'border-green-300 bg-green-50' },
            { season: 'Winter (Jun–Aug)', label: 'Budget-friendly', desc: 'Cooler and wetter, but not cold by most standards. Whale watching season on the False Bay coast. Lowest prices. Perfect for hiking.', color: 'border-blue-300 bg-blue-50' },
            { season: 'Spring (Sep–Oct)', label: 'Great value', desc: 'Wildflowers bloom across the Western Cape. Warming up, uncrowded, reasonable prices. The Namaqualand wildflower season is nearby.', color: 'border-purple-300 bg-purple-50' },
          ].map((s) => (
            <div key={s.season} className={`rounded-xl border-l-4 p-4 ${s.color}`}>
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm text-gray-800">{s.season}</p>
                <span className="text-xs font-bold text-gray-500">{s.label}</span>
              </div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button href="/best-time-to-visit" variant="secondary">Full Season Guide →</Button>
        </div>
      </>
    ),
  },
  {
    emoji: '🚗',
    heading: 'Getting Around',
    content: (
      <>
        <p>Transport is one of the most important practical questions for Cape Town visitors. Here&apos;s the honest breakdown:</p>
        <ul className="mt-4 space-y-4">
          {[
            { mode: 'Uber & Bolt', verdict: 'Recommended', desc: 'The default for tourists. Cheap, reliable, safe, and available throughout the tourist corridor. Download both apps before you arrive — Bolt is often cheaper.' },
            { mode: 'Rental car', verdict: 'Great for day trips', desc: 'Essential if you want to explore the Cape Peninsula, Winelands, or West Coast at your own pace. Lock doors while driving. Park in guarded lots only.' },
            { mode: 'MyCiti Bus', verdict: 'Good on key routes', desc: 'The city\'s public bus system is clean and cheap. Routes cover the Waterfront, Sea Point, Camps Bay, and the City Bowl. Pay with a myconnect card.' },
            { mode: 'Train (Southern Line)', verdict: 'Boulders Beach only', desc: 'The Southern Line to Simon\'s Town is a scenic ride and safe during daylight hours — useful for the penguin colony. Avoid trains at night.' },
            { mode: 'Minibus taxis', verdict: 'Not for tourists', desc: 'The main transport for locals. Cheap but the system is complex, the driving is aggressive, and you\'ll stand out. Stick to Uber.' },
          ].map((t) => (
            <li key={t.mode} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <span className={`inline-block w-2.5 h-2.5 rounded-full mt-1 ${t.verdict === 'Recommended' ? 'bg-green-500' : t.verdict === 'Not for tourists' ? 'bg-red-400' : 'bg-amber-400'}`} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-800">{t.mode}</span>
                  <span className="text-xs text-gray-400">{t.verdict}</span>
                </div>
                <p className="text-gray-600 text-sm mt-0.5">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    emoji: '💵',
    heading: 'Money & Costs',
    content: (
      <>
        <p>South Africa uses the South African Rand (ZAR). As of 2026, the exchange rate is approximately <strong>R18–R20 to the US Dollar</strong> and <strong>R22–R24 to the British Pound</strong>, making Cape Town very affordable for international visitors.</p>
        <div className="mt-4 space-y-3">
          <p><strong>Budget:</strong> You can eat well for R150–R250 per person at a mid-range restaurant. A craft beer costs around R45. A cable car ticket is R430. By European or American standards, almost everything feels cheap.</p>
          <p><strong>ATMs:</strong> Widely available at malls, banks, and the V&A Waterfront. Use ATMs inside shops or banks rather than on the street at night. Absa, Standard Bank, and FNB ATMs are most reliable.</p>
          <p><strong>Credit cards:</strong> Visa and Mastercard accepted almost everywhere. Amex less so. Always have some cash for smaller vendors and markets.</p>
          <p><strong>Tipping:</strong> Expected and important. Tip 10–15% at restaurants, R5–R10 per bag for hotel porters, and R20–R50 for car guards (the men who watch your car in parking lots — they depend on tips for income).</p>
          <p><strong>Bargaining:</strong> Not standard in shops. Fine at markets like Greenmarket Square — start at about half the asking price.</p>
        </div>
      </>
    ),
  },
  {
    emoji: '🗣️',
    heading: 'Language',
    content: (
      <>
        <p>South Africa has 11 official languages. In Cape Town, the primary languages are <strong>English</strong>, <strong>Afrikaans</strong>, and <strong>isiXhosa</strong>.</p>
        <p className="mt-3">The good news: <strong>English is spoken everywhere</strong> in the tourist areas. You will have no difficulty navigating the city, ordering food, or getting help. Signs, menus, and most public communication are in English.</p>
        <p className="mt-3">A few words of Afrikaans go down very well with locals:</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { word: 'Lekker', meaning: 'Great / nice / delicious' },
            { word: 'Braai', meaning: 'BBQ / grill' },
            { word: 'Howzit', meaning: 'How are you?' },
            { word: 'Just now', meaning: 'Eventually (be patient)' },
            { word: 'Now now', meaning: 'Soon (but not immediately)' },
            { word: 'Robot', meaning: 'Traffic light' },
          ].map((w) => (
            <div key={w.word} className="bg-brand-mist rounded-lg p-3">
              <p className="font-bold text-brand-ocean text-sm">{w.word}</p>
              <p className="text-xs text-gray-500 mt-0.5">{w.meaning}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    emoji: '📱',
    heading: 'Connectivity & SIM Cards',
    content: (
      <>
        <p>South Africa has good 4G LTE coverage across Cape Town and most tourist areas. Getting a local SIM card is easy and cheap — highly recommended for Uber access.</p>
        <ul className="mt-4 space-y-3">
          {[
            { tip: 'Buy a SIM at the airport', desc: 'Vodacom, MTN, and Telkom all have desks at Cape Town International. Bring your passport. A prepaid SIM with 10GB of data costs around R150–R200.' },
            { tip: 'Vodacom has the widest coverage', desc: 'Best for rural areas and the Cape Peninsula. MTN is also good in urban areas.' },
            { tip: 'eSIM is an option', desc: 'Services like Airalo offer eSIMs for South Africa that you can set up before you arrive. Convenient if your phone is eSIM compatible.' },
            { tip: 'Download offline maps', desc: 'Save Google Maps or Maps.me offline for the Cape Town area before you leave home. Useful if data runs out on a remote drive.' },
          ].map((t) => (
            <li key={t.tip} className="flex gap-3">
              <span className="text-brand-ocean flex-shrink-0 font-bold">→</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.tip}</p>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    emoji: '🌤️',
    heading: 'Weather & What to Pack',
    content: (
      <>
        <p>Cape Town&apos;s weather is famously changeable — locals say you can experience all four seasons in one day, and they&apos;re not entirely wrong. The Cape Doctor (a strong southeaster wind) can blow hard in summer. Always be prepared.</p>
        <div className="mt-4 space-y-2">
          {[
            'Light layers you can add or remove — even in summer evenings can be cool.',
            'A windproof jacket for Table Mountain and coastal drives.',
            'Good walking shoes or hiking boots if you plan to hike.',
            'Sunscreen (SPF 50+) — the UV index is extreme, even on cloudy days.',
            'A swimsuit — you\'ll want one even in winter for the tidal pools.',
            'Reef-safe sunscreen if you\'re snorkelling or diving.',
            'A small daypack for hikes and day trips.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-brand-ocean flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">Power sockets: South Africa uses the Type M three-pin plug (large round pins). Bring a universal adapter.</p>
      </>
    ),
  },
  {
    emoji: '🍽️',
    heading: 'Food & Drink',
    content: (
      <>
        <p>Cape Town has one of Africa&apos;s best restaurant scenes — a mix of Cape Malay cuisine, contemporary South African cooking, fresh seafood, and a world-class wine culture.</p>
        <div className="mt-4 space-y-3">
          <p><strong>Must-try dishes:</strong> Bobotie (Cape Malay curried mince with egg topping), braai (BBQ — a national institution), snoek (a local firm-fleshed fish, best smoked), biltong (dried cured meat), and bunny chow (curry in a hollowed-out bread loaf, a Durban import).</p>
          <p><strong>Cape Malay food:</strong> Bo-Kaap restaurants serve some of the most distinctive cooking in the country — mild, aromatic curries influenced by the Cape Malay community&apos;s Indonesian and Malaysian heritage.</p>
          <p><strong>Wine:</strong> Western Cape produces world-class wines. Chenin Blanc, Pinotage, and Cabernet Sauvignon are the ones to seek out. Wine by the glass is cheap by international standards — around R60–R100 for a good pour.</p>
          <p><strong>Water:</strong> Cape Town tap water is safe to drink and tastes good. You don&apos;t need to buy bottled water.</p>
          <p><strong>Coffee:</strong> The Cape Town coffee scene is excellent. Origin Coffee, Truth Coffee, and Rosetta are institutions. Expect speciality coffee standards across the city.</p>
        </div>
      </>
    ),
  },
  {
    emoji: '🤝',
    heading: 'Local Customs & Etiquette',
    content: (
      <>
        <ul className="space-y-3">
          {[
            { title: 'Car guards', desc: 'Men who watch your car in informal parking areas. They rely on tips — R10–R20 when you return is standard and appreciated.' },
            { title: 'Braai culture', desc: 'If a South African invites you to a braai (BBQ), go. It\'s the national social institution. Bring something to drink.' },
            { title: 'Greeting culture', desc: 'South Africans are warm and friendly. A genuine greeting goes a long way — don\'t be in a rush, take a moment.' },
            { title: '"Just now" vs "now now"', desc: '"Just now" means eventually. "Now now" means soon but not immediately. Neither means immediately. Factor this into any time-sensitive arrangement.' },
            { title: 'Load shedding', desc: 'South Africa has rolling blackouts called load shedding. Check the EskomSePush app for your area\'s schedule. Most tourist accommodation has generators or inverters.' },
            { title: 'Tipping', desc: '10–15% at restaurants is expected. Petrol station attendants who clean your windscreen appreciate R10–R20. Hotel staff who carry bags: R20–R50.' },
          ].map((c) => (
            <li key={c.title} className="flex gap-3">
              <span className="text-brand-ocean flex-shrink-0 font-bold mt-0.5">→</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{c.title}</p>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    emoji: '🏥',
    heading: 'Health',
    content: (
      <>
        <p>Cape Town requires no specific vaccinations for most visitors (check your government&apos;s travel advice for your country). There is no malaria risk in Cape Town or the Western Cape.</p>
        <ul className="mt-4 space-y-3">
          {[
            { tip: 'Travel insurance', desc: 'Essential. South African private hospitals are excellent, but they are expensive for uninsured foreigners. A good travel policy with medical cover is non-negotiable.' },
            { tip: 'Private hospitals', desc: 'Netcare and Mediclinic are the main private networks. Netcare Christiaan Barnard and Groote Schuur (public) are the main hospitals near the city centre.' },
            { tip: 'Pharmacies', desc: 'Dischem and Clicks are the main pharmacy chains, widely available. Well-stocked with all standard medications.' },
            { tip: 'Sun protection', desc: 'The UV index in Cape Town is extreme year-round. Apply SPF 50+ daily, even when cloudy. Sunburn happens fast.' },
            { tip: 'Sea swimming', desc: 'The Atlantic side (Camps Bay, Clifton) is cold — around 12–14°C in summer. The False Bay side (Muizenberg, Simon\'s Town) is warmer at 18–22°C.' },
          ].map((t) => (
            <li key={t.tip} className="flex gap-3">
              <span className="text-brand-ocean flex-shrink-0 font-bold">→</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.tip}</p>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
]

export default function TravelTipsPage() {
  return (
    <>
      <PageHero
        label="Cape Town"
        title="Travel Tips"
        subtitle="Everything you need to know before you arrive — from the best season to visit to local customs, transport, and money."
        gradient="linear-gradient(135deg, #1E293B 0%, #00B4D8 100%)"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateIn direction="up">
          <p className="text-lg text-gray-600 leading-relaxed">
            Cape Town is one of the easiest African cities to visit — well-organised, English-speaking, and set up for international tourism. A little preparation goes a long way. Here&apos;s everything worth knowing before you land.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        {sections.map((s, i) => (
          <AnimateIn key={s.heading} direction="up" delay={i * 60} threshold={0.06}>
            <article className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{s.emoji}</span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-slate">{s.heading}</h2>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-3 text-[15px]">
                  {s.content}
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      <div className="bg-brand-mist py-12 px-4 text-center">
        <AnimateIn direction="up">
          <p className="text-gray-500 mb-4">Ready to visit? Start with our safety guide.</p>
          <Button href="/safety" variant="primary">Is Cape Town Safe? →</Button>
        </AnimateIn>
      </div>
    </>
  )
}
