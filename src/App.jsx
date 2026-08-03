import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './components/sections/Hero'
import Gallery from './components/sections/Gallery'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import CtaBand from './components/sections/CtaBand'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
