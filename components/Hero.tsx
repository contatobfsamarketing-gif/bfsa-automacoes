'use client'

import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2)
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal(0.2)
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollReveal(0.2)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Gold Accent Line */}
        <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8 opacity-80" />

        {/* Main Heading */}
        <h1
          ref={titleRef}
          className={`font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Transformamos negócios locais
          <br />
          em <span className="gradient-text">referências</span>.
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Estratégia, posicionamento e tráfego pago para empresas que querem
          atrair mais clientes e crescer.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.')}`}
            variant="primary"
          >
            Quero mais clientes
          </Button>
          <Button
            href="#servicos"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Conheça nosso trabalho
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Stats Row */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { icon: Users, label: 'Clientes Atendidos', value: 'Negócios Locais' },
            { icon: Zap, label: 'Resultados', value: 'Crescimento Real' },
            { icon: BarChart3, label: 'Especialização', value: 'Marketing Digital' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-gray-400">
              <stat.icon className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
                <p className="text-sm font-medium text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
