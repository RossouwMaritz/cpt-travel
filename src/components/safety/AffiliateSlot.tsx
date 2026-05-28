import { AffiliateSlotProps } from '@/types'

const variantIcons: Record<string, string> = {
  'tour': '🗺️',
  'local-guide': '🧑‍🤝‍🧑',
  'insurance': '🛡️',
  'accommodation': '🏨',
}

export default function AffiliateSlot({ variant, title, description, ctaText, ctaHref, enabled = false }: AffiliateSlotProps) {
  if (!enabled) return null

  return (
    <div className="my-8 rounded-2xl border border-brand-ocean/20 bg-gradient-to-br from-brand-mist to-white p-6 sm:p-8">
      <p className="text-xs font-semibold text-brand-ocean/50 uppercase tracking-wider mb-4">Partner recommendation</p>
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0">{variantIcons[variant] ?? '🔗'}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-brand-slate mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-ocean to-brand-sky text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,119,182,0.3)] hover:shadow-[0_6px_20px_rgba(0,119,182,0.4)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
