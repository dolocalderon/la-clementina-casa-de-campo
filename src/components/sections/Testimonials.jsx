import { FaGoogle } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'
import { site, testimonials } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <HiStar key={i} className="text-gold" size={16} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="resenas" className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            {testimonials.title}
          </h2>
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="font-display text-5xl text-olive">{testimonials.rating.toFixed(1)}</p>
            <Stars count={5} />
            <p className="text-sm text-muted-foreground">{testimonials.ratingLabel}</p>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10"
          delay={0.1}
        >
          {testimonials.items.map((item) => (
            <RevealItem key={item.id}>
              <blockquote className="flex h-full flex-col border-t border-gold/40 pt-8">
                <Stars count={item.rating} />
                <p className="mt-5 flex-1 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                  “{item.text}”
                </p>
                <footer className="mt-8 flex items-center justify-between gap-3">
                  <div>
                    <cite className="not-italic text-sm font-medium tracking-wide">
                      {item.author}
                    </cite>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <FaGoogle className="text-muted-foreground" size={11} />
                      Google · {item.date}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-14 text-center" delay={0.15}>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGoogle size={14} />
            {testimonials.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
