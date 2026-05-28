const neighborhoods = [
  { name: 'V&A Waterfront', rating: 5, touristFriendly: true, notes: 'Heavily policed, cameras everywhere. Very safe day and night.' },
  { name: 'Camps Bay', rating: 5, touristFriendly: true, notes: 'Upmarket beach suburb. Busy, well-lit, safe for evening dining.' },
  { name: 'Sea Point', rating: 4, touristFriendly: true, notes: 'Popular promenade area. Very safe during the day; exercise caution on quiet streets at night.' },
  { name: 'Green Point', rating: 4, touristFriendly: true, notes: 'Residential and commercial mix. Generally safe, good restaurant scene.' },
  { name: 'De Waterkant', rating: 5, touristFriendly: true, notes: 'Cape Town\'s trendy village. Compact, walkable, safe.' },
  { name: 'Bo-Kaap', rating: 3, touristFriendly: true, notes: 'Iconic colourful houses. Safe for daytime visits; avoid late at night.' },
  { name: 'City Bowl (CBD)', rating: 3, touristFriendly: true, notes: 'Busy during business hours. Avoid walking alone at night; use Uber instead.' },
  { name: 'Woodstock', rating: 3, touristFriendly: true, notes: 'Gentrifying area with creative spaces. Daytime fine; parts feel edgy at night.' },
  { name: 'Observatory', rating: 3, touristFriendly: true, notes: 'Student and bohemian vibe. Mostly fine, some petty crime — stay aware.' },
  { name: 'Constantia', rating: 5, touristFriendly: true, notes: 'Affluent wine valley suburb. Very safe, great for wine tours.' },
  { name: 'Langa', rating: 2, touristFriendly: false, notes: 'Cape Town\'s oldest township. Visit only with a reputable guided tour.' },
  { name: 'Khayelitsha', rating: 1, touristFriendly: false, notes: 'Large township with high crime rates. Guided tours only — never visit independently.' },
  { name: 'Cape Flats', rating: 1, touristFriendly: false, notes: 'High gang activity. Not for independent tourist visits under any circumstances.' },
]

const ratingColors: Record<number, string> = {
  1: 'bg-red-100 text-red-800',
  2: 'bg-orange-100 text-orange-800',
  3: 'bg-yellow-100 text-yellow-800',
  4: 'bg-blue-100 text-blue-800',
  5: 'bg-green-100 text-green-800',
}

const ratingLabels: Record<number, string> = {
  1: 'High Risk',
  2: 'Caution',
  3: 'Moderate',
  4: 'Safe',
  5: 'Very Safe',
}

import AnimateIn from '@/components/ui/AnimateIn'

export default function RiskTable() {
  return (
    <AnimateIn direction="up" threshold={0.05}>
    <div id="neighborhoods" className="mt-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-slate text-white">
            <th className="text-left px-4 py-3 font-semibold">Neighbourhood</th>
            <th className="text-left px-4 py-3 font-semibold">Safety</th>
            <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">For Tourists?</th>
            <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {neighborhoods.map((n, i) => (
            <tr key={n.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
              <td className="px-4 py-3 font-medium text-brand-slate">{n.name}</td>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${ratingColors[n.rating]}`}>
                  {ratingLabels[n.rating]}
                </span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                {n.touristFriendly ? (
                  <span className="text-green-600 font-medium">✓ Yes</span>
                ) : (
                  <span className="text-red-600 font-medium">Guided only</span>
                )}
              </td>
              <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{n.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AnimateIn>
  )
}
