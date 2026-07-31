import { motion } from 'framer-motion'
import { about } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-3 origin-left bg-secondary md:-inset-5"
            />
            <img
              src={about.image}
              alt={about.imageAlt}
              className="relative aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {about.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {about.body2}
            </p>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-8 sm:grid-cols-3" delay={0.15}>
            {about.principles.map((item) => (
              <RevealItem key={item.title}>
                <h3 className="font-display text-xl text-olive-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
