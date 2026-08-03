import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { gallery } from '../../data/content'
import Reveal, { RevealItem, RevealStagger } from '../Reveal'

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            {gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{gallery.subtitle}</p>
        </Reveal>

        <RevealStagger
          className="mt-16 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(260px,auto)]"
          delay={0.05}
        >
          {gallery.items.map((item) => (
            <RevealItem key={item.id} className={item.span}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block h-full min-h-[220px] w-full overflow-hidden text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${item.aspect}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/85 via-olive-deep/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{item.meta}</p>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-olive-deep/92 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
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
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
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
