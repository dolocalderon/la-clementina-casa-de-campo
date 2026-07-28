import { map, site } from '../data/content'

export default function MapSection() {
  return (
    <section aria-label="Ubicación en el mapa" className="bg-olive-200">
      <div className="border-b border-olive-300/60 px-5 py-6 text-center md:px-10">
        <p className="font-sans text-sm text-olive-800">
          {site.address} · {site.location}
        </p>
      </div>
      <div className="relative h-72 w-full md:h-96">
        <iframe
          title="Mapa de La Clementina"
          src={map.embedUrl}
          className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[0.95]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  )
}
