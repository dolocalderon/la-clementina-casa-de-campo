export default function Logo({ className = '', light = false }) {
  const color = light ? 'text-white' : 'text-olive-deep'

  return (
    <a
      href="#inicio"
      className={`inline-flex flex-col items-center leading-none ${color} ${className}`}
      aria-label="La Clementina — inicio"
    >
      <svg
        viewBox="0 0 80 26"
        className="-mb-0.5 ml-[12%] h-3.5 w-10 self-center md:h-4 md:w-11"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 24 V14.5 L40 3 L68 14.5 V24"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M56 9.5 V4.5 H63"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-script text-[1.65rem] leading-[0.9] md:text-[1.85rem]">
        La Clementina
      </span>
      <span className="mt-1.5 font-sans text-[0.55rem] font-normal tracking-[0.3em] uppercase opacity-70">
        Casa de Campo
      </span>
    </a>
  )
}
