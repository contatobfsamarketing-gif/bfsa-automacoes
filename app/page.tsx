import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Methodology from '@/components/Methodology'
import Results from '@/components/Results'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Feedback from '@/components/Feedback'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Methodology />
      <Results />
      <About />
      <Portfolio />
      <Feedback />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
