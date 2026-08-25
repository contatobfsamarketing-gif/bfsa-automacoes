import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BFSA Marketing | Transformamos negócios locais em referências',
  description: 'Estratégia, posicionamento e tráfego pago para empresas que querem atrair mais clientes e crescer. Especialistas em Meta Ads e Google Ads para negócios locais.',
  keywords: ['marketing digital', 'tráfego pago', 'Meta Ads', 'Google Ads', 'branding', 'agência de marketing', 'negócios locais'],
  authors: [{ name: 'BFSA Marketing' }],
  openGraph: {
    title: 'BFSA Marketing | Transformamos negócios locais em referências',
    description: 'Estratégia, posicionamento e tráfego pago para empresas que querem atrair mais clientes e crescer.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
