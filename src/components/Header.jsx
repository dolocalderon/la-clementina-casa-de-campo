import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-border/80 bg-background/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 py-4 pl-6 pr-5 md:pl-8 md:pr-8">
        <Logo light={!solid} className="shrink-0" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.22em] transition-colors hover:text-olive ${
                solid ? 'text-muted-foreground' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={
              solid
                ? 'btn-outline'
                : 'border border-white/70 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-white/10'
            }
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className={`shrink-0 p-2 md:hidden ${solid ? 'text-foreground' : 'text-white'}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-2xl text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-outline mt-2 text-center"
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
