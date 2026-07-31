import { services } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

export default function Services() {
  return (
    <section id="servicios" className="bg-secondary/60 py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            {services.title}
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-3" delay={0.1}>
          {services.items.map((item, i) => (
            <RevealItem key={item.title}>
              <article className="group h-full border border-border bg-background p-8 transition duration-500 hover:-translate-y-1 hover:border-olive/40 hover:shadow-[0_20px_50px_-30px_rgba(36,48,34,0.45)] md:p-10">
                <span className="font-display text-5xl text-olive/25 transition group-hover:text-olive/50">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
                <ul className="mt-8 space-y-2 border-t border-border pt-6">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-olive" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
