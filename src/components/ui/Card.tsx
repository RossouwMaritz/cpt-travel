import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  accent?: string
  className?: string
}

export default function Card({ title, description, href, icon, accent = 'from-brand-ocean to-brand-sky', className = '' }: CardProps) {
  return (
    <Link
      href={href}
      className={`group relative block bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 ${className}`}
    >
      {/* Gradient accent top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6">
        {icon && (
          <div className={`mb-4 w-11 h-11 rounded-xl bg-gradient-to-br ${accent} p-2.5 text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300`}>
            {icon}
          </div>
        )}
        <h3 className="font-display text-lg font-semibold text-brand-slate mb-2 group-hover:text-brand-ocean transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

        <div className="mt-4 flex items-center text-xs font-semibold text-brand-ocean/60 group-hover:text-brand-ocean transition-colors duration-200 gap-1">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
