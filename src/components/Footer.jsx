import { FaInstagram } from 'react-icons/fa'
import { navLinks, site } from '../data/content'
import Logo from './Logo'
import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-olive-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-olive via-olive-deep to-[#1a2118]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-olive/40 blur-3xl" />

      <Reveal className="container-site relative grid gap-12 py-16 md:grid-cols-3" amount={0.15}>
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {site.description}
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-gold"
          >
            <FaInstagram />
            {site.social.handle}
          </a>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Explorar</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{site.address}</li>
            <li>
              <a href={`tel:+${site.phoneHref}`} className="hover:text-white">
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
      </Reveal>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {year} {site.name} · Casa de Campo
      </div>
    </footer>
  )
}
