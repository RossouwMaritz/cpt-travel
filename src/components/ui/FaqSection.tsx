import { FaqItem } from '@/lib/schema'

interface FaqSectionProps {
  faqs: FaqItem[]
  heading?: string
}

export default function FaqSection({ faqs, heading = 'Frequently Asked Questions' }: FaqSectionProps) {
  return (
    <div className="my-10">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-slate mb-6">{heading}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <h3 className="font-display font-semibold text-brand-slate mb-2">{faq.question}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
