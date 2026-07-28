import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Amenities />
        <Gallery />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
