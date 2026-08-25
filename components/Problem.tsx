'use client'

import { AlertTriangle } from 'lucide-react'
import Section from '@/components/ui/Section'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Problem() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <Section id="problema" className="bg-dark-50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
          <AlertTriangle className="w-8 h-8 text-gold" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Seu negócio pode estar perdendo clientes{' '}
          <span className="gradient-text">todos os dias</span>.
        </h2>

        <div className="w-16 h-0.5 bg-gold mx-auto mb-8 opacity-60" />

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Sem posicionamento digital, estratégia bem definida e campanhas eficientes,
          sua empresa acaba entregando clientes diretamente para os concorrentes.
          Enquanto você espera, eles já estão atraindo o público que poderia ser seu.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: 'Falta de Visibilidade',
              text: 'Sem estratégia, seu negócio passa despercebido no digital.',
            },
            {
              title: 'Concorrência à Frente',
              text: 'Quem investe em marketing atrai os clientes que você poderia conquistar.',
            },
            {
              title: 'Oportunidades Perdidas',
              text: 'Cada dia sem ação é uma oportunidade a menos de crescer.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-dark border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <h3 className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
