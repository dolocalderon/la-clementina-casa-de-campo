import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { hero } from '../../data/content'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden md:items-center"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {hero.video ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image}
            aria-label={hero.imageAlt}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/55 to-olive-deep/20" />

      <motion.div
        style={{ opacity }}
        className="container-site relative z-10 w-full pb-24 pt-28 md:pb-20 md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="btn-solid">
              {hero.primaryCta}
            </a>
            <a href="#galeria" className="btn-outline-light">
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#galeria"
        aria-label="Bajar a la galería"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <HiOutlineChevronDown size={28} />
      </motion.a>
    </section>
  )
}
