const team = [
  {
    id: 'marcelo',
    name: 'Marcelo Matias Gonzalez',
    avatar: '/img/avatar.png',
    role: 'Frontend Developer',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Git', level: 70 },
    ],
    projects: [
      { id: 'p1', title: 'Landing Page', image: '/img/proyecto1.png', desc: 'Landing page con diseño responsivo.' },
      { id: 'p2', title: 'ToDo React', image: '/img/proyecto2.jpg', desc: 'App de tareas con React.' },
      { id: 'p3', title: 'Carrito de Compras', image: '/img/proyectoluzvelita.jpg', desc: 'Proyecto experimental.' },
    ],
    socials: {
      github: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 'integrante2',
    name: 'Peliculas Favoritas',
    avatar: '/img/matrix.jpg',
    role: '',
    skills: [
      { name: 'Genero', level: 80 },
      { name: 'Clasificacion por edad', level: 75 },
      { name: 'Publico Objetivo', level: 70 },
      { name: 'Tono o Atmosfera', level: 78 },
      { name: 'Formato o Estilo Visual', level: 60 },
    ],
    projects: [
      { id: 'p1', title: 'Inception', image: '/img/inception.jpg', desc: 'Inception o El Origen.' },
      { id: 'p2', title: 'Interstellar', image: '/img/interestellar.jpg', desc: 'Interestellar o El Viaje.' },
      { id: 'p3', title: 'Matrix', image: '/img/matrix.jpg', desc: 'Matrix o La Realidad.' },
    ],
    socials: { github: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 'integrante3',
    name: 'Discos Favoritos',
    avatar: '/img/despedazados.jpg',
    role: '',
    skills: [
      { name: 'Género', level: 85 },
      { name: 'Clasificación por edad', level: 80 },
      { name: 'Publico Objetivo', level: 78 },
      { name: 'Tono o Atmosfera', level: 70 },
      { name: 'Sub Género', level: 65 },
    ],
    projects: [
      { id: 'p1', title: 'Despedazados por mil Partes', image: '/img/despedazados.jpg', desc: 'La Renga.' },
      { id: 'p2', title: 'Oktubre', image: '/img/oktubre.jpg', desc: 'Los Redondos.' },
      { id: 'p3', title: 'After Chabon', image: '/img/sumo.jpg', desc: 'Sumo.' },
    ],
    socials: { github: '#', twitter: '#', linkedin: '#' },
  },
]

export default team
