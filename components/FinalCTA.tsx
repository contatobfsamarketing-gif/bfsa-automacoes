'use client'

import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50 to-dark" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8 opacity-80" />

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Pronto para transformar sua empresa em{' '}
            <span className="gradient-text">referência</span>?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vamos conversar sobre como a BFSA Marketing pode ajudar sua empresa
            a atrair mais clientes e crescer.
          </p>

          <Button
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.')}`}
            variant="primary"
            className="text-base px-10 py-5"
          >
            Falar com a BFSA
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-gray-500 text-sm mt-8">
            Resposta rápida e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}
