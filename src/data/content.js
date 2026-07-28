export const site = {
  name: 'La Clementina',
  tagline: 'Casa de Campo',
  description:
    'Un lugar inolvidable para sus eventos sociales o corporativos.',
  location: 'Buenos Aires, Argentina',
  address: 'Ruta Provincial 6, Km 42 — Zona Oeste',
  phone: '+54 11 5555-1234',
  phoneHref: '5491155551234',
  email: 'hola@laclementina.com.ar',
  social: {
    instagram: 'https://instagram.com/la_clementina_casadecampo',
    facebook: 'https://facebook.com/laclementinacasadecampo',
    handle: '@la_clementina_casadecampo',
  },
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const about = {
  eyebrow: 'Nosotros',
  title: 'Elegancia natural para momentos únicos',
  body: `En medio del campo, La Clementina ofrece un entorno sereno donde la arquitectura se funde con el paisaje. Diseñamos cada rincón para que sus celebraciones — sociales o corporativas — se sientan cercanas, cálidas e inolvidables.`,
  body2: `Jardines amplios, salones luminosos y una atención cercana: el escenario ideal para casamientos, cumpleaños, retiros de empresa y encuentros familiares.`,
  cta: 'Ver detalles del espacio',
  image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
}

export const services = [
  {
    id: 'sociales',
    title: 'Eventos sociales',
    description:
      'Casamientos, quinceañeros, cumpleaños y celebraciones familiares al aire libre o bajo techo.',
    icon: 'celebration',
  },
  {
    id: 'corporativos',
    title: 'Eventos corporativos',
    description:
      'Jornadas de equipo, lanzamientos y reuniones en un entorno que inspira foco y conexión.',
    icon: 'briefcase',
  },
  {
    id: 'catering',
    title: 'Catering & partners',
    description:
      'Trabajamos con proveedores de confianza o recibimos el catering que usted elija.',
    icon: 'utensils',
  },
  {
    id: 'ambientacion',
    title: 'Ambientación',
    description:
      'Espacios versátiles listos para personalizar con flores, luces y decoración a su medida.',
    icon: 'sparkles',
  },
  {
    id: 'estacionamiento',
    title: 'Estacionamiento',
    description:
      'Cochera amplia y segura para invitados, con acceso cómodo desde la ruta.',
    icon: 'car',
  },
  {
    id: 'exteriores',
    title: 'Jardín & pileta',
    description:
      'Parques, terrazas y área de pileta para cócteles al atardecer y fotos memorables.',
    icon: 'tree',
  },
]

export const amenities = {
  eyebrow: 'El espacio',
  title: 'Capacidad y comodidades',
  subtitle:
    'Todo lo necesario para organizar su evento con tranquilidad. Los números son orientativos y se confirman según el tipo de celebración.',
  stats: [
    { value: '2.800', unit: 'm²', label: 'de predio' },
    { value: '180', unit: '', label: 'invitados máx.' },
    { value: '160', unit: '', label: 'sillas' },
    { value: '20', unit: '', label: 'mesas redondas' },
    { value: '40', unit: '', label: 'cocheras' },
    { value: '3', unit: '', label: 'áreas de evento' },
  ],
  features: [
    'Salón principal climatizado',
    'Jardín con iluminación',
    'Zona de pileta y deck',
    'Cocina de apoyo',
    'Baños para invitados',
    'Generador de respaldo',
  ],
}

export const gallery = {
  eyebrow: 'Galería',
  title: 'Momentos memorables',
  subtitle: 'Imágenes del espacio y de eventos que ya vivieron La Clementina.',
  items: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mesa de recepción al atardecer',
      label: 'Casamiento',
      span: 'wide',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      alt: 'Decoración floral en exterior',
      label: 'Social',
      span: 'tall',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80',
      alt: 'Cena bajo luces colgantes',
      label: 'Evento nocturno',
      span: 'normal',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Fachada de la casa de campo',
      label: 'Arquitectura',
      span: 'normal',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      alt: 'Brindis corporativo',
      label: 'Corporativo',
      span: 'normal',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mesa servida para cena',
      label: 'Gastronomía',
      span: 'wide',
    },
  ],
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Empecemos a planear',
  subtitle:
    'Cuéntenos sobre su evento y le respondemos a la brevedad con disponibilidad y propuestas.',
  eventTypes: [
    'Casamiento',
    'Cumpleaños',
    'Evento corporativo',
    'Quinceañero',
    'Otro',
  ],
  successMessage: '¡Gracias! Pronto te contactamos.',
}

export const hero = {
  eyebrow: 'Bienvenidos a',
  title: 'La Clementina',
  subtitle: 'Casa de Campo',
  description: 'Un lugar inolvidable para sus eventos sociales o corporativos.',
  primaryCta: 'Escribinos',
  secondaryCta: 'Conocenos',
  image: new URL('../assets/hero-banner.png', import.meta.url).href,
}

export const map = {
  // Approximate BA west zone — replace with real coords when available
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.0!2d-58.7!3d-34.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzAwLjAiUyA1OMKwNDInMDAuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar',
}
