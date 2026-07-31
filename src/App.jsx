import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Capacity from './components/sections/Capacity'
import CtaBand from './components/sections/CtaBand'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Gallery />
        <Capacity />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
