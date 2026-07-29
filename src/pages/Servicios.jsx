import { Link } from 'react-router-dom'
import { servicios } from '../data/content'

export default function Servicios() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">{servicios.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            {servicios.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {servicios.subtitle}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">{servicios.eventTypes.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {servicios.eventTypes.title}
            </h2>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {servicios.eventTypes.items.map((item) => (
              <li key={item.title} className="border-t border-border pt-8">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-olive" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">{servicios.capacity.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {servicios.capacity.title}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {servicios.capacity.subtitle}
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {servicios.capacity.items.map((item) => (
                <li key={item.label} className="border-t border-border pt-5">
                  <p className="font-display text-xl md:text-2xl">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
            <img
              src={servicios.capacity.image}
              alt={servicios.capacity.imageAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">{servicios.steps.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {servicios.steps.title}
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.steps.items.map((step) => (
              <li key={step.n}>
                <span className="font-display text-3xl text-olive">{step.n}</span>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <Link to="/contacto" className="btn-primary">
              {servicios.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
