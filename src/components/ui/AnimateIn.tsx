'use client'

import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

interface AnimateInProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

const initial: Record<Direction, string> = {
  up:    'opacity-0 translate-y-10',
  down:  'opacity-0 -translate-y-10',
  left:  'opacity-0 translate-x-10',
  right: 'opacity-0 -translate-x-10',
  fade:  'opacity-0',
  scale: 'opacity-0 scale-95',
}

const visible = 'opacity-100 translate-y-0 translate-x-0 scale-100'

export default function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${seen ? visible : initial[direction]} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: seen ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
