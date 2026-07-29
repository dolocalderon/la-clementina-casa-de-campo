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
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
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
  { value: '6 ha', label: 'de parque y arboleda', icon: 'trees' },
  { value: '250', label: 'invitados en salón', icon: 'users' },
  { value: '300', label: 'sillas y 30 mesas', icon: 'chair' },
  { value: '+180', label: 'eventos realizados', icon: 'sparkles' },
]

export const homeAbout = {
  eyebrow: 'Nosotros',
  title: 'Tres generaciones cuidando el mismo campo',
  body: 'La Clementina nació como casco de estancia en 1928. Hoy, restaurada y con el parque original intacto, recibe eventos donde el paisaje es el protagonista y el equipo se ocupa del resto.',
  body2:
    'Trabajamos con un solo evento por jornada para que el campo sea enteramente tuyo, y acompañamos desde la primera visita hasta el último brindis.',
  cta: 'Conocer la casa',
  image: casaImg,
  imageAlt: 'Casco de la estancia La Clementina rodeado de olivos y jardines',
}

export const homeServices = {
  eyebrow: 'Servicios',
  title: 'Todo lo que necesitás, en un mismo lugar',
  cta: 'Ver todos los servicios',
  items: [
    {
      title: 'Casamientos',
      description:
        'Ceremonia al aire libre bajo la arboleda, cóctel en el parque y fiesta en el salón hasta las 6 am.',
    },
    {
      title: 'Eventos corporativos',
      description:
        'Jornadas de trabajo, lanzamientos y fines de año con wifi, proyector, sonido y catering.',
    },
    {
      title: 'Fiestas sociales',
      description:
        'Cumpleaños, aniversarios y bautismos con espacios cubiertos y descubiertos para cada momento.',
    },
  ],
}

export const homeCta = {
  title: '¿Tenés una fecha en mente?',
  description:
    'Consultá disponibilidad y coordinamos una visita al campo sin cargo, con mate incluido.',
  cta: 'Escribinos',
}

export const nosotros = {
  eyebrow: 'Nosotros',
  title: 'La casa, el parque y la gente',
  subtitle:
    'Tres generaciones cuidando el mismo campo para que cada evento se sienta como una casa de familia.',
  heroImage: casaImg,
  heroImageAlt: 'Fachada del casco de estancia con postigos verdes y olivos',
  history: {
    eyebrow: 'Historia',
    title: 'Un casco de 1928, restaurado sin perder el alma',
    body: 'Mantuvimos los pisos de pinotea, los postigos y la galería original. Renovamos instalaciones, cocina y baños para que la casa funcione con la comodidad de hoy.',
    body2:
      'A 60 km de la Ciudad de Buenos Aires, el campo combina seis hectáreas de parque, una arboleda centenaria, huerta, piscina y un galpón restaurado que funciona como salón principal.',
  },
  principles: {
    eyebrow: 'Cómo trabajamos',
    title: 'Tres cosas que no negociamos',
    items: [
      {
        title: 'Un evento por día',
        description:
          'Nunca compartimos el campo. La casa, el parque y el equipo son solo tuyos durante toda la jornada.',
      },
      {
        title: 'Equipo propio',
        description:
          'Coordinación, mantenimiento y logística en casa. No tercerizamos lo que hace que todo funcione.',
      },
      {
        title: 'Paisaje intacto',
        description:
          'Conservamos la arboleda original y sumamos olivos y aromáticas. Menos decoración, más naturaleza.',
      },
    ],
  },
  timeline: {
    eyebrow: 'Línea de tiempo',
    title: 'Casi un siglo de historia',
    items: [
      { year: '1928', text: 'Se construye el casco original de la estancia.' },
      { year: '1994', text: 'La familia Calderón toma la administración del campo.' },
      { year: '2016', text: 'Restauración de la casa y apertura del galpón como salón.' },
      { year: '2024', text: 'Más de 180 eventos celebrados en el campo.' },
    ],
  },
  sideImage: g5,
  sideImageAlt: 'Piscina del campo rodeada de césped y olivos',
  cta: 'Agendar una visita',
}

export const servicios = {
  eyebrow: 'Servicios',
  title: 'Espacios, equipamiento y capacidad',
  subtitle:
    'Todo lo que ofrece el campo, con números claros para que puedas planificar sin sorpresas.',
  eventTypes: {
    eyebrow: 'Tipos de evento',
    title: 'Para cada ocasión',
    items: [
      {
        title: 'Casamientos',
        description:
          'Ceremonia civil o simbólica bajo la arboleda, cóctel en el parque y fiesta en el salón hasta las 6 am.',
        bullets: ['Ensayo previo', 'Suite de novios', 'Coordinación del día'],
      },
      {
        title: 'Corporativos',
        description:
          'Jornadas de trabajo, capacitaciones, lanzamientos y fiestas de fin de año en formato campo.',
        bullets: ['Proyector y pantalla', 'Wifi de fibra', 'Coffee break'],
      },
      {
        title: 'Sociales',
        description:
          'Cumpleaños, aniversarios, bautismos y almuerzos familiares con espacios cubiertos y al aire libre.',
        bullets: ['Living exterior', 'Zona de juegos', 'Fogón nocturno'],
      },
    ],
  },
  capacity: {
    eyebrow: 'Capacidad',
    title: 'Los números del campo',
    subtitle:
      'Contamos con salón cubierto, galería, parque y estacionamiento propio.',
    items: [
      { value: '420 m² cubiertos', label: 'Salón principal' },
      { value: '300 sillas · 30 mesas', label: 'Sillas y mesas' },
      { value: '6 hectáreas parquizadas', label: 'Parque' },
      { value: '120 vehículos', label: 'Estacionamiento' },
      { value: 'Equipada para catering externo', label: 'Cocina' },
      { value: '6 baños + accesible', label: 'Baños' },
      { value: 'Equipo e iluminación básica', label: 'Sonido' },
      { value: 'Wifi de fibra en todo el casco', label: 'Conectividad' },
    ],
    image: g3,
    imageAlt: 'Interior del galpón restaurado usado como salón de eventos',
  },
  steps: {
    eyebrow: 'Cómo reservar',
    title: 'Cuatro pasos, sin vueltas',
    items: [
      {
        n: '01',
        title: 'Consulta',
        text: 'Nos escribís con fecha y cantidad estimada de invitados.',
      },
      {
        n: '02',
        title: 'Visita',
        text: 'Recorremos el campo juntos y resolvemos dudas, sin cargo.',
      },
      {
        n: '03',
        title: 'Reserva',
        text: 'Confirmás la fecha con una seña y firmamos el acuerdo.',
      },
      {
        n: '04',
        title: 'El día',
        text: 'Coordinamos montaje, proveedores y desarme de punta a punta.',
      },
    ],
  },
  cta: 'Pedir presupuesto',
}

export const gallery = {
  eyebrow: 'Galería',
  homeTitle: 'Eventos que pasaron por acá',
  homeSubtitle:
    'Una selección de casamientos, fiestas y encuentros corporativos celebrados en el campo.',
  pageTitle: 'Eventos realizados en el campo',
  pageSubtitle:
    'Cada foto es de un evento real celebrado en La Clementina. Filtrá por tipo para ver más.',
  filters: ['Todos', 'Casamientos', 'Corporativos', 'Sociales', 'El campo'],
  cta: 'Ver galería completa',
  endCta: {
    title: '¿Querés que el próximo sea el tuyo?',
    button: 'Consultar disponibilidad',
  },
  items: [
    {
      id: 1,
      src: g1,
      alt: 'Ceremonia de casamiento al aire libre con arco de flores y sillas de madera',
      category: 'Casamientos',
      title: 'Casamiento de Sofía & Tomás',
      meta: 'Ceremonia al atardecer · 180 invitados',
    },
    {
      id: 2,
      src: g2,
      alt: 'Mesa servida con mantelería de lino, velas y ramas de olivo',
      category: 'Sociales',
      title: 'Montaje de mesa larga',
      meta: 'Cena de gala · 90 invitados',
    },
    {
      id: 3,
      src: g3,
      alt: 'Evento corporativo en el galpón restaurado con vigas de madera',
      category: 'Corporativos',
      title: 'Encuentro anual Grupo Andes',
      meta: 'Jornada de trabajo · 140 personas',
    },
    {
      id: 4,
      src: g4,
      alt: 'Fiesta nocturna con guirnaldas de luces e invitados bailando',
      category: 'Sociales',
      title: 'Fiesta bajo las guirnaldas',
      meta: 'Cumpleaños de 50 · 120 invitados',
    },
    {
      id: 5,
      src: g5,
      alt: 'Piscina rodeada de césped y olivos',
      category: 'El campo',
      title: 'Parque y piscina',
      meta: '6 hectáreas de parque',
    },
    {
      id: 6,
      src: g6,
      alt: 'Almuerzo al aire libre en mesa larga con invitados',
      category: 'Sociales',
      title: 'Almuerzo de campo',
      meta: 'Aniversario · 60 invitados',
    },
  ],
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Hablemos de tu evento',
  subtitle:
    'Contanos qué tenés en mente y te respondemos con disponibilidad y presupuesto dentro de las 24 horas.',
  formTitle: 'Formulario de consulta',
  eventTypes: ['Casamiento', 'Cumpleaños', 'Evento corporativo', 'Otro'],
  successMessage: '¡Gracias! Pronto te contactamos.',
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Se puede visitar antes de reservar?',
        a: 'Sí, coordinamos visitas con cita previa de martes a sábado, sin cargo.',
      },
      {
        q: '¿Puedo llevar mi propio catering?',
        a: 'Sí. La cocina queda a disposición del catering que elijas y también podemos recomendarte proveedores.',
      },
      {
        q: '¿Hasta qué hora se puede usar el salón?',
        a: 'Hasta las 6 am. El desarme puede hacerse al día siguiente hasta el mediodía.',
      },
      {
        q: '¿Cómo se reserva la fecha?',
        a: 'Con una seña del 30% y la firma del acuerdo. La fecha queda bloqueada de inmediato.',
      },
    ],
  },
}
