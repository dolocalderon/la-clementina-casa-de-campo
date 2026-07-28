import { navLinks, site } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-olive-950 text-olive-200">
      <div className="container-site grid gap-10 px-5 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-16">
        <div>
          <Logo light className="text-white" />
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-olive-300">
            Casa de campo para eventos sociales y corporativos. Un entorno natural
            para crear recuerdos que duran.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-olive-400 uppercase">
            Explorar
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-olive-200 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-olive-400 uppercase">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            <li>{site.location}</li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-olive-800 px-5 py-5 md:px-10 lg:px-16">
        <div className="container-site flex flex-col gap-2 font-sans text-xs text-olive-500 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>Diseño renovado · Contenido de ejemplo</p>
        </div>
      </div>
    </footer>
  )
}
