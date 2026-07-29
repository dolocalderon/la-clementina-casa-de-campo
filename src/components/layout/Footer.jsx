import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { navLinks, site } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-border bg-olive-deep text-background">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <span className="font-display text-2xl tracking-wide">{site.name}</span>
          <p className="max-w-xs text-sm leading-relaxed text-background/70">
            {site.description}
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background"
          >
            <FaInstagram className="h-4 w-4" />
            {site.social.handle}
          </a>
        </div>

        <div>
          <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-background/50">
            Secciones
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-background/80 transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-background/50">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-background/80">
            <li className="flex gap-3">
              <MdOutlineLocationOn className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:+${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15 px-5 py-6 text-center text-xs text-background/50 md:px-8">
        © {year} {site.name} · Casa de Campo. Todos los derechos reservados.
      </div>
    </footer>
  )
}
