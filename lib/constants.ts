export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export const SERVICES = [
  { id: 'trafego-pago', title: 'Tráfego Pago', description: 'Campanhas estratégicas para atrair potenciais clientes qualificados e aumentar suas vendas.', icon: 'TrendingUp' },
  { id: 'meta-ads', title: 'Meta Ads', description: 'Campanhas no Instagram e Facebook focadas em geração de oportunidades e reconhecimento de marca.', icon: 'Facebook' },
  { id: 'google-ads', title: 'Google Ads', description: 'Coloque a empresa na frente de pessoas que já estão procurando pelos seus serviços.', icon: 'Search' },
  { id: 'estrategia', title: 'Estratégia', description: 'Planejamento personalizado para transformar presença digital em crescimento sustentável.', icon: 'Target' },
  { id: 'branding', title: 'Branding', description: 'Posicionamento e identidade visual para tornar empresas mais profissionais e memoráveis.', icon: 'Sparkles' },
  { id: 'geracao-leads', title: 'Geração de Leads', description: 'Sistemas inteligentes para captar, nutrir e converter prospects em clientes fiéis.', icon: 'Users' },
]

export const METHODOLOGY_STEPS = [
  { step: '01', title: 'Diagnóstico', description: 'Analisamos sua presença digital, concorrência e oportunidades.' },
  { step: '02', title: 'Estratégia', description: 'Criamos um plano personalizado alinhado aos seus objetivos.' },
  { step: '03', title: 'Execução', description: 'Implementamos campanhas e ações com precisão e criatividade.' },
  { step: '04', title: 'Otimização', description: 'Monitoramos resultados e otimizamos continuamente para maximizar ROI.' },
]

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da BFSA Marketing.'
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/bfsamarketing'
export const PHONE = process.env.NEXT_PUBLIC_PHONE || '(11) 99999-9999'
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'contato@bfsamarketing.com.br'
export const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || 'São Paulo, SP - Brasil'
