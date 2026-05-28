export interface NavItem {
  label: string
  href: string
}

export interface AffiliateSlotProps {
  slotId: string
  variant: 'tour' | 'local-guide' | 'insurance' | 'accommodation'
  title: string
  description: string
  ctaText: string
  ctaHref: string
  affiliateTag?: string
  enabled?: boolean
}

export interface SafetySectionData {
  id: string
  heading: string
  body: string
}
