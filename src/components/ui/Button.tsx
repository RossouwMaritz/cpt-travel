import Link from 'next/link'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95'

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-ocean to-brand-sky text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,119,182,0.45)] focus-visible:ring-brand-ocean shadow-[0_4px_15px_rgba(0,119,182,0.3)]',
    secondary:
      'bg-white text-brand-ocean border border-brand-ocean/30 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,119,182,0.2)] hover:border-brand-ocean focus-visible:ring-brand-ocean',
    ghost:
      'text-brand-ocean hover:bg-brand-mist focus-visible:ring-brand-ocean',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
