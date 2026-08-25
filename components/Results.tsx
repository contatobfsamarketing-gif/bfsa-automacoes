'use client'

import { BarChart3 } from 'lucide-react'
import Section from '@/components/ui/Section'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Results() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <Section id="resultados" className="bg-dark-50">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resultados que <span className="gradient-text">falam por nós</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada projeto é uma história de crescimento. Em breve, compartilharemos cases reais.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8 opacity-60" />
        </div>

        {/* Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl border border-dashed border-gold/20 bg-dark/50 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-gold" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Cases de sucesso em breve
            </h3>

            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
              Estamos preparando cases reais com métricas e resultados concretos.
              Aqui você encontrará histórias de negócios que transformamos em referências.
            </p>

            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Em breve
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
