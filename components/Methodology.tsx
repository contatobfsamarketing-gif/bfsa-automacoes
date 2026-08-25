'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { METHODOLOGY_STEPS } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'

export default function Methodology() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="metodologia" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Estratégia <span className="gradient-text">antes de anúncios</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Seguimos um processo comprovado para garantir que cada investimento gere resultados reais.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8 opacity-60" />
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-16">
              <div className="methodology-line w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {METHODOLOGY_STEPS.map((item, index) => (
                <div
                  key={item.step}
                  className={`relative text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                    <span className="text-gold font-bold text-xl font-display">{item.step}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>

                  {/* Check Icon */}
                  <div className="mt-4 flex justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Pronto para seguir essa metodologia no seu negócio?
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.')}`}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 font-medium"
            >
              Vamos conversar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
