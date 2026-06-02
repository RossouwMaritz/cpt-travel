export interface FaqItem {
  question: string
  answer: string
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cape Town Safe',
    url: 'https://capetownsafe.co.za',
    description: 'Your honest guide to Cape Town — safety, neighborhoods, attractions, and travel tips.',
  }
}
