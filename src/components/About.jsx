import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="nosotros" className="section-pad bg-olive-50">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 bg-olive-100 md:-inset-6 md:translate-x-6 md:translate-y-6" />
          <img
            src={about.image}
            alt="Ambiente de La Clementina"
            className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            {about.title}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted md:text-lg">
            {about.body}
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted md:text-lg">
            {about.body2}
          </p>
          <a
            href="#espacio"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-olive-800 transition hover:gap-3"
          >
            {about.cta}
            <HiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
