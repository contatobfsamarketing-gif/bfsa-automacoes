'use client'

import { Image } from 'lucide-react'
import Section from '@/components/ui/Section'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <Section id="portfolio" className="bg-dark-50">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Projetos e campanhas que geraram resultados reais para nossos clientes.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8 opacity-60" />
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark border border-gold/10"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="placeholder-shimmer absolute inset-0 opacity-30" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 border border-gold/20">
                    <Image className="w-8 h-8 text-gold/60" />
                  </div>
                  <p className="text-gray-500 text-sm">Projeto em breve</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Mais projetos serão adicionados em breve.
          </p>
        </div>
      </div>
    </Section>
  )
}
