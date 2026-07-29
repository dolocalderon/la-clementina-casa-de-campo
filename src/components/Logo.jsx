import { Link } from 'react-router-dom'

export default function Logo({ className = '', light = false, size = 'sm' }) {
  const color = light ? 'text-background' : 'text-olive-deep'
  const isLg = size === 'lg'

  const inner = (
    <>
      <svg
        viewBox="0 0 80 26"
        className={
          isLg
            ? '-mb-5 ml-auto mr-[7%] h-6 w-16 self-end md:mr-[8%] md:h-7 md:w-[4.5rem]'
            : '-mb-1 ml-auto mr-[4%] h-3.5 w-10 self-end md:h-4 md:w-11'
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
            : 'font-script text-[1.65rem] leading-[0.9] md:text-[1.85rem]'
        }
      >
        La Clementina
      </span>
      <span
        className={
          isLg
            ? 'mt-3 font-sans text-[0.7rem] font-medium tracking-[0.42em] uppercase opacity-85 md:text-xs'
            : 'mt-1.5 font-sans text-[0.55rem] font-normal tracking-[0.3em] uppercase opacity-65'
        }
      >
        Casa de Campo
      </span>
    </>
  )

  if (isLg) {
    return (
      <div
        className={`inline-flex flex-col items-center leading-none ${color} ${className}`}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      to="/"
      className={`inline-flex flex-col items-start leading-none ${color} ${className}`}
      aria-label="La Clementina — inicio"
    >
      {inner}
    </Link>
  )
}
