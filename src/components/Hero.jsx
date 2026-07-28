import { motion } from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { hero } from '../data/content'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[min(72svh,580px)] min-h-[400px] items-end overflow-hidden md:h-[min(68svh,620px)]"
    >
      <img
        src={hero.image}
        alt="Paisaje de campo al atardecer"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      {/* Soft vignette: keep sky visible, darken only lower area for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-olive-950/75 via-olive-950/25 to-olive-950/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive-950/35 via-transparent to-transparent" />

      <div className="container-site relative z-10 w-full px-5 pb-14 pt-24 md:px-10 md:pb-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-left"
        >
          <p className="mb-2 font-sans text-xs font-medium tracking-[0.28em] text-white/80 uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-white drop-shadow-sm md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-1.5 font-display text-lg tracking-[0.18em] text-olive-100 uppercase md:text-xl">
            {hero.subtitle}
          </p>
          <p className="mt-4 max-w-md font-sans text-sm text-white/90 md:text-base">
            {hero.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#nosotros" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#nosotros"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white"
        aria-label="Ir a Nosotros"
      >
        <HiOutlineChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  )
}
