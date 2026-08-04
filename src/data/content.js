import heroImg from '../assets/hero.jpg'
import casaImg from '../assets/casa.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import g6 from '../assets/g6.jpg'

export const site = {
  name: 'La Clementina',
  tagline: 'Casa de Campo',
  description:
    'Casa de campo para casamientos, eventos sociales y encuentros corporativos. Seis hectáreas de parque, arboleda y cielo abierto.',
  location: 'Open Door, Buenos Aires',
  address: 'Camino de los Álamos km 4, Open Door, Buenos Aires',
  addressNote: 'a 60 km de CABA',
  phone: '+54 9 11 2233-4455',
  phoneHref: '5491122334455',
  email: 'hola@laclementina.com.ar',
  visits: 'Con cita previa, de martes a sábado',
  googleReviewsUrl: 'https://www.google.com/maps',
  social: {
    instagram: 'https://instagram.com',
    handle: '@laclementina.campo',
  },
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  brand: 'La Clementina',
  eyebrow: 'Open Door · Buenos Aires',
  title: 'El lugar ideal para celebrar momentos inolvidables',
  description:
    'Casamientos, quinceaños y encuentros corporativos entre olivos, arboleda centenaria y cielo despejado.',
  primaryCta: 'Consultar disponibilidad',
  secondaryCta: 'Ver galería',
  image: heroImg,
  imageAlt:
    'Mesas largas servidas bajo un árbol centenario al atardecer en La Clementina',
  // Set to a video URL/import when available; hero will prefer video over image.
  video: null,
}

export const about = {
  eyebrow: 'Nosotros',
  title: 'Una casa de campo con historia, lista para celebrar',
  body: 'La Clementina es una casa de campo con historia. Nació como casco de estancia en 1928 y, a lo largo de los años, se fue cuidando con el mismo criterio: respetar el parque, sostener la casa y recibir cada celebración con calma. Hoy conserva la arboleda original, los olivos y ese aire sereno que solo dan los lugares que crecieron con el tiempo —sin prisas, sin perder el carácter de siempre. Abrimos las puertas para casamientos, quinceaños y encuentros corporativos: el salón, el parque, la pileta y los espacios al aire libre se prestan para ceremonias, cócteles y fiestas de noche, en un entorno cuidado y cercano a Buenos Aires. La idea es simple: que puedan celebrar con tranquilidad, rodeados de naturaleza y con la calidez de una casa de campo pensada para que el día se sienta único, memorable y sin artificios.',
  image: casaImg,
  imageAlt: 'Fachada de la casa de campo La Clementina rodeada de olivos y jardines',
}

export const gallery = {
  eyebrow: 'Galería',
  title: 'La casa de campo, en grandes planos',
  subtitle: 'Salón, parque, pileta, ceremonias y noches bajo las luces.',
  items: [
    {
      id: 1,
      src: g1,
      alt: 'Ceremonia al aire libre bajo la arboleda',
      category: 'Ceremonias',
      title: 'Bajo la arboleda',
      meta: 'Ceremonia al aire libre',
      span: 'lg:col-span-2 lg:row-span-2',
      aspect: 'aspect-[4/3] lg:aspect-auto lg:h-full',
    },
    {
      id: 2,
      src: casaImg,
      alt: 'Salón principal de La Clementina',
      category: 'Salón',
      title: 'Salón principal',
      meta: '420 m² · hasta 250 invitados',
      span: '',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 3,
      src: g5,
      alt: 'Parque y piscina',
      category: 'Parque',
      title: 'Parque y pileta',
      meta: '6 hectáreas',
      span: '',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 4,
      src: g4,
      alt: 'Fiesta nocturna con guirnaldas',
      category: 'Noche',
      title: 'Eventos de noche',
      meta: 'Hasta las 6 am',
      span: 'sm:col-span-2 lg:col-span-1',
      aspect: 'aspect-[16/10] lg:aspect-[4/3]',
    },
    {
      id: 5,
      src: g2,
      alt: 'Mesa servida con mantelería de lino',
      category: 'Salón',
      title: 'Mesa larga',
      meta: 'Mantelería y luz natural',
      span: '',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 6,
      src: g6,
      alt: 'Almuerzo al aire libre en el parque',
      category: 'Parque',
      title: 'Almuerzo al aire libre',
      meta: 'Cóctel y living exterior',
      span: '',
      aspect: 'aspect-[4/3]',
    },
  ],
}

export const services = {
  eyebrow: 'Servicios',
  title: 'Todo lo que necesitás, en un mismo lugar',
  items: [
    {
      id: 'casamientos',
      title: 'Casamientos',
      description:
        'Ceremonia al aire libre, cóctel en el parque y fiesta en el salón hasta las 6 am.',
      image: g1,
      span: 'md:col-span-2 md:row-span-2',
      tone: 'photo',
    },
    {
      id: 'quince',
      title: 'Cumpleaños de 15',
      description: 'Recepción, sesión de fotos y baile con el parque como escenario.',
      image: g4,
      span: 'md:col-span-1',
      tone: 'photo',
    },
    {
      id: 'corporativos',
      title: 'Eventos empresariales',
      description: 'Jornadas, lanzamientos y fines de año con wifi, proyector y catering.',
      image: g3,
      span: 'md:col-span-1',
      tone: 'photo',
    },
    {
      id: 'parque',
      title: 'Espacios verdes',
      description:
        'Un amplio predio natural para disfrutar de cada momento al aire libre.',
      span: 'md:col-span-1',
      tone: 'text',
      accent: '12.000 m²',
      accentLabel: 'de parque',
    },
    {
      id: 'salon',
      title: 'Espacio interior',
      description:
        'Ambiente amplio y luminoso, con grandes ventanales, cocina y baño integrados.',
      span: 'md:col-span-1',
      tone: 'text',
      accent: 'Salón',
      accentLabel: 'con cocina integrada',
    },
    {
      id: 'estacionamiento',
      title: 'Estacionamiento',
      description:
        'Amplio espacio para que invitados y proveedores estacionen cómodamente dentro de la propiedad.',
      span: 'md:col-span-1',
      tone: 'text',
      accent: 'Acceso vehicular',
      accentLabel: 'dentro del predio',
    },
  ],
}

export const testimonials = {
  eyebrow: 'Reseñas',
  title: 'Lo que dicen quienes ya celebraron acá',
  rating: 5.0,
  ratingLabel: 'Basado en reseñas de Google',
  cta: 'Ver todas en Google',
  items: [
    {
      id: 1,
      author: 'Valentina R.',
      rating: 5,
      date: 'hace 2 meses',
      text: 'Un lugar soñado para nuestro casamiento. El parque es impresionante y cada detalle estuvo cuidado. Los invitados no paran de hablar de La Clementina.',
    },
    {
      id: 2,
      author: 'Martín G.',
      rating: 5,
      date: 'hace 4 meses',
      text: 'Hicimos el quince de mi hija y fue perfecto. Salón amplio, pileta hermosa y un lugar que se siente exclusivo de verdad.',
    },
    {
      id: 3,
      author: 'Lucía Fernández',
      rating: 5,
      date: 'hace 6 meses',
      text: 'Organizamos un corporativo de fin de año. Wifi estable, cocina para el catering y estacionamiento de sobra. Volveríamos sin dudarlo.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Empecemos a planear',
  subtitle:
    'Contanos sobre tu evento y te respondemos con disponibilidad dentro de las 24 horas.',
  eventTypes: ['Casamiento', 'Cumpleaños de 15', 'Evento corporativo', 'Otro'],
  successMessage: '¡Gracias! Pronto te contactamos.',
}

export const homeCta = {
  title: '¿Tenés una fecha en mente?',
  description:
    'Consultá disponibilidad y coordinamos una visita a la casa de campo sin cargo, con mate incluido.',
  cta: 'Consultar disponibilidad',
}
