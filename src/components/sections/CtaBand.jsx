import { homeCta } from '../../data/content'
import Reveal from '../Reveal'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-olive-deep py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,107,69,0.35),transparent_50%)]" />
      <Reveal className="container-site relative max-w-3xl text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
          {homeCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/75">
          {homeCta.description}
        </p>
        <a href="#contacto" className="btn-solid mt-10 inline-flex">
          {homeCta.cta}
        </a>
      </Reveal>
    </section>
  )
}
