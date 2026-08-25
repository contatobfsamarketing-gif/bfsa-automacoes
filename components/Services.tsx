'use client'

import { TrendingUp, Facebook, Search, Target, Sparkles, Users } from 'lucide-react'
import Section from '@/components/ui/Section'
import { SERVICES } from '@/lib/constants'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Facebook,
  Search,
  Target,
  Sparkles,
  Users,
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <Section id="servicos">
      <div ref={ref} className="transition-all duration-1000">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluções completas em marketing digital para impulsionar seu negócio local.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8 opacity-60" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target
            return (
              <div
                key={service.id}
                className={`service-card p-8 md:p-10 rounded-2xl bg-dark-50 group cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
