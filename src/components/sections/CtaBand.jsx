import { homeCta } from '../../data/content'
import Reveal from '../Reveal'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-olive py-24 md:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-olive-deep/30" />
      <Reveal className="container-site relative max-w-3xl text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
          {homeCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80">
          {homeCta.description}
        </p>
        <a href="#contacto" className="btn-solid mt-10 inline-flex">
          {homeCta.cta}
        </a>
      </Reveal>
    </section>
  )
}
