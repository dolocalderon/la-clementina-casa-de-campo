import { amenities } from '../data/content'

export default function Amenities() {
  return (
    <section id="espacio" className="section-pad bg-olive-900 text-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-[0.22em] text-olive-300 uppercase">
            {amenities.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            {amenities.title}
          </h2>
          <p className="mt-4 font-sans text-olive-200">{amenities.subtitle}</p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {amenities.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-4xl text-white md:text-5xl">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 text-2xl text-olive-300">{stat.unit}</span>
                )}
              </dt>
              <dd className="mt-2 font-sans text-sm tracking-wide text-olive-300">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-14 grid gap-3 border-t border-olive-600/60 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 font-sans text-sm text-olive-100 md:text-base"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-olive-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
