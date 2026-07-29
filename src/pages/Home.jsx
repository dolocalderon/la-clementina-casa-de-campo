import { Link } from 'react-router-dom'
import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { MdOutlineChair, MdOutlinePark } from 'react-icons/md'
import {
  gallery,
  hero,
  homeAbout,
  homeCta,
  homeServices,
  stats,
} from '../data/content'

const icons = {
  trees: MdOutlinePark,
  users: HiOutlineUserGroup,
  chair: MdOutlineChair,
  sparkles: HiOutlineSparkles,
}

export default function Home() {
  const preview = gallery.items.slice(0, 3)

  return (
    <>
      <section className="relative">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="h-[78vh] min-h-[520px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-olive-deep/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-site">
            <div className="fade-up max-w-2xl text-background">
              <span className="text-[0.65rem] uppercase tracking-[0.36em] text-background/80">
                {hero.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[1.03] sm:text-6xl md:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-background/85">
                {hero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contacto" className="btn-solid">
                  {hero.primaryCta}
                </Link>
                <Link to="/galeria" className="btn-outline-light">
                  {hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50">
        <div className="container-site grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = icons[stat.icon] || HiOutlineSparkles
            return (
              <div
                key={stat.label}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <Icon className="h-5 w-5 shrink-0 text-olive" aria-hidden />
                <span className="mt-4 font-display text-3xl">{stat.value}</span>
                <span className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{homeAbout.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {homeAbout.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {homeAbout.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {homeAbout.body2}
            </p>
            <Link to="/nosotros" className="btn-outline mt-8 inline-flex">
              {homeAbout.cta}
            </Link>
          </div>
          <img
            src={homeAbout.image}
            alt={homeAbout.imageAlt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{homeServices.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {homeServices.title}
            </h2>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {homeServices.items.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/servicios" className="btn-outline">
              {homeServices.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{gallery.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {gallery.homeTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{gallery.homeSubtitle}</p>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {preview.map((item) => (
              <li key={item.id}>
                <Link to="/galeria" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-olive">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/galeria" className="btn-outline">
              {gallery.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-olive text-primary-foreground">
        <div className="container-site max-w-3xl py-24 text-center">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {homeCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80">
            {homeCta.description}
          </p>
          <Link to="/contacto" className="btn-ghost-dark mt-10 inline-block">
            {homeCta.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
