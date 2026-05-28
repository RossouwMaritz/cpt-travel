import Link from 'next/link'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold mb-3">{SITE_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Honest, practical travel information for Cape Town visitors. We help you plan a safe and unforgettable trip.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">Explore</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Is Cape Town Safe?
                </Link>
              </li>
              <li>
                <Link href="/safety#tips" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/safety#neighborhoods" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Safe Neighborhoods
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Information is updated regularly but always verify locally.</p>
        </div>
      </div>
    </footer>
  )
}
