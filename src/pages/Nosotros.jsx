import { Link } from 'react-router-dom'
import { nosotros } from '../data/content'

export default function Nosotros() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">{nosotros.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            {nosotros.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {nosotros.subtitle}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <img
            src={nosotros.heroImage}
            alt={nosotros.heroImageAlt}
            className="mb-16 aspect-[21/9] w-full object-cover md:aspect-[2.4/1]"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">{nosotros.history.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {nosotros.history.title}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{nosotros.history.body}</p>
              <p>{nosotros.history.body2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">{nosotros.principles.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {nosotros.principles.title}
            </h2>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {nosotros.principles.items.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{nosotros.timeline.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {nosotros.timeline.title}
            </h2>
            <ol className="mt-12 space-y-8 border-l border-border pl-6">
              {nosotros.timeline.items.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-olive" />
                  <span className="font-display text-2xl text-olive">{item.year}</span>
                  <p className="mt-1 text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>
            <Link to="/contacto" className="btn-outline mt-12 inline-flex">
              {nosotros.cta}
            </Link>
          </div>
          <img
            src={nosotros.sideImage}
            alt={nosotros.sideImageAlt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
