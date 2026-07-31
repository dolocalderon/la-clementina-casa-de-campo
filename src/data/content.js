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
  social: {
    instagram: 'https://instagram.com',
    handle: '@laclementina.campo',
  },
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: 'Open Door · Buenos Aires',
  title: 'Un campo abierto para las noches que no se olvidan',
  description:
    'Casamientos, fiestas y encuentros corporativos entre olivos, arboleda centenaria y cielo despejado. Un solo evento por día, siempre.',
  primaryCta: 'Consultar fecha',
  secondaryCta: 'Ver galería',
  image: heroImg,
  imageAlt:
    'Mesas largas servidas bajo un árbol centenario al atardecer en La Clementina',
}

export const stats = [
  { value: '6', suffix: ' ha', label: 'de parque y arboleda' },
  { value: '250', suffix: '', label: 'invitados en salón' },
  { value: '300', suffix: '', label: 'sillas · 30 mesas' },
  { value: '180', suffix: '+', label: 'eventos realizados', prefix: true },
]

export const about = {
  eyebrow: 'Nosotros',
  title: 'Tres generaciones cuidando el mismo campo',
  body: 'La Clementina nació como casco de estancia en 1928. Hoy, restaurada y con el parque original intacto, recibe eventos donde el paisaje es el protagonista y el equipo se ocupa del resto.',
  body2:
    'Trabajamos con un solo evento por jornada para que el campo sea enteramente tuyo, y acompañamos desde la primera visita hasta el último brindis.',
  image: casaImg,
  imageAlt: 'Casco de la estancia La Clementina rodeado de olivos y jardines',
  principles: [
    {
      title: 'Un evento por día',
      description: 'La casa, el parque y el equipo son solo tuyos durante toda la jornada.',
    },
    {
      title: 'Equipo propio',
      description: 'Coordinación y logística en casa. No tercerizamos lo esencial.',
    },
    {
      title: 'Paisaje intacto',
      description: 'Arboleda original, olivos y aromáticas. Menos decoración, más naturaleza.',
    },
  ],
}

export const services = {
  eyebrow: 'Servicios',
  title: 'Todo lo que necesitás, en un mismo lugar',
  items: [
    {
      title: 'Casamientos',
      description:
        'Ceremonia al aire libre bajo la arboleda, cóctel en el parque y fiesta en el salón hasta las 6 am.',
      bullets: ['Ensayo previo', 'Suite de novios', 'Coordinación del día'],
    },
    {
      title: 'Corporativos',
      description:
        'Jornadas de trabajo, lanzamientos y fines de año con wifi, proyector, sonido y catering.',
      bullets: ['Proyector y pantalla', 'Wifi de fibra', 'Coffee break'],
    },
    {
      title: 'Sociales',
      description:
        'Cumpleaños, aniversarios y bautismos con espacios cubiertos y al aire libre.',
      bullets: ['Living exterior', 'Zona de juegos', 'Fogón nocturno'],
    },
  ],
}

export const capacity = {
  eyebrow: 'El espacio',
  title: 'Números claros para planificar',
  items: [
    { value: '420 m²', label: 'Salón principal' },
    { value: '6 ha', label: 'Parque' },
    { value: '120', label: 'Cocheras' },
    { value: '6+', label: 'Baños' },
    { value: 'Cocina', label: 'Para catering externo' },
    { value: 'Wifi', label: 'Fibra en todo el casco' },
  ],
}

export const gallery = {
  eyebrow: 'Galería',
  title: 'Momentos que ya pasaron por acá',
  subtitle: 'Casamientos, fiestas y encuentros celebrados en el campo.',
  items: [
    {
      id: 1,
      src: g1,
      alt: 'Ceremonia de casamiento al aire libre',
      category: 'Casamientos',
      title: 'Sofía & Tomás',
      meta: '180 invitados',
    },
    {
      id: 2,
      src: g2,
      alt: 'Mesa servida con mantelería de lino',
      category: 'Sociales',
      title: 'Mesa larga',
      meta: '90 invitados',
    },
    {
      id: 3,
      src: g3,
      alt: 'Evento corporativo en el galpón',
      category: 'Corporativos',
      title: 'Grupo Andes',
      meta: '140 personas',
    },
    {
      id: 4,
      src: g4,
      alt: 'Fiesta nocturna con guirnaldas',
      category: 'Sociales',
      title: 'Bajo las luces',
      meta: '120 invitados',
    },
    {
      id: 5,
      src: g5,
      alt: 'Piscina y parque',
      category: 'El campo',
      title: 'Parque y piscina',
      meta: '6 hectáreas',
    },
    {
      id: 6,
      src: g6,
      alt: 'Almuerzo al aire libre',
      category: 'Sociales',
      title: 'Almuerzo de campo',
      meta: '60 invitados',
    },
  ],
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Empecemos a planear',
  subtitle:
    'Contanos sobre tu evento y te respondemos con disponibilidad dentro de las 24 horas.',
  eventTypes: ['Casamiento', 'Cumpleaños', 'Evento corporativo', 'Otro'],
  successMessage: '¡Gracias! Pronto te contactamos.',
}

export const homeCta = {
  title: '¿Tenés una fecha en mente?',
  description:
    'Consultá disponibilidad y coordinamos una visita al campo sin cargo, con mate incluido.',
  cta: 'Escribinos',
}
