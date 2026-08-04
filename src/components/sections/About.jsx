import { motion } from 'framer-motion'
import { about } from '../../data/content'
import Reveal from '../Reveal'

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <motion.p
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[22vw] leading-none text-olive/[0.06] md:text-[12rem]"
      >
        1928
      </motion.p>

      <div className="container-site relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-olive">
            {about.eyebrow}
          </p>
          <p className="mt-3 font-script text-2xl text-gold md:text-3xl">desde 1928</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl leading-[1.15] text-olive-deep md:text-4xl lg:text-5xl">
            {about.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="mx-auto mt-6 flex w-fit items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
            <span className="h-px w-8 bg-gold/60" />
          </span>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-[2] text-muted-foreground md:text-lg md:leading-[2.05]">
            {about.body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
