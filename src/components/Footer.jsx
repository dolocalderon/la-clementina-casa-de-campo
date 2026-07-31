import { FaInstagram } from 'react-icons/fa'
import { navLinks, site } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-olive-deep text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {site.description}
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
          >
            <FaInstagram />
            {site.social.handle}
          </a>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Explorar</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/75 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{site.address}</li>
            <li>
              <a href={`tel:+${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {year} {site.name} · Casa de Campo
      </div>
    </footer>
  )
}
