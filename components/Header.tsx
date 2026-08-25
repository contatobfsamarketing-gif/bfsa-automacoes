'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-xl md:text-2xl font-bold tracking-tight"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#inicio')
            }}
          >
            <span className="text-white">BFSA</span>
            <span className="text-gold ml-1">Marketing</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-gray-300 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.')}`}
              variant="primary"
            >
              Falar com um especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-dark/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl text-gray-300 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-8">
            <Button
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.')}`}
              variant="primary"
            >
              Falar com um especialista
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
