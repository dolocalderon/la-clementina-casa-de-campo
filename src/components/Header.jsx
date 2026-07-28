import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-olive-200/80 bg-olive-50/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between px-5 py-4 md:px-10 lg:px-16">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition hover:opacity-70 ${
                solid ? 'text-ink' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium tracking-wide transition ${
              solid
                ? 'bg-olive-900 text-white hover:bg-olive-700'
                : 'bg-white text-olive-900 hover:bg-olive-100'
            }`}
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className={`lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-olive-200 bg-olive-50 px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-2xl text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
