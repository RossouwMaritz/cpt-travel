import AnimateIn from '@/components/ui/AnimateIn'

interface SafetySectionProps {
  id: string
  heading: string
  children: React.ReactNode
  className?: string
  highlight?: boolean
}

export default function SafetySection({ id, heading, children, className = '', highlight = false }: SafetySectionProps) {
  return (
    <AnimateIn direction="up" threshold={0.08}>
      <div
        id={id}
        className={`py-8 border-b border-gray-100 last:border-0 ${highlight ? 'bg-brand-mist -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl' : ''} ${className}`}
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-4">{heading}</h2>
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">{children}</div>
      </div>
    </AnimateIn>
  )
}
