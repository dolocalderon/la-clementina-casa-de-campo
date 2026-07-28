export default function Logo({ className = '', light = false, size = 'sm' }) {
  const color = light ? 'text-white' : 'text-olive-900'
  const isLg = size === 'lg'

  return (
    <a
      href="#inicio"
      className={`inline-flex flex-col items-center leading-none ${color} ${className}`}
      aria-label="La Clementina — inicio"
    >
      <svg
        viewBox="0 0 80 26"
        className={
          isLg
            ? '-mb-5 ml-auto mr-[7%] h-6 w-16 self-end text-current md:mr-[8%] md:h-7 md:w-[4.5rem]'
            : '-mb-1.5 ml-auto mr-[6%] h-4 w-12 self-end md:mr-[8%] md:h-[1.15rem] md:w-14'
        }
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 24 V14.5 L40 3 L68 14.5 V24"
          stroke="currentColor"
          strokeWidth={isLg ? 2.75 : 1.25}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M56 9.5 V4.5 H63"
          stroke="currentColor"
          strokeWidth={isLg ? 2.75 : 1.25}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      <span
        className={
          isLg
            ? 'font-script text-[3.25rem] leading-none drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-7xl'
            : 'font-script text-[1.85rem] leading-[0.9] md:text-[2.15rem]'
        }
      >
        La Clementina
      </span>
      <span
        className={
          isLg
            ? 'mt-3 font-sans text-[0.7rem] font-medium tracking-[0.42em] uppercase opacity-85 md:text-xs'
            : 'mt-2 font-sans text-[0.55rem] font-normal tracking-[0.42em] uppercase opacity-65 md:text-[0.6rem]'
        }
      >
        Casa de Campo
      </span>
    </a>
  )
}
