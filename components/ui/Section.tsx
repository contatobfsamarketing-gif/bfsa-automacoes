import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  goldBorder?: boolean
}

export default function Section({ children, id, className = '', goldBorder = true }: SectionProps) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 ${isVisible ? 'active' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {goldBorder && (
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        )}
        {children}
      </div>
    </section>
  )
}
