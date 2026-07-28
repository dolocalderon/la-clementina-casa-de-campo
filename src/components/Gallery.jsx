import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { gallery } from '../data/content'

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="galeria" className="section-pad bg-olive-50">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">{gallery.title}</h2>
          <p className="mt-4 font-sans text-muted">{gallery.subtitle}</p>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.items.map((item, i) => (
            <li
              key={item.id}
              className={
                item.span === 'wide'
                  ? 'sm:col-span-2'
                  : i === 1
                    ? 'lg:row-span-2'
                    : ''
              }
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block h-full min-h-64 w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-800"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    i === 1 ? 'min-h-64 lg:min-h-full' : 'aspect-[4/3]'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-4 left-4 font-sans text-sm tracking-wide text-white">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-olive-950/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 text-white"
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
    </section>
  )
}
