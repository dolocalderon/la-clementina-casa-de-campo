import { services } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

export default function Services() {
  return (
    <section id="servicios" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            {services.title}
          </h2>
        </Reveal>

        <RevealStagger
          className="mt-16 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)]"
          delay={0.08}
        >
          {services.items.map((item) => (
            <RevealItem key={item.id} className={item.span}>
              {item.tone === 'photo' ? (
                <article className="group relative h-full min-h-[240px] overflow-hidden md:min-h-full">
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/50 to-olive-deep/15 transition duration-500 group-hover:from-olive-deep/95" />
                  <div className="relative flex h-full min-h-[240px] flex-col justify-end p-7 md:min-h-[280px] md:p-9">
                    <h3 className="font-display text-3xl text-white md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                      {item.description}
                    </p>
                    <span className="mt-5 h-px w-10 bg-gold transition duration-500 group-hover:w-16" />
                  </div>
                </article>
              ) : (
                <article className="group flex h-full min-h-[200px] flex-col justify-between border border-border bg-background p-7 transition duration-500 hover:border-gold/50 hover:shadow-[0_0_40px_-18px_rgba(196,165,116,0.55)] md:p-8">
                  <div>
                    <p className="font-display text-4xl text-olive md:text-5xl">
                      {item.accent}
                    </p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                      {item.accentLabel}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              )}
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
