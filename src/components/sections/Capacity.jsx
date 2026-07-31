import { capacity } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

export default function Capacity() {
  return (
    <section id="espacio" className="border-y border-border bg-muted py-24 md:py-28">
      <div className="container-site">
        <Reveal className="max-w-xl">
          <p className="eyebrow">{capacity.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{capacity.title}</h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-2 gap-px bg-border md:grid-cols-3">
          {capacity.items.map((item) => (
            <RevealItem key={item.label}>
              <div className="bg-background px-6 py-10 transition duration-500 hover:bg-secondary/70 md:px-8">
                <p className="font-display text-3xl text-olive-deep md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
