import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { navLinks } from '../../data/content'
import Logo from '../Logo'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.22em] transition-colors hover:text-olive ${
      isActive ? 'text-olive' : 'text-muted-foreground'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-site grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="btn-outline">
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className="shrink-0 p-2 text-foreground md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="font-display text-2xl text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="btn-outline mt-2 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Reservar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
