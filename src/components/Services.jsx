import {
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import {
  MdOutlineDirectionsCar,
  MdOutlinePark,
  MdOutlineRestaurant,
} from 'react-icons/md'
import { services } from '../data/content'

const icons = {
  celebration: HiOutlineUserGroup,
  briefcase: HiOutlineBriefcase,
  utensils: MdOutlineRestaurant,
  sparkles: HiOutlineSparkles,
  car: MdOutlineDirectionsCar,
  tree: MdOutlinePark,
}

export default function Services() {
  return (
    <section id="servicios" className="section-pad bg-olive-100">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Todo para su celebración
          </h2>
          <p className="mt-4 font-sans text-muted">
            Acompañamos la organización con espacios flexibles y servicios pensados
            para que solo se ocupe de disfrutar el día.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = icons[item.icon] || HiOutlineSparkles
            return (
              <li key={item.id} className="text-left">
                <div className="mb-4 inline-flex text-olive-700">
                  <Icon size={28} aria-hidden />
                </div>
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
