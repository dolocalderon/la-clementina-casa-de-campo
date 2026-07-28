import { motion } from 'framer-motion'
import { hero } from '../data/content'
import Logo from './Logo'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[min(78svh,640px)] min-h-[440px] items-center justify-center overflow-hidden"
    >
      <img
        src={hero.image}
        alt="Paisaje de campo al atardecer"
        className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-olive-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-950/55 via-olive-950/10 to-olive-950/20" />

      <div className="container-site relative z-10 px-5 pt-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <Logo light size="lg" className="pointer-events-none" />

          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-white/90 md:text-base">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contacto" className="btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#nosotros" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
