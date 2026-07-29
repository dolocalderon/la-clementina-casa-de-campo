import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../data/content'

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.phoneHref}?text=${encodeURIComponent(
    'Hola! Quisiera consultar por un evento en La Clementina.',
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe57]"
      aria-label="Escribir por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
