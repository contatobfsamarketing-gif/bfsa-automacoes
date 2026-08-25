'use client'

import Section from '@/components/ui/Section'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <Section id="quem-somos">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Quem <span className="gradient-text">somos</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8 opacity-60" />

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-white">BFSA Marketing</strong> é uma agência focada em
                ajudar negócios locais a crescer através de estratégia, posicionamento e aquisição
                de clientes.
              </p>
              <p>
                Acreditamos que todo negócio local tem potencial para se tornar referência em seu
                segmento. O que falta, muitas vezes, é a estratégia certa e a execução precisa.
              </p>
              <p>
                Combinamos criatividade com dados, estratégia com execução, para entregar resultados
                que transformam a presença digital dos nossos parceiros.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Estratégia', text: 'Planejamento baseado em dados e objetivos reais.' },
                { title: 'Transparência', text: 'Comunicação clara e resultados mensuráveis.' },
                { title: 'Resultados', text: 'Foco em crescimento mensurável e sustentável.' },
                { title: 'Parceria', text: 'Andamos lado a lado com cada cliente.' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-dark-50 border border-gold/10"
                >
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-dark-50 border border-gold/10 overflow-hidden relative">
              {/* Placeholder for team photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20">
                  <svg className="w-12 h-12 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Espaço para fotografia da equipe</p>
                <p className="text-gray-600 text-xs mt-2">Adicione a foto dos fundadores ou equipe</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </Section>
  )
}
