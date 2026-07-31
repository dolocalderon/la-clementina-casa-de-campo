import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../../data/content'
import { RevealItem, RevealStagger } from '../Reveal'

function Counter({ value, prefix, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)
  const target = Number(value)

  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const duration = 1400
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setN(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display text-4xl text-white md:text-5xl">
      {prefix ? `+${n}` : n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-olive-deep py-16 md:py-20">
      <div className="container-site">
        <RevealStagger className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/55">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
