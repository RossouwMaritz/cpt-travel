import { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Hero from '@/components/home/Hero'
import QuickLinks from '@/components/home/QuickLinks'
import SafetyTeaser from '@/components/home/SafetyTeaser'

export const metadata: Metadata = buildMetadata({
  title: 'Cape Town Travel Guide — Is Cape Town Safe?',
  description: 'Your honest guide to visiting Cape Town. Safety advice, neighborhoods, top attractions, and practical travel tips.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <SafetyTeaser />
    </>
  )
}
