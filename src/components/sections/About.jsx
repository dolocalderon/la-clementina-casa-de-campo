import { about } from '../../data/content'
import Reveal from '../Reveal'

export default function About() {
  return (
    <section id="nosotros" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-site mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-script text-3xl text-gold md:text-4xl">desde 1928</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-4xl leading-[1.15] text-olive-deep md:text-5xl lg:text-[3.5rem]">
            {about.title}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <span className="mx-auto mt-10 block h-px w-16 bg-gold/70" />
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
            {about.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
            {about.body2}
          </p>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
