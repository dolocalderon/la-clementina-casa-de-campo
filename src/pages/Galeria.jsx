import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { gallery } from '../data/content'

export default function Galeria() {
  const [filter, setFilter] = useState('Todos')
  const [active, setActive] = useState(null)

  const items = useMemo(() => {
    if (filter === 'Todos') return gallery.items
    return gallery.items.filter((i) => i.category === filter)
  }, [filter])

  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <section className="page-hero">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            {gallery.pageTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {gallery.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {gallery.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                  filter === f
                    ? 'bg-olive text-primary-foreground'
                    : 'text-muted-foreground hover:text-olive'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className="group w-full text-left"
                >
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
                  <h2 className="mt-1 font-display text-xl">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-olive text-primary-foreground">
        <div className="container-site max-w-3xl py-20 text-center">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {gallery.endCta.title}
          </h2>
          <Link to="/contacto" className="btn-ghost-dark mt-10 inline-block">
            {gallery.endCta.button}
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-olive-deep/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 text-background"
              aria-label="Cerrar"
              onClick={() => setActive(null)}
            >
              <HiOutlineX size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
