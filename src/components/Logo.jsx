export default function Logo({ className = '', light = false }) {
  const color = light ? 'text-white' : 'text-olive-900'

  return (
    <a
      href="#inicio"
      className={`inline-flex flex-col leading-none ${color} ${className}`}
      aria-label="La Clementina — inicio"
    >
      <span className="font-display text-[1.55rem] font-medium tracking-[-0.02em] md:text-[1.7rem]">
        La Clementina
      </span>
      <span className="mt-1.5 font-sans text-[0.65rem] font-medium tracking-[0.28em] uppercase opacity-65">
        Casa de Campo
      </span>
    </a>
  )
}
