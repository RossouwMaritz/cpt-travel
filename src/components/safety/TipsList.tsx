import AnimateIn from '@/components/ui/AnimateIn'

const tips = [
  'Keep your phone in your pocket or bag — don\'t walk with it in your hand on the street.',
  'Use Uber or Bolt for all transport; avoid minibus taxis as a tourist.',
  'Lock car doors while driving — smash-and-grab at traffic lights (robots) is a real risk.',
  'Don\'t leave items unattended on a beach blanket or visible in a parked car.',
  'Leave expensive jewellery, watches, and cameras in your hotel safe.',
  'Be back in your accommodation before midnight in less-busy areas.',
  'Walk confidently and purposefully; don\'t look lost or distracted.',
  'Avoid walking alone after dark on quiet streets, even in generally safe areas.',
  'Book township visits with reputable, established tour operators only.',
  'Keep a small amount of cash separate from your wallet in case of mugging.',
  'Avoid using ATMs at night or in isolated spots; use ATMs inside malls or banks.',
  'Don\'t accept unsolicited help from strangers with bags or luggage.',
  'Use the hotel or Airbnb\'s recommended transport for airport transfers.',
  'Secure your accommodation — use deadbolts and don\'t open doors to strangers.',
  'Be cautious around Long Street late at night — great bars, but pick-pocketing happens.',
  'Restaurant strips in Camps Bay, Sea Point, and Kloof Street are busy and safe for evening dining.',
  'If you hire a car, park in guarded or paid parking lots — never on dark side streets.',
  'Know the emergency numbers: South African Police (SAPS) 10111, Ambulance 10177.',
  'Download the Uber or Bolt app before you arrive — you\'ll use it every day.',
  'Be wary of distraction techniques (e.g. someone pointing at your shoes) — it\'s a classic setup for theft.',
  'Keep group bookings to organised tours in unfamiliar areas.',
  'Trust your gut — if an area or situation feels wrong, leave.',
  'Carry a photocopy of your passport, not the original, when sightseeing.',
  'Avoid flashing expensive cameras in crowds — use a strap and keep it close.',
  'Book wine farm transport in advance — Uber availability in the Winelands can be limited.',
]

export default function TipsList() {
  return (
    <div id="tips" className="mt-4">
      <ol className="space-y-3">
        {tips.map((tip, i) => (
          <AnimateIn key={i} direction="up" delay={Math.min(i * 40, 400)} threshold={0.04}>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-ocean text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-700 leading-relaxed pt-0.5">{tip}</p>
            </li>
          </AnimateIn>
        ))}
      </ol>
    </div>
  )
}
